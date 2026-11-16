import express from "express";

const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send({ test: "hurra igen igen igen" });
});

app.listen(port, () => {
  console.log(`backend igång på ${port}`);
});
