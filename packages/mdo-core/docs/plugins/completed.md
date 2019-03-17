# "Completed" Plugin

Adds a @completed timestamp to completed to-dos.

## Implementation Details

### parse

Add a `.completed` timestamp to any completed to-do.

Eg:

```
// given a stream that emits the following blocks
{ type: "INCOMPLETE_TASK", text: "{{type}} hello" }
{ type: "COMPLETE_TASK", text: "{{type}} world" }

// after parse, the stream will emit
{ type: "INCOMPLETE_TASK", text: "{{type}} hello" }
{ type: "COMPLETE_TASK", text: "{{type}} world", completed: '2019-01-20 at 5:34pm' }
```
