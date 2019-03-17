# MDo

MDo is a free, open source to-do app built to live inside your editor. It has
support for:

- multiline tasks
- future tasks (including start times)
- recurring tasks
- markdown headers

And not much else. MDo's goal is to be as simple and intuitive as possible
while helping you organize your tasks.

## Table of Contents

1. [Principles](#principles)
2. [How does it work](#how-does-it-work)
3. [Future and recurring tasks](#future-and-recurring-tasks)

## Principles

- Plain text is the most portable format, so your todo system should use plain
  text over a proprietary format.
- Tasks usually contain a title and body, so your todo system should allow
  multiline tasks.
- You should be able to hide tasks you can't work on, until you can. Your todo
  system should help you with future tasks and task recursion.
- Priority is implicit in a text file (tasks at the top are higher priority),
  so there is no need for your todo system to manage priorities for you.
- Context can be easily added through markdown headers, so there is no need for
  your todo system to manage context for you. It should merely respect
  headers.

## How does it work

- You have a single file with all your tasks.
- The file is parsed into blocks:

  - Any line that starts with `- [ ]` marks the start of an incomplete task
    block.
  - Any line that starts with `- [x]` marks the start of a complete task
    block.
  - Any line that starts with `#` marks the start of a comment block.

    Example:

    ```
    # Home                                            | << Start of comment block
    This content is considered part of the comment    |
    block. Use it to keep any information you'd like  |
    hanging around.                                   | >> End of comment block
                                                      | <> Padding block
    - [ ] Task title                                  | << Start of incomplete task
      Any content below the task title is considered  |
      the body of the task.                           |
                                                      |
      Feel free to use newlines, indentations, or any |
      other format you prefer here.                   | >> End of incomplete task
    - [x] Some other task                             | << Start of complete task
      This task is considered complete.               | >> End of complete task
                                                      | <> Padding block
    # Work                                            | <> One-line comment block
    - [ ] Do something                                | <> One-line task
    ```

## Future and recurring tasks

MDo supports adding metadata to your tasks by using tags.
The following tags are supported:

- `@start`: date/time when the task should start showing up in your actionable section.
- `@repeat`: indicates how often the task should repeat.
- `@postpone`: postpone lets you hide a task until a future time, without
  modifying the @start value.  
   This is useful for those tasks that recur based on start date, but for some
  reason you can't work on at this moment.

Examples:

```
- [ ] Pay rent
    @start 2018-09-01
    @repeat every month from start
- [ ] Take out trash
    @start today at 8pm
    @repeat every day from complete
    @postpone until Monday
```

## Development Info

### Getting Started

- Install node.js (v8.14.0 preferred)
- Install [lerna](https://github.com/lerna/lerna): `npm install -g lerna`
- Run `lerna bootsrap` to install all dependencies
- Run `lerna run build` to build all packages
- Run `lerna run test` to test all packages
