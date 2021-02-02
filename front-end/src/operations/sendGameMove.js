import { LOCAL_HOST_SERVER_ENGINE } from "./config";

const sendGameMove = async (board) => {
  const token = sessionStorage.getItem("token");

  try {
    const response = await fetch(LOCAL_HOST_SERVER_ENGINE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ board }),
    });

    const gameResponse = await response.json();

    return gameResponse;
  } catch (e) {
    return e;
  }
};

export default sendGameMove;
