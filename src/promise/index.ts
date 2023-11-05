import type { AsyncFn } from '../types';

type TimeoutOptions = {
  timeout?: number;
  errorMessage?: string;
};

export const withTimeout = (
  fn: AsyncFn,
  options: TimeoutOptions = {}
): AsyncFn => {
  const { timeout = 5000, errorMessage = 'Request timed out.' } = options;
  let timer: ReturnType<typeof setTimeout>;
  const timeouter = () =>
    new Promise((_, reject) => {
      timer = setTimeout(() => {
        reject(new Error(errorMessage));
      }, timeout);
    });
  return () =>
    Promise.race([fn(), timeouter()]).finally(() => clearTimeout(timer));
};

type RetryPromiseOptions = {
  retries?: number;
  delay?: number;
};

export const retryPromise = (
  fn: AsyncFn,
  options: RetryPromiseOptions = {}
): Promise<any> => {
  const { retries = 3, delay = 1000 } = options;
  let triesLeft = retries;
  return new Promise((resolve, reject) => {
    const attempt = () => {
      fn()
        .then(resolve)
        .catch((err) => {
          if (triesLeft === 0) {
            reject(err);
          } else {
            setTimeout(() => {
              triesLeft--;
              attempt();
            }, delay);
          }
        });
    };
    attempt();
  });
};
