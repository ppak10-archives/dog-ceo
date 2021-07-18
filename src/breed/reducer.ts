/**
 * reducer.ts
 * Reducer for managing dog breed image.
 */

const INITIAL_STATE = {
  image: {},
};

export default function reducer(state = INITIAL_STATE, {payload, type}) {
  switch (type) {
    case 'SET_BREED_IMAGE':
      return {
        ...state,
        image: {
          ...state.image,
          [payload.breed]: payload.message,
        },
      };
    default: 
      return state;
  }
}
