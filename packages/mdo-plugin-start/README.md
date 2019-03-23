# "Start" Plugin

The "start" plugin allows setting a start date on to-dos, by using a `@start` tag.

## Installation

```
npm install --save @mdo-org/mdo-plugin-start
```

## Usage

```
const start = require('@mdo-org/mdo-plugin-start');

const time = "2019-04-01T00:00-05:00";
const timezone = "America/Panama";

mdoStream
  .pipe((start.parse({ time, timezone })))
  .pipe((start.stringify({ time, timezone })));
```

## Overview

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

Converts the `.start` value from ISO-8601 into MDo's standard date format.

Example:

```
// given the following block object
{ start: "2019-01-04T17:00-05:00" }

// after stringify
{ start: "2019-01-04 at 5pm" }
```
