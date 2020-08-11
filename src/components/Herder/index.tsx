import React, { useContext } from "react";

import { Container } from "./styles";
import { Search } from "./../";

import CountryContext from "./../../pages/CountryList/context";

interface HeaderProps {
  showSearche?: boolean;
}

const Herder: React.FC<HeaderProps> = ({ showSearche }) => {
  const { onSearch, onCancel } = useContext(CountryContext);

  function search(query: string): void {
    onSearch(query);
  }

  return (
    <Container>
      <h1>CountryList</h1>
      {showSearche && <Search onSearch={search} onCancel={onCancel} />}
    </Container>
  );
};

export default Herder;
