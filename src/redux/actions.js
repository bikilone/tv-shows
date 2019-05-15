import {
  FETCH_TV_SHOWS_SUCCESS,
  FETCH_TV_SHOWS_FAILED,
  GET_LIBRARY,
  GET_LIBRARY_FAILED
} from "./constants";

export const fetchTvShows = () => dispatch => {
  fetch("http://api.tvmaze.com/shows")
    .then(data => data.json())
    .then(data => dispatch({ type: FETCH_TV_SHOWS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: FETCH_TV_SHOWS_FAILED, payload: error }));
};

export const getLibrary = () => {
  if (localStorage.getItem("library") !== null) {
    return {
      type: GET_LIBRARY,
      payload: localStorage.getItem("library")
    };
  } else {
    return {
      type: GET_LIBRARY_FAILED,
      payload: "Library is empty"
    };
  }
};
