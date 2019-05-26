const celebrateVictories = require("..");
const { runStringTransform } = require("@mdo-org/mdo-core/src/testHelpers");

describe("'Celebrate Victories' flow", () => {
  let time;
  let timezone;
  let text;

  const run = async () => {
    text = await runStringTransform(
      celebrateVictories({ time, timezone }),
      text
    );
    return text;
  };

  test("Completed task", async () => {
    time = "2018-09-03T08:00-05:00";
    timezone = "America/Panama";

    // You just completed your first to-do
    text = `
# To-Do
- [X] JIRA-123
- [ ] JIRA-456

# Future
- [ ] Run a prod deployment
    @start 2019-03-01`;

    // When you save, you notice your file was normalized:
    // The completed to-do was moved to a "Done" section
    expect(await run()).toEqual(
      `
# To-Do
- [ ] JIRA-456

# Future
- [ ] Run a prod deployment
    @start 2019-03-01

# Done
- [X] JIRA-123
    @completed 2018-09-03 at 8am`.trim()
    );
  });
});
