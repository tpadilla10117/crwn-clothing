import React, {/* useContext, */ Fragment } from 'react';
/* import { CategoriesContext } from '../../contexts/categories.context'; */
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../redux/categories/categories.selector';
import CollectionPreview from '../../components/collection-preview/collection-preview';

function CategoriesPreview() {
    //ContextAPI Code:
    /* const { categoriesMap } = useContext(CategoriesContext); */

    const categoriesMap = useSelector(selectCategoriesMap);

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