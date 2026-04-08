const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bcrypt = require("bcryptjs")
const Teacher = require("./models/Teacher")
const Student = require("./models/Student")

dotenv.config()

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB Connected for seeding...")

    // Seed Teacher
    const teacherEmail = "teacher@test.com"
    const teacherExists = await Teacher.findOne({ email: teacherEmail })
    
    if (!teacherExists) {
      const hashedTeacherPassword = await bcrypt.hash("teacher123", 10)
      await Teacher.create({
        name: "Test Teacher",
        email: teacherEmail,
        password: hashedTeacherPassword,
        role: "teacher"
      })
      console.log("Teacher created: teacher@test.com / teacher123")
    } else {
      console.log("Teacher already exists")
    }

    // Seed Student
    const studentEmail = "student@test.com"
    const studentExists = await Student.findOne({ email: studentEmail })

    if (!studentExists) {
      const hashedStudentPassword = await bcrypt.hash("student123", 10)
      await Student.create({
        name: "Test Student",
        email: studentEmail,
        password: hashedStudentPassword,
        role: "student"
      })
      console.log("Student created: student@test.com / student123")
    } else {
      console.log("Student already exists")
    }

    mongoose.connection.close()
    console.log("Seeding completed!")
  } catch (error) {
    console.error("Error seeding users:", error)
    process.exit(1)
  }
}

seedUsers()
