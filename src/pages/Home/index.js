import { useEffect } from 'react';
import Header from '../../components/Header';
import Products from '../../components/Products';
import Summary from '../../components/Summary';
import './styles.css';
import api from '../../utils/api';

const Home = () => {
  const getProducts = async () => {
    await api.get('/products');
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="home">
      <Header />
      <Products />
      <Summary />
    </main>
  );
};

export default Home;
