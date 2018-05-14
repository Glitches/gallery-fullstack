import {
  FETCH_THUMBNAILS_FULFILLED,
  FETCH_PHOTO_INFO_FULFILLED,
  FETCH_THUMBNAILS,
  MODAL_OPEN
} from './actions';

const defaultState = {
  data: [],
  page: 0,
  photoInfo: {},
  fetching_status: false,
  modal_opened: false
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
    case MODAL_OPEN:
      return {
        modal_opened: !state.modal_opened
      };
    default:
      return state;
  }
};
