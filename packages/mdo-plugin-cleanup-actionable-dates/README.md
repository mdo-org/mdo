# "Cleanup Actionable Dates" Plugin

Removes .start and .postpone dates that are no longer useful.

## Installation

```
npm install --save @mdo-org/mdo-plugin-cleanup-actionable-dates
```

## Usage

```
const cleanupActionableDates = require('@mdo-org/mdo-plugin-cleanup-actionable-dates');

mdoStream.pipe(cleanupActionableDates({
  time: "2019-04-01T00:00-05:00"
}))
```

## Overview

- Removes any .postpone date in the past
- Removes any .start date in the past (unless the block has a .repeat from start)
