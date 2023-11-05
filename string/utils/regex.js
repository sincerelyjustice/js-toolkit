const globalRegex = (regex) => {
  return new RegExp(regex, 'g');
};

const matchesAny = (string, regexps) => {
  for (const regex of regexps) {
    if (regex.test(string)) {
      return true;
    }
  }
  return false;
};

module.exports = { globalRegex, matchesAny };
