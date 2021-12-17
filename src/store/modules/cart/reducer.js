import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT, CART_DECREASE_QUANTITY, CART_INCREASE_QUANTITY } from './types';

const INITIAL_STATE = {
  productsInCart: [],
};

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ADD_PRODUCT:
      return {
        ...state,
        productsInCart: [...state.productsInCart, { ...action.payload.product, quantity: 1 }],
      };

    case CART_REMOVE_PRODUCT:
      return {
        ...state,
        productsInCart: state.productsInCart.filter((product) => product.id !== action.payload.product.id),
      };

    case CART_DECREASE_QUANTITY:
      return {
        ...state,
        productsInCart: state.productsInCart.map((product) => ({
          ...product,
          quantity: product.id === action.payload.product.id ? product.quantity - 1 : product.quantity,
        })),
      };

    case CART_INCREASE_QUANTITY:
      return {
        ...state,
        productsInCart: state.productsInCart.map((product) => ({
          ...product,
          quantity: product.id === action.payload.product.id ? product.quantity + 1 : product.quantity,
        })),
      };

    default:
      return state;
  }
};

export default cart;
