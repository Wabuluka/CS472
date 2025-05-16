import express from "express";

const app = express();
app.use(express.json());

app.post("/addition", (req, res) => {
  const { a, b } = req.body;
  res.status(200).json({ answer: a + b });
});

app.post("/subtraction", (req, res) => {
  const { a, b } = req.body;
  res.status(200).json({ answer: a - b });
});

app.post("/multiplication", (req, res) => {
  const { a, b } = req.body;
  res.status(200).json({ answer: a * b });
});

app.post("/division", (req, res) => {
  const { a, b } = req.body;
  res.status(200).json({ answer: a / b });
});

app.post("/modulus", (req, res) => {
  const { a, b } = req.body;
  res.status(200).json({ answer: a % b });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
