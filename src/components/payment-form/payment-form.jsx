import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import CustomButton  from '../custom-button/custom-button';
import './payment-form.scss';

function PaymentForm() {

    const paymentHandler = async (event) => {
        event.preventDefault();
    }

    return (
        <div className='paymentform-container'>
            <div className='form-container'>
                <h2>Credit Card Payment</h2>
                <CardElement />
                <CustomButton>Pay Now</CustomButton>
            </div>
        </div>
    )
}

export default PaymentForm;