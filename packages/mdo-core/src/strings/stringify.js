const { Readable } = require("stream");
const stringify = require("../stringify");

// Convert an array of objects into an object stream, which emits one object
// per event.
const arrayToStream = arr => {
  const len = arr.length;
  let i = 0;
  return new Readable({
    objectMode: true,
    read() {
      if (i < len) {
        this.push(arr[i]);
        i += 1;
        return;
      }
      this.push(null);
    }
  });
};

const stringifyBlocks = inputBlocks =>
  new Promise((resolve, reject) => {
    let result = "";
    arrayToStream(inputBlocks)
      .pipe(stringify())
      .on("data", chunk => {
        result = `${result}${chunk}`;
      })
      .on("end", () => {
        resolve(result);
      })
      .on("error", err => {
        reject(err);
      });
  });

module.exports = stringifyBlocks;
