# stringify()

Stringify is a transform stream that converts a Block objects stream into a buffer stream.

Opposite operation to [parse](./parse).

## Usage

```
const MDo = require('@mdo-org/mdo-core/');

objectStream.pipe(MDo.stringify()).pipe(process.stdout);
```
