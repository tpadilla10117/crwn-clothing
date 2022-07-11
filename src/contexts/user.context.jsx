import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../firebase/firebase.utils';

// the values you want to access based on what was passed from the Provider component:
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

//The functional component that receives children and
//returns a Provider (component) that wraps any other components that
//need access to values inside

/* - In app, you now get access to values passed from the UserProvider
<UserProvider>
    <app />
</UserProvider>

*/

export const UserProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null);
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