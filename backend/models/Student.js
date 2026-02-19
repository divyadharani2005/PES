const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role: {
      type: String,
      default: "student",
    },
    attendance: {
      type: Number,
      default: 0,
    },
    assignment: {
      type: Number,
      default: 0,
    },
    midExam: {
      type: Number,
      default: 0,
    },
    finalExam: {
      type: Number,
      default: 0,
    },
    grade: {
      type: String,
      default: "N/A",
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Student", studentSchema)
