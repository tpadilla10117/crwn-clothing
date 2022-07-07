import React, {useState} from 'react';
import { createAuthenticatedUser, createUserDocumentFromAuth } from '../../firebase/firebase.utils.js';

import FormInput from '../form-input/form-input.js';
import CustomButton from '../custom-button/custom-button.js';

/* For creating and authenticating new users */

import './sign-up.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};


const SignUp = () => {

    const [formfields, setFormFields] = useState(defaultFormFields);

    const { displayName, email, password, confirmPassword } = formfields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthenticatedUser (email, password);

            await createUserDocumentFromAuth(user, { displayName } );
            resetFormFields();
            
        } catch(error) {
            if(error.cide === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            }
            console.log('User creation encountered an error', error)
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formfields, [name]: value})
    };

    return (
        <div className='sign-up'>
            <h1 className='title'>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    type='text'
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}
                />

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

                <FormInput
                    label='Confirm Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword}
                />

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;