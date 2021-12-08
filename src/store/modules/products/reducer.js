const INITIAL_STATE = {
  products: [],
  loading: false,
};

const products = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@products/LOAD_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case '@products/LOAD_SUCCESS':
      return {
        ...state,
        products: action.payload.products,
        loading: false,
      };

    case '@products/LOAD_FAILURE':
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default products;
