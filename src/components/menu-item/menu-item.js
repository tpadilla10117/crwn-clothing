import React from 'react';
import { useNavigate } from 'react-router-dom';
import './menu-item.scss';

const MenuItem =({ title, imageUrl, size,linkUrl }) => {

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(linkUrl);

    return (

        <div className={`${size} menu-item`} onClick={onNavigateHandler}>
            <div className="background-image" style={ {
            backgroundImage: `url(${imageUrl})`
            }}>
            </div>
    
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    
    )
};

/* export default withRouter(MenuItem); */
export default MenuItem;