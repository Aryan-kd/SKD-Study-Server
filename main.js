import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();

// Enable CORS
app.use(cors());

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    Name: process.env.NAME,
    Age: 21,
  });
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
