import { createContext, useState } from 'react';

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
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}