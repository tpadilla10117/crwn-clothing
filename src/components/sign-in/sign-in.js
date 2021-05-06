import React from 'react';

import './sign-in.scss';
import FormInput from '../form-input/form-input.js';
import CustomButton from '../custom-button/custom-button';

import { signInWithGoogle } from '../../firebase/firebase.utils.js';
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password:''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
    }


    render() {
        return(
            <div className="sign-in">
                <h2>I Already Have An Account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" value={this.state.email} required label="email" onChange={this.handleChange}/>
                    
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} required label="password" onChange={this.handleChange}/>
                
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                    

                </form>
            </div>
        )
    }
}

export default SignIn;