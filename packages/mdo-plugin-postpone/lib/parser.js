const XRegExp = require("xregexp");

const hourRegex = "(?<hour>\\d{1,2})";
const minuteRegex = ":(?<minute>\\d{2})";
const meridiemRegex = " ?(?<meridiem>am|pm)";
const timeRegex = `${hourRegex}(${minuteRegex})?(${meridiemRegex})?`;
const weekDays = "monday|tuesday|wednesday|thursday|friday|saturday|sunday";
const TAG_PATTERNS = [
  XRegExp(`^until (${timeRegex})$`),
  XRegExp(`^until (?<day>today|tomorrow)( at ${timeRegex})?$`),
  XRegExp(`^until (?<day>\\d{4}-\\d{2}-\\d{2})( at ${timeRegex})?$`),
  XRegExp(`^until (next )?(?<nextWeekday>${weekDays})( at ${timeRegex})?$`),
  XRegExp(`^until next (?<nextPeriod>\\w+)( at ${timeRegex})?$`),
  XRegExp(`^(?<inAmount>\\d+) ?(?<inPeriod>\\w+)( at ${timeRegex})?$`)
];

const weekDayNameToNumberMap = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7
};

const startOfToday = DateTime => DateTime.local().startOf("day");

const buildDateByDay = (day, DateTime) => {
  const today = startOfToday(DateTime);
  if (day === "today") {
    return today;
  }
  if (day === "tomorrow") {
    return today.plus({ days: 1 });
  }
  return DateTime.fromISO(day);
};

const buildDateByNextWeekday = (dayName, DateTime) => {
  const today = startOfToday(DateTime);

  const nextWeekday = weekDayNameToNumberMap[dayName];

  if (!nextWeekday) {
    return today;
  }
  if (today.weekday < nextWeekday) {
    return today.plus({ days: nextWeekday - today.weekday });
  }
  // today.weekday >= nextWeekday
  return today.plus({ days: 7 - today.weekday + nextWeekday });
};

const buildDateByNextPeriod = (nextPeriod, DateTime) => {
  const today = startOfToday(DateTime);
  const periodToDateMap = {
    week: today.plus({ days: 7 }),
    month: today.plus({ months: 1 }),
    year: today.plus({ years: 1 })
  };

  return periodToDateMap[nextPeriod] || today;
};

const buildDateByInPeriod = (amountStr, period, hasTimeSpecified, DateTime) => {
  const amount = parseInt(amountStr, 10);
  if (Number.isNaN(amount)) {
    throw new Error('Invalid amount for "postpone" clause');
  }

  if (["minute", "minutes", "hour", "hours"].includes(period)) {
    if (hasTimeSpecified) {
      throw new Error(`Cannot specify a time with "postpone <n> ${period}"`);
    }
    return DateTime.local().plus({ [period]: amount });
  }

  if (["day", "days", "week", "weeks", "year", "years"].includes(period)) {
    return DateTime.local()
      .startOf("day")
      .plus({ [period]: amount });
  }

  throw new Error('Unknown <period> for "postpone"');
};

const normalizeHour = (hour, meridiem) => {
  const normalized =
    meridiem === "pm" ? parseInt(hour, 10) + 12 : parseInt(hour, 10);
  if (normalized < 0 || normalized > 23) {
    throw new Error("Invalid hour");
  }
  return normalized;
};

const setHourOnDate = (date, hour, meridiem) =>
  hour ? date.set({ hour: normalizeHour(hour, meridiem) }) : date;

const setMinuteOnDate = (date, minute) =>
  minute ? date.set({ minute }) : date;

const setTimeOnDate = (date, hour, minute, meridiem) => {
  let result = date;
  result = setHourOnDate(result, hour, meridiem);
  result = setMinuteOnDate(result, minute);
  return result;
};

const buildDate = (
  { day, nextPeriod, nextWeekday, inAmount, inPeriod, hour },
  DateTime
) => {
  // @postpone until today
  // @postpone until tomorrow
  if (day) {
    return buildDateByDay(day, DateTime);
  }
  // @postpone until Monday
  if (nextWeekday) {
    return buildDateByNextWeekday(nextWeekday, DateTime);
  }
  // @postpo until next week
  if (nextPeriod) {
    return buildDateByNextPeriod(nextPeriod, DateTime);
  }
  // @postpone for 5 days
  if (inAmount && inPeriod) {
    return buildDateByInPeriod(inAmount, inPeriod, !!hour, DateTime);
  }
  return startOfToday(DateTime);
};

const getISODate = (line, regex, DateTime) => {
  const data = XRegExp.exec(line, regex);
  const { hour, minute, meridiem } = data;
  const date = setTimeOnDate(buildDate(data, DateTime), hour, minute, meridiem);
  if (!date.isValid) {
    throw new Error(`Invalid date: ${line} - ${date.invalidReason}`);
  }
  return date.toISO();
};

/*
 * parse postpone tag value from a string
 */
const parsePostponeTag = (str, DateTime) => {
  const regex = TAG_PATTERNS.find(reg => XRegExp.exec(str, reg));
  if (!regex) {
    throw new Error(`Invalid @postpone tag: ${str}`);
  }
  try {
    return getISODate(str, regex, DateTime);
  } catch (err) {
    throw new Error(`Invalid @postpone tag: ${str} - ${err.message}`);
  }
};

module.exports = parsePostponeTag;
