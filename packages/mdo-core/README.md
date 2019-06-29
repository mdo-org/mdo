# mdo-core

mdo-core is meant to be used by MDo plugins and MDo flows.

If you are trying to use MDo to manage your to-dos, you probably want to look at
[mdo-cli](../mdo-cli/README.md).

## Overview

mdo-core contains logic for parsing and processing MDo files. It also exposes some helper methods for dealing (and testing) streams of MDo blocks.

## Usage

Stream mode

```
const fs = require('fs');
const MDo = require('@mdo-org/mdo-core');
const objectStream = fs.createReadStream('./myfile.md').pipe(MDo.parse());
```

String mode

```
const { parse, stringify } = require('@mdo-org/mdo-core/lib/strings')

parse('- [ ] hello world').then(blocks => console.log(blocks));

stringify([
  { type: 'INCOMPLETE_TASK', text: '{{type}} hello world'}
]).then(console.log)
```
