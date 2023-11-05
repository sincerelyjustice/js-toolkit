const { isEmptyString } = require('./checks');

const capitalize = (word) => {
  if (!isEmptyString(word)) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  } else return word;
};

const csvToArray = (csv) => {
  return isEmptyString(csv) ? [] : csv.split(',');
};

module.exports = { capitalize, csvToArray };
