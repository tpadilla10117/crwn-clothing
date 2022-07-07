import React from 'react';

import './authentication.scss';
import SignInForm from '../../components/sign-in-form/sign-in-form';
import SignUp from '../../components/sign-up/sign-up';

const Authentication = () => {
    
    return(
        <div className='authentication-container'>
           <SignInForm />
           <SignUp />
        </div>
    )
    
}

export default Authentication;