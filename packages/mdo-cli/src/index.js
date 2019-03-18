const MDo = require("@mdo-org/mdo-core");
const printVer = require("./printVersion");

const run = ({ printVersion } = {}) => {
  if (printVersion) {
    return printVer();
  }

  const origin = process.stdin;
  const destination = process.stdout;

  return origin.pipe(MDo.transform()).pipe(destination);
};

module.exports = run;
