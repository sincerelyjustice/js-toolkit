export const copyJson = (json: object): object => {
  return JSON.parse(JSON.stringify(json));
};

export const isEmptyObj = (obj: object): boolean => {
  return !Boolean(Object.keys(obj).length);
};
