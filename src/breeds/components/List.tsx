/**
 * List.tsx
 * Retrieves list of available dog breeds.
 */

// Node Modules
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';


// Hooks
import {useBreedsAPI} from  '../hooks';

// Styled Components
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

export default function List() {
  // Hooks
  const {get} = useBreedsAPI();

  const {isLoading, statusCode} = useSelector(({api}) => api.breeds);
  const breedsAll = useSelector(({breeds}) => breeds.all);

  useEffect(() => {
    get();
  }, [get]);

  // JSX
  const breedsJSX = statusCode === 200 && isLoading === false ?
    Object.keys(breedsAll).map((key) => (
      <StyledBreedsListItem key={key}>{key}</StyledBreedsListItem>
    ))
    : (
    <li>Loading...</li>
  );

  return (
    <div>
      <h1>Dog Breeds</h1>
      <StyledBreedsList>
        {breedsJSX}
      </StyledBreedsList>
    </div>
  );
}