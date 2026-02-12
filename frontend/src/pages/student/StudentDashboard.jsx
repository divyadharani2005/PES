import Sidebar from "../../components/Sidebar";
import StatCards from "../../components/StatCards";
import {
  CalendarDays,
  ClipboardList,
  Award,
  TrendingUp,
  Bell,
} from "lucide-react";

export default function StudentDashboard() {
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
          <StatCards title="Attendance" value="95%" Icon={CalendarDays}/>
          <StatCards title="Assignment Score" value="88%" Icon={ClipboardList}/>
          <StatCards title="Exam Score" value="88%" Icon={Award}/>
          <StatCards title="Final Grade" value="A" Icon={TrendingUp}/>
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            Performance by Subject
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            Attendance vs Marks Trend
          </div>
        </div>

        {/* NOTIFICATIONS */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="text-purple-600"/>
            <h2 className="font-semibold text-lg">Notifications</h2>
          </div>

          <div className="space-y-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              Final Exam scheduled for March 15, 2026
            </div>

            <div className="bg-purple-100 p-3 rounded-lg">
              Assignment #5 due on February 20, 2026
            </div>

            <div className="bg-purple-100 p-3 rounded-lg">
              Mid-term results published
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
