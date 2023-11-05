const ESCAPE_CHAR = '\\';

const isEscaped = (string, substringLocation) => {
  const hasPrecedingBackslash =
    substringLocation > 0 && string[substringLocation - 1] === ESCAPE_CHAR;
  const hasAnother =
    hasPrecedingBackslash && string[substringLocation - 2] === ESCAPE_CHAR;
  return hasPrecedingBackslash && !hasAnother;
};

const replaceIfNotEscaped = (text, pattern, replacement) => {
  return text.replace(pattern, (...matchArgs) => {
    const matchLocation = matchArgs[matchArgs.length - 2];
    if (isEscaped(text, matchLocation)) {
      const originalText = matchArgs[0];
      return originalText;
    } else if (typeof replacement === 'function') {
      return replacement(...matchArgs);
    } else {
      return replacement;
    }
  });
};

module.exports = { isEscaped, replaceIfNotEscaped };
