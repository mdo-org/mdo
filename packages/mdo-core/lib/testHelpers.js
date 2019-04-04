const { Readable } = require("stream");

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

// Run the `input` string through the provided `transform` stream, then
// return the output as a new string
const runStringTransform = (transform, input) =>
  new Promise((resolve, reject) => {
    let result = "";
    stringToStream(input.trim())
      .pipe(transform)
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

// Run the `input` string through the provided `transform` stream, then
// collect the output as a new Block array
const runStringToBlockTransform = (transform, input) =>
  new Promise((resolve, reject) => {
    const result = [];
    stringToStream(input)
      .pipe(transform)
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

// Run the `input` Block array through the provided `transform` stream, then
// collect the output as a new string
const runBlockToStringTransform = (transform, input) =>
  new Promise((resolve, reject) => {
    let result = "";
    arrayToStream(input)
      .pipe(transform)
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

// Run the `input` Block array through the provided `transform` stream, then
// collect the output as a new Block array
const runBlockTransform = (transform, input) =>
  new Promise((resolve, reject) => {
    const result = [];
    arrayToStream(input)
      .pipe(transform)
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

// Run the `input` Block array through the provided `transform` stream, then
// collect the output as a new Block array, and compare against the
// `expectedOutput`
const validateBlockTransform = (transform, { input, expectedOutput }) =>
  runBlockTransform(transform, input).then(result =>
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedOutput))
  );

module.exports = {
  runStringTransform,
  runStringToBlockTransform,
  runBlockToStringTransform,
  runBlockTransform,
  validateBlockTransform
};
