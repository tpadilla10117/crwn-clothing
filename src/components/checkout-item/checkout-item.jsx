import React, {/* useContext */} from 'react';
/* import { CartContext } from '../../contexts/cart.context'; */
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { addItemToCart, clearItemFromCart, removeItemFromCart} from '../../redux/cart/cart.actions';
import './checkout-item.scss';

function CheckoutItem( {cartItem}) {

    const dispatch = useDispatch();
    const { name, imageUrl, price, quantity } = cartItem;
    /* const { removeItemToCart, addItemToCart, clearItemToCart } = useContext(CartContext); */

    const cartItems = useSelector(selectCartItems);
    /* const clearItemHandler = () => clearItemToCart(cartItem); */
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems,cartItem) ); 

    /* const addItemHandler = () => addItemToCart(cartItem); */
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem) );

    /* const removeItemHandler = () => removeItemToCart(cartItem); */
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem) );

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>
                &#10005;
            </div>
        </div>
    )
}

export default CheckoutItem;