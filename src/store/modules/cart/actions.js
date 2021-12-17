import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT, CART_DECREASE_QUANTITY, CART_INCREASE_QUANTITY } from './types';

export function addToCart(product) {
  return {
    type: CART_ADD_PRODUCT,
    payload: {
      product,
    },
  };
}

export function removeToCart(product) {
  return {
    type: CART_REMOVE_PRODUCT,
    payload: {
      product,
    },
  };
}

export function increaseQuantity(product) {
  return {
    type: CART_INCREASE_QUANTITY,
    payload: {
      product,
    },
  };
}

export function decreaseQuantity(product) {
  return {
    type: CART_DECREASE_QUANTITY,
    payload: {
      product,
    },
  };
}
