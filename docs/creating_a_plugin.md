# Creating a New Plugin

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

2. Update the `package.json`'s scripts section so it looks like this:

   ```
   "scripts": {
     "test": "jest",
     "test-debug": "node --inspect-brk=0.0.0.0:9229 ../../node_modules/.bin/jest"
   },
   ```

3. Add `mdo-core` as a dependency inside `package.json`:

   ```
   "dependencies": {
     "@mdo-org/mdo-core": "^0.1.6"
   }
   ```

4. Write your README inside `packages/mdo-plugin-foo/README`

5. Write your tests inside `packages/mdo-plugin-foo/lib/mdo-plugin-foo.js`

6. Write your plugin logic inside `packages/mdo-plugin-foo/lib/mdo-plugin-foo.js`.
