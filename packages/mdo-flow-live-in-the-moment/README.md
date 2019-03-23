# "Live in the Moment" flow

"Live in the Moment" is based on the premise that to-dos can be split in two categories:

1. Actionable: to-dos that can currently be worked on
2. Unactionable: to-dos that will become actionable some time in the future

And it assumes you don't want to spend any time or mental energy dealing with unactionable to-dos.

## Workflow Overview

Whenever you write down a to-do, ask yourself:  
can I work on this task right now or is it blocked by some external factor?

If it is NOT actionable, ask yourself:  
when will it become actionable?

Then, assign it a corresponding @start date and forget about it.

Example:

You start by writing down some to-dos:

```
- [ ] review report XYZ
- [ ] Github #123
  See: github.com/my-project/issues/123
```

However, you notice the first to-do is not actionable, because the report XYZ won't be ready until tomorrow at 11am.

You assign it a start date:

```
- [ ] review report XYZ
  @start tomorrow at 11am
```

When you hit save, "Live in the Moment" rearranges your file as follows:

```
# To-Do
- [ ] Github #123
  See: github.com/my-project/issues/123

# Future
- [ ] review report XYZ
  @start 2019-02-23T11:00:00-05:00
```

Now you can focus on your actionable tasks (under the "To-Do" section) and forget about tasks in the "Future" section.

The next day at 11am, "Live in the Moment" will move the task out of the "Future" section and into an "Inbox" section at top of the file (so you don't miss it):

```
# Inbox
- [ ] review report XYZ

# To-Do
- [ ] Github #123
  See: github.com/my-project/issues/123
```

The core idea behind "Live in the Moment" is that once you offload future tasks to MDo, you can focus exclusively on tasks that are actionable in the present.
