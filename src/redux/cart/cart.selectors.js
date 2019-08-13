import {createSelector} from "reselect";

// input selector
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],   // Array of input selectors
    cart => cart.cartItems // Returned output
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((total, {quantity}) => total + quantity, 0)
);