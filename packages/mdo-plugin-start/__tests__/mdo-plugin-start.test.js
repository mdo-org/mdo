const { parse, stringify } = require("..");
const { runBlockTransform } = require("@mdo-org/mdo-core/lib/testHelpers");

describe("mdo-plugin-start", () => {
  describe("parse", () => {
    let result;

    const runAt = (time, timezone, start) =>
      runBlockTransform(parse({ time, timezone }), [{ start }]);

    beforeEach(() => {
      result = [];
    });

    describe("using time", () => {
      beforeEach(async () => {
        result = await runAt("2018-06-25T18:35-05", "America/Panama", "at 9pm");
      });

      it("sets the .start property to today at the time specified", () => {
        expect(result[0].start).toEqual("2018-06-25T21:00:00.000-05:00");
      });
    });

    describe('using "today"', () => {
      describe("with no time specified", () => {
        beforeEach(async () => {
          result = await runAt("2018-06-25T18:35", "America/Panama", "today");
        });

        it("sets the .start property to today at 00:00", () => {
          expect(result[0].start).toEqual("2018-06-25T00:00:00.000-05:00");
        });
      });

      describe("with a time specified", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-25T18:35-05:00",
            "America/Panama",
            "today at 15:30"
          );
        });

        it("sets the .start property to today at the specified time", () => {
          expect(result[0].start).toEqual("2018-06-25T15:30:00.000-05:00");
        });
      });

      describe("with a typo", () => {
        it("throws an error", done =>
          runAt("2018-06-25T18:35-05:00", "America/Panama", "troday at 8:30pm")
            .then(() => {
              return done(new Error("Expected transform to throw an error."));
            })
            .catch(err => {
              if (err.message.includes("Invalid @start tag")) {
                return done();
              }
              return done(err);
            }));
      });
    });

    describe('using "tomorrow"', () => {
      describe("with no time specified", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-25T18:35",
            "America/Panama",
            "tomorrow"
          );
        });

        it("sets the .start property to tomorrow at 00:00", () => {
          expect(result[0].start).toEqual("2018-06-26T00:00:00.000-05:00");
        });
      });

      describe("with a time specified", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-25T18:35-05:00",
            "America/Panama",
            "tomorrow at 8:30pm"
          );
        });

        it("sets the .start property to tomorrow at the specified time", () => {
          expect(result[0].start).toEqual("2018-06-26T20:30:00.000-05:00");
        });
      });

      describe("with a typo", () => {
        it("throws an error", done =>
          runAt(
            "2018-06-25T18:35-05:00",
            "America/Panama",
            "tomorrows at 8:30pm"
          )
            .then(() => {
              return done(new Error("Expected transform to throw an error."));
            })
            .catch(err => {
              if (err.message.includes("Invalid @start tag")) {
                return done();
              }
              return done(err);
            }));
      });
    });

    describe("using a week day", () => {
      describe("with the same week day as today", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-25T18:35-05:00",
            "America/Panama",
            "Monday"
          );
        });

        it("sets the .start property to next weekday occurrence at 00:00", () => {
          expect(result[0].start).toEqual("2018-07-02T00:00:00.000-05:00");
        });

        describe("when a time is specified", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "Monday at 10:30pm"
            );
          });

          it("sets the .start property to next weekday occurrence at the time specified", () => {
            expect(result[0].start).toEqual("2018-07-02T22:30:00.000-05:00");
          });
        });
      });

      describe("for a week day later than today", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-25T18:35-05:00",
            "America/Panama",
            "Tuesday"
          );
        });

        it("sets the .start property to next weekday occurrence at 00:00", () => {
          expect(result[0].start).toEqual("2018-06-26T00:00:00.000-05:00");
        });

        describe("when a time is specified", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "Tuesday at 6pm"
            );
          });

          it("sets the .start property to next weekday occurrence at the time specified", () => {
            expect(result[0].start).toEqual("2018-06-26T18:00:00.000-05:00");
          });
        });
      });

      describe("for a week day earlier than today", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-27T18:35-05:00",
            "America/Panama",
            "Monday"
          );
        });

        it("sets the .start property to next weekday occurrence at 00:00", () => {
          expect(result[0].start).toEqual("2018-07-02T00:00:00.000-05:00");
        });

        describe("when a time is specified", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-27T18:35-05:00",
              "America/Panama",
              "Monday at 1pm"
            );
          });

          it("sets the .start property to next weekday occurrence at the time specified", () => {
            expect(result[0].start).toEqual("2018-07-02T13:00:00.000-05:00");
          });
        });
      });
    });

    describe('using "next"', () => {
      describe("with the same week day as today", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-25T18:35-05:00",
            "America/Panama",
            "next Monday"
          );
        });

        it("sets the .start property to next weekday occurrence at 00:00", () => {
          expect(result[0].start).toEqual("2018-07-02T00:00:00.000-05:00");
        });

        describe("when a time is specified", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "next Monday at 10:30pm"
            );
          });

          it("sets the .start property to next weekday occurrence at the time specified", () => {
            expect(result[0].start).toEqual("2018-07-02T22:30:00.000-05:00");
          });
        });
      });

      describe("for a week day later than today", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-25T18:35-05:00",
            "America/Panama",
            "next Tuesday"
          );
        });

        it("sets the .start property to next weekday occurrence at 00:00", () => {
          expect(result[0].start).toEqual("2018-06-26T00:00:00.000-05:00");
        });

        describe("when a time is specified", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "next Tuesday at 6pm"
            );
          });

          it("sets the .start property to next weekday occurrence at the time specified", () => {
            expect(result[0].start).toEqual("2018-06-26T18:00:00.000-05:00");
          });
        });
      });

      describe("for a week day earlier than today", () => {
        it("sets the .start property to next weekday occurrence at 00:00", async () => {
          result = await runAt(
            "2018-06-27T18:35-05:00",
            "America/Panama",
            "next Monday"
          );
          expect(result[0].start).toEqual("2018-07-02T00:00:00.000-05:00");
        });

        describe("when a time is specified", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-27T18:35-05:00",
              "America/Panama",
              "next Monday at 1pm"
            );
          });

          it("sets the .start property to next weekday occurrence at the time specified", () => {
            expect(result[0].start).toEqual("2018-07-02T13:00:00.000-05:00");
          });
        });
      });

      describe("next week", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-27T18:35-05:00",
            "America/Panama",
            "next week"
          );
        });

        it("sets the .start property to next week on the same day at 00:00", () => {
          expect(result[0].start).toEqual("2018-07-04T00:00:00.000-05:00");
        });

        describe("when a time is specified", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-27T18:35-05:00",
              "America/Panama",
              "next week at 1pm"
            );
          });

          it("sets the .start property to next week on the same day at the time specified", () => {
            expect(result[0].start).toEqual("2018-07-04T13:00:00.000-05:00");
          });
        });
      });

      describe("next month", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-27T18:35-05:00",
            "America/Panama",
            "next month"
          );
        });

        it("sets the .start property to next month on the same day at 00:00", () => {
          expect(result[0].start).toEqual("2018-07-27T00:00:00.000-05:00");
        });

        describe("when a time is specified", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-27T18:35-05:00",
              "America/Panama",
              "next month at 1pm"
            );
          });

          it("sets the .start property to next month on the same day at the time specified", () => {
            expect(result[0].start).toEqual("2018-07-27T13:00:00.000-05:00");
          });
        });
      });

      describe("next year", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-27T18:35-05:00",
            "America/Panama",
            "next year"
          );
        });

        it("sets the .start property to next year on the same day at 00:00", () => {
          expect(result[0].start).toEqual("2019-06-27T00:00:00.000-05:00");
        });

        describe("when a time is specified", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-27T18:35-05:00",
              "America/Panama",
              "next year at 1pm"
            );
          });

          it("sets the .start property to next year on the same day at the time specified", () => {
            expect(result[0].start).toEqual("2019-06-27T13:00:00.000-05:00");
          });
        });
      });
    });

    describe('using "in"', () => {
      describe("in n minutes", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-25T18:35-05:00",
            "America/Panama",
            "in 15 minutes"
          );
        });

        it("sets the .start property to n minutes in the future", () => {
          expect(result[0].start).toEqual("2018-06-25T18:50:00.000-05:00");
        });

        describe("when a time is specified", () => {
          it("throws an error", done =>
            runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "in 15 minutes at 10:30pm"
            )
              .then(() => {
                return done(new Error("Expected transform to throw an error."));
              })
              .catch(err => {
                if (
                  err.message.includes(
                    'Cannot specify a time with "start in <n> minutes"'
                  )
                ) {
                  return done();
                }
                return done(err);
              }));
        });
      });

      describe("in n hours", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-25T18:35-05:00",
            "America/Panama",
            "in 2 hours"
          );
        });

        it("sets the .start property to n hours in the future", () => {
          expect(result[0].start).toEqual("2018-06-25T20:35:00.000-05:00");
        });

        describe("when a time is specified", () => {
          it("throws an error", done =>
            runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "in 2 hours at 10:30pm"
            )
              .then(() => {
                return done(new Error("Expected transform to throw an error."));
              })
              .catch(err => {
                if (err.message.includes("Invalid @start tag")) {
                  return done();
                }
                return done(err);
              }));
        });
      });

      describe("in n days", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-25T18:35-05:00",
            "America/Panama",
            "in 5 days"
          );
        });

        it("sets the .start property to n days in the future at 00:00", () => {
          expect(result[0].start).toEqual("2018-06-30T00:00:00.000-05:00");
        });

        describe("when a time is specified", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "in 5 days at 5am"
            );
          });

          it("sets the .start property to n days in the future at the time specified", () => {
            expect(result[0].start).toEqual("2018-06-30T05:00:00.000-05:00");
          });
        });
      });

      describe("in n weeks", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-25T18:35-05:00",
            "America/Panama",
            "in 1 week"
          );
        });

        it("sets the .start property to n weeks in the future at 00:00", () => {
          expect(result[0].start).toEqual("2018-07-02T00:00:00.000-05:00");
        });

        describe("when a time is specified", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "in 1 week at 5am"
            );
          });

          it("sets the .start property to n weeks in the future at the time specified", () => {
            expect(result[0].start).toEqual("2018-07-02T05:00:00.000-05:00");
          });
        });
      });

      describe("in n years", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-25T18:35-05:00",
            "America/Panama",
            "in 1 year"
          );
        });

        it("sets the .start property to n years in the future at 00:00", () => {
          expect(result[0].start).toEqual("2019-06-25T00:00:00.000-05:00");
        });

        describe("when a time is specified", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "in 1 year at 5am"
            );
          });

          it("sets the .start property to n years in the future at the time specified", () => {
            expect(result[0].start).toEqual("2019-06-25T05:00:00.000-05:00");
          });
        });
      });
    });

    describe("using a specific date", () => {
      beforeEach(async () => {
        result = await runAt(
          "2018-06-25T18:35-05:00",
          "America/Panama",
          "2018-07-30"
        );
      });

      it("sets the .start property to the date provided at 00:00", () => {
        expect(result[0].start).toEqual("2018-07-30T00:00:00.000-05:00");
      });

      describe("when a time is specified", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-25T18:35-05:00",
            "America/Panama",
            "2018-07-30 at 10:30pm"
          );
        });

        it("sets the .start property to the date provided at the time specified", () => {
          expect(result[0].start).toEqual("2018-07-30T22:30:00.000-05:00");
        });
      });

      describe("when the date provided is invalid", () => {
        it("raises an error", done =>
          runAt("2018-06-25T18:35-05:00", "America/Panama", "2018-07-32")
            .then(() => {
              return done(new Error("Expected transform to throw an error."));
            })
            .catch(err => {
              if (err.message.includes("Invalid @start tag")) {
                return done();
              }
              return done(err);
            }));
      });

      describe("when the time provided is invalid", () => {
        it("raises an error", done =>
          runAt(
            "2018-06-25T18:35-05:00",
            "America/Panama",
            "2018-07-30 at 13pm"
          )
            .then(() => {
              return done(new Error("Expected transform to throw an error."));
            })
            .catch(err => {
              if (err.message.includes("Invalid @start tag")) {
                return done();
              }
              return done(err);
            }));
      });
    });

    describe('using month or year without specifying "in" or "next"', () => {
      it("raises an error", done =>
        runAt("2018-06-25T18:35-05:00", "America/Panama", "year")
          .then(() => {
            return done(new Error("Expected transform to throw an error."));
          })
          .catch(err => {
            if (err.message.includes("Invalid @start tag")) {
              return done();
            }
            return done(err);
          }));
    });
  });

  describe("stringify", () => {
    const time = "2019-01-01T00:00:00Z";
    const timezone = "America/Panama";
    const run = start =>
      runBlockTransform(stringify({ time, timezone }), [{ start }]);

    describe("when the start date has time 00:00", () => {
      it("replaces the Block's .start string with the standard .start value, without time", async () => {
        const result = await run("2019-01-09T00:00:00-05:00");
        expect(result[0].start).toBe("2019-01-09");
      });
    });

    describe("when the start date has a time with hours but no minutes", () => {
      it("replaces the Block's .start string with the start value, using short-hand time", async () => {
        const result = await run("2019-01-09T23:00-05:00");
        expect(result[0].start).toBe("2019-01-09 at 11pm");
      });
    });

    describe("when the start date has a time with hours and minutes", () => {
      it("replaces the Block's {{start}} placeholder with the start value, using full time", async () => {
        const result = await run("2019-01-09T23:20-05:00");
        expect(result[0].start).toBe("2019-01-09 at 11:20pm");
      });
    });
  });
});
