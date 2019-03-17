# MDo Usage

When you run `MDo.transform()`, you get back one big transform stream.

```
readable stream --> Mdo.transform() --> writeable stream
```

Inside that big transform, however, a bunch of smaller transform streams run:

```
readable stream -->                Mdo.transform()                  --> writeable stream
                  |                                                 ^
                  V                                                 |
              MDo.parse                                       MDo.stringify
                  |                                                 ^
                  |                    hooks                        |
                  | +---------------------------------------------+ |
                  ->|  parse -> process -> reshuffle -> stringify |--
                    +---------------------------------------------+
```

- [MDo.parse](./parse.md): transforms a buffer stream into a [Block objects](./models/Block.md) stream.
- hooks:  
  Hooks are exposed so plugins can run transform operations on the stream:
  - `parse`: convert block attributes into machine-readable formats.
  - `process`: add or modify Block objects in the stream.
  - `reshuffle`: reorder or remove Block objects from the stream.
  - `stringify`: convert block attributes into human-readable formats.
- [MDo.stringify](./stringify.md): transforms a [Block objects](./models/Block.md) stream back into a buffer stream.

The `parse` and `stringify` transforms have no business logic, all they do is convert a Buffer stream into a Block objects stream, and back to a Buffer stream. The actual business logic lives inside [plugins](./plugins_overview.md).

## Transform options

You can modify how `MDo.transform()` behaves by passing along some options:

### Flow option

Use the `flow` option to control which plugins are used:

```
MDo.transform({ flow: 'gtd' })
```

Read more about MDo flows [here](./flows_overview.md).

### Time / Timezone options

Allows specifying a time and timezone to use for time-related operations.

It is important to understand time and timezone are different concepts. You can
read a great explanation here:  
https://github.com/moment/luxon/blob/master/docs/zones.md#terminology

- With the `time` option, you can hardcode the clock to always return the
  same time (number of milliseconds since epoch).
- With the `timezone` option, you are specifying the timezone to use when
  dealing with things like days, hours, etc.

Example:
If your to-do has a tag like `@start tomorrow`, it has to be converted to an ISO-8601 date. Depending on the `timezone` being used, this could mean different times:

| Timezone            | GMT offset | ISO-8601 date             |
| ------------------- | ---------- | ------------------------- |
| America/Los_Angeles | -08:00     | 2019-02-23T00:00:00-08:00 |
| America/New_York    | -05:00     | 2019-02-23T00:00:00-05:00 |

```
> dayStartOnLA = new Date('2019-02-23T00:00:00-08:00')
2019-02-23T08:00:00.000Z

> dayStartOnNY = new Date('2019-02-23T00:00:00-05:00')
2019-02-23T05:00:00.000Z

> dayStartOnLA.getTime() === dayStartOnNY.getTime()
false
```
