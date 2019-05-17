import {
  FETCH_TV_SHOWS_SUCCESS,
  FETCH_TV_SHOWS_FAILED,
  GET_LIBRARY,
  SAVE_TV_SHOW,
  SEARCH_TV_SHOWS,
  FETCH_SINGLE_SHOW,
  FETCH_SINGLE_SHOW_FAILED,
  GET_LIBRARY_FAILED
} from "./constants";
import dataService from "../services/dataService";

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
      payload: JSON.parse(localStorage.getItem("library"))
    };
  } else {
    return { type: GET_LIBRARY_FAILED, payload: "Library is empty" };
  }
};

export const saveToLibrary = data => {
  const libraryStorage = localStorage.getItem("library");
  const info = {
    id: data.id,
    image: data.image,
    title: data.title,
    text: data.text
  };
  if (libraryStorage !== null) {
    const library = JSON.parse(libraryStorage);
    const index = library.findIndex(tvShow => {
      return JSON.stringify(tvShow) === JSON.stringify(info);
    });
    if (index === -1) {
      library.push(info);
      const libraryJSON = JSON.stringify(library);
      localStorage.setItem("library", libraryJSON);
    } else {
      const filteredLibrary = library.filter(
        tvShow => tvShow !== library[index]
      );
      const libraryJSON = JSON.stringify(filteredLibrary);
      localStorage.setItem("library", libraryJSON);
    }
  } else {
    const library = [info];
    const libraryJSON = JSON.stringify(library);
    localStorage.setItem("library", libraryJSON);
  }
  return {
    type: SAVE_TV_SHOW
  };
};

export const searchTvShows = text => ({
  type: SEARCH_TV_SHOWS,
  payload: text
});

export const fetchSingleShow = id => dispatch => {
  fetch(`http://api.tvmaze.com/shows/${id}?embed[]=cast&embed[]=seasons`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .then(data => new dataService(data))
    .then(data =>
      dispatch({
        type: FETCH_SINGLE_SHOW,
        payload: data
      })
    )
    .catch(error =>
      dispatch({
        type: FETCH_SINGLE_SHOW_FAILED,
        payload: error
      })
    );
};
