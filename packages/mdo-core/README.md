# mdo-core

mdo-core is meant to be used by MDo clients.

If you are trying to use MDo to manage your to-dos, you probably want to look at
[mdo-cli](https://github.com/alexishevia/mdo).

## Overview

mdo-core contains logic for parsing and processing MDo files.

An MDo file is a markdown file with to-dos and notes. mdo-core helps with stuff like:

- Parsing tags (`@start`, `@repeat`, etc)
- Converting human readable dates into ISO-8601 (`tomorrow` -> `2019-01-04T05:00:00.000Z`)
- Calculating new start dates for recurring tasks
- Removing completed tasks
- etc

## Usage

mdo-core exposes a `transform()` function, which returns a transform stream.

```
const fs = require('fs');
const MDo = require('@mdo-org/mdo-core');

// run a file's contents through the MDo Transform stream
fs.createReadStream('./todo.md')
  .pipe(MDo.transform())
  .pipe(process.stdout);
```

You can read more details in the [usage docs](./docs/usage.md).
