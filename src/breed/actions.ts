/**
 * actions.ts
 * Actions for dog breed image.
 */

export const setBreedImage = (breed, message) => ({
  type: 'SET_BREED_IMAGE',
  payload: {
    breed,
    message,
  },
});
