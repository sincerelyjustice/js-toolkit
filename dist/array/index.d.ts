import type { Primitive } from '../types';
export declare const hasLength: (array: any[]) => boolean;
export declare const removeDuplicates: (array: Primitive[]) => Primitive[];
export declare const range: (bound: number) => number[];
export declare const replaceElements: <T>(array: T[], predicate: (element: T) => boolean, replacement: any) => any[];
