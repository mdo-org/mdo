const { parse, stringify } = require("..");
const { runBlockTransform } = require("@mdo-org/mdo-core/lib/testHelpers");

describe("mdo-plugin-postpone", () => {
  describe("parse", () => {
    const runAt = (time, timezone, postpone) =>
      runBlockTransform(parse({ time, timezone }), [{ postpone }]);

    let result;

    beforeEach(() => {
      result = [];
    });

    describe("blocks with a @postpone tag in their .text", () => {
      describe("using until a time", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-25T18:35-05",
            "America/Panama",
            "until 9pm"
          );
        });

        it("sets the .postpone property to today at the time specified", () => {
          expect(result[0].postpone).toEqual("2018-06-25T21:00:00.000-05:00");
        });
      });

      describe('using "until today"', () => {
        describe("with no time specified", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35",
              "America/Panama",
              "until today"
            );
          });

          it("sets the .postpone property to today at 00:00", () => {
            expect(result[0].postpone).toEqual("2018-06-25T00:00:00.000-05:00");
          });
        });

        describe("with a time specified", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "until today at 15:30"
            );
          });

          it("sets the .postpone property to today at the specified time", () => {
            expect(result[0].postpone).toEqual("2018-06-25T15:30:00.000-05:00");
          });
        });

        describe("with a typo", () => {
          it("throws an error", done =>
            runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "until troday at 8:30pm"
            )
              .then(() => {
                return done(new Error("Expected transform to throw an error."));
              })
              .catch(err => {
                if (
                  err.message.includes(
                    "Invalid @postpone tag: until troday at 8:30pm"
                  )
                ) {
                  return done();
                }
                return done(err);
              }));
        });
      });

      describe('using "until tomorrow"', () => {
        describe("with no time specified", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35",
              "America/Panama",
              "until tomorrow"
            );
          });

          it("sets the .postpone property to tomorrow at 00:00", () => {
            expect(result[0].postpone).toEqual("2018-06-26T00:00:00.000-05:00");
          });
        });

        describe("with a time specified", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "until tomorrow at 8:30pm"
            );
          });

          it("sets the .postpone property to tomorrow at the specified time", () => {
            expect(result[0].postpone).toEqual("2018-06-26T20:30:00.000-05:00");
          });
        });

        describe("with a typo", () => {
          it("throws an error", done =>
            runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "until tomorrows at 8:30pm"
            )
              .then(() => {
                return done(new Error("Expected transform to throw an error."));
              })
              .catch(err => {
                if (
                  err.message.includes(
                    "Invalid @postpone tag: until tomorrows at 8:30pm"
                  )
                ) {
                  return done();
                }
                return done(err);
              }));
        });
      });

      describe("using until a week day", () => {
        describe("with the same week day as today", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "until Monday"
            );
          });

          it("sets the .postpone property to next weekday occurrence at 00:00", () => {
            expect(result[0].postpone).toEqual("2018-07-02T00:00:00.000-05:00");
          });

          describe("when a time is specified", () => {
            beforeEach(async () => {
              result = await runAt(
                "2018-06-25T18:35-05:00",
                "America/Panama",
                "until Monday at 10:30pm"
              );
            });

            it("sets the .postpone property to next weekday occurrence at the time specified", () => {
              expect(result[0].postpone).toEqual(
                "2018-07-02T22:30:00.000-05:00"
              );
            });
          });
        });

        describe("for a week day later than today", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "until Tuesday"
            );
          });

          it("sets the .postpone property to next weekday occurrence at 00:00", () => {
            expect(result[0].postpone).toEqual("2018-06-26T00:00:00.000-05:00");
          });

          describe("when a time is specified", () => {
            beforeEach(async () => {
              result = await runAt(
                "2018-06-25T18:35-05:00",
                "America/Panama",
                "until Tuesday at 6pm"
              );
            });

            it("sets the .postpone property to next weekday occurrence at the time specified", () => {
              expect(result[0].postpone).toEqual(
                "2018-06-26T18:00:00.000-05:00"
              );
            });
          });
        });

        describe("for a week day earlier than today", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-27T18:35-05:00",
              "America/Panama",
              "until Monday"
            );
          });

          it("sets the .postpone property to next weekday occurrence at 00:00", () => {
            expect(result[0].postpone).toEqual("2018-07-02T00:00:00.000-05:00");
          });

          describe("when a time is specified", () => {
            beforeEach(async () => {
              result = await runAt(
                "2018-06-27T18:35-05:00",
                "America/Panama",
                "until Monday at 1pm"
              );
            });

            it("sets the .postpone property to next weekday occurrence at the time specified", () => {
              expect(result[0].postpone).toEqual(
                "2018-07-02T13:00:00.000-05:00"
              );
            });
          });
        });
      });

      describe('using "until next"', () => {
        describe("with the same week day as today", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "until next Monday"
            );
          });

          it("sets the .postpone property to next weekday occurrence at 00:00", () => {
            expect(result[0].postpone).toEqual("2018-07-02T00:00:00.000-05:00");
          });

          describe("when a time is specified", () => {
            beforeEach(async () => {
              result = await runAt(
                "2018-06-25T18:35-05:00",
                "America/Panama",
                "until next Monday at 10:30pm"
              );
            });

            it("sets the .postpone property to next weekday occurrence at the time specified", () => {
              expect(result[0].postpone).toEqual(
                "2018-07-02T22:30:00.000-05:00"
              );
            });
          });
        });

        describe("for a week day later than today", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "until next Tuesday"
            );
          });

          it("sets the .postpone property to next weekday occurrence at 00:00", () => {
            expect(result[0].postpone).toEqual("2018-06-26T00:00:00.000-05:00");
          });

          describe("when a time is specified", () => {
            beforeEach(async () => {
              result = await runAt(
                "2018-06-25T18:35-05:00",
                "America/Panama",
                "until next Tuesday at 6pm"
              );
            });

            it("sets the .postpone property to next weekday occurrence at the time specified", () => {
              expect(result[0].postpone).toEqual(
                "2018-06-26T18:00:00.000-05:00"
              );
            });
          });
        });

        describe("for a week day earlier than today", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-27T18:35-05:00",
              "America/Panama",
              "until next Monday"
            );
          });

          it("sets the .postpone property to next weekday occurrence at 00:00", () => {
            expect(result[0].postpone).toEqual("2018-07-02T00:00:00.000-05:00");
          });

          describe("when a time is specified", () => {
            beforeEach(async () => {
              result = await runAt(
                "2018-06-27T18:35-05:00",
                "America/Panama",
                "until next Monday at 1pm"
              );
            });

            it("sets the .postpone property to next weekday occurrence at the time specified", () => {
              expect(result[0].postpone).toEqual(
                "2018-07-02T13:00:00.000-05:00"
              );
            });
          });
        });

        describe("next week", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-27T18:35-05:00",
              "America/Panama",
              "until next week"
            );
          });

          it("sets the .postpone property to next week on the same day at 00:00", () => {
            expect(result[0].postpone).toEqual("2018-07-04T00:00:00.000-05:00");
          });

          describe("when a time is specified", () => {
            beforeEach(async () => {
              result = await runAt(
                "2018-06-27T18:35-05:00",
                "America/Panama",
                "until next week at 1pm"
              );
            });

            it("sets the .postpone property to next week on the same day at the time specified", () => {
              expect(result[0].postpone).toEqual(
                "2018-07-04T13:00:00.000-05:00"
              );
            });
          });
        });

        describe("next month", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-27T18:35-05:00",
              "America/Panama",
              "until next month"
            );
          });

          it("sets the .postpone property to next month on the same day at 00:00", () => {
            expect(result[0].postpone).toEqual("2018-07-27T00:00:00.000-05:00");
          });

          describe("when a time is specified", () => {
            beforeEach(async () => {
              result = await runAt(
                "2018-06-27T18:35-05:00",
                "America/Panama",
                "until next month at 1pm"
              );
            });

            it("sets the .postpone property to next month on the same day at the time specified", () => {
              expect(result[0].postpone).toEqual(
                "2018-07-27T13:00:00.000-05:00"
              );
            });
          });
        });

        describe("next year", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-27T18:35-05:00",
              "America/Panama",
              "until next year"
            );
          });

          it("sets the .postpone property to next year on the same day at 00:00", () => {
            expect(result[0].postpone).toEqual("2019-06-27T00:00:00.000-05:00");
          });

          describe("when a time is specified", () => {
            beforeEach(async () => {
              result = await runAt(
                "2018-06-27T18:35-05:00",
                "America/Panama",
                "until next year at 1pm"
              );
            });

            it("sets the .postpone property to next year on the same day at the time specified", () => {
              expect(result[0].postpone).toEqual(
                "2019-06-27T13:00:00.000-05:00"
              );
            });
          });
        });
      });

      describe("using <n> <period>", () => {
        describe("n minutes", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "15 minutes"
            );
          });

          it("sets the .postpone property to n minutes in the future", () => {
            expect(result[0].postpone).toEqual("2018-06-25T18:50:00.000-05:00");
          });

          describe("when a time is specified", () => {
            it("throws an error", done =>
              runAt(
                "2018-06-25T18:35-05:00",
                "America/Panama",
                "15 minutes at 10:30pm"
              )
                .then(() => {
                  return done(
                    new Error("Expected transform to throw an error.")
                  );
                })
                .catch(err => {
                  if (
                    err.message.includes(
                      'Cannot specify a time with "postpone <n> minutes"'
                    )
                  ) {
                    return done();
                  }
                  return done(err);
                }));
          });
        });

        describe("n hours", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "2 hours"
            );
          });

          it("sets the .postpone property to n hours in the future", () => {
            expect(result[0].postpone).toEqual("2018-06-25T20:35:00.000-05:00");
          });

          describe("when a time is specified", () => {
            it("throws an error", done =>
              runAt(
                "2018-06-25T18:35-05:00",
                "America/Panama",
                "2 hours at 10:30pm"
              )
                .then(() => {
                  return done(
                    new Error("Expected transform to throw an error.")
                  );
                })
                .catch(err => {
                  if (
                    err.message.includes(
                      'Cannot specify a time with "postpone <n> hours"'
                    )
                  ) {
                    return done();
                  }
                  return done(err);
                }));
          });
        });

        describe("n days", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "5 days"
            );
          });

          it("sets the .postpone property to n days in the future at 00:00", () => {
            expect(result[0].postpone).toEqual("2018-06-30T00:00:00.000-05:00");
          });

          describe("when a time is specified", () => {
            beforeEach(async () => {
              result = await runAt(
                "2018-06-25T18:35-05:00",
                "America/Panama",
                "5 days at 5am"
              );
            });

            it("sets the .postpone property to n days in the future at the time specified", () => {
              expect(result[0].postpone).toEqual(
                "2018-06-30T05:00:00.000-05:00"
              );
            });
          });
        });

        describe("n weeks", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "1 week"
            );
          });

          it("sets the .postpone property to n weeks in the future at 00:00", () => {
            expect(result[0].postpone).toEqual("2018-07-02T00:00:00.000-05:00");
          });

          describe("when a time is specified", () => {
            beforeEach(async () => {
              result = await runAt(
                "2018-06-25T18:35-05:00",
                "America/Panama",
                "1 week at 5am"
              );
            });

            it("sets the .postpone property to n weeks in the future at the time specified", () => {
              expect(result[0].postpone).toEqual(
                "2018-07-02T05:00:00.000-05:00"
              );
            });
          });
        });

        describe("n years", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "1 year"
            );
          });

          it("sets the .postpone property to n years in the future at 00:00", () => {
            expect(result[0].postpone).toEqual("2019-06-25T00:00:00.000-05:00");
          });

          describe("when a time is specified", () => {
            beforeEach(async () => {
              result = await runAt(
                "2018-06-25T18:35-05:00",
                "America/Panama",
                "1 year at 5am"
              );
            });

            it("sets the .postpone property to n years in the future at the time specified", () => {
              expect(result[0].postpone).toEqual(
                "2019-06-25T05:00:00.000-05:00"
              );
            });
          });
        });
      });

      describe("using a specific date", () => {
        beforeEach(async () => {
          result = await runAt(
            "2018-06-25T18:35-05:00",
            "America/Panama",
            "until 2018-07-30"
          );
        });

        it("sets the .postpone property to the date provided at 00:00", () => {
          expect(result[0].postpone).toEqual("2018-07-30T00:00:00.000-05:00");
        });

        describe("when a time is specified", () => {
          beforeEach(async () => {
            result = await runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "until 2018-07-30 at 10:30pm"
            );
          });

          it("sets the .postpone property to the date provided at the time specified", () => {
            expect(result[0].postpone).toEqual("2018-07-30T22:30:00.000-05:00");
          });
        });

        describe("when the date provided is invalid", () => {
          it("throws an error", done =>
            runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "until 2018-07-32"
            )
              .then(() => {
                return done(new Error("Expected transform to throw an error."));
              })
              .catch(() => done()));
        });

        describe("when the time provided is invalid", () => {
          it("throws an error", done =>
            runAt(
              "2018-06-25T18:35-05:00",
              "America/Panama",
              "until 2018-07-30 at 13pm"
            )
              .then(() => {
                return done(new Error("Expected transform to throw an error."));
              })
              .catch(() => done()));
        });
      });

      describe('using month or year without specifying "next"', () => {
        it("throws an error", done =>
          runAt("2018-06-25T18:35-05:00", "America/Panama", "until year")
            .then(() => {
              return done(new Error("Expected transform to throw an error."));
            })
            .catch(() => done()));
      });
    });
  });

  describe("stringify", () => {
    const time = "2019-01-01T00:00:00Z";
    const timezone = "America/Panama";

    const run = postpone =>
      runBlockTransform(stringify({ time, timezone }), [{ postpone }]);

    describe("when the postpone date has time 00:00", () => {
      it("replaces the Block's {{postpone}} placeholder with the postpone value, without time", async () => {
        const result = await run("2019-01-09T00:00:00-05:00");
        expect(result[0].postpone).toBe("until 2019-01-09");
      });
    });

    describe("when the postpone date has a time with hours but no minutes", () => {
      it("replaces the Block's {{postpone}} placeholder with the postpone value, using short-hand time", async () => {
        const result = await run("2019-01-09T23:00-05:00");
        expect(result[0].postpone).toBe("until 2019-01-09 at 11pm");
      });
    });

    describe("when the postpone date has a time with hours and minutes", () => {
      it("replaces the Block's {{postpone}} placeholder with the postpone value, using full time", async () => {
        const result = await run("2019-01-09T23:20-05:00");
        expect(result[0].postpone).toBe("until 2019-01-09 at 11:20pm");
      });
    });
  });
});
