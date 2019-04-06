/*
 * MDo Web
 * This library allows demoing MDo in a website.
 *
 * The code has to be transpiled before usage:
 * ```
 * npx webpack --entry ./mdo-web.js -o ./docs/mdo-web.js --mode production
 * ```
 *
 * Usage:
 *    <div id="mdo-demo"></div>
 *    <script>
 *      MDo.demo({ container: document.getElementById('mdo-demo') });
 *    </script>
 */
const flow = require("./packages/mdo-flow-live-in-the-moment");

const buildHTML = () => {
  window.alert("MDo demo loaded");
};

window.MDo = {
  demo: buildHTML()
};
