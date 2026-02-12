import Sidebar from "../../components/Sidebar";
import { Download, FileText, TrendingUp, Award } from "lucide-react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

export default function StudentReports() {
    const pieData = [
        { name: "Assignments", value: 30 },
        { name: "Mid Exam", value: 25 },
        { name: "Final Exam", value: 45 },
    ];
    const COLORS = ["#8b5cf6", "#c4b5fd", "#ddd6fe"];

    const subjectPerformance = [
        { subject: "Math", score: 85 },
        { subject: "Science", score: 80 },
        { subject: "English", score: 92 },
        { subject: "History", score: 70 },
        { subject: "Physics", score: 90 },
    ];

    const semesterSummary = [
        { label: "Total Classes Held", value: "120" },
        { label: "Classes Attended", value: "114" },
        { label: "Attendance Percentage", value: "95%" },
        { label: "Assignments Submitted", value: "5/5" },
        { label: "Assignment Average", value: "86%" },
        { label: "Exam Average", value: "89%" },
    ];

    return (
        <div className="flex w-full min-h-screen bg-[#f3f0ff]">
            <Sidebar />
            <div className="flex-1 p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Performance Reports</h1>
                <p className="text-gray-500 mb-8">Download and view your academic reports</p>

                {/* BANNER */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-500 rounded-xl p-6 mb-8 text-white flex justify-between items-center shadow-lg">
                    <div>
                        <div className="flex items-center gap-2 text-xl font-bold mb-2">
                            <FileText />
                            <h2>Semester Performance Report</h2>
                        </div>
                        <p className="text-purple-100 mb-4">
                            Download your complete performance report including attendance, grades, and feedback
                        </p>
                        <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-purple-50 transition-colors">
                            <Download size={18} />
                            Download Report (PDF)
                        </button>
                    </div>
                    <div className="bg-white/20 p-4 rounded-full">
                        <FileText size={48} />
                    </div>
                </div>

                {/* TOP STATS */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <p className="text-gray-500 text-sm">Overall Score</p>
                                <h3 className="text-2xl font-bold text-gray-800">88%</h3>
                            </div>
                            <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                                <FileText size={20} />
                            </div>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
                            <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: "88%" }}></div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <p className="text-gray-500 text-sm">Attendance</p>
                                <h3 className="text-2xl font-bold text-gray-800">95%</h3>
                            </div>
                            <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                                <TrendingUp size={20} />
                            </div>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
                            <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <p className="text-gray-500 text-sm">Final Grade</p>
                                <h3 className="text-2xl font-bold text-gray-800">A</h3>
                                <p className="text-xs text-gray-400 mt-1">Excellent performance</p>
                            </div>
                            <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                                <Award size={20} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CHARTS SECTION */}
                <div className="grid grid-cols-2 gap-6 mb-8">

                    {/* Score Distribution Pie Chart */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Score Distribution</h2>
                        <div className="h-64 flex items-center justify-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Subject Performance List */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-700 mb-6">Subject Performance</h2>
                        <div className="space-y-5">
                            {subjectPerformance.map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-600">{item.subject}</span>
                                        <span className="text-sm font-bold text-purple-600">{item.score}%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2">
                                        <div
                                            className="bg-purple-500 h-2 rounded-full"
                                            style={{ width: `${item.score}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SUMMARY SECTION */}
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-lg font-semibold text-gray-700 mb-6">Semester Summary</h2>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-12">
                        {semesterSummary.map((item, index) => (
                            <div key={index} className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-500 text-sm">{item.label}</span>
                                <span className="font-semibold text-gray-800 text-sm">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
