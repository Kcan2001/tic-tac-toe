import { useEffect, useState } from "react";
import styled from "styled-components";
import Square from "./Square";
import * as R from "remeda";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import sendGameMove from "./operations/sendGameMove";

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

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey);
  opacity: 0.7;
`;

const initialState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const antIcon = (
  <LoadingOutlined style={{ fontSize: 128, color: "var(--dark)" }} spin />
);

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

  useEffect(() => {}, []);

  const flattenBoard = gameState.flat();

  return (
    <Container>
      {isLoading ? (
        <Spinner>
          <Spin indicator={antIcon} />
        </Spinner>
      ) : null}
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
      </InnerContainer>
    </Container>
  );
};

export default TicTacToe;
