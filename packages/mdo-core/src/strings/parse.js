const stringToStream = require("../stringToStream");
const parse = require("../parse");

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
