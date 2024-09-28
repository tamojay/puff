import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello, Puff API!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
