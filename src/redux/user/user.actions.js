/* This is where the actions occur (functions that return objects): */

    import { UserActionTypes } from "./user.types";
    import { createAction } from '../utils/reducer.utils.js';

    //Action creation has to match the reducers type expection:
    export const setCurrentUser = (user) => createAction(UserActionTypes.SET_CURRENT_USER, user);
        
    