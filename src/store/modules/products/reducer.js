import { PRODUCTS_LOAD_FAILURE, PRODUCTS_LOAD_REQUEST, PRODUCTS_LOAD_SUCCESS } from './types';

const INITIAL_STATE = {
  products: [],
  loading: false,
};

const products = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case PRODUCTS_LOAD_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        loading: false,
      };

    case PRODUCTS_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default products;
