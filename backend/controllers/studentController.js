const Student = require("../models/Student")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// LOGIN
const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all fields" })
    }

    const student = await Student.findOne({ email })

    if (!student) {
      return res.status(400).json({ message: "Student not found" })
    }

    const isMatch = await bcrypt.compare(password, student.password)

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" })
    }

    const token = jwt.sign(
      { id: student._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

    res.status(200).json({
      message: "Login successful",
      token
    })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { loginStudent }
