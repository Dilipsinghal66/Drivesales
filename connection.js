const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Drivesales:9602675351aa@cluster0.no5b3kh.mongodb.net/test"
  )
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log(e);
  });
