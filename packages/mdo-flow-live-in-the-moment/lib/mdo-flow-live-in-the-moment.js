const pumpify = require("pumpify");
const MDo = require("@mdo-org/mdo-core/src");

const start = require("@mdo-org/mdo-plugin-start");
const postpone = require("@mdo-org/mdo-plugin-postpone");
const repeat = require("@mdo-org/mdo-plugin-repeat");
const removeComplete = require("@mdo-org/mdo-plugin-remove-complete");
const cleanupActionableDates = require("@mdo-org/mdo-plugin-cleanup-actionable-dates");
const sections = require("@mdo-org/mdo-plugin-sections");

const liveInTheMoment = ({ time, timezone }) =>
  pumpify(
    [
      // parse
      MDo.parse,
      start.parse,
      postpone.parse,
      repeat.parse,
      sections.parse,

      // process
      repeat.process,
      removeComplete,
      cleanupActionableDates,
      sections.process,
      sections.sort,

      // stringify
      repeat.stringify,
      postpone.stringify,
      start.stringify,
      sections.stringify,
      MDo.stringify
    ].map(func => func({ time, timezone }))
  );

module.exports = liveInTheMoment;
