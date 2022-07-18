import React, { memo } from 'react'; //we use memo to memoize the individual cartItems so they don't get re-rendered
import './cart-item.styles.scss';

const CartItem = memo(( { cartItem }) => {

    const { name, quantity, imageUrl, price } = cartItem;

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    )
});

export default CartItem;