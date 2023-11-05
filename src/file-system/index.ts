import path from 'path';

export const arrayToPath = (array: any[]): string => {
  return path.join(...array);
};

export const forwardSlashes = (path: string): string => {
  return path.replace(/\\/g, '/');
};

