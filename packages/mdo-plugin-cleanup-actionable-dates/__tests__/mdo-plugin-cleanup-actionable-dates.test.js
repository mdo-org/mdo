const cleanupActionableDates = require("..");
const { runBlockTransform } = require("@mdo-org/mdo-core/lib/testHelpers");

describe("mdo-plugin-cleanup-actionable-dates", () => {
  const runAt = (time, blocks) =>
    runBlockTransform(cleanupActionableDates({ time }), blocks);

  describe("block with .postpone date in the future", () => {
    it("does nothing", async () => {
      const result = await runAt("2019-03-15T20:00-05:00", [
        {
          postpone: "2019-04-01T00:00-05:00"
        }
      ]);
      expect(result[0].postpone).toEqual("2019-04-01T00:00-05:00");
    });
  });

  describe("block with .postpone date in the past", () => {
    it("sets .postpone to null", async () => {
      const result = await runAt("2019-03-15T20:00-05:00", [
        {
          postpone: "2019-03-01T00:00-05:00"
        }
      ]);
      expect(result[0].postpone).toEqual(null);
    });
  });

  describe("block with .start date in the future", () => {
    it("does nothing", async () => {
      const result = await runAt("2019-03-15T20:00-05:00", [
        {
          start: "2019-04-01T00:00-05:00"
        }
      ]);
      expect(result[0].start).toEqual("2019-04-01T00:00-05:00");
    });
  });

  describe("block with .start date in the past and no .start time", () => {
    const runTime = "2019-03-15T20:00-05:00";
    const start = "2019-03-01T00:00-05:00";

    describe("and no .repeat", () => {
      it("sets .start to null", async () => {
        const result = await runAt(runTime, [
          {
            start,
            repeat: null
          }
        ]);
        expect(result[0].start).toEqual(null);
      });
    });

    describe("and .repeat from complete", () => {
      it("sets .start to null", async () => {
        const result = await runAt(runTime, [
          {
            start,
            repeat: { type: "COMPLETE" }
          }
        ]);
        expect(result[0].start).toEqual(null);
      });
    });

    describe("and .repeat from start", () => {
      it("does nothing", async () => {
        const result = await runAt(runTime, [
          {
            start,
            repeat: { type: "START" }
          }
        ]);
        expect(result[0].start).toEqual(start);
      });
    });
  });

  describe("block with .start date in the past and a .start time", () => {
    const runTime = "2019-03-15T20:00-05:00";
    const start = "2019-03-15T14:00-05:00";

    describe("and no .repeat", () => {
      it("sets .start to null", async () => {
        const result = await runAt(runTime, [
          {
            start,
            repeat: null
          }
        ]);
        expect(result[0].start).toEqual(null);
      });
    });

    describe("and .repeat from complete", () => {
      it("does nothing", async () => {
        const result = await runAt(runTime, [
          {
            start,
            repeat: { type: "COMPLETE" }
          }
        ]);
        expect(result[0].start).toEqual(start);
      });
    });

    describe("and .repeat from start", () => {
      it("does nothing", async () => {
        const result = await runAt(runTime, [
          {
            start,
            repeat: { type: "START" }
          }
        ]);
        expect(result[0].start).toEqual(start);
      });
    });
  });
});
