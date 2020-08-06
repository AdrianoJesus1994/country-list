import React from "react";

import { Container, CardBody, CardHeader, FlagContent } from "./styles";
import { MdArrowForward } from "react-icons/md";
import { useHistory } from "react-router-dom";

const CountryCard: React.FC = () => {
  const history = useHistory();

  function openDetails() {
    history.push("/details/1231");
  }

  return (
    <Container>
      <CardHeader>
        <FlagContent>
          <img src="https://restcountries.eu/data/ala.svg" alt="bandeira" />
        </FlagContent>
      </CardHeader>
      <CardBody>
        <h2>Brazil</h2>
        <p>Brasilia</p>
        <span>Capital</span>

        <button onClick={openDetails}>
          Details <MdArrowForward size={20} />
        </button>
      </CardBody>
    </Container>
  );
};

export default CountryCard;
