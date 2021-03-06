/**
 * reducer.ts
 * Reducer for managing dog breeds.
 */

const INITIAL_STATE = {
  all: {},
};

export default function reducer(state = INITIAL_STATE, {payload, type}) {
  switch (type) {
    case 'SET_BREEDS_ALL':
      return {
        ...state,
        all: payload.message,
      };
    default:
      return state;
  }
}
