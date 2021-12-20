import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../Product';
import { productsLoadRequest } from '../../store/modules/products/actions';
import './styles.css';

class Products extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(productsLoadRequest());
  }

  render() {
    const { products, loading } = this.props;

    return (
      <section className="products">
        <h2>Lista de produtos:</h2>
        {loading && <strong>Carregando...</strong>}
        {!loading && products && products.map((product) => <Product key={product.id} product={product} />)}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  loading: state.products.loading,
});

const mapDispatch = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatch)(Products);
