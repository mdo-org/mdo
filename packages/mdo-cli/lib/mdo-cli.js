/* eslint global-require: [0], import/no-dynamic-require: [0] */

const { DateTime } = require("luxon");

const run = ({ flow } = {}) => {
  const origin = process.stdin;
  const destination = process.stdout;
  const transform = require(flow);

  const now = DateTime.local();
  const time = now.toString();
  const timezone = now.zoneName;

  return origin.pipe(transform({ time, timezone })).pipe(destination);
};

module.exports = run;
