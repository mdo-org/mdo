const pumpify = require("pumpify");
const MDo = require("@mdo-org/mdo-core");
const printVer = require("./printVersion");

const run = ({ printVersion } = {}) => {
  if (printVersion) {
    return printVer();
  }

  const origin = process.stdin;
  const destination = process.stdout;

  return pumpify(origin, MDo.transform(), destination).on("error", e => {
    console.error(e.message);
    process.exit(1);
  });
};

module.exports = run;
