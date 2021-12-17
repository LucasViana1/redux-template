import { useSelector } from 'react-redux';
import './styles.css';

const Header = () => {
  const { productsInCart } = useSelector((state) => state.cart);
  const total = productsInCart.reduce((acc, product) => acc + product.quantity, 0);

  return (
    <header className="header">
      <div>Carrinho: {total}</div>
    </header>
  );
};

export default Header;
