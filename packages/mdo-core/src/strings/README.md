The "strings" subdirectory was created for environments that have no stream
support _cough_ react native _cough_

## Usage

```
const { parse, stringify } = require('@mdo-org/mdo-core/lib/strings')

parse('- [ ] hello world').then(blocks => console.log(blocks));

stringify([
  { type: 'INCOMPLETE_TASK', text: '{{type}} hello world'}
]).then(str => console.log)
```
