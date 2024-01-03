import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import dalleRoutes from "./routes/dalle_routes.js";
dotenv.config();

const app = express();

// Use cors middleware
app.use(cors());

// Parse JSON requests
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", dalleRoutes);

// Define a route
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello from DALL E" });
});

// Start the server
app.listen(8080, () => console.log("Server has started on port 8080"));
