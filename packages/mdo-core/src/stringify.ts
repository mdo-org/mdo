import Block from "./BlockHelper";
import { BlockT } from "./types";
import { Transform } from "stream";

function stringify(): Transform {
  let isFirst = true;

  return new Transform({
    objectMode: true,

    transform(block: BlockT, enc: string, callback: Function) {
      let separator = "\n";
      if (isFirst) {
        separator = "";
        isFirst = false;
      }
      this.push(`${separator}${Block.toString(block)}`);
      callback();
    }
  });
}

export = stringify;
