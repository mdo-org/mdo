The "strings" subdirectory was created for environments that have no stream
support _cough_ react native _cough_

## How it works

The file `mdo/packages/mdo-core/package.json` has a `build` script that runs
webpack and converts this to a commonjs module that can be used by react native.

## Usage

```
const { parse, stringify } = require('@mdo-org/mdo-core/lib/strings')

parse('- [ ] hello world').then(blocks => console.log(blocks));

stringify([
  { type: 'INCOMPLETE_TASK', text: '{{type}} hello world'}
]).then(console.log)
```
