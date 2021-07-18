/**
 * routes.ts
 * Routes for retrieving dog breeds.
 */

// API
import {handleFetchRequest} from 'common/utils';

export const getBreeds = () => handleFetchRequest('/api/breeds/list/all');
