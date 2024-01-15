import styled from "styled-components";

export const StyledTicTacToeContainer = styled.div`
  width: 96%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 40px; */

  h1 {
    margin-top: 0px;
    margin-bottom: 20px;
    color: #fff;
    font-size: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 25px;
    }
  }

  h1 span {
    color: #26ffcb;
    padding-left: 15px;
  }

  .title img {
    padding: 20px;
    height: 50px;
  }

  .boards {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    width: 400px;

    @media screen and (max-width: 500px) {
      width: 236px;
    }
  }
`;

export const StyledBoard = styled.div`
  height: 120px;
  width: 120px;
  cursor: pointer;
  border-radius: 8px;
  background: #1f3540;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    background: #27404d;
  }

  @media screen and (max-width: 500px) {
    height: 72px;
    width: 72px;
  }

  @media screen and (max-width: 500px) {
    img {
      height: 50px;
    }
  }
`;

export const StyledResetButton = styled.button`
  width: 250px;
  height: 50px;
  margin-top: 25px;
  border: none;
  outline-color: transparent;
  border-radius: 50px;
  background: #1f3540;
  color: #26ffcb;
  cursor: pointer;
  &:active {
    background: #27404d;
  }

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;
