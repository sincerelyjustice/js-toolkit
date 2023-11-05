const cssUtils = require('./utils/css');
const htmlUtils = require('./utils/html');
const urlUtils = require('./utils/url');

module.exports = {
  ...cssUtils,
  ...htmlUtils,
  ...urlUtils,
};
