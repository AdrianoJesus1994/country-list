import { action } from "typesafe-actions";
import { CountriesTypes } from "./types";
import { Country } from "../../../interfaces/country";

export const countryRequest = () => action(CountriesTypes.LOAD_COUNTRIES);
export const findCountry = (query: string) =>
  action(CountriesTypes.FIND_COUNTRIES, { query });
export const loadCountrySuccess = (data: Country[]) =>
  action(CountriesTypes.LOAD_SUCCESS, { data });
export const loadCountryError = () => action(CountriesTypes.LOAD_ERROR);
