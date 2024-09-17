import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("CV Prime Pro Server");
});

app.listen(6000, () => {
  console.log("Server is running on port $`6000`");
});
