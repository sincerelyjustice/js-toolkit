import type { Primitive } from '../types';

export const removeDuplicates = (array: Primitive[]): Primitive[] => {
  const uniques = [];
  const seen: Record<string, boolean> = {};
  for (const item of array) {
    const key = `${typeof item}_${item}`;
    if (!seen[key]) {
      uniques.push(item);
      seen[key] = true;
    }
  }
  return uniques;
};

export const range = (bound: number): number[] => {
  const rangeArr = [];
  for (let i = 0; i <= bound; i++) {
    rangeArr.push(i);
  }
  return rangeArr;
};
