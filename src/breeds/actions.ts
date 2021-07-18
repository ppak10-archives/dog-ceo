/**
 * actions.ts
 * Actions for dog breeds.
 */

export const setBreeds = (message) => ({
  type: 'SET_BREEDS',
  payload: {
    // Matches key provided in response.
    message,
  },
});
