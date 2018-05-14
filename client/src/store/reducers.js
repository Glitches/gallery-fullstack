import {
  FETCH_THUMBNAILS_FULFILLED,
  FETCH_PHOTO_INFO_FULFILLED
} from './actions';

const defaultState = {
  data: [],
  page: 0,
  photoInfo: {},
  fetching_status: null
};

export const fetchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_THUMBNAILS_FULFILLED:
      return {
        ...state,
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
