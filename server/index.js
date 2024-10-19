const express = require("express");
const mongoose = require("mongoose");
const http = require("http");

const app = express();
const port = process.env.PORT || 3000;

var server = http.createServer(app);
var io = require("socket.io")(server);

// Middleware for parsing JSON requests
app.use(express.json());

server.listen(port, "0.0.0.0", function () {
  console.log(`Server is running on port ${port}`);
});

// MongoDB connection string
const db =
  "mongodb+srv://vishveshrathore20:Vishvesh%40123@tictactoe.dwwfj.mongodb.net/?retryWrites=true&w=majority&appName=tictactoe";

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Socket.io connection
io.on("connection", (socket) => {
  console.log("New client connected!"); // This should log when a client connects

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
