import {
  FETCH_TV_SHOWS_SUCCESS,
  FETCH_TV_SHOWS_FAILED,
  GET_LIBRARY,
  SAVE_TV_SHOW,
  SEARCH_TV_SHOWS,
  FETCH_SINGLE_SHOW,
  FETCH_SINGLE_SHOW_FAILED
} from "./constants";

const initialState = {
  isPending: true,
  tvShows: [],
  error: "",
  library: [],
  search: "",
  singleShow: ""
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

export const searchTvShows = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_TV_SHOWS:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export const fetchSingleShow = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_SINGLE_SHOW:
      return { ...state, singleShow: action.payload, isPending: false };
    case FETCH_SINGLE_SHOW_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
