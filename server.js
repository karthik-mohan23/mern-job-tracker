import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

// Setup express middleware to accept json
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

// Not Found Middleware
//it is specifically designed to handle requests for non-existent routes
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

// Error Middleware
//it is a catch-all for handling unexpected errors that occur during request processing.
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server listening on port " + port));
