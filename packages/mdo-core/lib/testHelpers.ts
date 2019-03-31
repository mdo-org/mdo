import { BlockT } from "./types";
import { Readable, Transform } from "stream";
import Block from "./BlockHelper";

// Convert a string into a readable buffer stream, which emits one "chunk" at a
// time. Each chunk is currently set to 5 characters.
const stringToStream = (str: string): Readable =>
  new Readable({
    read(size = 5) {
      if (str.length) {
        const chunk = str.slice(0, size);
        str = str.slice(size);
        return this.push(chunk);
      }
      this.push(null);
    }
  });

// Convert an array of objects into an object stream, which emits one object
// per event.
const arrayToStream = (arr: Array<object>): Readable => {
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
export const runStringTransform = (
  transform: Transform,
  input: string
): Promise<string> =>
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
export const runStringToBlockTransform = (
  transform: Transform,
  input: string
): Promise<Array<BlockT>> =>
  new Promise((resolve, reject) => {
    const result: Array<BlockT> = [];
    stringToStream(input.trim())
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
export const runBlockToStringTransform = (
  transform: Transform,
  input: Array<BlockT>
): Promise<string> =>
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
export const runBlockTransform = (
  transform: Transform,
  input: Array<BlockT>
): Promise<Array<BlockT>> =>
  new Promise((resolve, reject) => {
    const result: Array<BlockT> = [];
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

type validateBlockTransformOptions = {
  input: Array<BlockT>;
  expectedOutput: Array<BlockT>;
};

// Run the `input` Block array through the provided `transform` stream, then
// collect the output as a new Block array, and compare against the
// `expectedOutput`
export const validateBlockTransform = (
  transform: Transform,
  { input, expectedOutput }: validateBlockTransformOptions
) =>
  runBlockTransform(transform, input).then(result =>
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedOutput))
  );
