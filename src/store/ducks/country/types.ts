import { Country } from "./../../../interfaces/country";

export interface CountryState {
  loading: boolean;
  error: boolean;
  data: Country[];
}

export enum CountriesTypes {
  LOAD_COUNTRIES = "@country/load-coutries",
  FIND_COUNTRIES = "@country/find-country",
  LOAD_SUCCESS = "@country/load-success",
  LOAD_ERROR = "@country/load-error",
}
