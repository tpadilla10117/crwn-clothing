//Abstracting away actions:
import { AnyAction } from "redux"; //an interface with a Redux action of any type

//Type Predicate -> verifies that a specific argument is going to be a specific type

type Matchable<AC extends () => AnyAction> = AC & {
    type: ReturnType<AC>['type'];
    match(action: AnyAction): action is ReturnType<AC>;
}

export function withMatcher<AC extends () => AnyAction & { type: string}>(actionCreator: AC): Matchable<AC>;

export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string }>(actionCreator: AC) : Matchable<AC>;

export function withMatcher(actionCreator: Function ) {
    const type =  actionCreator().type;
    return Object.assign(actionCreator, {
        type,
        match(action: AnyAction) {
            return action.type === type;
        }
    })
};


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
