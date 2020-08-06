import styled from "styled-components";
import colors from "./../../utils/colors";

export const Container = styled.div`
  width: calc(100vw - 10%);
  flex: 1;
  display: flex;
  flex: 1 0 250px;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px auto;
  padding: 1em;
  align-items: center;
  flex-direction: column;

  .back-button {
    cursor: pointer;
    transition: 0.5s ease-in-out;
    fill: #ccc;

    &:hover {
      fill: #222;
      transform: scale(1.1);
    }
  }
`;

export const NavigationContainer = styled.div`
  width: calc(100vw - 10%);
`;

export const DetailContainer = styled.div`
  width: 60%;
  /* height: 720px; */
  background: ${colors.light};
  border-radius: 5px;
  overflow: hidden;
  margin: 2em 0;

  header {
    height: 50px;
    background: ${colors.gray};
    border-bottom: solid 1px ${colors.white};
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    h2 {
      font-weight: 300 !important;
      font-family: Roboto;
      color: #666;
    }

    span {
      flex: 1;
    }
  }

  .detail-body {
    padding: 1em;
    flex: 1;
    display: flex;
    flex-direction: column;

    h2 {
      /* font-weight: 400 !important; */
      text-transform: uppercase;
      color: ${colors.dark};
      margin: 1em auto;
    }

    .divider {
      width: 100%;
      font-size: 22px;
      color: ${colors.primary};
      border-bottom: 2px solid ${colors.white};
      padding: 0.2em 0px;
      margin: 1em 0px;
      font-weight: 300;
      display: flex;
      align-items: center;
    }

    section {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      .item {
        display: flex;
        flex-direction: column;
        min-width: 1em;
        margin-left: 0.5em;

        & + div {
          margin-left: 1em;
        }

        span {
          color: ${colors.primary};
          font-weight: 400;
          font-size: 16px;
        }
        p {
          font-family: Lato, sans-serif;
          font-size: 14px;
          line-height: 21px;
          color: ${colors.dark};
        }
      }

      &.map-container {
        height: 640px;
        width: 100%;
      }
    }
  }

  img {
    width: 60%;
    margin: auto;
    margin-top: 1em;
  }
`;
