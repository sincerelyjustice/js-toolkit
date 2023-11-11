export const copyJson = <T>(json: T): T => {
  return JSON.parse(JSON.stringify(json));
};

export const isEmptyObj = (obj: Record<PropertyKey, any>) => {
  return !Boolean(Object.keys(obj).length);
};
