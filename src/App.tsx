/**
 * App.tsx
 * Main react app component.
 */

// Node Modules
import {Provider} from 'react-redux';


// Components
import Exception from 'common/components/Exception';
import BreedsList from './breeds/components/List';

// Store
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Exception />
      <BreedsList />
    </Provider>
  );
}
