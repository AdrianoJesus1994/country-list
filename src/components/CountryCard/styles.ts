import styled from "styled-components";
import colors from "./../../utils/colors";

export const Container = styled.div`
  width: 250px;
  height: 250px;
  background: transparent;
  margin: 1em;
  flex: 0 0 250px;
  overflow: hidden;
  transition: 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const FlagContent = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${colors.light};
  margin: auto;
  overflow: hidden;
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);

  img {
    height: 90px;
  }
`;

export const CardHeader = styled.div`
  height: 50px;
  width: 100%;
  padding: 0.5em;
  position: relative;
`;

export const CardBody = styled.div`
  flex: 1;
  min-height: 100px;
  padding: 40px 0.5em 0.5em 0.5em;
  background-color: ${colors.light};
  font-size: 14px;
  font-weight: 500;
  flex-direction: column;
  display: flex;
  align-items: center;
  border-radius: 5px;

  h2 {
    color: #222;
    font-weight: 600;
    padding-bottom: 0.5em;
  }

  p {
    font-size: 14px;
    color: #222;
    font-weight: 400;
  }

  span {
    font-size: 11px;
    color: #222;
    font-weight: 300;
  }

  button {
    height: 30px;
    margin: 0.5em;
    background: transparent;
    border: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: ${colors.primary};
    font-size: 12px;
    padding: 0.5em;
    font-weight: 600;
    cursor: pointer;
  }
`;
