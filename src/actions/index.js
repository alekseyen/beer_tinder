export const SELECT_NEXT_BEER = 'SELECT_NEXT_BEER';
export const MATCH_BEER = 'MATCH_BEER';

export const matchBeer = id => ({
  type: MATCH_BEER,
  payload: {
    id,
  },
});

export const selectNextBeer = () => ({
  type: SELECT_NEXT_BEER,
});
