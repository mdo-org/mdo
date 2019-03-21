# @repeat tag formats

These are the allowed formats for the `@repeat` tag:

- `every [<n>] <period> from <type>`.  
   eg:
  ```
  @repeat every 6 months from start
  @repeat every day from complete
  ```
  - `<n>` must be a number. If not present, `1` is assumed.
  - `<period>` must be one of: `hours`, `days`, `weeks`, `years`
  - `<type>` indicates how the next occurrence is calculated.  
     Must be one of:
    - `start`: the next occurrence is calculated based on the task's start date (`@start + <n period>`).
    - `complete`: the next occurrence is calculated based on the time the task was completed (`<completionDate> + <n period>`).
- `<period> from <type>`  
  where `<period>` must be one of: `daily`, `weekly`, `monthly`, `semianually`, `anually`.  
   eg:
  ```
  @repeat daily from start
  @repeat semianually from complete
  ```
