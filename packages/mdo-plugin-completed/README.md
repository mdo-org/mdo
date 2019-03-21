# "Completed" Plugin

Adds a @completed timestamp to completed to-dos.

## Installation

```
npm install --save @mdo-org/mdo-plugin-completed
```

## Usage

```
const completed = require('@mdo-org/mdo-plugin-completed');

const time = "2019-04-01T00:00-05:00";
const timezone = "America/Panama";

mdoStream
  .pipe(completed.process({ time, timezone }))
  .pipe(completed.format({ time, timezone }))
```

## Overview

Adds a `.completed` timestamp to any completed to-do.

- the `completed.process()` stream adds the timestamp in ISO-8601 format.
- the `completed.format()` converts the ISO-8601 timestamp into MDo's standard date format.

Eg:

given a stream that emits the following blocks

```
{ type: "INCOMPLETE_TASK", text: "{{type}} hello" }
{ type: "COMPLETE_TASK", text: "{{type}} world" }
```

after completed.process(), the stream will emit

```
{ type: "INCOMPLETE_TASK", text: "{{type}} hello" }
{ type: "COMPLETE_TASK", text: "{{type}} world", completed: '2019-01-20-17:34:00-05:00' }
```

after completed.format(), the stream will emit

```
{ type: "INCOMPLETE_TASK", text: "{{type}} hello" }
{ type: "COMPLETE_TASK", text: "{{type}} world", completed: '2019-01-20 at 5:34pm' }
```
