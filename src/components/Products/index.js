import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product';
import { productsLoadRequest } from '../../store/modules/products/actions';

import './styles.css';

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productsLoadRequest());
  }, [dispatch]);

  return (
    <section className="products">
      <h2>Lista de produtos:</h2>
      {loading && <strong>Carregando...</strong>}
      {!loading && products && products.map((product) => <Product key={product.id} product={product} />)}
    </section>
  );
};

export default Products;
