# "Repeat" Plugin

The repeat plugin allows you to re-schedule completed to-dos so they show up again in a future date.

It works by calculating a new `@start` value based on the `@repeat` tag's information.

## Installation

```
npm install --save @mdo-org/mdo-plugin-repeat
```

## Usage

```
const repeat = require('@mdo-org/mdo-plugin-repeat');

const time = "2019-04-01T00:00-05:00";
const timezone = "America/Panama";

mdoStream
  .pipe((repeat.parse({ time, timezone })));
  .pipe((repeat.process({ time, timezone })));
  .pipe((repeat.stringify({ time, timezone })));
```

## Overview

### parse

Converts the `.repeat` value from a string to an object with the following
fields: `string`, `n`, `period`, `type`.

The allowed formats are specified [here](./allowed_formats.md).

Example:

given the following block object:

```
{ repeat: "every 10 days from complete" }
```

after parse:

```
{
    repeat: {
      string: 'every 10 days from complete',
      n: 10,
      period: 'DAYS',
      type: 'COMPLETE', // another possible value is 'START'
    }
}
```

### process

For every Block that has both type `COMPLETE` and a `.repeat` property:

- set the Block's type to `INCOMPLETE`
- calculate the next `.start` value using these rules:

  ```
  if .repeat.type === "START":
    .start = .start + <n period>

  if .repeat.type === "COMPLETE":
    .start = <now> + <n period>`
  ```

### stringify

Converts the `.repeat` value from an object back into a string.

Example:

given the following block object:

```
{
    repeat: {
      string: 'every 10 days from complete',
      n: 10,
      period: 'DAYS',
      type: 'COMPLETE',
    }
}
```

after stringify:

```
{ repeat: 'every 10 days from complete' }
```
