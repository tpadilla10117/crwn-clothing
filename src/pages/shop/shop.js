import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
import { getCategoriesAndDocuments } from '../../firebase/firebase.utils';
import { setCategoriesMap} from '../../redux/categories/categories.action';
import { useDispatch } from 'react-redux';
import './shop.scss';

const ShopPage = () => {
    const dispatch = useDispatch();

    //Fetch call for our data (firebase) for the UI:
    useEffect( () => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            /* console.log(categoryMap) */
            dispatch(setCategoriesMap(categoryMap) );
        };
        getCategoriesMap();
    },[dispatch]);

    return (
        <Routes>
                
           <Route index element={<CategoriesPreview/>} />
           <Route path=":category" element={<Category/>} />
                
        </Routes>
    );

};

export default ShopPage;