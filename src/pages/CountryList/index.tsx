import React, { useEffect } from "react";
import { CountryCard, Load } from "./../../components";
import { gql, useQuery } from "@apollo/client";

import { Container } from "./styles";

const LIST_COUNTRY = gql`
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

const CountryList: React.FC = () => {
  const { loading, error, data } = useQuery(LIST_COUNTRY);

  useEffect(() => {
    if (data) console.log(data.Country);
  }, [data]);

  if (loading) return <Load />;

  return (
    <Container>
      {data &&
        data.Country &&
        data.Country.map((item: any) => (
          <CountryCard country={item} key={item._id} />
        ))}
    </Container>
  );
};

export default CountryList;
