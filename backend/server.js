require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

//Middleware to handleCORS
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })

);

//Middleware to parse JSON requests
app.use(express.json());

//Routes

//Serve uploads folder
app.use("/uploads",express.static(path.join(__dirname, "uploads"), {}));

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
