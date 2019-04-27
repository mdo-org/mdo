# MDo Architecture

MDo works as a big [Transform stream](https://nodejs.org/api/stream.html#stream_types_of_streams) made up from a bunch of smaller transform streams:

```
# at a high-level it looks like this
readable stream -> mdo -> writable stream

# but really, this is what's going on
readable stream -> parse -> pluginA -> ... -> pluginZ -> stringify -> writable stream
```

## Parse and Stringify

The [parse](/architecture/parse.md) and [stringify](/architecture/stringify.md) transforms have no business logic, all they do is convert a Buffer stream into a [Block](/architecture/block_model.md) stream, and back to a Buffer stream. The actual business logic lives inside plugins.

## Plugins

Plugins work as transform streams, and contain all business logic for MDo.

They receive Block objects and manipulate them however they need (add fields, remove fields, modify text, etc). Once they're done, they pass the Block object back into the stream so the next plugin can work with it.

## Flows

In order to support different workflows, MDo uses "flows".

A flow is basically a list of plugins, configured to run in a certain order.

By default, MDo uses the [Live in the Moment](https://github.com/mdo-org/mdo/tree/master/packages/mdo-flow-live-in-the-moment) flow. But you can configure MDo to [use a different flow](/customize/use_flow.md), or even [create your own flow](/customize/create_flow.md).

[> parse](/architecture/parse.md)
