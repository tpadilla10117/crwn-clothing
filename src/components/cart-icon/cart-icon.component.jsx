import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ( {toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden() )
});

//The selector -> pulls off small portion of state

//We need to use memoization -> if the properties from state are the same as ones being used (value hasnt changed & output not diff), keep the old value and prevent a React re-render

/* Use this to keep track of our cart-icons total number of products in the cart. .reducer() is key */
const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce( (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);