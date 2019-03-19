# "Cleanup Actionable Dates" Plugin

Removes .start and .postpone dates that are no longer useful.

## Installation

```
npm install --save @mdo-org/mdo-plugin-cleanup-actionable-dates
```

## Usage

```
const fs = require('fs');
const MDo = require('@mdo-org/mdo-core');
const start = require('@mdo-org/mdo-start');
const cleanupActionableDates = require('@mdo-org/mdo-plugin-cleanup-actionable-dates');

const time = "2019-04-01T00:00-05:00";

fs.createReadStream('./todo.md')
  .pipe(MDo.parse())
  .pipe(start.parse())
  .pipe(cleanupActionableDates({ time  }))
  .pipe(start.stringify())
  .pipe(MDo.stringify())
  .pipe(process.stdout);
```

- Removes any .postpone date in the past
- Removes any .start date in the past (unless the block has a .repeat from start)
