/**
 * ListItem.tsx
 * Breed list item to display image with text overlay.
 */

// Node Modules
import {string} from 'prop-types';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';


// Constants
const LOADING_IMAGE_SRC = `
  https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif
`;

// Hooks
import {useBreedAPI} from '../hooks';

// Styled Components
const StyledListItem = styled.li`
  align-items: center;
  display: flex;
  height: 20em;
  justify-content: center;
  position: relative;
  width: 20em;
`;

const StyledImage = styled.img`
  border-radius: 1em;
  border-style: solid;
  border-width: 0.25em;
  height: 100%;
  position: absolute;
  width: 100%;
`;

const StyledH6 = styled.h1`
  color: white;
  -webkit-text-stroke: 0.05em black;
  z-index: 1;
`;

export default function ListItem({breed}) {
  // Hooks
  const {get} = useBreedAPI();

  const breedImage = useSelector(({breed}) => breed.image);

  useEffect(() => {
    if (!breedImage[breed]) {
      get(breed);
    }
  }, [breed, breedImage[breed], get]);

  // JSX

  return (
    <StyledListItem>
      <StyledH6>{breed}</StyledH6>
      <StyledImage src={breedImage[breed] || LOADING_IMAGE_SRC} />
    </StyledListItem>
  );
}

ListItem.propTypes = {
  breed: string.isRequired,
};
