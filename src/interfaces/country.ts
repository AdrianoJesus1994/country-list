import { Flag } from "./flag";
export interface Country {
  _id: string;
  alpha2Code: string;
  alpha3Code: string;
  area: number;
  capital: string;
  populationDensity: number;
  demonym: string;
  gini: number;
  location: Location;
  name: string;
  nameTranslation: string;
  nativeName: string;
  numericCode: string;
  population: number;
  flag: Flag;
  first?: number;
  offset?: number;
}

interface Location {
  latitude: string;
  longitude: string;
}
