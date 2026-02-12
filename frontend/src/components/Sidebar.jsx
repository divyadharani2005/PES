import { LayoutDashboard, BarChart3, FileText, GraduationCap } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-[260px] bg-white border-r p-6">
      
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-purple-600 p-2 rounded-xl text-white">
          <GraduationCap size={20}/>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-700">PES</h1>
          <p className="text-xs text-gray-400">Student</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="space-y-3">

        <div className="flex items-center gap-3 bg-purple-100 text-purple-600 p-3 rounded-xl">
          <LayoutDashboard size={18}/>
          Dashboard
        </div>

        <div className="flex items-center gap-3 text-gray-500 p-3">
          <BarChart3 size={18}/>
          Performance
        </div>

        <div className="flex items-center gap-3 text-gray-500 p-3">
          <FileText size={18}/>
          Reports
        </div>

      </nav>
    </div>
  );
}
