const mongoose = require("mongoose");
// const validator = require("validator");

const DriveSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: false,
  },
  enddate: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Drivesales = new mongoose.model("Drviesales", DriveSchema);

module.exports = Drivesales;
