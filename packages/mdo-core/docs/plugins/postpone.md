# "Postpone" Plugin

The "postpone" plugin allows postponing to-dos until a future date, by using a `@postpone` tag.

## Implementation Details

### parse

Converts the `.postpone` value from human-readable format into ISO-8601.

The allowed formats are specified [here](./postpone_tag_formats.md).

Example:

```
// given the following block object
{ postpone: "until tomorrow" }

// after parse
{ postpone: "2019-01-04T00:00-05:00" }
```

### stringify

Converts the `.postpone` value from ISO-8601 into a human-readable format.

Example:

```
// given the following block object
{ postpone: "2019-01-04T11:00-05:00" }

// after stringify
{ postpone: until 2019-01-04 at 11am" }
```

Notes:

- dates are always formatted as `YYYY-MM-DD`
- times are formatted using am/pm
- I might consider making these settings configurable in the future.
