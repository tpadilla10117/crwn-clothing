import React from 'react';
import './shop.data.js';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.js';

const ShopPage = () => {

    return (
        <div>
            {SHOP_DATA.map(({id, title}) => {
                return (
                    <div key={id}>
                    <h1>{title}</h1>
                </div>
                )
            }
                
            )}
        </div>
    )

};

export default ShopPage;