import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import StudentDashboard from "../pages/student/StudentDashboard"
import TeacherDashboard from "../pages/teacher/TeacherDashboard"
import StudentPerformance from "../pages/student/StudentPerformance"
import StudentReports from "../pages/student/StudentReports"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/student/performance" element={<StudentPerformance />} />
      <Route path="/student/reports" element={<StudentReports />} />
      <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
    </Routes>
  )
}

export default AppRoutes
