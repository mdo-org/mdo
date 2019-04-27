# Create a New Plugin

A "plugin" is a function that returns a transform stream when invoked.

The transform stream is expected to:

1. Receive [Block objects](/architecture/block_model.md)
2. Manipulate the Block objects (add fields, remove fields, modify text, etc).
3. Output the processed Block objects back into the stream

While there is no hard rule on the function signature, I usually write my plugins to receive a single `options` parameter.

```
myPlugin({ time: '2019-04-23T03:00:00.000Z', timezone: 'America/Panama' })
>> <Transform stream>
```

And I expect the following properties to be present in the `options` parameter:

- `time`: a string with an [ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html) date representing the current time.
- `timezone`: a string with an [IANA timezone](https://www.iana.org/time-zones) representing the user's time zone.

If your plugin follows this signature, it should make life easier for developers wanting to include your plugin in their flows.

### Example Plugin

```
// myPlugin.js
const { Transform } = require('stream');

module.exports = (options = {}) => {
  // options.time is a string with an ISO-8601 date
  // options.timezone is a IANA zone

  return new Transform({
    objectMode: true,
    transform(block, encoding, callback) {
      // transform the block, and push it along the pipeline
      block.foo = 'bar';
      this.push(block);
      callback();
    }
  });
};
```

The `transform` function will be called with the following params:

- `block`: the [Block object](/architecture/block_model.md) to process.
- `encoding`: ignore this param.
- `callback`: call this function when processing is complete for the supplied object. `callback` accepts an error as the first parameter.

# How to create a plugin inside the monorepo

I'm using [lerna](https://github.com/lerna/lerna) to keep all plugins and flows inside a single repository called [mdo-org/mdo](https://github.com/mdo-org/mdo).  
_This might change in the future if the monorepo gets out of hand._

If you are developing a new plugin, you can create a separate repo for it. But if you want your plugin to live inside the `mdo-org/mdo` repo, follow these instructions:

1. Create a lerna package for your plugin:

   ```
   lerna create mdo-plugin-foo
   ```

   Make sure to prepend your plugin name with `@mdo-org/` when prompted:

   ```
   package name: (mdo-plugin-foo) @mdo-org/mdo-plugin-foo
   ```

   Make sure to point to the root LICENSE when prompted:

   ```
   license: (ISC) SEE LICENSE IN ../../LICENSE
   ```

2. Add `mdo-core` as a dependency inside `package.json` (optional):

   ```
   "dependencies": {
     "@mdo-org/mdo-core": "^0.1.6"
   }
   ```

3. Add a `publishConfig` to `package.json`

   ```
   "publishConfig": {
     "access": "public"
   }
   ```

4. Write your README inside `packages/mdo-plugin-foo/README`

5. Write your tests inside `packages/mdo-plugin-foo/__tests__/mdo-plugin-foo.test.js`

6. Write your plugin logic inside `packages/mdo-plugin-foo/lib/mdo-plugin-foo.js`.

[> About](/about/)
