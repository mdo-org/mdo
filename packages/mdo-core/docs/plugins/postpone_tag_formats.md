# @postpone tag formats

These are the allowed formats for the `@postpone` tag:

- `<n> <period> [at <time>]`  
   where `<n>` must be a number, and `<period>` must be one of:
  - `minutes`
  - `hours`
  - `days`
  - `weeks`
  - `years`  
    eg:  
    `@postpone 5 minutes`  
    `@postpone 3 days`
- `until <time>`
  eg:  
   `@postpone until 1pm`  
   `@postpone until 16:30`
- `until <period> [at <time>]`  
   where `<period>` must be one of:
  - `today`, `tomorrow`
  - `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`  
    eg:  
    `@postpone until today at 6pm`  
    `@postpone until tomorrow`  
    `@postpone until Friday at 9am`  
    Note: `@postpone until today at 6pm` and `@postpone until 6pm` are equivalent
- `until next <period> [at <time>]`  
   where `<period>` must be one of:
  - `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`
  - `week`
  - `month`
  - `year`  
    eg:  
    `@postpone until next Tuesday at 2pm`  
    `@postpone until next month`  
    Notes:
  - `@postpone until next Tuesday at 2pm` and `@postpone until Tuesday at 2pm` are equivalent
  - `until next` and `<n> <period>` are similar, but not equal:
    - `@postpone until next month` will postpone until the first day of the next month
    - `@postpone 1 month` will postpone until `today + 1 month`
- `until <date> [at <time>]`
  where `<date>` must have format `YYYY-MM-DD`  
   eg: `@postpone until 2018-07-01 at 3:50pm`
