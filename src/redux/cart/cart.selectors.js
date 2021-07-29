import { createSelector } from 'reselect';

//Input Selectors:
    //A function that gets the whole state and only returns a portion of it;
    const selectCart = state => state.cart;



//Output Selectors:
    //
//This is a memoized Selector:
export const selectCartItems = createSelector(
    [ selectCart ],
    (cart) => cart.cartItems
);