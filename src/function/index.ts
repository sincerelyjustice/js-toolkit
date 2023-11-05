export const equalityFactory = <T>(target: T) => {
  return (source: T) => source === target;
};

export const negator = (fn: Function): Function => {
  return (...args: any[]) => !fn(...args);
};

export const pipe = (args: any[], ...fns: Function[]): any => {
  let result;
  for (let i = 0; i < fns.length; i++) {
    const fn = fns[i];
    if (i === 0) {
      result = fn(...args);
    } else {
      result = fn(result);
    }
  }
  return result;
};