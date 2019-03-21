const XRegExp = require("xregexp");
const { VALID_REPEAT_TYPES } = require("./constants");

const VALID_REPEAT_PERIODS = {
  hour: "HOURS",
  hours: "HOURS",
  day: "DAYS",
  days: "DAYS",
  daily: "DAYS",
  week: "WEEKS",
  weeks: "WEEKS",
  weekly: "WEEKS",
  month: "MONTHS",
  months: "MONTHS",
  monthly: "MONTHS",
  year: "YEARS",
  years: "YEARS",
  anually: "YEARS",
  semianually: "MONTHS"
};

const TAG_PATTERNS = [
  XRegExp("^every (?<n>\\d+ )?(?<period>\\w+) from (?<type>\\w+)$"),
  XRegExp("^(?<period>daily|monthly|semianually|anually) from (?<type>\\w+)$")
];

/*
 * parse the N argument of the repeat tag
 */
const formatRepeatN = (n, period) =>
  period === "semianually" ? 6 : parseInt(n, 10);

/*
 * parse the period argument of the repeat tag
 */
const formatRepeatPeriod = period => {
  const normalized = VALID_REPEAT_PERIODS[period];
  if (!normalized) {
    throw new Error(`Invalid @repeat period: ${period}\n`);
  }
  return normalized;
};

/*
 * parse the type argument of the repeat tag
 */
const formatRepeatType = type => {
  const normalized = VALID_REPEAT_TYPES[type];
  if (!normalized) {
    throw new Error(`Invalid @repeat type: ${type}\n`);
  }
  return normalized;
};

/*
 * parse repeat tag value from a string
 */
const parseRepeatTag = str => {
  const regex = TAG_PATTERNS.find(reg => XRegExp.exec(str, reg));
  if (!regex) {
    throw new Error(`Invalid @repeat tag: @${str}\n`);
  }
  const { n = 1, period, type } = XRegExp.exec(str, regex);
  return {
    string: str,
    n: formatRepeatN(n, period),
    period: formatRepeatPeriod(period),
    type: formatRepeatType(type)
  };
};

module.exports = parseRepeatTag;
