/**
 * hooks.ts
 * Hook for managing dog breed.
 */

// Node Modules
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';


// Actions
import {setBreedImage} from './actions';

// Hooks
import {useAPIResponse} from 'api/hooks';

import {getBreedImage} from './routes';

export function useBreedAPI() {
  // Hooks
  const dispatch = useDispatch();
  const handleResponse = useAPIResponse('BREED');

  // Callbacks
  const get = useCallback(
    async (breed: string) => handleResponse(
      () => getBreedImage(breed),
      (data) => dispatch(setBreedImage(breed, data.message)),
    ),
    [dispatch, handleResponse],
  );

  return {get};
}
