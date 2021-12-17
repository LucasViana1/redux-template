import { call, put, all, takeLatest } from 'redux-saga/effects';
import { PRODUCTS_LOAD_REQUEST } from './types';
import api from '../../../utils/api';

import { productsFailure, productsLoadSuccess } from './actions';

function* getProducts() {
  try {
    const response = yield call(api.get, '/products');
    yield put(productsLoadSuccess(response.data));
  } catch (error) {
    yield put(productsFailure());
  }
}

export default all([takeLatest(PRODUCTS_LOAD_REQUEST, getProducts)]);
