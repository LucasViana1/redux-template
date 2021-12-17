import { useDispatch, useSelector } from 'react-redux';
import { removeToCart, decreaseQuantity, increaseQuantity } from '../../store/modules/cart/actions';
import './styles.css';

const Summary = () => {
  const dispatch = useDispatch();
  const { productsInCart } = useSelector((state) => state.cart);

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
};

export default Summary;
