import { FETCH_THUMBNAILS, FETCH_THUMBNAILS_FULFILLED } from './actions';

const defaultState = {
  data: [],
  page: 0,
  fetching_status: null
};

export const fetchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_THUMBNAILS_FULFILLED:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
