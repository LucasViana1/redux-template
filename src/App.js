import { Provider } from 'react-redux';
import './global.css';
import store from './store';
// import Home from './pages/Home';
import Home from './pages/Home/class';

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
