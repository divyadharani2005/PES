import Sidebar from "../../components/Sidebar";
import StatCards from "../../components/StatCards";
import {
  CalendarDays,
  ClipboardList,
  Award,
  TrendingUp,
  Bell,
  LogOut,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  const performanceData = [
    { subject: "Math", score: 85 },
    { subject: "Science", score: 92 },
    { subject: "English", score: 78 },
    { subject: "History", score: 88 },
    { subject: "Physics", score: 95 },
  ];

  const trendData = [
    { month: "Sep", attendance: 90, marks: 85 },
    { month: "Oct", attendance: 92, marks: 88 },
    { month: "Nov", attendance: 88, marks: 82 },
    { month: "Dec", attendance: 95, marks: 90 },
    { month: "Jan", attendance: 93, marks: 92 },
    { month: "Feb", attendance: 97, marks: 95 },
  ];

  return (
    <div className="flex w-full min-h-screen bg-[#f3f0ff]">

      {/* Sidebar */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8">

        {/* HEADER */}
        <h1 className="text-4xl font-bold text-gray-800">
          Student Performance Dashboard
        </h1>
        <p className="text-gray-500 mb-6">
          Welcome back, Emma Johnson
        </p>

        {/* STAT CARDS */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 text-sm font-medium">Attendance</h3>
              <CalendarDays size={20} className="text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">95%</p>
            <p className="text-xs text-gray-400 mt-2">Last updated today</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 text-sm font-medium">Assignment Score</h3>
              <ClipboardList size={20} className="text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">88%</p>
            <p className="text-xs text-gray-400 mt-2">5 assignments completed</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 text-sm font-medium">Exam Score</h3>
              <Award size={20} className="text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">88%</p>
            <p className="text-xs text-gray-400 mt-2">Mid + final average</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 text-sm font-medium">Final Grade</h3>
              <TrendingUp size={20} className="text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">A</p>
            <p className="text-xs text-gray-400 mt-2">Current semester</p>
          </div>
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Performance by Subject</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="subject" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: '#f3f0ff' }} />
                  <Bar dataKey="score" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Attendance vs Marks Trend</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="attendance" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="marks" stroke="#c4b5fd" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* NOTIFICATIONS */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="text-purple-600" />
            <h2 className="font-semibold text-lg">Notifications</h2>
          </div>

          <div className="space-y-3">
            <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-lg">
              <p className="font-medium text-gray-800">Final Exam scheduled for March 15, 2026</p>
              <p className="text-xs text-gray-500 mt-1">2026-03-01</p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-gray-800">Assignment #5 due on February 20, 2026</p>
              <p className="text-xs text-gray-500 mt-1">2026-02-15</p>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-lg">
              <p className="font-medium text-gray-800">Mid-term results published</p>
              <p className="text-xs text-gray-500 mt-1">2026-02-10</p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-gray-800">Project submission deadline: February 28, 2026</p>
              <p className="text-xs text-gray-500 mt-1">2026-02-11</p>
            </div>
          </div>
        </div>

        {/* LOGOUT BUTTON */}
        <div className="flex">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}
