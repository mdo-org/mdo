#!/usr/bin/env node

import fs from "fs";
const pumpify = require("pumpify");
const MDo = require("@mdo-org/mdo-core");

const { argv } = require("yargs");
const printVer = require("./printVersion");

type runArgsT = { printVersion: boolean };
const run = (args: runArgsT | null) => {
  const printVersion = args ? args.printVersion : null;
  if (printVersion) {
    return printVer();
  }

  const origin = process.stdin;
  const destination = process.stdout;

  return pumpify(origin, MDo.transform(), destination).on(
    "error",
    (e: Error) => {
      console.error(e.message);
      process.exit(1);
    }
  );
};

if (require.main === module) {
  run({
    printVersion: !!argv.version
  });
}

export default run;
