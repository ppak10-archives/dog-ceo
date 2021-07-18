/**
 * routes.ts
 * Routes for retireving dog breed info.
 */

// API
import {handleFetchRequest} from 'common/utils';

export const getBreedImage = (breed: string) => handleFetchRequest(
  `/api/breed/${breed}/images/random`
);
