import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/dom/ajax';

import { fetchThumbnails, fetchThumbnailsFulfilled } from './actionsCreators';
import { FETCH_THUMBNAILS } from './actions';

export const fetchThumbnailsEpic = action$ =>
  action$
    .ofType(FETCH_THUMBNAILS)
    .mergeMap(action =>
      // eslint-disable-next-line no-undef
      fetch('http://localhost:5000/getPhotoList')
        .then(response => response.json())
        .then(data => fetchThumbnailsFulfilled(data))
    )
    .catch(error => console.log(error));
