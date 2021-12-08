import Product from '../Product';
import './styles.css';

const Products = () => (
  <section className="products">
    <h2>Lista de produtos:</h2>
    <Product />
    <Product />
    <Product />
    <Product />
  </section>
);

export default Products;
