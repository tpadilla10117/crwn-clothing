import React from 'react';

import FormInput from '../form-input/form-input.js';
import CustomButton from '../custom-button/custom-button.js';

/* For creating and authenticating new users */
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            /* Creates new user account with specified email address and password - gives us back a user auth object, which is a key on user (this is why we destructure) */
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName} );
        
        /* We clear out the form */
            this.setState( { 
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            } )

        } catch(error) {
            console.error("We have an error:", error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    >
                    </FormInput>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label='email'
                        required
                    >
                    </FormInput>
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    >
                    </FormInput>
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    >
                    </FormInput>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;