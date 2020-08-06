import React from "react";

import { Container } from "./styles";

const Spinner: React.FC = () => {
  return (
    <Container>
      <div className="spinner">Loading...</div>
    </Container>
  );
};

export default Spinner;
