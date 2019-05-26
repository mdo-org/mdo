const DateTimeWrapper = require("./DateTimeWrapper");

function normalizeDate(date, { time, timezone }) {
  const DateTime = DateTimeWrapper(time, timezone);
  const dateObj = DateTime.fromISO(date);
  let str = dateObj.toFormat("yyyy-LL-dd");

  // if time is start of day, there is no need to include it
  if (dateObj.hour === 0 && dateObj.minute === 0) {
    return str;
  }

  // add hour
  str = `${str} at ${dateObj.toFormat("h")}`;

  // add minutes (if not :00)
  if (dateObj.minute !== 0) {
    str = `${str}:${dateObj.toFormat("mm")}`;
  }

  // add meridiem (am/pm)
  str = `${str}${dateObj.toFormat("a").toLowerCase()}`;

  return str;
}

module.exports = normalizeDate;
