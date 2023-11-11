export const globalRegex = (regex: string | RegExp)  => {
  return new RegExp(regex, 'g');
};

export const matchesAny = (string: string, regexps: RegExp[]) => {
  for (const regex of regexps) {
    if (regex.test(string)) {
      return true;
    }
  }
  return false;
};
