import { gql } from "@apollo/client";

export const LIST_COUNTRY = gql`
  query ListCountry {
    Country {
      _id
      name
      capital
      flag {
        svgFile
      }
    }
  }
`;

export const FIND_COUNTRY = gql`
  query FindCountry($name: String!) {
    Country(name: $name) {
      _id
      name
      capital
      flag {
        svgFile
      }
    }
  }
`;

export const GET_COUNTRY = gql`
  query ListCountry($countryId: String!) {
    Country(_id: $countryId) {
      _id
      name
      capital
      area
      population
      location {
        latitude
        longitude
      }
      flag {
        svgFile
      }
      currencies {
        name
        symbol
      }
      topLevelDomains {
        name
      }
    }
  }
`;
