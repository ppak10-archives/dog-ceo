/**
 * routes.ts
 * Routes for retrieving dog breeds.
 */

// API
import {handleFetchRequest} from 'common/utils';

export const getBreedsAll = () => handleFetchRequest('/api/breeds/list/all');
