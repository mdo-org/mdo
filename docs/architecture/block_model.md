# Block Model

Block objects represent logical units inside an MDo file.

MDo files are parsed into blocks:

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

Block objects are Plain Old Javascript Objects (POJOs), with these attributes:

- type  
  There are 4 types of Blocks:
  - `COMPLETE_TASK`: a to-do that has been completed
  - `INCOMPLETE_TASK`: a to-do that has not been completed
  - `COMMENT`: text that does not belong to any task. Usually starts with a `#`.
  - `PADDING`: empty lines
- text  
  Contains the text for the block. Placeholders are commonly used in the text.  
   eg: `{{type}} Take out the trash`.

Note: plugins might add additional fields to Block objects.

## BlockHelper

There is a BlockHelper available that makes dealing with block objects a bit
easier.

Examples:

```
const BlockHelper = require('@mdo-org/mdo-core/dist/BlockHelper');
const { INCOMPLETE_TASK } = BlockHelper.TYPES;

const block = { type: INCOMPLETE_TASK, text: '{{type}} Take out the trash\n\n' };

BlockHelper.isComplete(block);
> false

BlockHelper.toString(block);
> "- [ ] Take out the trash\n\n";

BlockHelper.splitByPadding(block);
> [
  { type: 'INCOMPLETE_TASK', text: '{{type}} Take out the trash' },
  { type: 'PADDING', text: '\n\n' } ]
]
```

[> The Line model](/architecture/line_model.md)
