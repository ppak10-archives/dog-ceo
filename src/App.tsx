/**
 * App.tsx
 * Main react app component.
 */

// Node Modules
import {Provider} from 'react-redux';
import styled from 'styled-components';


// Components
import Exception from 'common/components/Exception';
import Search from './breeds/components/Search';

// Store
import store from './store';

// Styled Components
const StyledApp = styled.div`
  font-family: sans-serif;
`;

export default function App() {
  return (
    <Provider store={store}>
      <StyledApp>
        <Exception />
        <h1>Dog Breeds</h1>
        <fieldset>
          <legend>Search</legend>
          <Search />
        </fieldset>
      </StyledApp>
    </Provider>
  );
}
