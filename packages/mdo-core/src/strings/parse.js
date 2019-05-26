const { Readable } = require("stream");
const parse = require("../parse");

// Convert a string into a readable buffer stream, which emits one "chunk" at a
// time. Each chunk is currently set to 5 characters.
const stringToStream = str =>
  /* eslint no-param-reassign: [0] */
  new Readable({
    read(size = 5) {
      if (str.length) {
        const chunk = str.slice(0, size);
        str = str.slice(size);
        return this.push(chunk);
      }
      return this.push(null);
    }
  });

const parseString = inputStr =>
  new Promise((resolve, reject) => {
    const result = [];
    stringToStream(inputStr)
      .pipe(parse())
      .on("data", block => {
        result.push(block);
      })
      .on("end", () => {
        resolve(result);
      })
      .on("error", err => {
        reject(err);
      });
  });

module.exports = parseString;
