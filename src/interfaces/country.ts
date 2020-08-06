import { Flag } from "./flag";
export interface Country {
  _id: string;
  area: number;
  capital: string;
  location: Location;
  name: string;
  population: number;
  flag: Flag;
  currencies: Array<Currency>;
  topLevelDomains: Array<TopLevelDomain>;
}

interface TopLevelDomain {
  name: string;
}

interface Currency {
  name: string;
  symbol: string;
}

interface Location {
  latitude: number;
  longitude: number;
}
