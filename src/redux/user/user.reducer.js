/* This is the reducer for Users, it stores state of current user: */
    /* NOTES */
        // Reducers get state object (last state or initial state)
        //Reducers also receive an action (object that has a type and receives string value)
        //Reducers have a payload object
        // Have to return state / value you want since reducers receive any actions that fire

const INITIAL_STATE = {
    currentUser: null
}

//Define the reducer with some initial state:
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //Whenever this action type gets fired )SET_CURRENT_USER...
        case 'SET_CURRENT_USER':
            //return the state values and update the currentUser payload
            return {
                ...state,
                currentUser: action.payload
            }
        //if action we want doesn't fire, the default return state object:
        default:
            return state;
    }
};

export default userReducer;