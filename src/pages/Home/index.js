import Header from '../../components/Header';
import Products from '../../components/Products';
import Summary from '../../components/Summary';
import './styles.css';

const Home = () => (
  <main className="home">
    <Header />
    <Products />
    <Summary />
  </main>
);

export default Home;
