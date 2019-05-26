/* eslint no-param-reassign: [0] */

const { Transform } = require("stream");
const BlockHelper = require("@mdo-org/mdo-core/src/BlockHelper");
const DateTimeWrapper = require("@mdo-org/mdo-core/src/DateTimeWrapper");

const { COMPLETE_TASK, INCOMPLETE_TASK, COMMENT, PADDING } = BlockHelper.TYPES;

const SECTIONS = {
  INBOX: "INBOX",
  TODO: "TODO",
  FUTURE: "FUTURE",
  DONE: "DONE"
};

const headerBlock = text => ({
  type: COMMENT,
  text: `{{type}} ${text}`
});

const paddingBlock = () => ({
  type: PADDING,
  text: "\n"
});

/**
 * isActionable
 *  returns true if both start and postpone dates are in the past.
 */
const isActionable = ({ start, postpone }, DateTime) =>
  [start, postpone]
    .filter(Boolean)
    .reduce(
      (memo, date) => memo && DateTime.fromISO(date) <= DateTime.local(),
      true
    );

// the actionable date is the latest time between start and postpone
const getActionableDate = ({ start, postpone }) =>
  [start, postpone]
    .reduce((memo, dateStr) => {
      if (!dateStr) return memo;
      const date = new Date(dateStr);
      return memo < date ? date : memo;
    }, new Date("1980-01-01"))
    .getTime();

const sortByActionableDateAsc = (blockA, blockB) =>
  getActionableDate(blockA) - getActionableDate(blockB);

const sortByTitleDesc = (blockA, blockB) =>
  blockA.text.localeCompare(blockB.text);

/**
 * Given multiple sort functions and two objects, will compare objects until
 * at least one of the sort functions returns a result other than 0.
 */
const multiSort = (sortFuncs, a, b) =>
  sortFuncs.reduce(
    (prevResult, sortFunc) => (prevResult === 0 ? sortFunc(a, b) : prevResult),
    0
  );

const parse = () => {
  let section = SECTIONS.TODO;
  return new Transform({
    objectMode: true,
    transform(block, encoding, callback) {
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

const process = ({ time, timezone }) => {
  const DateTime = DateTimeWrapper(time, timezone);
  return new Transform({
    objectMode: true,
    transform(block, encoding, callback) {
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
      return callback();
    }
  });
};

// given all blocks for a section, will:
// - add a header block if needed
// - add a padding block if needed
// - return an array with all blocks for the section
//
// * the "To-Do" section is special because it will only add a header block if the first block is not a header
const createSection = (name, blocks, previousBlock) => {
  if (!blocks.length) return [];

  const section = [];
  if (previousBlock && !BlockHelper.isPadding(previousBlock)) {
    section.push(paddingBlock());
  }
  if (name !== "To-Do" || blocks[0].type !== COMMENT) {
    section.push(headerBlock(name));
  }
  blocks.forEach(block => section.push(block));
  return section;
};

const sort = () => {
  const inbox = [];
  const todo = [];
  const future = [];
  const done = [];

  return new Transform({
    objectMode: true,
    transform(block, encoding, callback) {
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
        default:
          throw new Error(
            `Unknown section for block: ${JSON.stringify(block, null, 2)}`
          );
      }
      callback();
    },
    flush(callback) {
      [
        { name: "Inbox", blocks: inbox },
        { name: "To-Do", blocks: todo },
        {
          name: "Future",
          blocks: future.sort(
            multiSort.bind(null, [sortByActionableDateAsc, sortByTitleDesc])
          )
        },
        { name: "Done", blocks: done }
      ].reduce((previousBlock, { name, blocks }) => {
        const sectionBlocks = createSection(name, blocks, previousBlock);
        sectionBlocks.forEach(block => this.push(block));
        return sectionBlocks[sectionBlocks.length - 1];
      }, null);
      callback();
    }
  });
};

const stringify = () => {
  return new Transform({
    objectMode: true,
    transform(block, encoding, callback) {
      this.push({
        ...block,
        section: null // prevent rendering the section value
      });
      callback();
    }
  });
};

module.exports = {
  parse,
  process,
  sort,
  stringify
};
