import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { addToCart, increaseQuantity } from '../../store/modules/cart/actions';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { productsInCart } = useSelector((state) => state.cart);
  const existInCart = productsInCart.find((productInCart) => productInCart.id === product.id);

  return (
    <div className="product">
      <b>{product.name}</b>
      <button type="button" onClick={() => dispatch(existInCart ? increaseQuantity(product) : addToCart(product))}>
        Adicionar
      </button>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
