# stringify()

Stringify is a transform stream that converts a Block objects stream into a buffer stream.

Opposite operation to [parse](/architecture/parse.md).

## Usage

```
const MDo = require('@mdo-org/mdo-core/');

objectStream.pipe(MDo.stringify()).pipe(process.stdout);
```

[> The Block model](/architecture/block_model.md)
