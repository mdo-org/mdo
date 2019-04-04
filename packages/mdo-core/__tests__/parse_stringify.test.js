/*
 * The parse method takes in a buffer stream and transforms it to a Block objects
 * stream.
 *
 * The stringify method takes in a Block objects stream and transforms it to
 * a buffer stream.
 */

const { parse, stringify } = require("..");
const {
  runStringToBlockTransform,
  runBlockToStringTransform
} = require("../lib/testHelpers");
const Block = require("../lib/BlockHelper");

const { COMPLETE_TASK, INCOMPLETE_TASK, COMMENT, PADDING } = Block.TYPES;

describe("parse and stringify", () => {
  let original;
  let parsed;

  beforeEach(() => {
    original = "";
    parsed = [];
  });

  describe("parse an empty string", () => {
    beforeEach(async () => {
      original = "";
      parsed = await runStringToBlockTransform(parse(), original);
    });

    test("returns an array with a single padding Block", () =>
      expect(parsed).toEqual([{ type: PADDING, text: "" }]));

    describe("stringify back", () => {
      test("returns the original string", async () => {
        expect(await runBlockToStringTransform(stringify(), parsed)).toEqual(
          original
        );
      });
    });
  });

  describe('parse lines starting with "- [ ]" or "-[]"', () => {
    beforeEach(async () => {
      original = `
- [ ] hello
- [] world
      `.trim();

      parsed = await runStringToBlockTransform(parse(), original);
    });

    it("converts them to incomplete task blocks", () =>
      expect(parsed).toEqual([
        { type: INCOMPLETE_TASK, text: "{{type}} hello" },
        { type: INCOMPLETE_TASK, text: "{{type}} world" }
      ]));

    describe("stringify back", () => {
      test("returns the original string normalized", async () => {
        expect(await runBlockToStringTransform(stringify(), parsed)).toEqual(
          `
- [ ] hello
- [ ] world
      `.trim()
        );
      });
    });
  });

  describe('parse lines starting with "- [x]" or "- [X]"', () => {
    beforeEach(async () => {
      original = `
- [x] hello
- [X] world
      `.trim();
      parsed = await runStringToBlockTransform(parse(), original);
    });

    it("converts them to complete task blocks", () =>
      expect(parsed).toEqual([
        { type: COMPLETE_TASK, text: "{{type}} hello" },
        { type: COMPLETE_TASK, text: "{{type}} world" }
      ]));

    describe("stringify back", () => {
      test("returns the original string normalized", async () => {
        expect(await runBlockToStringTransform(stringify(), parsed)).toEqual(
          `
- [X] hello
- [X] world
      `.trim()
        );
      });
    });
  });

  describe('parse lines starting with "#"', () => {
    beforeEach(async () => {
      original = `
# hello
# world
      `.trim();
      parsed = await runStringToBlockTransform(parse(), original);
    });

    it("converts them to comment blocks", () => {
      expect(parsed).toEqual([
        { type: COMMENT, text: "{{type}} hello" },
        { type: COMMENT, text: "{{type}} world" }
      ]);
    });

    describe("stringify back", () => {
      test("returns the original string", async () => {
        expect(await runBlockToStringTransform(stringify(), parsed)).toEqual(
          original
        );
      });
    });
  });

  describe("parse files starting with an empty line", () => {
    beforeEach(async () => {
      original = `
- [ ] hello
- [ ] world`;
      parsed = await runStringToBlockTransform(parse(), original);
    });

    it("converts the empty line to a padding block", () =>
      expect(parsed).toEqual([
        { type: PADDING, text: "" },
        { type: INCOMPLETE_TASK, text: "{{type}} hello" },
        { type: INCOMPLETE_TASK, text: "{{type}} world" }
      ]));

    describe("stringify back", () => {
      test("returns the original string", async () => {
        expect(await runBlockToStringTransform(stringify(), parsed)).toEqual(
          original
        );
      });
    });
  });

  describe("parse combinations of blocks", () => {
    beforeEach(async () => {
      original = `
- [] hello

# world
- [X] this
- [ ] is a
- [x] test
      `.trim();
      parsed = await runStringToBlockTransform(parse(), original);
    });

    it("handles them correctly", () => {
      expect(parsed).toEqual([
        { type: INCOMPLETE_TASK, text: "{{type}} hello" },
        { type: PADDING, text: "\n" },
        { type: COMMENT, text: "{{type}} world" },
        { type: COMPLETE_TASK, text: "{{type}} this" },
        { type: INCOMPLETE_TASK, text: "{{type}} is a" },
        { type: COMPLETE_TASK, text: "{{type}} test" }
      ]);
    });

    describe("stringify back", () => {
      test("returns the original string normalized", async () => {
        expect(await runBlockToStringTransform(stringify(), parsed)).toEqual(
          `
- [ ] hello

# world
- [X] this
- [ ] is a
- [X] test
      `.trim()
        );
      });
    });
  });

  describe("parse multiline blocks", () => {
    beforeEach(async () => {
      original = `
- [ ] this is
a multiline comment
- [ ] and another
      one
      `.trim();
      parsed = await runStringToBlockTransform(parse(), original);
    });

    it("handles them correctly", () => {
      expect(parsed).toEqual([
        {
          type: INCOMPLETE_TASK,
          text: "{{type}} this is\na multiline comment"
        },
        { type: INCOMPLETE_TASK, text: "{{type}} and another\n      one" }
      ]);
    });

    describe("stringify back", () => {
      test("returns the original string", async () => {
        expect(await runBlockToStringTransform(stringify(), parsed)).toEqual(
          original
        );
      });
    });
  });

  describe("parse blocks with tags", () => {
    beforeEach(async () => {
      original = `
- [ ] hello
  @start tomorrow
  @postpone until Wednesday
- [ ] world
  @postpone until 2019-10-01 @repeat every month from complete
  foobar
      `.trim();
      parsed = await runStringToBlockTransform(parse(), original);
    });

    it("replaces tags with placeholders", () => {
      expect(parsed[0].text).toEqual(
        "{{type}} hello\n  {{start}}\n  {{postpone}}"
      );
      expect(parsed[1].text).toEqual(
        "{{type}} world\n  {{postpone}} {{repeat}}\n  foobar"
      );
    });

    it("adds the tag data to the block object", () => {
      expect(parsed[0].start).toEqual("tomorrow");
      expect(parsed[0].postpone).toEqual("until Wednesday");
      expect(parsed[1].postpone).toEqual("until 2019-10-01");
      expect(parsed[1].repeat).toEqual("every month from complete");
    });

    describe("stringify back", () => {
      test("returns the original string", async () => {
        expect(await runBlockToStringTransform(stringify(), parsed)).toEqual(
          original
        );
      });
    });
  });
});
