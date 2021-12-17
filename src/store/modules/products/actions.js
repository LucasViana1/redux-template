import { PRODUCTS_LOAD_FAILURE, PRODUCTS_LOAD_REQUEST, PRODUCTS_LOAD_SUCCESS } from './types';

export function productsLoadRequest() {
  return {
    type: PRODUCTS_LOAD_REQUEST,
  };
}

export function productsLoadSuccess(products) {
  return {
    type: PRODUCTS_LOAD_SUCCESS,
    payload: {
      products,
    },
  };
}

export function productsFailure() {
  return {
    type: PRODUCTS_LOAD_FAILURE,
  };
}
