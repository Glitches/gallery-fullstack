import { merge } from 'rxjs/observable/merge';
import 'rxjs/add/operator/mergeMap';
import { combineEpics } from 'redux-observable';
import {
  fetchThumbnailsFulfilled,
  fetchPhotoInfoFulfilled
} from './actionsCreators';
import { FETCH_THUMBNAILS, FETCH_PHOTO_INFO } from './actions';

const fetchThumbnailsEpic = action$ =>
  action$
    .ofType(FETCH_THUMBNAILS)
    .mergeMap(action =>
      // eslint-disable-next-line no-undef
      fetch('http://localhost:5000/getphotolist')
        .then(response => response.json())
        .then(data => fetchThumbnailsFulfilled(data))
    )
    //eslint-disable-next-line no-console
    .catch(error => console.log(error));

const fetchPhotoInfoEpic = action$ =>
  action$
    .ofType(FETCH_PHOTO_INFO)
    .mergeMap(action =>
      // eslint-disable-next-line no-undef
      fetch(`http://localhost:5000/photo${action.payload}`)
        .then(response => response.json())
        .then(data => fetchPhotoInfoFulfilled(data))
    )
    //eslint-disable-next-line no-console
    .catch(error => console.log(error));

const rootEpic = (action$, store) =>
  merge(
    fetchThumbnailsEpic(action$, store),
    fetchPhotoInfoEpic(action$, store)
  );

export default rootEpic;
