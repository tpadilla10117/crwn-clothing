/* This is the base reducer object that represents the state in our  Redux object store: */

//It combines our state(s) together

import { combineReducers } from "redux"; //to combine reducers together in store
import userReducer from "./user/user.reducer";

//Where we manage the slices of state (reducers):
export default combineReducers( {
    user: userReducer
})