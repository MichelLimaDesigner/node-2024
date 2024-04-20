import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// Create express server
const app = express(); // Set new express instance
const port = 3000; // Port number

// Express configuration
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Start express server
app.listen(port, () => {
  console.log("Server started at http://localhost:3000");
});
