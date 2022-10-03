const express = require("express");
const fs = require("fs");
const cors = require("cors");
// const { http } = require("@serverless/cloud");
require("./connection");

// const DB =
//     "mongodb+srv://Drivesales:9602675351aa@cluster0.hr5tz.mongodb.net/?retryWrites=true&w=majority";

const Drivesales = require("./Drivesalesmodel");
const { resourceLimits } = require("worker_threads");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

// http.use(app);

app.get("/get", async (req, res) => {
  try {
    const DriveData = await Drivesales.find();
    res.send(DriveData);
  } catch (e) {
    res.send(e);
  }
});

app.post("/post", (req, res) => {
  console.log(req.body);
  const Drive1 = new Drivesales(req.body);

  Drive1.save()
    .then(() => {
      res.send(Drive1);
    })
    .catch((err) => {
      res.send(err);
    });
  res.setHeader("Content-Type", "application/json");
});

app.put("/tasks/:id", async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);

  const data = await Drivesales.update({ _id: req.params.id }, req.body);
  res.send(`task update succesfully ${req.params.id}`);
  //   const Drive1 = new Drivesales(req.body);

  //   Drive1.save()
  //     .then(() => {
  //       res.send(Drive1);
  //     })
  //     .catch((err) => {
  //       res.send(err);
  //     });
  //   res.setHeader("Content-Type", "application/json");
});

app.listen(port, () => {
  console.log("hi");
});
