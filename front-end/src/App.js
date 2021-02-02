import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SignIn from "./SignInForm";
import TicTacToe from "./TicTacToe";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function App() {
  const [hasValidToken, setHasValidToken] = useState(false);

  useEffect(() => {
    const hasToken = sessionStorage.getItem("token");
    if (hasToken) {
      setHasValidToken(true);
    }
  }, [setHasValidToken]);

  return (
    <Container>
      {hasValidToken ? (
        <TicTacToe setHasValidToken={setHasValidToken} />
      ) : (
        <SignIn setHasValidToken={setHasValidToken} />
      )}
    </Container>
  );
}

export default App;
