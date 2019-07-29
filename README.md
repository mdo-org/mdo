# MDo

MDo is a free, open source to-do app built to live inside your editor.

Read the full documentation: https://mdo-org.github.io/mdo/

This is the monorepo for the MDo project. It contains:

- mdo-core
- mdo-cli
- "official" flows
- "official" plugins

## Development Info

### Getting Started

- Install node.js (v8.14.0 preferred)
- Install [lerna](https://github.com/lerna/lerna): `npm install -g lerna`
- Run `lerna bootsrap` to install all dependencies

### Running Tests

```
# Run all tests
npm run test

# Run a single test
npm run test <filename or path>
eg:
  npm run test mdo-core

# Run test using a debugger
npm run test-debug <filename>
eg:
  npm run test-debug mdo-core
```

### Linting / Formatting Code

This project is configured to run [prettier](https://github.com/prettier/prettier) when you do a `git add` (using [husky](https://www.npmjs.com/package/husky) and [lint-staged](https://www.npmjs.com/package/lint-staged)), so you don't need to worry about formatting code.

However, we still use [eslint](https://eslint.org/) to capture syntax errors. The `.eslintrc.json` file is set to extend [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier), so eslint will only report on syntax errors instead of enforcing formatting.

Note:  
Some editors will fail to load eslint from a pacakage's subdirectory, and will default to the global eslint - which might not have all the plugins you need.

If that happens, you'll need to manually specify the path to the correct `eslint`.

In my case, I had to create a local `.vimrc` file with:

```
let g:syntastic_javascript_eslint_exec='/home/alexishevia/Projects/Personales/mdo/node_modules/.bin/eslint'
```

### Publishing modules

Run the following to publish all packages:

```
lerna run build && lerna version
NPM_CONFIG_OTP=your_npm_otp lerna publish from-git
```

See: https://github.com/lerna/lerna/issues/1643

### Documentation

The home page for the "MDo" project as a whole lives in: https://mdo-org.github.io/mdo/

It is generated from this repo's `docs` directory using [Docsify](https://docsify.js.org).

You can run Docsify locally with:

```
npm run docs
```

Note:  
Any PR that changes the core MDo architecture should also include updates to the Docsify documentation (to avoid code and docs going out of sync).

Besides the "top level" documentation, every package should have its own independent `README` explaining how the package is used. The package-level `README` will be exposed on the npmjs landing page for that package.
