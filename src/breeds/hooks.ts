/**
 * hooks.ts
 * Hook for managing dog breeds.
 */

// Node Modules
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';


// Actions
import {setBreeds} from './actions';

// Hooks
import {useAPIResponse} from 'api/hooks';

import {getBreeds} from './routes';

export function useBreedsAPI() {
  // Hooks
  const dispatch = useDispatch();
  const handleResponse = useAPIResponse('BREEDS');

  // Callbacks
  const get = useCallback(
    async () => handleResponse(
      () => getBreeds(),
      (data) => dispatch(setBreeds(data.message || {})),
    ),
    [dispatch, handleResponse],
  );

  return {get};
}
