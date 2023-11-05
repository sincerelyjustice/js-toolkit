import type { AsyncFn } from '../types';
type TimeoutOptions = {
    timeout?: number;
    errorMessage?: string;
};
export declare const withTimeout: (fn: AsyncFn, options?: TimeoutOptions) => AsyncFn;
type RetryPromiseOptions = {
    retries?: number;
    delay?: number;
};
export declare const retryPromise: (fn: AsyncFn, options?: RetryPromiseOptions) => Promise<any>;
export {};
