const express = require("express")
const router = express.Router()
const Student = require("../models/Student")
const bcrypt = require("bcryptjs")
const { loginStudent } = require("../controllers/studentController")
const protect = require("../middleware/authMiddleware")

router.post("/login", loginStudent)

// REGISTER
router.get("/profile", protect, (req, res) => {
  res.status(200).json(req.student)
}) 

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body

    const studentExists = await Student.findOne({ email })
    if (studentExists) {
      return res.status(400).json({ message: "Student already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const student = await Student.create({
      name,
      email,
      password: hashedPassword,
    })

    res.status(201).json({
      _id: student._id,
      name: student.name,
      email: student.email,
      role: student.role,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// UPDATE STUDENT PERFORMANCE
router.put("/update/:id", async (req, res) => {
  try {
    const { attendance, assignment, midExam, finalExam, grade } = req.body

    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { attendance, assignment, midExam, finalExam, grade },
      { new: true }
    )

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" })
    }

    res.json(updatedStudent)
  } catch (error) {
    res.status(500).json({ message: "Update failed" })
  }
})


module.exports = router
