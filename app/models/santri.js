const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  major: {
    type: String,
    required: true,
    trim: true,
  },
});

const santri = mongoose.model("santri", studentSchema);

module.exports = santri;
