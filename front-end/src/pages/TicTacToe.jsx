import { useState } from "react";
import styled from "styled-components";
import Square from "../components/Square";
import * as R from "remeda";

import Button from "../components/Button";
import Spinner from "../components/Spinner";
import sendGameMove from "../operations/sendGameMove";

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 36px;
`;

const initialState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const TicTacToe = ({ setHasValidToken }) => {
  const [gameState, setGameState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleSquareClick = async (index) => {
    const flatten = gameState.flat();
    flatten[index] = "X";

    const board = R.chunk(flatten, 3);

    setIsLoading(true);
    const results = await sendGameMove(board);
    setIsLoading(false);

    if (results.error) {
      setHasValidToken(false);
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

        <ButtonContainer>
          <Button
            text="Reset Board"
            onClick={() => setGameState(initialState)}
          />
        </ButtonContainer>
      </InnerContainer>
    </Container>
  );
};

export default TicTacToe;
