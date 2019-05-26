const liveInTheMoment = require("..");
const { runStringTransform } = require("@mdo-org/mdo-core/src/testHelpers");

describe("'Live in the Moment' flow", () => {
  let time;
  let timezone;
  let text;

  const run = async () => {
    text = await runStringTransform(liveInTheMoment({ time, timezone }), text);
    return text;
  };

  test("Daily task", async () => {
    // It's a beautiful Monday morning in Panama, and you decide to start your
    // MDo adventure...
    time = "2018-09-03T08:00-05:00";
    timezone = "America/Panama";

    // You start by adding the most straight forward task you do every day:
    // taking out the trash
    text = `
- [ ] take out trash
    @repeat every day from complete`;

    // When you save, you notice your file was normalized:
    // - A "To-Do" header was added, to let you know the task is actionable
    expect(await run()).toEqual(
      `
# To-Do
- [ ] take out trash
    @repeat every day from complete`.trim()
    );

    // You take out the trash, and mark your task as complete
    text = `
# To-Do
- [X] take out trash
    @repeat every day from complete`;

    // This time, the task was moved to a 'Future' section.
    // Also, a @start date was added. The @start date points to tomorrow.
    expect(await run()).toEqual(
      `
# To-Do

# Future
- [ ] take out trash
    @repeat every day from complete
    @start 2018-09-04`.trim()
    );

    // "This is nice!", you think, and you go on with your day.
    // Next day, you run MDo again.
    // You notice your task now made it into a new 'Inbox' section
    time = "2018-09-04T06:00-05:00";
    const result = await run();
    expect(result.trim()).toEqual(
      `
# Inbox
- [ ] take out trash
    @repeat every day from complete

# To-Do`.trim()
    );

    // "Not too shabby. Not too shabby..."
  });

  test("Postpone task", async () => {
    // It's that time of the month again: you need to pay your rent.
    time = "2018-09-01T08:00-05:00";
    timezone = "America/Panama";

    // You go to the bank, pay rent, and come back home.
    // You decide to write a task in MDo so you don't forget next month.
    text = `
- [X] pay rent
    @start today
    @repeat every month from start
    `.trim();

    // You run the ./cli, and as expected, the task is moved to the 'Future'
    // section
    expect(await run()).toEqual(
      `
# Future
- [ ] pay rent
    @start 2018-10-01
    @repeat every month from start
    `.trim()
    );

    // 1 month later...
    time = "2018-10-01T06:00-05:00";

    // You start your day as usual, checking your todos.

    // You notice it's time to pay rent again.
    expect(await run()).toEqual(
      `
# Inbox
- [ ] pay rent
    @start 2018-10-01
    @repeat every month from start
    `.trim()
    );

    // But, there's a problem: your bank is closed today. So you need to
    // postpone this task until tomorrow
    text = `
# Inbox
- [ ] pay rent
    @start 2018-10-01
    @repeat every month from start
    @postpone until tomorrow
    `.trim();
    expect(await run()).toEqual(
      `
# Future
- [ ] pay rent
    @start 2018-10-01
    @repeat every month from start
    @postpone until 2018-10-02
    `.trim()
    );

    // Later that day, you run the cli again. As expected, nothing is pending.
    time = "2018-10-01T15:00-05:00";
    expect(await run()).toEqual(
      `
# Future
- [ ] pay rent
    @start 2018-10-01
    @repeat every month from start
    @postpone until 2018-10-02
    `.trim()
    );

    // Next morning you check your tasks again, and you see the "pay rent" task
    // in your inbox
    time = "2018-10-02T06:00-05:00";
    expect(await run()).toEqual(
      `
# Inbox
- [ ] pay rent
    @start 2018-10-01
    @repeat every month from start
    `.trim()
    );

    // You go to the bank, pay your rent, and mark your task as complete -
    // clearing it from your inbox
    text = `
# Inbox
- [X] pay rent
    @start 2018-10-01
    @repeat every month from start
    `.trim();
    expect(await run()).toEqual(
      `
# Future
- [ ] pay rent
    @start 2018-11-01
    @repeat every month from start
    `.trim()
    );

    // Next month, MDo reminds you it's time to pay rent again
    time = "2018-11-01T08:00-05:00";
    expect(await run()).toEqual(
      `
# Inbox
- [ ] pay rent
    @start 2018-11-01
    @repeat every month from start
    `.trim()
    );

    // "This is good", you think. "Good and reliable MDo".
    // However, there's a voice in your head that says:
    // "Paying your rent should be a lot easier, you should look into this
    // online banking thing..."
  });

  test("Using comments and newlines", async () => {
    // Since MDo seems to be working reliably, you decide to start using it
    // for more than your personal stuff. You want to have a "Home" context,
    // and a "Work" context, using markdown headers and newlines to keep
    // everything organized.
    time = "2018-09-01T08:00-05:00";
    timezone = "America/Panama";
    text = `
# Work
These are tasks I can complete while at work
- [ ] Github Issue#345 (Weird characters showing up)
    https://github.com/mycompany/myproject/issues/345

    Started looking at this, seems to be a missing <meta charset> problem.
    * Remember to sync up with @francis on this.
- [X] Setup a meeting with John and Mary to go over front page redesign

## Project ACME
- [ ] Research between tool X and tool Y
    * list down pros and cons to make a decision with the team
- [ ] Break down initial work into smaller tickets
    @start tomorrow

# Home
These are tasks I can complete while at home.
- [ ] Fix bath lightbulb
- [ ] Take out trash
    @repeat every day from complete @start 2018-09-01 at 8pm
    `.trim();

    // After marking some stuff as complete and running the cli, you're happy
    // to see MDo moved tickets to the 'Future' section, but respected the
    // comments and newlines you had written
    expect(await run()).toEqual(
      `
# Work
These are tasks I can complete while at work
- [ ] Github Issue#345 (Weird characters showing up)
    https://github.com/mycompany/myproject/issues/345

    Started looking at this, seems to be a missing <meta charset> problem.
    * Remember to sync up with @francis on this.

## Project ACME
- [ ] Research between tool X and tool Y
    * list down pros and cons to make a decision with the team

# Home
These are tasks I can complete while at home.
- [ ] Fix bath lightbulb

# Future
- [ ] Take out trash
    @repeat every day from complete @start 2018-09-01 at 8pm
- [ ] Break down initial work into smaller tickets
    @start 2018-09-02
    `.trim()
    );

    // That night you run the cli again, and you're happy to see MDo moved a
    // ticket to the 'Inbox' section without affecting the rest of your file.
    time = "2018-09-01T21:00-05:00";
    expect(await run()).toEqual(
      `
# Inbox
- [ ] Take out trash
    @repeat every day from complete @start 2018-09-01 at 8pm

# Work
These are tasks I can complete while at work
- [ ] Github Issue#345 (Weird characters showing up)
    https://github.com/mycompany/myproject/issues/345

    Started looking at this, seems to be a missing <meta charset> problem.
    * Remember to sync up with @francis on this.

## Project ACME
- [ ] Research between tool X and tool Y
    * list down pros and cons to make a decision with the team

# Home
These are tasks I can complete while at home.
- [ ] Fix bath lightbulb

# Future
- [ ] Break down initial work into smaller tickets
    @start 2018-09-02
    `.trim()
    );
  });
});
