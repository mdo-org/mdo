const stringToStream = require("@mdo-org/mdo-core/src/stringToStream");
const liveInTheMoment = require("..");

const liveInTheMomentString = (inputStr, { time, timezone }) =>
  new Promise((resolve, reject) => {
    const result = [];
    stringToStream(inputStr)
      .pipe(liveInTheMoment({ time, timezone }))
      .on("data", block => {
        result.push(block);
      })
      .on("end", () => {
        resolve(result.join(""));
      })
      .on("error", err => {
        reject(err);
      });
  });

module.exports = liveInTheMomentString;
