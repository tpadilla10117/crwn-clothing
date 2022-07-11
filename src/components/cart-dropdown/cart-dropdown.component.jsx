import React, { useContext } from 'react';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import './cart-dropdown.styles.scss';

function CartDropdown() {

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
    
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItems.map( (item) => {
            return (
              <CartItem key={item.id} cartItem={item} />
            )
          }) } 
        </div>
        <CustomButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown;