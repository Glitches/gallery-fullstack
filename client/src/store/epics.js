import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/dom/ajax';

import { fetchThumbnails, fetchThumbnailsFulfilled } from './actionsCreators';
import { FETCH_THUMBNAILS } from './actions';

export const fetchThumbnailsEpic = action$ =>
  action$.ofType(FETCH_THUMBNAILS).mergeMap(action =>
    // eslint-disable-next-line no-undef
    ajax
      .getJSON(`https://api.github.com/users/${action.payload}`)
      .map(response => fetchThumbnailsFulfilled(response))
  );
