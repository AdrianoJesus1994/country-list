import { createStore, Store, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer, rootSagas } from "./ducks";
import { CountryState } from "./ducks/country/types";

export interface ApplicationState {
  countries: CountryState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSagas);

export default store;
