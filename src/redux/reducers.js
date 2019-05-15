import {
  FETCH_TV_SHOWS_SUCCESS,
  FETCH_TV_SHOWS_FAILED,
  GET_LIBRARY,
  GET_LIBRARY_FAILED
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
  console.log(action.type);
  switch (action.type) {
    case GET_LIBRARY:
      return { ...state, tvShows: action.payload };
    case GET_LIBRARY_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
