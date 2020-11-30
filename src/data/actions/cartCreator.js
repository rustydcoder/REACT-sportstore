import { ActionTypes } from "../constant/Types";

const addToCart = (product, quantity) => ({
  type: ActionTypes.CART_ADD,
  payload: {
    product,
    quantity: quantity || 1,
  },
});

const updateCartQunatity = (product, quantity) => ({
  type: ActionTypes.CART_UPDATE,
  payload: {
    product,
    quantity,
  },
});

const removeFromCart = (product) => ({
  type: ActionTypes.CART_REMOVE,
  payload: product,
});

const clearCart = () => ({
  type: ActionTypes.CART_CLEAR,
});

export { addToCart, updateCartQunatity, removeFromCart, clearCart };
