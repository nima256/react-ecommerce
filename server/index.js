const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Routes
const categoryRoutes = require("./routes/categories");
const imageUploadRoutes = require('./helper/imageUpload.js')

app.use("/uploads", express.static("uploads"));
app.use("/api/category", categoryRoutes);
app.use("/api/imageUpload", imageUploadRoutes);

// DB
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected To DB");

    // Start server after DB is connected
    app.listen(process.env.PORT, () => {
      console.log(`Server Is Running On http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB:", err);
  });
