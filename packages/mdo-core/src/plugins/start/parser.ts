import { DateTimeWrapperT } from "../../types";
import luxon from "luxon";

const XRegExp = require("xregexp");

const hourRegex = "(?<hour>\\d{1,2})";
const minuteRegex = ":(?<minute>\\d{2})";
const meridiemRegex = " ?(?<meridiem>am|pm)";
const timeRegex = `at ${hourRegex}(${minuteRegex})?(${meridiemRegex})?`;
const weekDays = "monday|tuesday|wednesday|thursday|friday|saturday|sunday";
const TAG_PATTERNS = [
  XRegExp(`^(${timeRegex})$`),
  XRegExp(`^(?<day>today|tomorrow)( ${timeRegex})?$`),
  XRegExp(`^(?<day>\\d{4}-\\d{2}-\\d{2})( ${timeRegex})?$`),
  XRegExp(`^(next )?(?<nextWeekday>${weekDays})( ${timeRegex})?$`),
  XRegExp(`^next (?<nextPeriod>\\w+)( ${timeRegex})?$`),
  XRegExp(`^in (?<inAmount>\\d+) ?(?<inPeriod>\\w+)( ${timeRegex})?$`)
];

const weekDayNameToNumberMap: { [name: string]: number } = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7
};

const startOfToday = (DateTime: DateTimeWrapperT) =>
  DateTime.local().startOf("day");

const buildDateByDay = (day: string, DateTime: DateTimeWrapperT) => {
  const today = startOfToday(DateTime);
  if (day === "today") {
    return today;
  }
  if (day === "tomorrow") {
    return today.plus({ days: 1 });
  }
  return DateTime.fromISO(day);
};

const buildDateByNextWeekday = (
  dayName: string,
  DateTime: DateTimeWrapperT
) => {
  const today = startOfToday(DateTime);

  const nextWeekday: number = weekDayNameToNumberMap[dayName];

  if (!nextWeekday) {
    return today;
  }
  if (today.weekday < nextWeekday) {
    return today.plus({ days: nextWeekday - today.weekday });
  }
  // today.weekday >= nextWeekday
  return today.plus({ days: 7 - today.weekday + nextWeekday });
};

const buildDateByNextPeriod = (
  nextPeriod: string,
  DateTime: DateTimeWrapperT
) => {
  const today: luxon.DateTime = startOfToday(DateTime);
  const periodToDateMap: { [period: string]: luxon.DateTime } = {
    week: today.plus({ days: 7 }),
    month: today.plus({ months: 1 }),
    year: today.plus({ years: 1 })
  };

  return periodToDateMap[nextPeriod] || today;
};

const buildDateByInPeriod = (
  amountStr: string,
  period: string,
  hasTimeSpecified: boolean,
  DateTime: DateTimeWrapperT
) => {
  const amount = parseInt(amountStr, 10);
  if (Number.isNaN(amount)) {
    throw new Error('Invalid amount for "start in" clause');
  }

  if (["minute", "minutes", "hour", "hours"].includes(period)) {
    if (hasTimeSpecified) {
      throw new Error(`Cannot specify a time with "start in <n> ${period}"`);
    }
    return DateTime.local().plus({ [period]: amount });
  }

  if (["day", "days", "week", "weeks", "year", "years"].includes(period)) {
    return DateTime.local()
      .startOf("day")
      .plus({ [period]: amount });
  }

  throw new Error('Unknown <period> for "start in"');
};

const normalizeHour = (hour: string, meridiem: string) => {
  const hourAsInt = parseInt(hour, 10);
  if (hourAsInt === 12 && meridiem === "pm") {
    return 12;
  }
  if (hourAsInt === 12 && meridiem === "am") {
    throw new Error(`\n
Instead of 12am, either:
- use 12pm if you mean noon (12:00), or
- use the next day's date without time if you mean midnight (00:00)\n`);
  }
  const normalized = meridiem === "pm" ? hourAsInt + 12 : hourAsInt;
  if (normalized < 0 || normalized > 23) {
    throw new Error("Invalid hour");
  }
  return normalized;
};

const setHourOnDate = (date: luxon.DateTime, hour: string, meridiem: string) =>
  hour ? date.set({ hour: normalizeHour(hour, meridiem) }) : date;

const setMinuteOnDate = (date: luxon.DateTime, minute: number) =>
  minute ? date.set({ minute }) : date;

const setTimeOnDate = (
  date: luxon.DateTime,
  hour: string,
  minute: number,
  meridiem: string
): luxon.DateTime => {
  let result = date;
  result = setHourOnDate(result, hour, meridiem);
  result = setMinuteOnDate(result, minute);
  return result;
};

type dateSections = {
  day: string;
  nextPeriod: string;
  nextWeekday: string;
  inAmount: string;
  inPeriod: string;
  hour: string;
};

const buildDate = (
  { day, nextPeriod, nextWeekday, inAmount, inPeriod, hour }: dateSections,
  DateTime: DateTimeWrapperT
) => {
  // @start today
  // @start tomorrow
  if (day) {
    return buildDateByDay(day, DateTime);
  }
  // @start Monday
  if (nextWeekday) {
    return buildDateByNextWeekday(nextWeekday, DateTime);
  }
  // @start next week
  if (nextPeriod) {
    return buildDateByNextPeriod(nextPeriod, DateTime);
  }
  // @start in 5 days
  if (inAmount && inPeriod) {
    return buildDateByInPeriod(inAmount, inPeriod, !!hour, DateTime);
  }
  return startOfToday(DateTime);
};

const getISODate = (
  line: string,
  regex: RegExp,
  DateTime: DateTimeWrapperT
) => {
  const data = XRegExp.exec(line, regex);
  const { hour, minute, meridiem } = data;
  const date = setTimeOnDate(buildDate(data, DateTime), hour, minute, meridiem);
  if (!date.isValid) {
    throw new Error(`Invalid date: ${line} - ${date.invalidReason}`);
  }
  return date.toISO();
};

/*
 * parse start tag value from a string
 */
const parseStartTag = (str: string, DateTime: DateTimeWrapperT): string => {
  const regex = TAG_PATTERNS.find(reg => XRegExp.exec(str, reg));
  if (!regex) {
    throw new Error(`Invalid @start tag: ${str}`);
  }
  try {
    return getISODate(str, regex, DateTime);
  } catch (err) {
    throw new Error(`Invalid @start tag: ${str} - ${err.message}`);
  }
};

export default parseStartTag;
