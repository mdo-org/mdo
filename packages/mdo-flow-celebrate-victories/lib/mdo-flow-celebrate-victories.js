const pumpify = require("pumpify");
const MDo = require("@mdo-org/mdo-core");

const start = require("@mdo-org/mdo-plugin-start");
const postpone = require("@mdo-org/mdo-plugin-postpone");
const repeat = require("@mdo-org/mdo-plugin-repeat");
const completed = require("@mdo-org/mdo-plugin-completed");
const cleanupActionableDates = require("@mdo-org/mdo-plugin-cleanup-actionable-dates");
const sections = require("@mdo-org/mdo-plugin-sections");

const celebrateVictories = ({ time, timezone }) =>
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
      cleanupActionableDates,
      completed.process,
      sections.process,
      sections.sort,

      // stringify
      repeat.stringify,
      postpone.stringify,
      start.stringify,
      completed.stringify,
      sections.stringify,
      MDo.stringify
    ].map(func => func({ time, timezone }))
  );

module.exports = celebrateVictories;
