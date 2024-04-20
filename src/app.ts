import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import router from "./routes";

// Create express server
const app = express(); // Set new express instance
const port = 3000; // Port number

// Express configuration
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Define express routes
app.use("/", router);

// Start express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
