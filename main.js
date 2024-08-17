import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import { user_router } from "./src/routes/routes.js";

const app = express();
const PORT = process.env.PORT || 5522;

// Enable CORS
app.use(cors());

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", user_router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
