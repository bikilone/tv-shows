import {
  FETCH_TV_SHOWS_PENDING,
  FETCH_TV_SHOWS_SUCCESS,
  FETCH_TV_SHOWS_FAILED
} from "./constants";

const initialState = {
  isPending: true,
  tvShows: [],
  error: ""
};

export const fetchTvShows = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_TV_SHOWS_PENDING:
      return state;
    case FETCH_TV_SHOWS_SUCCESS:
      return { ...state, isPending: false, tvShows: action.payload };
    case FETCH_TV_SHOWS_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};
