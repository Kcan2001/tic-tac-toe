import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border: 2px solid var(--purple);
  width: 32%;
  align-items: center;
  justify-content: center;
`;

const TypeStyle = styled.h1`
  color: var(--dark);
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const TypeButtonStyle = styled.button`
  color: var(--dark);
  width: 100%;
  height: 150px;
  cursor: pointer;
  border: transparent;
  background-color: transparent;

  &:hover {
    background-color: var(--tan);
  }

  &:active,
  &:focus {
    border: transparent;
    background-color: transparent;
    outline: none;
  }
`;

const TicTacToe = ({ type, handleSquareClick, index }) => {
  return (
    <Container>
      {type === "" ? (
        <TypeButtonStyle onClick={() => handleSquareClick(index)} />
      ) : (
        <TypeStyle>{type}</TypeStyle>
      )}
    </Container>
  );
};

export default TicTacToe;
