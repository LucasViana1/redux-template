export function productsLoadRequest() {
  return {
    type: '@products/LOAD_REQUEST',
  };
}

export function productsLoadSuccess(products) {
  return {
    type: '@products/LOAD_SUCCESS',
    payload: {
      products,
    },
  };
}

export function productsFailure() {
  return {
    type: '@products/LOAD_FAILURE',
  };
}
