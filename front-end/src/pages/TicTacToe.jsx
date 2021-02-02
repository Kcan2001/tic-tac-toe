import { useState } from "react";
import styled from "styled-components";
import Square from "../components/Square";
import * as R from "remeda";

import Button from "../components/Button";
import Spinner from "../components/Spinner";
import sendGameMove from "../operations/sendGameMove";

import { handleValidation } from "../utils/validateGameData";

const Container = styled.div`
  display: flex;
  width: 60%;
  position: relative;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 120px;
  border: 40px solid var(--dark);
`;

const ResultTitle = styled.h1`
  margin: 0 0 24px;
  font-size: 24px;
  font-family: lato;
  color: var(--dark);
  text-align: center;
  width: 100%;
  margin: 36px 0 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 16px 0 0;
`;

const initialState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const TicTacToe = ({ setHasValidToken }) => {
  const [gameState, setGameState] = useState(initialState);
  const [gameResult, setGameResult] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resetGameState = () => {
    setGameState(initialState);
    setGameResult("");
    setGameOver(false);
  };

  const handleSquareClick = async (index) => {
    if (gameOver) return;
    const flatten = gameState.flat();
    flatten[index] = "X";

    const board = R.chunk(flatten, 3);

    setIsLoading(true);
    const results = await sendGameMove(board);
    setIsLoading(false);

    // Logs users out if the token is invalid.
    if (results.error) {
      setHasValidToken(false);
    }

    const gameFinalResults = handleValidation(results && results.board);

    if (gameFinalResults) {
      setGameResult(gameFinalResults);
      setGameOver(true);
    }

    setGameState(results.board);
  };

  const flattenBoard = gameState.flat();

  return (
    <Container>
      {isLoading ? <Spinner /> : null}
      <InnerContainer>
        {flattenBoard.map((item, index) => {
          return (
            <Square
              key={`${item}_${index}`}
              type={item}
              index={index}
              handleSquareClick={handleSquareClick}
            />
          );
        })}

        {gameResult && gameResult !== "" ? (
          <ResultTitle>{gameResult}</ResultTitle>
        ) : null}
        <ButtonContainer>
          <Button text="Reset Board" onClick={resetGameState} />
        </ButtonContainer>
      </InnerContainer>
    </Container>
  );
};

export default TicTacToe;
