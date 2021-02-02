import { LOCAL_HOST_SERVER_TOKEN } from "./config";

const getToken = async (email) => {
  const response = await fetch(LOCAL_HOST_SERVER_TOKEN, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(email),
  });

  const tokenResponse = await response.json();

  return tokenResponse && tokenResponse.token;
};

export default getToken;
