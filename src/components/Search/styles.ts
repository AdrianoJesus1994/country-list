import styled from "styled-components";
import colors from "../../utils/colors";

interface TextFieldProps {
  opened: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const TextField = styled.input.attrs({
  placeholder: "Search for other countries",
})`
  height: 42px;
  width: 300px;
  background-color: rgba(0, 0, 0, 0.3);
  border: 0;
  margin: 0;
  padding: 0 1em;
  color: ${colors.light};
  border-radius: 0;
  transform: translateX(300px);
  animation: ${(props: TextFieldProps) => (props.opened ? "show" : "hide")} 1s
    forwards;

  @keyframes show {
    0% {
      transform: translateX(300px);
      display: none;
    }
    100% {
      transform: translateX(0);
      display: block !important;
    }
  }

  @keyframes hide {
    0% {
      transform: translateX(0);
      display: none;
    }
    100% {
      transform: translateX(330px);
      display: none;
    }
  }
`;

export const ButtonOpen = styled.button`
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 0;
  background-color: #4e3896;
  z-index: 10;
`;
