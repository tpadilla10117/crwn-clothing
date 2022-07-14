import React, {useState} from 'react';

import { 
    signInWithGoogle,
    signInAuthenticatedUser
} from '../../firebase/firebase.utils.js';

import FormInput from '../form-input/form-input.js';
import CustomButton from '../custom-button/custom-button.js';

/* For creating and authenticating new users */

import './sign-in-form.scss';

const defaultFormFields = {
    email: '',
    password: '',
};


const SignInForm = () => {

    const [formfields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formfields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    /* Takes care of logging in with Google: */
    const signInWithGoogleHandler = async () => {
       await signInWithGoogle();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
           /* const {user} = await signInAuthenticatedUser(email, password); */
           await signInAuthenticatedUser(email, password)
            resetFormFields();
            
        } catch(error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email')
                    break;
                default:
                    console.log(error)
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formfields, [name]: value})
    };

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span className='title'>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />

                <div className='buttons-container'>
                    <CustomButton type='submit'>Sign In</CustomButton>

                    <CustomButton
                        type='button'
                        buttonType='google' 
                        onClick={signInWithGoogleHandler}
                    >
                        Google sign in
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;