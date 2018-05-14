import {
  FETCH_THUMBNAILS_FULFILLED,
  FETCH_PHOTO_INFO_FULFILLED,
  FETCH_THUMBNAILS
} from './actions';

const defaultState = {
  data: [],
  page: 0,
  photoInfo: {},
  fetching_status: false
};

export const fetchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_THUMBNAILS:
      return {
        ...state,
        fetching_status: !state.fetching_status
      };
    case FETCH_THUMBNAILS_FULFILLED:
      return {
        ...state,
        fetching_status: !state.fetching_status,
        data: action.payload
      };
    case FETCH_PHOTO_INFO_FULFILLED:
      return {
        ...state,
        photoInfo: action.payload
      };
    default:
      return state;
  }
};
