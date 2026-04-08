const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const studentRoutes = require("./routes/studentRoutes")
const teacherRoutes = require("./routes/teacherRoutes")
const path = require("path")

dotenv.config()
connectDB()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/students", studentRoutes)
app.use("/api/teachers", teacherRoutes)

// Serve Frontend in Production
if (process.env.NODE_ENV === 'production') {
  const frontendPath = path.join(__dirname, '../frontend/dist');
  app.use(express.static(frontendPath));

  app.get('*', (req, res) => {
    const indexPath = path.resolve(__dirname, '..', 'frontend', 'dist', 'index.html');
    res.sendFile(indexPath);
  });
} else {
  app.get("/", (req, res) => {
    res.send("API Running...")
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})