import React, { useEffect, useState } from "react";
import { CountryCard, Header, Spinner } from "./../../components";
import { useLazyQuery } from "@apollo/client";
import {
  LIST_COUNTRY,
  FIND_COUNTRY,
} from "./../../Apollo/Queries/CountryQueries";
import CountryContext from "./context";

import { Container } from "./styles";

const CountryList: React.FC = () => {
  const [countriesList, setCountriesList] = useState<Array<any>>([]);
  const [countries, setCountries] = useState<Array<any>>([]);
  const [getCuntries, { loading, data }] = useLazyQuery(LIST_COUNTRY);
  const [
    findCountry,
    { data: listFiltered, loading: loadSearch },
  ] = useLazyQuery(FIND_COUNTRY);

  useEffect(() => {
    if (data) {
      setCountries(data.Country);
      setCountriesList(data.Country);
    }
  }, [data]);

  useEffect(() => {
    getCuntries();
  }, [getCuntries]);

  useEffect(() => {
    if (listFiltered) {
      setCountries(listFiltered.Country);
    }
  }, [listFiltered]);

  function onSearch(query: string) {
    findCountry({ variables: { name: query } });
  }

  function onCancelSearch() {
    console.log("cancel called");
    setCountries(countriesList);
  }

  return (
    <CountryContext.Provider value={{ onSearch, onCancel: onCancelSearch }}>
      <Header showSearche />
      {loading || (loadSearch && <Spinner />)}
      <Container>
        {countries &&
          countries.length > 0 &&
          countries.map((item: any) => (
            <CountryCard country={item} key={item._id} />
          ))}
      </Container>
    </CountryContext.Provider>
  );
};

export default CountryList;
