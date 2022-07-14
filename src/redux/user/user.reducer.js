/* This is the reducer for Users, it stores state of current user: */
    /* NOTES */
        // Reducers get state object (last state or initial state)
        //Reducers also receive an action (object that has a type and receives string value)
        //Reducers have a payload object
        // Have to return state / value you want since reducers receive any actions that fire

import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
}

//Define the reducer with some initial state:
const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        //Whenever this action type gets fired )SET_CURRENT_USER...
        case UserActionTypes.SET_CURRENT_USER:
            //return the state values and update the currentUser payload
            return {
                ...state,
                currentUser: action.payload
            };
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: payload
            };
        case UserActionTypes.EMAIL_SIGN_IN_START:
            return {
                ...state,
                currentUser: payload
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return { ...state, currentUser: null };
        case UserActionTypes.SIGN_OUT_FAILED:
        case UserActionTypes.SIGN_IN_FAILED:
        case UserActionTypes.SIGN_UP_FAILED:
        return { ...state, error: payload };
        //if action we want doesn't fire, the default return state object:
        default:
            return state;
    }
};

export default userReducer;