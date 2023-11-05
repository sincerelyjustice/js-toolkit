const copyJson = (json) => {
  return JSON.parse(JSON.stringify(json));
};

const isEmptyObj = (obj) => {
  return !Boolean(Object.keys(obj).length);
};

module.exports = { copyJson, isEmptyObj };
