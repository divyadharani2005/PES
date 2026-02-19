const express = require("express")
const router = express.Router()
const { loginTeacher, registerTeacher } = require("../controllers/teacherController")
const protect = require("../middleware/authMiddleware")

router.post("/login", loginTeacher)
router.post("/register", registerTeacher)

router.get("/profile", protect, (req, res) => {
  res.status(200).json(req.teacher)
})

router.put("/update/:id", async (req, res) => {
  try {
    const { attendance, assignment, midExam, finalExam } = req.body

    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { attendance, assignment, midExam, finalExam },
      { new: true }
    )

    res.json(updatedStudent)
  } catch (error) {
    res.status(500).json({ message: "Update failed" })
  }
})


module.exports = router
