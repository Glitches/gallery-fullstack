import { FETCH_THUMBNAILS, FETCH_THUMBNAILS_FULFILLED } from './actions';

export const fetchThumbnails = username => ({
  type: FETCH_THUMBNAILS,
  payload: username
});
export const fetchThumbnailsFulfilled = payload => ({
  type: FETCH_THUMBNAILS_FULFILLED,
  payload
});
