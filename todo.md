# To-Do

- [ ] add `src` and `lib` directories to all packages.
      In order to keep consistency, I'd like all packages to follow the `mdo-core` format:
  - `src` contains original ES6 files
  - `lib` contains transpiled ES5 files
  - `npm run build` does the transpilation using webpack

Steps:

1. Rename the `lib` folder to `src`
2. Add a `src/strings` directory with a string-friendly API (as opposed to stream-based API).
3. Add `scripts` to `package.json`:

```
"scripts": {
  "buildMain": "npx webpack --entry ./src/index.js -o ./lib/index.js --mode production --output-library-target commonjs-module",
  "buildStrings": "npx webpack --entry ./src/strings/index.js -o ./lib/strings/index.js --mode production --output-library-target commonjs-module",
  "build": "npm run buildMain && npm run buildStrings"
},
```

4. Add the `lib` folder of that package to `.gitignore`
5. Add the `lib` folder of that package to `.eslintignore`

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
- [ ] get BlockHelper.fromString() to extract tags
