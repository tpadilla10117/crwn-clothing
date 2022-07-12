import { createContext, /* useState, */ useEffect, useReducer } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../firebase/firebase.utils';

// the values you want to access based on what was passed from the Provider component:
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

//Creating a userReducer function:

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
};

const userReducer = (state, action) => {
    console.log('dispatched')
    console.log(action);
    const { type, payload } = action;

    switch(type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in the userReducer!`);

    }
};

const INITIAL_STATE = {
    currentUser: null
};

//The functional component that receives children and
//returns a Provider (component) that wraps any other components that
//need access to values inside

/* - In app, you now get access to values passed from the UserProvider
<UserProvider>
    <app />
</UserProvider>

*/

export const UserProvider = ({ children }) => {
    //Reducer methods:
    const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE);
    
    const setCurrentUser = (user) => {
        dispatch( {
            type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user
        });
    };

    //UseState method:
    /* const [ currentUser, setCurrentUser ] = useState(null); */
    
    const value = { currentUser, setCurrentUser};

    useEffect( () => {
        const unsubscribe = onAuthStateChangedListener( (user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            };
            setCurrentUser(user);
            console.log('from onAuthStateChangedListener:', user);
        })

        return unsubscribe;

    }, []);


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}