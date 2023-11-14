import { isEmptyString } from './checks';
import { globalRegex } from './regex';

export const capitalize = (word: string) => {
  if (!isEmptyString(word)) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  } else return word;
};

export const joinSentences = (sentence1: string, sentence2: string) => {
  const normedSentence1 = sentence1.trim().replace(/\.$/, '');
  const normedSentence2 = sentence2.trim();
  return `${normedSentence1}. ${normedSentence2}`;
};

export const insertVariables = (
  string: string,
  variables: Record<string, string>
) => {
  let variabled = string;
  for (const [key, value] of Object.entries(variables)) {
    variabled = string.replace(globalRegex(`\\$\\{${key}\\}`), value);
  }
  return variabled;
};

export const csvToArray = (csv: string): string[] => {
  return isEmptyString(csv) ? [] : csv.split(',');
};

export const erasable = (string: string, erasureCondition: Boolean) => {
  return erasureCondition ? '' : string;
};
