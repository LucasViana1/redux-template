import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import Products from '../../components/Products';
import Summary from '../../components/Summary';
import './styles.css';
import { productsLoadRequest } from '../../store/modules/products/actions';

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productsLoadRequest());
  }, [dispatch]);

  console.log(products);
  return (
    <main className="home">
      <Header />
      <Products />
      <Summary />
    </main>
  );
};

export default Home;
