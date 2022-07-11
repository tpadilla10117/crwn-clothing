import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
import './shop.scss';

/* import CollectionPreview from '../../components/collection-preview/collection-preview.js'; */

const ShopPage = () => {

    return (
        <Routes>
                
           <Route index element={<CategoriesPreview/>} />
           <Route path=":category" element={<Category/>} />
                
        </Routes>
    );

};

export default ShopPage;