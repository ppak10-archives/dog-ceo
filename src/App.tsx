/**
 * App.tsx
 * Main react app component.
 */

// Node Modules
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';


// Components
import Exception from 'common/components/Exception';
import Search from './breeds/components/Search';
import ListItem from './breed/components/ListItem';

// Hooks
import {useBreedsAPI} from  './breeds/hooks';

// Styled Components
const StyledApp = styled.div`
  font-family: sans-serif;
  padding: 0 1em;

  fieldset {
    border-radius: 1em;
  }
`;

const StyledBreedsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 20em);
  grid-template-rows: auto;
  grid-gap: 1em;
  list-style: none;
  padding: 1em;
`;

export default function App() {
  // Hooks
  const {get} = useBreedsAPI();

  const {isLoading, statusCode} = useSelector(({api}) => api.breeds);
  const breedsAll = useSelector(({breeds}) => breeds.all);

  const [value, setValue] = useState('');

  useEffect(() => {
    // Retrieve available dog breeds.
    get();
  }, [get]);

  // JSX
  const breedsJSX = statusCode === 200 && isLoading === false
  ? Object.keys(breedsAll)
    .filter((breed) => breed.startsWith(value))
    .map((key) => (<ListItem key={key} breed={key} />))
  : (
    <li>Loading...</li>
  );

  return (
    <StyledApp>
      <Exception />
      <h1>Dog Breeds</h1>
      <Search value={value} setValue={setValue} />
      <StyledBreedsList>
        {breedsJSX}
      </StyledBreedsList>
    </StyledApp>
  );
}
