import { HookOptionsT, DateTimeWrapperT, PluginT, BlockT } from "../../types";
import BlockHelper from "../../BlockHelper";
import { Transform } from "stream";
import DateTimeWrapper from "../../DateTimeWrapper";

const { COMPLETE_TASK, INCOMPLETE_TASK, COMMENT, PADDING } = BlockHelper.TYPES;

const SECTIONS = {
  INBOX: "INBOX",
  TODO: "TODO",
  FUTURE: "FUTURE",
  DONE: "DONE"
};

const headerBlock = (text: string): BlockT => ({
  type: COMMENT,
  text: `{{type}} ${text}`
});

const paddingBlock = (): BlockT => ({
  type: PADDING,
  text: "\n"
});

/**
 * isActionable
 *  returns true if both start and postpone dates are in the past.
 */
const isActionable = (
  { start, postpone }: BlockT,
  DateTime: DateTimeWrapperT
): boolean =>
  [start, postpone]
    .filter(Boolean)
    .reduce(
      (memo, date) => memo && DateTime.fromISO(date) <= DateTime.local(),
      true
    );

// the actionable date is the latest time between start and postpone
const getActionableDate = ({ start, postpone }: BlockT): number =>
  [start, postpone]
    .reduce((memo, dateStr) => {
      if (!dateStr) return memo;
      const date = new Date(dateStr);
      return memo < date ? date : memo;
    }, new Date("1980-01-01"))
    .getTime();

const sortByActionableDateAsc = (blockA: BlockT, blockB: BlockT): Number =>
  getActionableDate(blockA) - getActionableDate(blockB);

const sortByTitleDesc = (blockA: BlockT, blockB: BlockT): Number =>
  blockA.text.localeCompare(blockB.text);

/**
 * Given multiple sort functions and two objects, will compare objects until
 * at least one of the sort functions returns a result other than 0.
 */
const multiSort = (sortFuncs: Array<Function>, a: any, b: any): number =>
  sortFuncs.reduce(
    (prevResult, sortFunc) => (prevResult === 0 ? sortFunc(a, b) : prevResult),
    0
  );

const parse = (DateTime: DateTimeWrapperT): Transform => {
  let section = SECTIONS.TODO;
  return new Transform({
    objectMode: true,
    transform(block: BlockT, encoding: string, callback: Function) {
      if (block.type !== COMMENT) {
        this.push({ ...block, section });
        return callback();
      }
      const lowercased = block.text.toLowerCase();
      if (lowercased.match(/^{{type}} ?inbox\s*$/)) {
        section = SECTIONS.INBOX;
        return callback();
      }
      if (lowercased.match(/^{{type}} ?future\s*$/)) {
        section = SECTIONS.FUTURE;
        return callback();
      }
      if (lowercased.match(/^{{type}} ?done\s*$/)) {
        section = SECTIONS.DONE;
        return callback();
      }
      section = SECTIONS.TODO;
      this.push({ ...block, section });
      return callback();
    }
  });
};

const process = (DateTime: DateTimeWrapperT): Transform =>
  new Transform({
    objectMode: true,
    transform(block: BlockT, encoding: string, callback: Function) {
      // first process
      if (BlockHelper.isComplete(block)) {
        block.section = SECTIONS.DONE;
      } else if (block.section === SECTIONS.DONE) {
        block.section = SECTIONS.TODO;
      }

      // second process
      if (![COMPLETE_TASK, INCOMPLETE_TASK].includes(block.type)) {
        this.push(block);
        return callback();
      }

      const actionable = isActionable(block, DateTime);

      switch (block.section) {
        case SECTIONS.INBOX:
        case SECTIONS.TODO:
          if (!actionable) {
            block.section = SECTIONS.FUTURE;
          }
          break;
        case SECTIONS.FUTURE:
          if (actionable) {
            block.section = SECTIONS.INBOX;
          }
          break;
        case SECTIONS.DONE:
          break;
        default:
          throw new Error(`Invalid section: ${block.section}`);
      }

      this.push(block);
      callback();
    }
  });

// given all blocks for a section, will:
// - add a header block if needed
// - add a padding block if needed
// - push every block
// - return the last block that was pushed
//
// * the "To-Do" section is special because it will only add a header block if the first block is not a header
const pushSection = (
  push: Function,
  name: string,
  blocks: Array<BlockT>,
  previousBlock: BlockT | null
): BlockT | null => {
  if (!blocks.length) return null;
  if (previousBlock && !BlockHelper.isPadding(previousBlock)) {
    push(paddingBlock());
  }
  if (name !== "To-Do" || blocks[0].type !== COMMENT) {
    push(headerBlock(name));
  }
  blocks.forEach(block => push(block));
  return blocks[blocks.length - 1];
};

const reshuffle = (DateTime: DateTimeWrapperT): Transform => {
  const inbox: Array<BlockT> = [];
  const todo: Array<BlockT> = [];
  const future: Array<BlockT> = [];
  const done: Array<BlockT> = [];
  return new Transform({
    objectMode: true,
    transform(block: BlockT, encoding: string, callback: Function) {
      switch (block.section) {
        case SECTIONS.INBOX:
          inbox.push(block);
          break;
        case SECTIONS.TODO:
          todo.push(block);
          break;
        case SECTIONS.FUTURE:
          future.push(block);
          break;
        case SECTIONS.DONE:
          done.push(block);
          break;
      }
      callback();
    },
    flush(callback: Function) {
      const push = pushSection.bind(null, this.push.bind(this));
      let lastBlock = null;

      lastBlock = push("Inbox", inbox, lastBlock) || lastBlock;
      lastBlock = push("To-Do", todo, lastBlock) || lastBlock;
      lastBlock =
        push(
          "Future",
          future.sort(
            multiSort.bind(null, [sortByActionableDateAsc, sortByTitleDesc])
          ),
          lastBlock
        ) || lastBlock;
      lastBlock = push("Done", done, lastBlock) || lastBlock;

      callback();
    }
  });
};

const stringify = (): Transform => {
  return new Transform({
    objectMode: true,
    transform(block: BlockT, encoding: string, callback: Function) {
      block.section = null; // prevent rendering the section value
      this.push(block);
      callback();
    }
  });
};

const sectionsPlugin: PluginT = {
  description:
    "Organize to-dos under different sections, depending on their actionable status.",
  dependencies: ["start", "postpone"],
  getHook: (hookName: string, options: HookOptionsT): Transform | null => {
    const DateTime = DateTimeWrapper(options.time, options.timezone);
    switch (hookName) {
      case "parse":
        return parse(DateTime);
      case "process":
        return process(DateTime);
      case "reshuffle":
        return reshuffle(DateTime);
      case "stringify":
        return stringify();
      default:
        return null;
    }
  }
};

export default sectionsPlugin;
