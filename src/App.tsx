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

// Hooks
import {useBreedsAPI} from  './breeds/hooks';

// Styled Components
const StyledApp = styled.div`
  font-family: sans-serif;
`;

const StyledBreedsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 10em);
  grid-template-rows: auto;
  grid-gap: 1em;
  list-style: none;
`;

const StyledBreedsListItem = styled.li`
  background-color: red;
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
  const breedsJSX = statusCode === 200 && isLoading === false ?
    Object.keys(breedsAll)
      .filter((breed) => breed.startsWith(value))
      .map((key) => (
      <StyledBreedsListItem key={key}>{key}</StyledBreedsListItem>
    ))
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
