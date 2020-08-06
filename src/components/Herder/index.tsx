import React from "react";

import { Container } from "./styles";
import { Search } from "./../";

const Herder: React.FC = () => {
  return (
    <Container>
      <h1>CountryList</h1>
      <Search />
    </Container>
  );
};

export default Herder;
