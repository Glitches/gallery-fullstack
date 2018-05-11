import { FETCH_THUMBNAILS, FETCH_THUMBNAILS_FULFILLED } from './actions';

export const fetchThumbnails = () => ({
  type: FETCH_THUMBNAILS
});
export const fetchThumbnailsFulfilled = payload => ({
  type: FETCH_THUMBNAILS_FULFILLED,
  payload
});
