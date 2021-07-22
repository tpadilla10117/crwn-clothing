import React from 'react';

import CollectionItem from '../collection-item/collection-item.js';
import './collection-preview.scss';

const CollectionPreview = ( {title, items} ) => (
    <div className='collection-preview'>
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {/* Here we filter out 4 items and map out the rets of the items */}
            {
                items.filter( (item, idx) => idx < 4).map( item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;