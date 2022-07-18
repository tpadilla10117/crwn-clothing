//Abstracting away actions:
import { AnyAction } from "redux"; //an interface with a Redux action of any type

//Generics with types:
export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
};

export type Action<T> = {
    type: T;
};

/* Function Overloading:

- ability to make multiple function type definitions of the same name
- allow a function to receive different parameter types depending on the parameter types we receive
- e.g. we can have multiple type definitions for 'createAction'

*/

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

export function createAction<T extends string>(type: T, payload: void): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
    return { type, payload};
}
