# Plugins Overview

Plugins contain all the business logic for MDo.

In order to support different workflows, MDo allows users to specify which plugins to run. Each plugin, in turn, decides which hooks to make use of.

## Plugin Architecture

A plugin is a node module that exposes a single object.

```
const myPlugin = require('./plugins/myPlugin');

typeof myPlugin
>> 'object'
```

The exposed plugin object must have the following attributes:

- `description`: A user-friendly string describing the purpose of the plugin.
- `dependencies`: Array of plugin names that must run before this plugin.
- `getHook`: A function that receives a hook name and an options object, and returns a transform stream.

```
myPlugin.description
>> 'Use this text to help end users understand what your plugin does.'

myPlugin.dependencies
>> ['foo', 'bar']

myPlugin.getHook('parse', options)
>> <Transform stream>
```

The `getHook` function receives a hook name and an options object, and returns a transform stream.

## Example Plugin

```
// myPlugin.js
const { Transform } = require('stream');

module.exports = {
  description: 'Use this string to explain what your plugin does.'
  dependencies: ['pluginA', 'pluginB'],
  getHook: (hookName, options) => {
    // options.time is a string with an ISO-8601 date
    // options.timezone is a IANA zone

    if (hookName === 'parse') {
      return new Transform({
        objectMode: true,
        transform(block, encoding, callback) {
          // transform the block, and push it along the pipeline
          block.foo = 'bar';
          this.push(block);
          callback();
        }
      });
    }

    // if you don't want to add any logic on a hook, just return null
    return null;
  }
};
```

The `options` object passed to `getHook` has the following attributes:

- `time`: a string with an [ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html) date that must be used for time-related calculations.
- `timezone`: a string with an [IANA timezone](https://www.iana.org/time-zones) that must be used for time-related calculations.

The `transform` function defined in hooks is called with the following params:

- `block`: the [Block object](./models/Block.md) to process.
- `encoding`: ignore this param.
- `callback`: call this function (optionally with an error argument) when processing is complete for the supplied object.

## Plugins List

We currently have the following plugins available:

- [start](./plugins/start.md)
- [postpone](./plugins/postpone.md)
- [repeat](./plugins/repeat.md)
- [sections](./plugins/sections.md)
- [removeComplete](./plugins/removeComplete.md)

Note: All plugins currently live inside `@mdo-org/mdo-core/src/plugins`. However, I might consider moving them into separate repos if it becomes unmanageable in the future.
