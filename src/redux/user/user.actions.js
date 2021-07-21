/* This is where the actions occur (functions that return objects): */

    import { UserActionTypes } from "./user.types";

    //Action creation has to match the reducers type expection:
    export const setCurrentUser = user => ( {
        //Use all capital characters to keep it exact:
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
    })