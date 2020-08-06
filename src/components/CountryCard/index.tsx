import React from "react";

import { Container, CardBody, CardHeader, FlagContent } from "./styles";
import { MdArrowForward } from "react-icons/md";
import { useHistory } from "react-router-dom";

interface Flag {
  svgFile: string;
}
interface CountryProps {
  _id: string | number;
  name: string;
  capital: string;
  flag: Flag;
}

interface DefaultProps {
  country: CountryProps;
}

const CountryCard: React.FC<DefaultProps> = ({
  country: { _id, name, capital, flag },
}) => {
  const history = useHistory();

  function openDetails() {
    history.push(`/details/${_id}`);
  }

  return (
    <Container>
      <CardHeader>
        <FlagContent>
          <img src={flag.svgFile} alt="bandeira" />
        </FlagContent>
      </CardHeader>
      <CardBody>
        <h2>{name}</h2>
        <p>{capital}</p>
        <span>Capital</span>

        <button onClick={openDetails}>
          Details <MdArrowForward size={20} />
        </button>
      </CardBody>
    </Container>
  );
};

export default CountryCard;
