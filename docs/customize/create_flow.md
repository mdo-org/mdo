# Create a New Flow

A "flow" is a function that receives a single `options` parameter, and returns a [Transform stream](https://nodejs.org/api/stream.html#stream_types_of_streams).

```
myFlow({ time: '2019-04-23T03:00:00.000Z', timezone: 'America/Panama' })
>> <Transform stream>
```

The transform stream is expected to receive a raw MDo file, and output the processed file.

## Using Plugins to create a flow

The easiest way to create a new flow is by combining a bunch of existing plugins into a single transform stream. For example, the [Live in the Moment](https://github.com/mdo-org/mdo/tree/master/packages/mdo-flow-live-in-the-moment) flow is defined as:

```
const pumpify = require("pumpify");
const MDo = require("@mdo-org/mdo-core");

const start = require("@mdo-org/mdo-plugin-start");
const postpone = require("@mdo-org/mdo-plugin-postpone");
const repeat = require("@mdo-org/mdo-plugin-repeat");
const removeComplete = require("@mdo-org/mdo-plugin-remove-complete");
const cleanupActionableDates = require("@mdo-org/mdo-plugin-cleanup-actionable-dates");
const sections = require("@mdo-org/mdo-plugin-sections");

const liveInTheMoment = ({ time, timezone }) =>
  pumpify(
    [
      // parse
      MDo.parse,
      start.parse,
      postpone.parse,
      repeat.parse,
      sections.parse,

      // process
      repeat.process,
      removeComplete,
      cleanupActionableDates,
      sections.process,
      sections.sort,

      // stringify
      repeat.stringify,
      postpone.stringify,
      start.stringify,
      sections.stringify,
      MDo.stringify
    ].map(func => func({ time, timezone }))
  );

module.exports = liveInTheMoment;
```

If none of the existing plugins match your needs, you can always [create a new plugin](/customize/create_plugin.md).

## The options object

The `options` object has the following attributes:

- `time`: a string with an [ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html) date representing the current time.
- `timezone`: a string with an [IANA timezone](https://www.iana.org/time-zones) representing the user's time zone.

Most plugins expect to be instantiated with these two values.

[> Create a new plugin](/customize/create_plugin.md)
