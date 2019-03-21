# "Postpone" Plugin

Allows postponing to-dos until a future date, by using a `@postpone` tag.

## Installation

```
npm install --save @mdo-org/mdo-plugin-postpone
```

## Usage

```
const postpone = require('@mdo-org/mdo-plugin-postpone');

const time = "2019-04-01T00:00-05:00";
const timezone = "America/Panama";

mdoStream
  .pipe((postpone.parse({ time, timezone })));
  .pipe((postpone.stringify({ time, timezone })));
```

## Overview

### parse

Converts the `.postpone` value from human-readable format into ISO-8601.

The allowed formats are specified [here](./allowed_formats.md).

Example:

given the following block object:

```
{ postpone: "until tomorrow" }
```

after parse():

```
{ postpone: "2019-01-04T00:00-05:00" }
```

### stringify

Converts the `.postpone` value from ISO-8601 into MDo's standard date format.

Example:

given the following block object:

```
{ postpone: "2019-01-04T11:00-05:00" }
```

after stringify:

```
{ postpone: until 2019-01-04 at 11am" }
```
