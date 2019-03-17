# @start tag formats

These are the allowed formats for the `@start` tag:

- `at <time>`
  eg:  
   `@start at 1pm`  
   `@start at 16:30`
- `<period> [at <time>]`  
   where `<period>` must be one of:
  - `today`, `tomorrow`
  - `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`  
    eg:  
    `@start today at 6pm`  
    `@start tomorrow`  
    `@start Friday at 9am`  
    Note: `@start today at 6pm` and `@start at 6pm` are equivalent
- `next <period> [at <time>]`  
   where `<period>` must be one of:
  - `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`
  - `week`
  - `month`
  - `year`  
    eg:  
    `@start next Tuesday at 2pm`  
    `@start next month`  
    Note: `@start next Tuesday at 2pm` and `@start Tuesday at 2pm` are equivalent
- `in <n> <period> [at <time>]`
  where `<n>` must be a number, and `<period>` must be one of:
  - `minutes`
  - `hours`
  - `days`
  - `weeks`
  - `years`  
    eg: `@start in 2 months`  
    Note: `next` and `in` are similar, but not equal:
  - `@start next month` will set the start date to the first day of the next month
  - `@start in 1 month` will set the start date to `today + 1 month`
- `<date> [at <time>]`
  where `<date>` must have format `YYYY-MM-DD`  
   eg: `@start 2018-07-01 at 3:50pm`
