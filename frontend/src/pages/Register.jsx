import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import { UserPlus } from "lucide-react"

// ✅ Backend URL
const API_URL = "https://backend-o9jg.onrender.com"

function Register() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()

    if (!role) {
      alert("Please select a role")
      return
    }

    setLoading(true)

    try {
      const endpoint = role === "student" ? "students" : "teachers"
      
      await axios.post(`${API_URL}/api/${endpoint}/register`, {
        name,
        email,
        password
      })

      alert("Registration Successful! Please Login.")
      navigate("/")
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-xl shadow-md">
            <UserPlus className="text-white w-8 h-8" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>
        <p className="text-center text-gray-500 mb-6">Join the Performance System</p>

        <form onSubmit={handleRegister}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Role */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Select Role</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Choose role...</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg text-white font-semibold 
                       bg-gradient-to-r from-blue-500 to-cyan-500 
                       hover:scale-105 transition duration-300"
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to="/" className="text-blue-600 font-bold hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
