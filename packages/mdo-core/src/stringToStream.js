const { Readable } = require("stream");

const DEFAULT_BUFFER_SIZE = 100;

// Convert a string into a readable buffer stream, which emits one "chunk" at a
// time. Each chunk is currently set to 100 characters.
const stringToStream = str =>
  /* eslint no-param-reassign: [0] */
  new Readable({
    read(size = DEFAULT_BUFFER_SIZE) {
      if (str.length) {
        const chunk = str.slice(0, size);
        str = str.slice(size);
        return this.push(chunk);
      }
      return this.push(null);
    }
  });

module.exports = stringToStream;
