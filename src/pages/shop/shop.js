import React, {useContext} from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card';
import './shop.scss';

/* import CollectionPreview from '../../components/collection-preview/collection-preview.js'; */

const ShopPage = () => {
    const { products } = useContext(ProductsContext);

    return (
        <div className='products-container'>
            {products.map((product) => {
                return (
                    <ProductCard 
                        key={product.id}
                        product={product}
                    />
                )
            }
                
            )}
        </div>
    )

};

export default ShopPage;