import { Provider } from 'react-redux';
import Home from './pages/Home';
import './global.css';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
