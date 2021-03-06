# "Remove Complete" Plugin

Removes to-dos marked as complete from the stream.

## Installation

```
npm install --save @mdo-org/mdo-plugin-remove-complete
```

## Usage

```
const removeComplete = require('@mdo-org/mdo-plugin-remove-complete');
mdoStream.pipe(removeComplete());
```

## Overview

Removes any to-do with `type === "COMPLETE_TASK"` from the stream.

Eg:

given a stream that emits the following blocks

```
{ type: "INCOMPLETE_TASK", text: "{{type}} I will surviveee" }
{ type: "COMPLETE_TASK", text: "{{type}} Goodbyeee Moonmen" }
```

after removeComplete(), the stream will only emit

```
{ type: "INCOMPLETE_TASK", text: "{{type}} I will surviveee" }
```
