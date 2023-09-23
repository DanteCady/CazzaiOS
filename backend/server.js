const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const userRoutes = require("./routes/users.routes.signup");
const authRoutes = require("./routes/users.routes.login");
const cors = require("cors"); // Import the cors package
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the cors middleware with appropriate options
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);


const PORT = process.env.PORT || 3000;

// Database connection
const dbConfig = require("./config/db.config");
const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database.");
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
