import {
  FETCH_TV_SHOWS_SUCCESS,
  FETCH_TV_SHOWS_FAILED,
  GET_LIBRARY,
  GET_LIBRARY_FAILED,
  SAVE_TV_SHOW
} from "./constants";

const initialState = {
  isPending: true,
  tvShows: [],
  error: "",
  library: []
};

export const fetchTvShows = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_TV_SHOWS_SUCCESS:
      return { ...state, isPending: false, tvShows: action.payload };
    case FETCH_TV_SHOWS_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};

export const getLibrary = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_LIBRARY:
      return { ...state, library: action.payload, error: "" };
    case GET_LIBRARY_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const saveToLibrary = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TV_SHOW:
      return state;
    default:
      return state;
  }
};
