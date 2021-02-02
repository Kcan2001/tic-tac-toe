const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const params = new URLSearchParams();

app.post("/token", async (req, res) => {
  try {
    const body = req.body;

    params.append("email", body.email);

    const response = await fetch(
      "https://ne3bqw6kcc.execute-api.us-east-2.amazonaws.com/dev/auth",
      { method: "POST", body: params }
    );
    const data = await response.json();

    params.delete("email");
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

app.post("/engine", async (req, res) => {
  try {
    const body = req.body;
    const token = req.headers.authorization;

    const response = await fetch(
      "https://ne3bqw6kcc.execute-api.us-east-2.amazonaws.com/dev/engine",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: { Authorization: token, "Content-Type": "application/json" },
      }
    );

    const data = await response.json();

    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
