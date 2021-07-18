/**
 * index.tsx
 * Entry file for app.
 */

// Node Modules
import {render} from 'react-dom';
import {Provider} from 'react-redux';

// Components
import App from './App';

// Store
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
