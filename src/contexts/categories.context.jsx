import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments} from "../firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

//Fetch call for our data (firebase) for the UI:
    useEffect( () => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            /* console.log(categoryMap) */
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    },[]);

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
};