import React from 'react';

import './sign-in.scss';
import FormInput from '../form-input/form-input.js';
import CustomButton from '../custom-button/custom-button';

import { signInWithGoogle, createUserDocumentFromAuth } from '../../firebase/firebase.utils.js';

const SignIn = () => {

/* Takes care of logging in with Google: */
    const logGoogleUser = async () => {
        const {user} = await signInWithGoogle();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    
    return(
        <div className="sign-in">
            <button onClick={logGoogleUser}>
                SignIn
            </button>
        </div>
    )
    
}

export default SignIn;