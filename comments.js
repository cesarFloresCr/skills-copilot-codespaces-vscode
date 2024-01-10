// Create web server using express
const express = require("express");
const app = express();

// Import required modules
const bodyParser = require("body-parser");
const cors = require("cors");

// Import routes
const comments = require("./routes/api/comments");

// Connect to MongoDB
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use("/api/comments", comments);

// Listen to port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));