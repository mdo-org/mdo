# "Celebrate Victories" flow

"Celebrate Victories" is based on [Live in the Moment](./liveInTheMoment.md), with one small change:
Instead of removing completed tasks from the file, keep them in a "Done" section.

For example, let's say you have the following MDo file, and you just completed the first to-do:

```
# To-Do
- [X] JIRA-123
- [ ] JIRA-456

# Future
- [ ] Run a prod deployment
  @start 2019-03-01
```

When you hit save, "Celebrate Victories" will rearrange your file as follows:

```
# To-Do
- [ ] JIRA-456

# Future
- [ ] Run a prod deployment
  @start 2019-03-01

# Done
- [X] JIRA-123
  @completed 2019-02-28T13:24:00Z
```

The core idea behind "Celebrate Victories" is that you live in the moment, but every now and then take the time to cherish all that you've accomplished.
