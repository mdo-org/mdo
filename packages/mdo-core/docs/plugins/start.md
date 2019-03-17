# "Start" Plugin

The "start" plugin allows setting a start date on to-dos, by using a `@start` tag.

## Implementation Details

### parse

Converts the `.start` value from human-readable format into ISO-8601.

The allowed formats are specified [here](./start_tag_formats.md).

Example:

```
// given the following block object
{ start: "tomorrow" }

// after parse
{ start: "2019-01-04T00:00-05:00" }
```

### stringify

Converts the `.start` value from ISO-8601 into a human-readable format.

Example:

```
// given the following block object
{ start: "2019-01-04T17:00-05:00" }

// after stringify
{ start: "2019-01-04 at 5pm" }
```

Notes:

- dates are always formatted as `YYYY-MM-DD`
- times are formatted using am/pm
- I might consider making these settings configurable in the future.
