const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// CORS configuration
app.use(
  cors({
    origin: ["https://crggames.netlify.app", "http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`\n[${new Date().toISOString()}] ${req.method} ${req.path}`);
  console.log("Request Body:", req.body);
  next();
});

// Check if environment variables are loaded
if (!process.env.MONGODB_URI) {
  console.error("MONGODB_URI is not defined in environment variables");
  process.exit(1);
}

console.log(
  "Attempting to connect to database:",
  process.env.MONGODB_URI.split("@")[1]
); // Safe logging without credentials

// Connect to MongoDB with debug logging
mongoose.set("debug", true); // Enable mongoose debug mode

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("\n=== Database Connection ===");
    console.log("Connected to MongoDB");
    console.log("Database:", mongoose.connection.name);
    console.log("=========================\n");

    const server = app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );

    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        console.error(
          `Port ${
            process.env.PORT || 5000
          } is already in use. Please kill the process and try again.`
        );
        process.exit(1);
      }
    });
  })
  .catch((err) => {
    console.error("\n=== Database Error ===");
    console.error("MongoDB connection error:", err);
    console.error("===================\n");
  });

// Routes
app.use("/api/auth", require("./routes/auth"));
