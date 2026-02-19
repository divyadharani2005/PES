const Teacher = require("../models/Teacher")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// LOGIN
const loginTeacher = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all fields" })
    }

    const teacher = await Teacher.findOne({ email })

    if (!teacher) {
      return res.status(400).json({ message: "Teacher not found" })
    }

    const isMatch = await bcrypt.compare(password, teacher.password)

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" })
    }

    const token = jwt.sign(
      { id: teacher._id, role: "teacher" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: teacher._id,
        name: teacher.name,
        email: teacher.email,
        role: "teacher",
      },
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// REGISTER
const registerTeacher = async (req, res) => {
  try {
    const { name, email, password } = req.body

    const teacherExists = await Teacher.findOne({ email })
    if (teacherExists) {
      return res.status(400).json({ message: "Teacher already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const teacher = await Teacher.create({
      name,
      email,
      password: hashedPassword,
    })

    res.status(201).json({
      _id: teacher._id,
      name: teacher.name,
      email: teacher.email,
      role: teacher.role,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { loginTeacher, registerTeacher }
