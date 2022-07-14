import React from 'react';

import './custom-button.scss';

const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
};

const CustomButton = ( { children, buttonType, isLoading, ...otherProps }) => (
    <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}` } {...otherProps} disabled={isLoading}>
        {isLoading ? <div className='spinner-container'></div> : children}
    </button>
)

export default CustomButton;