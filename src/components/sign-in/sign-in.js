import React from 'react';

import './sign-in.scss';
import FormInput from '../form-input/form-input.js';
import CustomButton from '../custom-button/custom-button';

import { signInWithGoogle } from '../../firebase/firebase.utils.js';

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGoogle();
        console.log(response);
    }
    
    return(
        <div className="sign-in">
            <button onClick={logGoogleUser}>
                SignIn
            </button>
        </div>
    )
    
}

export default SignIn;