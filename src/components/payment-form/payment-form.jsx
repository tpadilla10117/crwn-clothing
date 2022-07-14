import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import CustomButton  from '../custom-button/custom-button';
import './payment-form.scss';

function PaymentForm() {

    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [ isProcessingPayment, setIsProcessingPayment ] = useState(false);

    const paymentHandler = async (event) => {
        event.preventDefault();

        if(!stripe || !elements) {
            return;
        };

        setIsProcessingPayment(true);

        //making a payment intent to our backend:
        const response = await fetch('../../../netlify/functions/create-payment-intent.js', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {amount: amount * 100 }),
        }).then((res) => res.json());

        console.log('Response from Netlify:', 'hello')
        console.log('Response from Netlify:', response)

        const clientSecret = response.paymentIntent.client_secret;
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details:{
                    name: currentUser ? currentUser.displayName : 'Guest',
                }
            }
        });

        setIsProcessingPayment(false);

        if(paymentResult.error) {
            alert(paymentResult.error) 
        } else {
            if(paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful')
            }
        }
    }

    return (
        <div className='paymentform-container'>
            <form className='form-container' onSubmit={paymentHandler}>
                <h2>Credit Card Payment</h2>
                <CardElement />
                <CustomButton isLoading={isProcessingPayment}>Pay Now</CustomButton>
            </form>
        </div>
    )
}

export default PaymentForm;