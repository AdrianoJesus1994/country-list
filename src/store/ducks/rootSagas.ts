import { all, takeLatest } from "redux-saga/effects";

import { CountriesTypes } from "./country/types";
import { loadCountries, findCountries } from "./country/saga";

export default function* rootSaga() {
  return yield all([
    takeLatest(CountriesTypes.LOAD_COUNTRIES, loadCountries),
    takeLatest(CountriesTypes.FIND_COUNTRIES, findCountries),
  ]);
}
