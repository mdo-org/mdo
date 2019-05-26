/*
 * The parse method takes in a string and transforms it to a Block objects
 * array.
 *
 * The stringify method takes in a Block objects array and transforms it to
 * a string.
 */

const { parse, stringify } = require("../../src/strings");
const Block = require("../../src/BlockHelper");

const { INCOMPLETE_TASK } = Block.TYPES;

describe("parse and stringify", () => {
  let original;
  let parsed;

  beforeEach(() => {
    original = "";
    parsed = [];
  });

  describe('parse lines starting with "- [ ]" or "-[]"', () => {
    beforeEach(async () => {
      original = `
- [ ] hello
- [] world
      `.trim();

      parsed = await parse(original);
    });

    it("converts them to incomplete task blocks", () =>
      expect(parsed).toEqual([
        { type: INCOMPLETE_TASK, text: "{{type}} hello" },
        { type: INCOMPLETE_TASK, text: "{{type}} world" }
      ]));

    describe("stringify back", () => {
      test("returns the original string normalized", async () => {
        expect(await stringify(parsed)).toEqual(
          `
- [ ] hello
- [ ] world
      `.trim()
        );
      });
    });
  });
});
