import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { removeToCart, decreaseQuantity, increaseQuantity } from '../../store/modules/cart/actions';
import PropTypes from 'prop-types';
import './styles.css';

class Summary extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    productsInCart: PropTypes.array.isRequired,
  }

  render() {
    const { dispatch, productsInCart } = this.props;

    return (
      <aside className="summary">
        <h2>Resumo do pedido</h2>

        <ul>
          {productsInCart &&
            productsInCart.map((product) => (
              <li key={product.id}>
                <p>
                  {product.id} - {product.name} {product.quantity}x
                </p>

                <div className="summary-button">
                  <button type="button" onClick={() => dispatch(removeToCart(product))} style={{ background: 'red' }}>
                    x
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch(product.quantity === 1 ? removeToCart(product) : decreaseQuantity(product))}
                    style={{ background: 'yellow' }}
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch(increaseQuantity(product))}
                    style={{ background: 'green' }}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </aside>
    );
  }
};

const mapStateToProps = (state) => ({
  productsInCart: state.cart.productsInCart,
});

const mapDispatch = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatch)(Summary);
