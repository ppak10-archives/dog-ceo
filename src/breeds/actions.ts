/**
 * actions.ts
 * Actions for dog breeds.
 */

export const setBreedsAll = (message) => ({
  type: 'SET_BREEDS_ALL',
  payload: {
    // Matches key provided in response.
    message,
  },
});
