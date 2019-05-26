const { parse, process, sort } = require("..");
const { runBlockTransform } = require("@mdo-org/mdo-core/src/testHelpers");
const {
  TYPES: { COMPLETE_TASK, INCOMPLETE_TASK, COMMENT, PADDING }
} = require("@mdo-org/mdo-core/src/BlockHelper");

describe("mdo-plugin-sections", () => {
  let result;
  beforeEach(() => {
    result = [];
  });

  describe("parse", () => {
    const time = "2019-01-01T00:00Z";
    const timezone = "America/Panama";
    const run = blocks => runBlockTransform(parse({ time, timezone }), blocks);

    describe("blocks without any headers", () => {
      beforeEach(async () => {
        result = await run([
          { type: COMPLETE_TASK, text: "{{type}} hello world" },
          { type: INCOMPLETE_TASK, text: "{{type}} foo bar" }
        ]);
        return result;
      });

      it('assigns them to the "TO-DO" section', () => {
        expect(result).toEqual([
          {
            type: COMPLETE_TASK,
            text: "{{type}} hello world",
            section: "TODO"
          },
          { type: INCOMPLETE_TASK, text: "{{type}} foo bar", section: "TODO" }
        ]);
      });
    });

    describe('blocks under an "# Inbox" header', () => {
      beforeEach(async () => {
        result = await run([
          { type: COMMENT, text: "{{type}} Inbox" },
          { type: COMPLETE_TASK, text: "{{type}} hello mom" },
          { type: INCOMPLETE_TASK, text: "{{type}} hello dad" }
        ]);
      });

      it('assigns them to the "INBOX" section', () => {
        expect(result).toEqual([
          { type: COMPLETE_TASK, text: "{{type}} hello mom", section: "INBOX" },
          {
            type: INCOMPLETE_TASK,
            text: "{{type}} hello dad",
            section: "INBOX"
          }
        ]);
      });
    });

    describe('blocks under a "# Future" header', () => {
      beforeEach(async () => {
        result = await run([
          { type: COMMENT, text: "{{type}} Future" },
          { type: COMPLETE_TASK, text: "{{type}} hello mom" },
          { type: INCOMPLETE_TASK, text: "{{type}} hello dad" }
        ]);
      });

      it('assigns them to the "FUTURE" section', () => {
        expect(result).toEqual([
          {
            type: COMPLETE_TASK,
            text: "{{type}} hello mom",
            section: "FUTURE"
          },
          {
            type: INCOMPLETE_TASK,
            text: "{{type}} hello dad",
            section: "FUTURE"
          }
        ]);
      });
    });

    describe('blocks between "# Inbox" and "# Future" sections', () => {
      beforeEach(async () => {
        result = await run([
          { type: COMMENT, text: "{{type}} Inbox" },
          { type: COMPLETE_TASK, text: "{{type}} hello mom" },
          { type: COMMENT, text: "{{type}} Home" },
          { type: INCOMPLETE_TASK, text: "{{type}} hello dad" },
          { type: COMMENT, text: "{{type}} Future" },
          { type: INCOMPLETE_TASK, text: "{{type}} hello dog" }
        ]);
      });

      it('assigns them to the "TODO" section', () => {
        expect(result).toEqual([
          { type: COMPLETE_TASK, text: "{{type}} hello mom", section: "INBOX" },
          { type: COMMENT, text: "{{type}} Home", section: "TODO" },
          {
            type: INCOMPLETE_TASK,
            text: "{{type}} hello dad",
            section: "TODO"
          },
          {
            type: INCOMPLETE_TASK,
            text: "{{type}} hello dog",
            section: "FUTURE"
          }
        ]);
      });
    });
  });

  describe("process", () => {
    const runAt = (time, timezone, blocks) =>
      runBlockTransform(process({ time, timezone }), blocks);

    describe("# Inbox and # To-Do blocks", () => {
      describe("when they are actionable", () => {
        beforeEach(async () => {
          result = await runAt("2018-08-05T18:30-05:00", "America/Panama", [
            {
              type: INCOMPLETE_TASK,
              text: "{{type}} hello world {{start}}",
              // actionable because start is in the past
              start: "2018-08-01T10:00:00Z",
              section: "INBOX"
            },
            {
              type: INCOMPLETE_TASK,
              text: "{{type}} foo bar {{start}}",
              // actionable because postpone is in the past
              postpone: "2018-08-01T14:00:00Z",
              section: "TODO"
            }
          ]);
        });

        it("lets them passthrough", () => {
          expect(result).toEqual([
            {
              type: INCOMPLETE_TASK,
              text: "{{type}} hello world {{start}}",
              start: "2018-08-01T10:00:00Z",
              section: "INBOX"
            },
            {
              type: INCOMPLETE_TASK,
              text: "{{type}} foo bar {{start}}",
              postpone: "2018-08-01T14:00:00Z",
              section: "TODO"
            }
          ]);
        });
      });

      describe("when they are not actionable", () => {
        beforeEach(async () => {
          result = await runAt("2018-08-05T18:30-05:00", "America/Panama", [
            {
              type: INCOMPLETE_TASK,
              text: "{{type}} hello world {{start}}",
              start: "2018-08-01T10:00:00Z",
              // not actionable because postpone is in the future
              postpone: "2018-08-20T00:00Z",
              section: "INBOX"
            },
            {
              type: INCOMPLETE_TASK,
              text: "{{type}} foo bar {{start}}",
              // not actionable because start is in the future
              start: "2018-08-20T00:00Z",
              postpone: "2018-08-01T14:00:00Z",
              section: "TODO"
            }
          ]);
        });

        it("moves them to the # Future section", () => {
          expect(result).toEqual([
            {
              type: INCOMPLETE_TASK,
              text: "{{type}} hello world {{start}}",
              start: "2018-08-01T10:00:00Z",
              postpone: "2018-08-20T00:00Z",
              section: "FUTURE"
            },
            {
              type: INCOMPLETE_TASK,
              text: "{{type}} foo bar {{start}}",
              start: "2018-08-20T00:00Z",
              postpone: "2018-08-01T14:00:00Z",
              section: "FUTURE"
            }
          ]);
        });
      });
    });

    describe("# Future blocks", () => {
      describe("when they are actionable", () => {
        beforeEach(async () => {
          result = await runAt("2018-08-05T18:30-05:00", "America/Panama", [
            {
              type: INCOMPLETE_TASK,
              text: "{{type}} hello world {{start}}",
              // actionable because start is in the past
              start: "2018-08-01T10:00:00Z",
              section: "FUTURE"
            },
            {
              type: INCOMPLETE_TASK,
              text: "{{type}} foo bar {{start}}",
              // actionable because postpone is in the past
              postpone: "2018-08-01T14:00:00Z",
              section: "FUTURE"
            }
          ]);
        });

        it("moves them to the # Inbox section", () => {
          expect(result).toEqual([
            {
              type: INCOMPLETE_TASK,
              text: "{{type}} hello world {{start}}",
              start: "2018-08-01T10:00:00Z",
              section: "INBOX"
            },
            {
              type: INCOMPLETE_TASK,
              text: "{{type}} foo bar {{start}}",
              postpone: "2018-08-01T14:00:00Z",
              section: "INBOX"
            }
          ]);
        });
      });

      describe("when they are not actionable", () => {
        beforeEach(async () => {
          result = await runAt("2018-08-05T18:30-05:00", "America/Panama", [
            {
              type: INCOMPLETE_TASK,
              text: "{{type}} hello world {{start}}",
              start: "2018-08-01T10:00:00Z",
              // not actionable because postpone is in the future
              postpone: "2018-08-20T00:00Z",
              section: "FUTURE"
            },
            {
              type: INCOMPLETE_TASK,
              text: "{{type}} foo bar {{start}}",
              // not actionable because start is in the future
              start: "2018-08-20T00:00Z",
              postpone: "2018-08-01T14:00:00Z",
              section: "FUTURE"
            }
          ]);
        });

        it("lets them passthrough", () => {
          expect(result).toEqual([
            {
              type: INCOMPLETE_TASK,
              text: "{{type}} hello world {{start}}",
              start: "2018-08-01T10:00:00Z",
              postpone: "2018-08-20T00:00Z",
              section: "FUTURE"
            },
            {
              type: INCOMPLETE_TASK,
              text: "{{type}} foo bar {{start}}",
              start: "2018-08-20T00:00Z",
              postpone: "2018-08-01T14:00:00Z",
              section: "FUTURE"
            }
          ]);
        });
      });
    });
  });

  describe("sort", () => {
    const time = "2019-01-01T00:00Z";
    const timezone = "America/Panama";
    const run = blocks => runBlockTransform(sort({ time, timezone }), blocks);

    describe("when there are INBOX blocks", () => {
      beforeEach(async () => {
        result = await run([
          { type: INCOMPLETE_TASK, text: "{{type}} hello", section: "INBOX" },
          { type: INCOMPLETE_TASK, text: "{{type}} world", section: "INBOX" }
        ]);
      });

      it('emits an "Inbox" header as the first element of the stream', () => {
        expect(result[0]).toEqual({ type: COMMENT, text: "{{type}} Inbox" });
      });

      it('emits all "INBOX" blocks under the "Inbox" header, in the same order as they were originally emitted', () => {
        expect(result[1]).toEqual({
          type: INCOMPLETE_TASK,
          text: "{{type}} hello",
          section: "INBOX"
        });
        expect(result[2]).toEqual({
          type: INCOMPLETE_TASK,
          text: "{{type}} world",
          section: "INBOX"
        });
      });
    });

    describe("when there are no INBOX blocks", () => {
      beforeEach(async () => {
        result = await run([
          { type: INCOMPLETE_TASK, text: "{{type}} foo", section: "TODO" }
        ]);
      });

      it('does not emit an "Inbox" header', () => {
        expect(
          result.find(block => block.text.toLowerCase().includes("inbox"))
        ).toBe(undefined);
      });
    });

    describe("when there are TODO blocks", () => {
      describe("and those blocks do not have a previous header", () => {
        beforeEach(async () => {
          result = await run([
            { type: INCOMPLETE_TASK, text: "{{type}} foo", section: "TODO" },
            { type: INCOMPLETE_TASK, text: "{{type}} bar", section: "TODO" }
          ]);
        });

        it('emits a "To-Do" header', () => {
          expect(result[0]).toEqual({ type: COMMENT, text: "{{type}} To-Do" });
        });

        it('emits all TODO blocks under the "To-Do" header, in the same order they were originally emitted', () => {
          expect(result[1]).toEqual({
            type: INCOMPLETE_TASK,
            text: "{{type}} foo",
            section: "TODO"
          });
          expect(result[2]).toEqual({
            type: INCOMPLETE_TASK,
            text: "{{type}} bar",
            section: "TODO"
          });
        });
      });

      describe("and those blocks already have a header", () => {
        beforeEach(async () => {
          result = await run([
            { type: COMMENT, text: "{{type}} Pending", section: "TODO" },
            { type: INCOMPLETE_TASK, text: "{{type}} foo", section: "TODO" },
            { type: INCOMPLETE_TASK, text: "{{type}} bar", section: "TODO" }
          ]);
        });

        it("reuses the existing header, instead of emitting a new one", () => {
          expect(result[0]).toEqual({
            type: COMMENT,
            text: "{{type}} Pending",
            section: "TODO"
          });
        });

        it("emits all TODO blocks under the existing header, in the same order they were originally emitted", () => {
          expect(result[1]).toEqual({
            type: INCOMPLETE_TASK,
            text: "{{type}} foo",
            section: "TODO"
          });
          expect(result[2]).toEqual({
            type: INCOMPLETE_TASK,
            text: "{{type}} bar",
            section: "TODO"
          });
        });
      });
    });

    describe("when there are no TODO blocks", () => {
      beforeEach(async () => {
        result = await run([
          {
            type: INCOMPLETE_TASK,
            text: "{{type}} nice to know you",
            section: "FUTURE"
          }
        ]);
      });

      it('does not emit a "To-Do" header', () => {
        expect(
          result.find(block => block.text.toLowerCase().includes("to-do"))
        ).toBe(undefined);
      });
    });

    describe("when there are FUTURE blocks", () => {
      beforeEach(async () => {
        result = await run([
          {
            type: INCOMPLETE_TASK,
            section: "FUTURE",
            text: "Lynx",
            start: "2019-01-01T00:00:00Z",
            postpone: "2019-12-31T00:00:00Z"
          },
          {
            type: INCOMPLETE_TASK,
            section: "FUTURE",
            text: "Ocelot",
            postpone: "2019-01-02T00:00:00Z"
          },
          {
            type: INCOMPLETE_TASK,
            section: "FUTURE",
            text: "Narwhal",
            start: "2019-01-02T00:00:00Z"
          },
          {
            type: INCOMPLETE_TASK,
            section: "FUTURE",
            text: "Meerkat",
            start: "2019-01-02T01:00:00Z"
          }
        ]);
      });

      it('emits a "Future" header as the first element of the stream', () => {
        expect(result[0]).toEqual({ type: COMMENT, text: "{{type}} Future" });
      });

      it('emits all "FUTURE" blocks under the "Future" header, sorted by actionable date, text', () => {
        // Since both 'Ocelot' and 'Narwhal' have the same actionable date,
        // we sort by alphabetical order: first 'Narwhal', then 'Ocelot'
        expect(result[1]).toEqual({
          type: INCOMPLETE_TASK,
          section: "FUTURE",
          text: "Narwhal",
          start: "2019-01-02T00:00:00Z"
        });
        expect(result[2]).toEqual({
          type: INCOMPLETE_TASK,
          section: "FUTURE",
          text: "Ocelot",
          postpone: "2019-01-02T00:00:00Z"
        });

        // Even though 'Meerkat' has the same base date as 'Ocelot' and
        // 'Narwhal', the time is later - causing 'Meerkat' to show up after
        // the other two.
        expect(result[3]).toEqual({
          type: INCOMPLETE_TASK,
          section: "FUTURE",
          text: "Meerkat",
          start: "2019-01-02T01:00:00Z"
        });

        // Even though this to-do has the earliest `start` date, it also has
        // the latest `postpone` date.
        // Since the "actionable date" is the latest date between `start` and
        // `postpone`, this to-do shows up last.
        expect(result[4]).toEqual({
          type: INCOMPLETE_TASK,
          section: "FUTURE",
          text: "Lynx",
          start: "2019-01-01T00:00:00Z",
          postpone: "2019-12-31T00:00:00Z"
        });
      });
    });

    describe("when there are no FUTURE blocks", () => {
      beforeEach(async () => {
        result = await run([
          {
            type: INCOMPLETE_TASK,
            text: "{{type}} hello world",
            section: "INBOX"
          }
        ]);
      });

      it('does not emit a "Future" header', () => {
        expect(
          result.find(block => block.text.toLowerCase().includes("future"))
        ).toBe(undefined);
      });
    });

    describe("when there are blocks from multiple sections", () => {
      beforeEach(async () => {
        result = await run([
          {
            type: INCOMPLETE_TASK,
            text: "{{type}} nice to know you",
            section: "FUTURE"
          },
          { type: INCOMPLETE_TASK, text: "{{type}} hello", section: "INBOX" },
          { type: INCOMPLETE_TASK, text: "{{type}} foo", section: "TODO" },
          { type: INCOMPLETE_TASK, text: "{{type}} world", section: "INBOX" },
          { type: INCOMPLETE_TASK, text: "{{type}} bar", section: "TODO" },
          { type: INCOMPLETE_TASK, text: "{{type}} goodbye", section: "FUTURE" }
        ]);
      });

      it("sorts them correctly", () => {
        expect(result).toEqual([
          { type: COMMENT, text: "{{type}} Inbox" },
          { type: INCOMPLETE_TASK, text: "{{type}} hello", section: "INBOX" },
          { type: INCOMPLETE_TASK, text: "{{type}} world", section: "INBOX" },
          { type: PADDING, text: "\n" },
          { type: COMMENT, text: "{{type}} To-Do" },
          { type: INCOMPLETE_TASK, text: "{{type}} foo", section: "TODO" },
          { type: INCOMPLETE_TASK, text: "{{type}} bar", section: "TODO" },
          { type: PADDING, text: "\n" },
          { type: COMMENT, text: "{{type}} Future" },
          {
            type: INCOMPLETE_TASK,
            text: "{{type}} goodbye",
            section: "FUTURE"
          },
          {
            type: INCOMPLETE_TASK,
            text: "{{type}} nice to know you",
            section: "FUTURE"
          }
        ]);
      });
    });
  });
});
