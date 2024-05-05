const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const dishes = require("./routes/dishRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

mongoose
  .connect("mongodb+srv://labhanshgulati29:Labhu050400@cluster0.zfgief7.mongodb.net/Foodmern3")
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.use("/api", dishes);
// app.use("/api/user", userRoutes);
app.use("/api", userRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

