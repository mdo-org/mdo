# "Remove Complete" Plugin

Removes to-dos marked as complete from the stream.

## Implementation Details

### reshuffle

Remove any to-do with `type === "COMPLETE_TASK"` from the stream.

Eg:

```
// given a stream that emits the following blocks
{ type: "INCOMPLETE_TASK", text: "{{type}} I will surviveee" }
{ type: "COMPLETE_TASK", text: "{{type}} Goodbyeee Moonmen" }

// after reshuffle, the stream will only emit
{ type: "INCOMPLETE_TASK", text: "{{type}} I will surviveee" }
```
