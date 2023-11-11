import { Primitive } from "../types";

export const equalityFactory = <T>(target: T) => {
  return (source: T) => source === target;
};

export const negator = (fn: Function) => {
  return (...args: any[]) => !fn(...args);
};

export const makePropertyMatcher = (key: PropertyKey, value: Primitive) => {
  return (obj: Record<PropertyKey, any>) => obj[key] === value; 
};

export const pipe = (args: any[], ...fns: Function[]) => {
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
