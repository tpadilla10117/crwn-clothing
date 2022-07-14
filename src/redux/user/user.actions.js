/* This is where the actions occur (functions that return objects): */

    import { UserActionTypes } from "./user.types";
    import { createAction } from '../utils/reducer.utils.js';

    //Action creation has to match the reducers type expection:
    export const setCurrentUser = (user) => createAction(UserActionTypes.SET_CURRENT_USER, user);
        
    export const checkUserSession = () =>
    createAction(UserActionTypes.CHECK_USER_SESSION);

    export const googleSignInStart = () =>
    createAction(UserActionTypes.GOOGLE_SIGN_IN_START);

    export const emailSignInStart = (email, password) =>
    createAction(UserActionTypes.EMAIL_SIGN_IN_START, { email, password });

    export const signInSuccess = (user) =>
    createAction(UserActionTypes.SIGN_IN_SUCCESS, user);

    export const signInFailed = (error) =>
    createAction(UserActionTypes.SIGN_IN_FAILED, error);

    export const signUpStart = (email, password, displayName) =>
    createAction(UserActionTypes.SIGN_UP_START, {
        email,
        password,
        displayName,
    });

    export const signUpSuccess = (user, additionalDetails) =>
    createAction(UserActionTypes.SIGN_UP_SUCCESS, { user, additionalDetails });

    export const signUpFailed = (error) =>
    createAction(UserActionTypes.SIGN_UP_FAILED, error);

    export const signOutStart = () =>
    createAction(UserActionTypes.SIGN_OUT_START);

    export const signOutSuccess = () =>
    createAction(UserActionTypes.SIGN_OUT_SUCCESS);

    export const signOutFailed = (error) =>
    createAction(UserActionTypes.SIGN_OUT_FAILED, error);