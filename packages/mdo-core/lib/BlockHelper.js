const LineHelper = require("./LineHelper");

const LINE_TYPES = LineHelper.TYPES;

const BLOCK_TYPES = {
  COMPLETE_TASK: "COMPLETE_TASK",
  INCOMPLETE_TASK: "INCOMPLETE_TASK",
  COMMENT: "COMMENT",
  PADDING: "PADDING"
};

// map from line type to block type
const lineTypeBlockTypeMap = new Map([
  [LINE_TYPES.TITLE_COMPLETE, BLOCK_TYPES.COMPLETE_TASK],
  [LINE_TYPES.TITLE_INCOMPLETE, BLOCK_TYPES.INCOMPLETE_TASK],
  [LINE_TYPES.COMMENT, BLOCK_TYPES.COMMENT]
]);

// map from block type to type string
const blockTypeStringMap = new Map([
  [BLOCK_TYPES.COMPLETE_TASK, "- [X]"],
  [BLOCK_TYPES.INCOMPLETE_TASK, "- [ ]"],
  [BLOCK_TYPES.COMMENT, "#"],
  [BLOCK_TYPES.PADDING, ""]
]);

const BlockHelper = {
  TYPES: BLOCK_TYPES,

  isComplete: block => {
    return block.type === BLOCK_TYPES.COMPLETE_TASK;
  },

  isPadding: block => {
    return block.type === BLOCK_TYPES.PADDING;
  },

  /*
   * Block.appendLine()
   * appends a new line to the provided block object.
   * Important: Mutates the block!
   */
  appendLine: (block, line) => {
    const separator = block.text ? "\n" : "";
    /* eslint no-param-reassign: [0] */
    block.text = `${block.text}${separator}${line.text}`;
  },

  /*
   * Block.splitByPadding()
   *
   * if the block text ends with empty lines (aka padding):
   * - removes the padding from the current text
   * - creates a new padding block
   * - returns an array of [currentBlockWithoutPadding, paddingBlock]
   *
   * if the block does not end with empty lines:
   * - returns [currentBlockClone]
   *
   * Note: Does not mutate the block, always returns new block objects.
   */
  splitByPadding: block => {
    const match = block.text && block.text.match(/(\s+)?$/);
    if (!match) {
      throw new Error(`Cannot splitByPadding the value: ${block.text}`);
    }
    const [, emptyLines] = match;
    const blockWithoutPadding = { type: block.type, text: block.text.trim() };
    const paddingBlock = emptyLines
      ? { type: BLOCK_TYPES.PADDING, text: emptyLines.replace(/ /g, "") }
      : null;
    return paddingBlock
      ? [blockWithoutPadding, paddingBlock]
      : [blockWithoutPadding];
  },

  /*
   * Block.toString()
   * returns a block object as a human-readable string
   */
  toString: block => {
    const typeAsString = blockTypeStringMap.get(block.type) || "";
    const text = block.text.replace("{{type}}", typeAsString);
    return Object.entries(block)
      .reduce((memo, [key, val]) => {
        if (["type", "text"].includes(key)) return memo;

        const placeholder = `{{${key}}}`;
        const value = val ? `@${key} ${val}` : "";

        if (memo.includes(placeholder)) {
          return memo.replace(placeholder, value);
        }

        // since there is no placeholder for the value, add it at the end of
        // the text
        if (memo.includes("{{")) {
          // the text already has placeholders, add the new placeholder to the last line
          return `${memo.trim()} ${value}`;
        }
        // the text does not have any placeholders, add the placeholder in a new line
        return `${memo.trim()}\n    ${value}`;
      }, text)
      .trim();
  },

  // static fromLine: (line: Line, options: { isFirstLine?: boolean }) => BlockT | null;
  /*
   * Block.fromLine()
   *
   * create a new block object from a Line
   * Note: returns null if the Line has type BODY and is not the first line
   */

  fromLine: (line, { isFirstLine } = {}) => {
    if (lineTypeBlockTypeMap.has(line.type)) {
      return {
        type: lineTypeBlockTypeMap.get(line.type) || "",
        text: line.text
      };
    }
    if (isFirstLine) {
      // transform the first line into a comment block
      return { type: LINE_TYPES.COMMENT, text: line.text };
    }
    return null;
  }
};

module.exports = BlockHelper;
