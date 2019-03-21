/*
 * This is a wrapper around luxon, which allows hardcoding a custom time and
 * timezone (aka "freezing" the clock).
 *
 * It is important to note time and timezone are different concepts. You can
 * read a great explanation here:
 * https://github.com/moment/luxon/blob/master/docs/zones.md#terminology
 *
 * - With time, you are hardcoding the clock to always return the same time
 *   (number of milliseconds since epoch).
 *
 * - With timezone, you are hardcoding the timezone used when dealing with
 *   things like days, hours, etc.
 *
 * Example:
 * The same time `2019-01-04T21:00:00.000Z` would be 1pm in America/Los_Angeles
 * but 4pm in America/New_York
 */

import { DateTime, DateTimeOptions } from "luxon";
import { DateTimeWrapperT } from "./types";

const DateTimeWrapper = (time: string, timezone: string): DateTimeWrapperT => ({
  local: () => {
    const result = time ? DateTime.fromISO(time) : DateTime.local();
    return timezone ? result.setZone(timezone) : result;
  },

  fromISO: (text: string, options?: DateTimeOptions): DateTime => {
    const result = DateTime.fromISO(text, options);
    return timezone ? result.setZone(timezone) : result;
  }
});

export = DateTimeWrapper;
