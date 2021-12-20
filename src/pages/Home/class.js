/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { PureComponent } from 'react';
import Header from '../../components/Header/class';
import Products from '../../components/Products/class';
import Summary from '../../components/Summary/class';
import './styles.css';

class Home extends PureComponent {
  render() {
    return (
      <main className="home">
        <Header />
        <Products />
        <Summary />
      </main>
    );
  }
}

export default Home;
