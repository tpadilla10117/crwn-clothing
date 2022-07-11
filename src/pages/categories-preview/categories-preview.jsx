import React, {useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CollectionPreview from '../../components/collection-preview/collection-preview';

function CategoriesPreview() {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <Fragment>
                
            {Object.keys(categoriesMap).map( (title) => {
                const products = categoriesMap[title];
                return <CollectionPreview key={title} title={title} products={products}/>
            })}
                
        </Fragment>
    );
}

export default CategoriesPreview;