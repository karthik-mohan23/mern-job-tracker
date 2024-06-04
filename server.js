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
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server listening on port " + port));
