import React from "react";
import { CountryCard } from "./../../components";

import { Container } from "./styles";

const CountryList: React.FC = () => {
  return (
    <Container>
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </Container>
  );
};

export default CountryList;
