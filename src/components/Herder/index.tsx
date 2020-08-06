import React, { useContext } from "react";

import { Container } from "./styles";
import { Search } from "./../";

import CountryContext from "./../../pages/CountryList/context";

const Herder: React.FC = () => {
  const { onSearch, onCancel } = useContext(CountryContext);

  function search(query: string): void {
    onSearch(query);
  }

  return (
    <Container>
      <h1>CountryList</h1>
      <Search onSearch={search} onCancel={onCancel} />
    </Container>
  );
};

export default Herder;
