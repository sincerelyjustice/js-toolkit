import type { AsyncFn } from '../types';
type TimeoutOptions = {
    timeout?: number;
    errorMessage?: string;
};
export declare const withTimeout: (fn: AsyncFn, options?: TimeoutOptions) => () => Promise<any>;
type RetryPromiseOptions = {
    retries?: number;
    delay?: number;
};
export declare const retryPromise: (fn: AsyncFn, options?: RetryPromiseOptions) => Promise<unknown>;
export {};
