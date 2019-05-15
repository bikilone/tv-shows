import {
  FETCH_TV_SHOWS_PENDING,
  FETCH_TV_SHOWS_SUCCESS,
  FETCH_TV_SHOWS_FAILED
} from "./constants";

export const fetchTvShows = () => dispatch => {
  dispatch({ type: FETCH_TV_SHOWS_PENDING });
  fetch("http://api.tvmaze.com/shows")
    .then(data => data.json())
    .then(data => dispatch({ type: FETCH_TV_SHOWS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: FETCH_TV_SHOWS_FAILED, payload: error }));
};
