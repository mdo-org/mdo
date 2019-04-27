# Line Model

Line objects encapsulate a single line of text, and add some metadata to it.

Line objects are Plain Old Javascript Objects (POJOs), with these attributes:

- type
  There are 4 type of Lines:
  - `TITLE_COMPLETE`: a line that starts with `- [X]` or `- [x]`.
  - `TITLE_INCOMPLETE`: a line that starts with `- [ ]` or `- []`.
  - `COMMENT`: a line that starts with `#`.
  - `BODY`: a line that doesn't match any of the other types.
- text
  A string holding the actual text for the line. The first characters of the
  line are usually replaced with a placeholder.

## LineHelper

There is a LineHelper available that makes converting strings into Line objects
a bit easier.

Example:

```
const LineHelper = require('@mdo-org/mdo-core/dist/LineHelper');

LineHelper.fromString('- [x] buy dog food')
> { type: 'TITLE_COMPLETE', text: '{{type}} buy dog food' }
```

[> Customize MDo](/customize/)
