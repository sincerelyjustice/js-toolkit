import path from 'path';

export const arrayToPath = (array: any[]) => {
  return path.join(...array);
};

export const forwardSlashes = (path: string) => {
  return path.replace(/\\/g, '/');
};

