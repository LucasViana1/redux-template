import { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import PropTypes from 'prop-types'

class Header extends Component {
  static propTypes = {
    productsInCart: PropTypes.array.isRequired
  }

  render() {
    const {productsInCart} = this.props;
    const total = productsInCart.reduce((acc, product) => acc + product.quantity, 0);

    return (
      <header className="header">
        <div>Carrinho: {total}</div>
      </header>
    );
  }

};

const mapStateToProps = (state) => ({
  productsInCart: state.cart.productsInCart,
});

export default connect(mapStateToProps)(Header);
