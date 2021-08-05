import { createSelector } from 'reselect';

//Input Selectors:
    //A function that gets the whole state and only returns a portion of it;
    const selectCart = state => state.cart;



//Output Selectors:
    //
//This is a memoized Selector:
export const selectCartItems = createSelector(
    /* Array of input selectors */
    [ selectCart ]
    , (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems], cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity, 0
    )
);

export const selectCartTotal = createSelector(
    [selectCartItems], cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity * cartItem.price, 0
    )
);