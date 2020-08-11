import { put, call } from "redux-saga/effects";

import { loadCountrySuccess, loadCountryError } from "./actions";

export function* loadCountries() {
  try {
    yield put(loadCountrySuccess([]));
  } catch (error) {
    yield put(loadCountryError());
  }
}

export function* findCountries(action: any) {
  try {
    console.log(action.query);
    yield put(loadCountrySuccess([]));
  } catch (error) {
    yield put(loadCountryError());
  }
}
