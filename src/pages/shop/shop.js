import React, {useContext, Fragment} from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card';
import './shop.scss';

/* import CollectionPreview from '../../components/collection-preview/collection-preview.js'; */

const ShopPage = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <Fragment>
                
            {Object.keys(categoriesMap).map( (title) => (
                <Fragment key={title}>
                    <h2>{title}</h2>
                    <div className='products-container'>
                        {categoriesMap[title].map((product) => (
                          
                                <ProductCard 
                                    key={product.id}
                                    product={product}
                                />
                        ))}
                    </div>
                </Fragment>
            ))}
                
        </Fragment>
    );

};

export default ShopPage;