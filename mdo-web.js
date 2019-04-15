/* eslint-env browser */

/*
 * MDo Web
 * This library allows demoing MDo in a website.
 *
 * The code has to be transpiled before usage:
 * ```
 * # development
 * npx webpack --watch --entry ./mdo-web.js -o ./docs/mdo-web.js --mode development
 *
 * # production
 * npx webpack --entry ./mdo-web.js -o ./docs/mdo-web.js --mode production
 * ```
 *
 * Usage:
 *    <div id="mdo-demo"></div>
 *    <script>
 *      MDo.demo({ container: document.getElementById('mdo-demo') });
 *    </script>
 */

const { Readable } = require("stream");

const flow = require("./packages/mdo-flow-live-in-the-moment");

let cachedTimeZone;
const getTimeZone = () => {
  if (cachedTimeZone) return cachedTimeZone;
  try {
    cachedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return cachedTimeZone;
  } catch (err) {
    return "";
  }
};

const INITIAL_TEXT = `
- [X] Learn to use MDo
- [ ] Pick up milk
- [ ] Take out trash
    @start tomorrow at 8pm
    @repeat every day from complete
`.trim();

// Convert a string into a readable buffer stream
const stringToStream = str =>
  new Readable({
    read() {
      if (str.length) {
        this.push(str);
      }
      return this.push(null);
    }
  });

const buildHTML = ({ container } = {}) => {
  if (!container) return;

  // create origin textarea
  const origin = document.createElement("textarea");
  origin.className = "origin";
  origin.innerHTML = INITIAL_TEXT;
  container.appendChild(origin);

  // create destination textarea
  const destination = document.createElement("textarea");
  destination.className = "destination";
  destination.readOnly = true;
  container.appendChild(destination);

  // create button
  const button = document.createElement("button");
  button.innerHTML = "Run";
  container.appendChild(button);

  button.onclick = () => {
    let result = "";
    stringToStream(origin.value)
      .pipe(
        flow({
          time: new Date().toISOString(),
          timezone: getTimeZone()
        })
      )
      .on("data", chunk => {
        result = `${result}${chunk}`;
      })
      .on("error", err => {
        result = err.message;
      })
      .on("end", () => {
        destination.textContent = result;
      });
  };
};

window.MDo = {
  demo: buildHTML
};
