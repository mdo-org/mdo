const { parse, process, stringify } = require("..");
const { runBlockTransform } = require("@mdo-org/mdo-core/lib/testHelpers");
const Block = require("@mdo-org/mdo-core/lib/BlockHelper");

describe("mdo-plugin-repeat", () => {
  describe("parse", () => {
    let result;

    const time = "2019-01-01T00:00Z";
    const timezone = "America/Panama";

    const run = repeat =>
      runBlockTransform(parse({ time, timezone }), [{ repeat }]);

    beforeEach(() => {
      result = [];
    });

    describe("when the @repeat value is valid", () => {
      beforeEach(async () => {
        result = await run("every 10 days from complete");
      });

      it("gets the parsed data in the repeat property", () => {
        expect(result[0].repeat).toEqual({
          string: "every 10 days from complete",
          n: 10,
          period: "DAYS",
          type: "COMPLETE"
        });
      });
    });

    describe("when the @repeat N value is omitted", () => {
      beforeEach(async () => {
        result = await run("every week from start");
      });

      it("assumes N is 1", () => {
        expect(result[0].repeat).toEqual({
          string: "every week from start",
          n: 1,
          period: "WEEKS",
          type: "START"
        });
      });
    });

    describe("when @repeat daily is used", () => {
      beforeEach(async () => {
        result = await run("daily from complete");
      });

      test('parses as "@repeat every 1 day"', () => {
        expect(result[0].repeat).toEqual({
          string: "daily from complete",
          n: 1,
          period: "DAYS",
          type: "COMPLETE"
        });
      });
    });

    describe("when @repeat semianually is used", () => {
      beforeEach(async () => {
        result = await run("semianually from start");
      });

      test('parses as "@repeat every 6 months"', () => {
        expect(result[0].repeat).toEqual({
          string: "semianually from start",
          n: 6,
          period: "MONTHS",
          type: "START"
        });
      });
    });

    describe("when the @repeat value is invalid", () => {
      it("throws an error", done =>
        run("forever and ever")
          .then(() => {
            return done(new Error("Expected transform to throw an error."));
          })
          .catch(err => {
            if (err.message.includes("Invalid @repeat tag")) {
              return done();
            }
            return done(err);
          }));
    });
  });

  describe("stringify", () => {
    const run = repeat => runBlockTransform(stringify(), [{ repeat }]);

    it("replaces a Block's `.repeat` value with the `.repeat.string` value", async () => {
      const result = await run({
        string: "every 10 days from complete",
        n: 10,
        period: "DAYS",
        type: "COMPLETE"
      });
      expect(result[0].repeat).toBe("every 10 days from complete");
    });
  });

  describe("process", () => {
    const runAt = (time, timezone, blocks) =>
      runBlockTransform(process({ time, timezone }), blocks);

    let result;

    describe("blocks without a .repeat", () => {
      beforeEach(async () => {
        result = await runAt("2018-08-10T18:30-05:00", "America/Panama", [
          {
            type: Block.TYPES.COMPLETE_TASK,
            text: "{{type}} hello world {{start}}",
            start: "2018-01-01T10:00:00Z"
          },
          {
            type: Block.TYPES.INCOMPLETE_TASK,
            text: "{{type}} foo bar {{start}}",
            start: "2018-01-01T14:00:00Z"
          }
        ]);
      });

      it("lets them passthrough", async () => {
        expect(result).toEqual([
          {
            type: Block.TYPES.COMPLETE_TASK,
            text: "{{type}} hello world {{start}}",
            start: "2018-01-01T10:00:00Z"
          },
          {
            type: Block.TYPES.INCOMPLETE_TASK,
            text: "{{type}} foo bar {{start}}",
            start: "2018-01-01T14:00:00Z"
          }
        ]);
      });
    });

    describe("complete blocks with .repeat from complete", () => {
      describe("when the .start date has no time", () => {
        beforeEach(async () => {
          result = await runAt("2018-08-10T18:30-05:00", "America/Panama", [
            {
              type: Block.TYPES.COMPLETE_TASK,
              text: "hello world {{start}} {{repeat}}",
              start: "2018-08-01T00:00:00.000-05:00",
              repeat: {
                string: "every 5 days from complete",
                n: 5,
                period: "DAYS",
                type: "COMPLETE"
              }
            }
          ]);
        });

        it("updates the .start date, keeping the time at 00:00", () => {
          expect(result).toEqual([
            {
              type: Block.TYPES.INCOMPLETE_TASK,
              text: "hello world {{start}} {{repeat}}",
              start: "2018-08-15T00:00:00.000-05:00",
              repeat: {
                string: "every 5 days from complete",
                n: 5,
                period: "DAYS",
                type: "COMPLETE"
              }
            }
          ]);
        });
      });

      describe("when the .start date has a specified time", () => {
        beforeEach(async () => {
          result = await runAt("2018-08-10T18:30-05:00", "America/Panama", [
            {
              type: Block.TYPES.COMPLETE_TASK,
              text: "hello world {{start}} {{repeat}}",
              start: "2018-08-01T13:30:00.000-05:00",
              repeat: {
                string: "every 5 days from complete",
                n: 5,
                period: "DAYS",
                type: "COMPLETE"
              }
            }
          ]);
        });

        it("updates the .start date but keeps the time intact", () => {
          expect(result).toEqual([
            {
              type: Block.TYPES.INCOMPLETE_TASK,
              text: "hello world {{start}} {{repeat}}",
              start: "2018-08-15T13:30:00.000-05:00",
              repeat: {
                string: "every 5 days from complete",
                n: 5,
                period: "DAYS",
                type: "COMPLETE"
              }
            }
          ]);
        });
      });
    });

    describe("complete blocks with .repeat from start", () => {
      describe("when the .start date has no time", () => {
        beforeEach(async () => {
          result = await runAt("2018-08-10T18:30-05:00", "America/Panama", [
            {
              type: Block.TYPES.COMPLETE_TASK,
              text: "hello world {{start}} {{repeat}}",
              start: "2018-08-01T00:00:00.000-05:00",
              repeat: {
                string: "every 5 days from start",
                n: 5,
                period: "DAYS",
                type: "START"
              }
            }
          ]);
        });

        it("updates the .start date, keeping the time at 00:00", () => {
          expect(result).toEqual([
            {
              type: Block.TYPES.INCOMPLETE_TASK,
              text: "hello world {{start}} {{repeat}}",
              start: "2018-08-06T00:00:00.000-05:00",
              repeat: {
                string: "every 5 days from start",
                n: 5,
                period: "DAYS",
                type: "START"
              }
            }
          ]);
        });
      });

      describe("when the .start date has a specified time", () => {
        beforeEach(async () => {
          result = await runAt("2018-08-10T18:30-05:00", "America/Panama", [
            {
              type: Block.TYPES.COMPLETE_TASK,
              text: "hello world {{start}} {{repeat}}",
              start: "2018-08-01T13:30:00.000-05:00",
              repeat: {
                string: "every 5 days from start",
                n: 5,
                period: "DAYS",
                type: "START"
              }
            }
          ]);
        });

        it("updates the .start date but keeps the time intact", () => {
          expect(result).toEqual([
            {
              type: Block.TYPES.INCOMPLETE_TASK,
              text: "hello world {{start}} {{repeat}}",
              start: "2018-08-06T13:30:00.000-05:00",
              repeat: {
                string: "every 5 days from start",
                n: 5,
                period: "DAYS",
                type: "START"
              }
            }
          ]);
        });
      });
    });
  });
});
