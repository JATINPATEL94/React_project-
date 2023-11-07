const connectToMongo = require("./db");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

connectToMongo();
const app = express();

app.use(cors());
app.use(express.json()); // app.use is a middleware for access jsone

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/note", require("./routes/note"));

app.listen(process.env.PORT, () => {
  console.log(
    `NOTEAPP Backend listening on port http://localhost:${process.env.PORT}`
  );
});
