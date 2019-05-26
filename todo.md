# To-Do

- [ ] bug: recurring date with time
      If I have the following completed to-do:
  ```
  - [X] ponerle humectante nariz perros (tarde)
      @start 2019-01-01 at 5pm
      @repeat every day from complete
  ```
  And today is 2019-04-15 at 3pm (any time before 5pm)
  I want the next @start date to be today (2019-04-15) at 5pm, but MDo is
  calculating it to be tomorrow (2019-04-15) at 5pm.
- [ ] update README to use good-old `lerna publish` (test to see if it works first)
      see: https://github.com/lerna/lerna/pull/2084
- [ ] make eslint happy
      there are a couple places where I'm disabling eslint rules with /_ eslint ... _/
      we should reconsider rewriting to make eslint happy
