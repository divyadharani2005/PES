import { LayoutDashboard, BarChart3, FileText, GraduationCap, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const isTeacher = location.pathname.startsWith("/teacher");

  return (
    <div className="w-[260px] bg-white border-r p-6">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-purple-600 p-2 rounded-xl text-white">
          <GraduationCap size={20} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-700">PES</h1>
          <p className="text-xs text-gray-400">{isTeacher ? "Teacher" : "Student"}</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="space-y-3">

        {isTeacher ? (
          <>
            <div
              onClick={() => navigate("/teacher/dashboard")}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${location.pathname === "/teacher/dashboard"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-50"
                }`}
            >
              <LayoutDashboard size={18} />
              Dashboard
            </div>

            <div
              onClick={() => navigate("/teacher/performance")}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${location.pathname === "/teacher/performance"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-50"
                }`}
            >
              <BarChart3 size={18} />
              Manage Performance
            </div>

            <div
              onClick={() => navigate("/teacher/reports")}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${location.pathname === "/teacher/reports"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-50"
                }`}
            >
              <FileText size={18} />
              Reports
            </div>
          </>
        ) : (
          <>
            <div
              onClick={() => navigate("/student/dashboard")}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${location.pathname === "/student/dashboard"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-50"
                }`}
            >
              <LayoutDashboard size={18} />
              Dashboard
            </div>

            <div
              onClick={() => navigate("/student/performance")}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${location.pathname === "/student/performance"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-50"
                }`}
            >
              <BarChart3 size={18} />
              Performance
            </div>

            <div
              onClick={() => navigate("/student/reports")}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${location.pathname === "/student/reports"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-50"
                }`}
            >
              <FileText size={18} />
              Reports
            </div>
          </>
        )}

      </nav>

      <div
        onClick={handleLogout}
        className="absolute bottom-6 left-6 flex items-center gap-3 text-gray-500 cursor-pointer hover:text-gray-900 transition-colors"
      >
        <LogOut size={18} />
        <span>Logout</span>
      </div>
    </div>
  );
}
