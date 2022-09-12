const express = require("express");
const { connect } = require("./config/db");
const cors = require("cors");
const path = require("path");
const palettesRoutes = require("./api/routes/Palette.routes");

require("dotenv").config();

connect();

const PORT = process.env.PORT;
const server = express();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/palettes", palettesRoutes);
server.use("/", (req, res, next) => {
  return res.sendFile(path.join(__dirname + "/index.html"));
});

server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

server.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || "Unexpected error");
});

server.listen(PORT, () => {
  console.log(`Server listening in http://localhost:${PORT}`);
});
