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
- [ ] feature request: add a new `# Tomorrow` section before `# Future`
- [ ] improve landing page
  - add a 'How to use' or 'How to install' section with instructions for different editors
  - add in-depth documentation (most of it is already written in the docs folder, just need to clean up and expose it)
- [ ] make eslint happy
      there are a couple places where I'm disabling eslint rules with /_ eslint ... _/
      we should reconsider rewriting to make eslint happy
