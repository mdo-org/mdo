const XRegExp = require("xregexp");

const LINE_TYPES = {
  TITLE_COMPLETE: "TITLE_COMPLETE",
  TITLE_INCOMPLETE: "TITLE_INCOMPLETE",
  COMMENT: "COMMENT",
  BODY: "BODY"
};

// map from RegExp to LineType
const regexTypeMap = new Map([
  [XRegExp("^(?<type>- \\[[xX]\\])(?<body>.+)$"), LINE_TYPES.TITLE_COMPLETE],
  [XRegExp("^(?<type>- \\[ ?\\])(?<body>.+)$"), LINE_TYPES.TITLE_INCOMPLETE],
  [XRegExp("^(?<type>#)(?<body>.+)$"), LINE_TYPES.COMMENT]
]);

const getMatchingRegex = lineStr =>
  Array.from(regexTypeMap.keys()).find(regex => !!lineStr.match(regex));

const LineHelper = {
  TYPES: LINE_TYPES,

  fromString(lineStr) {
    const regex = getMatchingRegex(lineStr);
    if (regex) {
      /* eslint no-template-curly-in-string:[0] */
      return {
        type: regexTypeMap.get(regex) || LINE_TYPES.BODY,
        text: XRegExp.replace(lineStr, regex, "{{type}}${body}")
      };
    }
    return { type: LINE_TYPES.BODY, text: lineStr };
  }
};

module.exports = LineHelper;
