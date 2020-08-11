import { Reducer } from "redux";
import { CountryState, CountriesTypes } from "./types";

const INITIAL_STATE: CountryState = {
  loading: false,
  error: false,
  data: [],
};

const reducer: Reducer<CountryState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CountriesTypes.LOAD_COUNTRIES:
      return { ...state, error: false, loading: true };
    case CountriesTypes.FIND_COUNTRIES:
      return { ...state, error: false, loading: true };
    case CountriesTypes.LOAD_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        data: action.payload.data,
      };
    case CountriesTypes.LOAD_ERROR:
      return { ...state, error: true, loading: false, data: [] };
    default:
      return { ...state };
  }
};

export default reducer;
