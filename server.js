import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import jobRouter from "./routes/jobRouter.js";

const app = express();

// Setup express middleware to accept json
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/api/v1/jobs", jobRouter);

// Not Found Middleware
//it is specifically designed to handle requests for non-existent routes
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

// Error Middleware
//it is a catch-all for handling unexpected errors that occur during request processing.
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const port = process.env.PORT || 3000;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
