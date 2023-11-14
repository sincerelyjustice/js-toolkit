import { Primitive } from "../types";
export declare const equalityFactory: <T>(target: T) => (source: T) => boolean;
export declare const negator: (fn: Function) => (...args: any[]) => boolean;
export declare const propertyMatcher: (key: PropertyKey, value: Primitive) => (obj: Record<PropertyKey, any>) => boolean;
export declare const pipe: (args: any[], ...fns: Function[]) => any;
