import { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';
import { addToCart, increaseQuantity } from '../../store/modules/cart/actions';

class Product extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    productsInCart: PropTypes.func,
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { dispatch, productsInCart } = this.props;
    const existInCart = productsInCart.find((productInCart) => productInCart.id === product.id);

    return (
      <div className="product">
        <b>{product.name}</b>
        <button type="button" onClick={() => dispatch(existInCart ? increaseQuantity(product) : addToCart(product))}>
          Adicionar
        </button>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  productsInCart: state.cart.productsInCart,
});

const mapDispatch = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatch)(Product);
