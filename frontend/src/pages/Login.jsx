import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { GraduationCap } from "lucide-react"

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()

    if (!role) {
      alert("Please select a role")
      return
    }

    if (role === "student") {
      navigate("/student/dashboard")
    } else {
      navigate("/teacher/dashboard")
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-purple-200">
      
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-xl shadow-md">
            <GraduationCap className="text-white w-8 h-8" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Performance Evaluation System
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Sign in to your account
        </p>

        <form onSubmit={handleLogin}>
          
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Role */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Select Role
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Choose your role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold 
                       bg-gradient-to-r from-purple-500 to-indigo-500 
                       hover:scale-105 transition duration-300"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-400 mt-4">
            Demo credentials: Use any email/password combination
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
