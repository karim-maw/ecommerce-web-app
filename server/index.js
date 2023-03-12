const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const productsRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const cors = require("cors");


const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("databse is running"))
  .catch((err) => {
    console.log(err.message);
  });

  const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200
  };
  
  app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/products", productsRoute);
app.use("/api/cart", cartRoute);

app.get("/", (req, res) => {
  res.status(200).json("lol");
});

app.listen(5000, () => {
  console.log("server is up");
});
