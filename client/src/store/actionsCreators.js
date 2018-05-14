import {
  FETCH_THUMBNAILS,
  FETCH_THUMBNAILS_FULFILLED,
  FETCH_PHOTO_INFO,
  FETCH_PHOTO_INFO_FULFILLED,
  MODAL_OPEN
} from './actions';

export const fetchThumbnails = () => ({
  type: FETCH_THUMBNAILS
});
export const fetchThumbnailsFulfilled = payload => ({
  type: FETCH_THUMBNAILS_FULFILLED,
  payload
});

export const fetchPhotoInfo = payload => ({
  type: FETCH_PHOTO_INFO,
  payload
});
export const fetchPhotoInfoFulfilled = payload => ({
  type: FETCH_PHOTO_INFO_FULFILLED,
  payload
});

export const openModal = () => ({
  type: MODAL_OPEN
});
