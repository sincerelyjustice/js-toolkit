const checkUtils = require('./utils/checks');
const escapingUtils = require('./utils/escaping');
const generatorUtils = require('./utils/generators');
const regexUtils = require('./utils/regex');
const transformationUtils = require('./utils/transformation');

module.exports = {
  ...checkUtils,
  ...escapingUtils,
  ...generatorUtils,
  ...regexUtils,
  ...transformationUtils,
};
