# parse()

Parse is a transform stream that converts a buffer into a Block objects stream.

## Usage

Given the following document:

```
Hello MDo.

# Work
- [ ] Spreadsheet all the things
  @start tomorrow

# Home
Tasks I plan to work on when I'm done with work.

- [X] Take out trash
- [ ] Fix the basement light
  Not sure what's going on.

  Faulty light bulb?
```

You can parse it like this:

```
const fs = require('fs');
const MDo = require('@mdo-org/mdo-core');

const objectStream = fs.createReadStream('./myfile.md').pipe(MDo.parse());
```

And you'll receive a stream that will emit the following Block objects:

```
{ type: 'COMMENT', text: 'Hello MDo.' },
{ type: 'PADDING', text: '\n' },
{ type: 'COMMENT', text: '{{type}} Work' },
{ type: 'INCOMPLETE_TASK', text: '{{type}} Spreadsheet all the things\n  {{start}}', start: 'tomorrow' },
{ type: 'PADDING', text: '\n' },
{ type: 'COMMENT', text: '{{type}} Home\nTasks I plan to work on when I\'m done with work.' },
{ type: 'PADDING', text: '\n' },
{ type: 'COMPLETE_TASK', text: '{{type}} Take out trash' },
{ type: 'INCOMPLETE_TASK', text: '{{type}} Fix the basement light\n  Not sure what\'s going on.\n\n  Faulty light bulb?' }
```

Whenever parse finds a "tag" (ie: a string starting with @foo):

- the tag is replaced with a placeholder
- the value is appended to the block object

Example: "hello world @start today" -> `{ text: "hello world {{start}}", start: "today" }`

[> stringify](/architecture/stringify.md)
