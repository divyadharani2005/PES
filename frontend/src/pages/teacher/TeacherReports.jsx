import Sidebar from "../../components/Sidebar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { DownloadCloud } from "lucide-react";

const students = [
    { name: "Emma", score: 85, attendance: 95, grade: "A" },
    { name: "Liam", score: 78, attendance: 78, grade: "B" },
    { name: "Olivia", score: 91, attendance: 92, grade: "A" },
    { name: "Noah", score: 70, attendance: 68, grade: "C" },
    { name: "Ava", score: 82, attendance: 88, grade: "B" },
    { name: "Ethan", score: 60, attendance: 55, grade: "D" },
    { name: "Sophia", score: 94, attendance: 98, grade: "A" },
    { name: "Mason", score: 78, attendance: 82, grade: "B" },
];

const gradeCounts = [
    { name: "A", value: students.filter(s => s.grade === 'A').length },
    { name: "B", value: students.filter(s => s.grade === 'B').length },
    { name: "C", value: students.filter(s => s.grade === 'C').length },
    { name: "D", value: students.filter(s => s.grade === 'D').length },
];
const COLORS = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042"];

export default function TeacherReports() {
    const total = students.length;
    const avgAttendance = Math.round(students.reduce((s, a) => s + a.attendance, 0) / total);
    const avgScore = Math.round(students.reduce((s, a) => s + a.score, 0) / total);

    return (
        <div className="flex w-full min-h-screen bg-[#f3f0ff]">
            <Sidebar />
            <div className="flex-1 p-8">
                <h1 className="text-2xl font-bold mb-2">Class Reports</h1>
                <p className="text-sm text-gray-500 mb-6">Generate and download comprehensive class reports</p>

                <div className="mb-6 bg-gradient-to-r from-purple-500 to-purple-300 text-white rounded-lg p-6 flex items-center justify-between">
                    <div>
                        <h3 className="font-semibold">Class Performance Report</h3>
                        <p className="text-sm opacity-90">Download comprehensive report with student performance, attendance, and analytics</p>
                        <div className="mt-4">
                            <button onClick={() => window.print()} className="bg-white text-purple-600 px-4 py-2 rounded-md inline-flex items-center gap-2">
                                <DownloadCloud size={16} /> Download Class Report (PDF)
                            </button>
                        </div>
                    </div>
                    <div className="opacity-40">
                        <div className="w-20 h-20 bg-white/20 rounded-md"></div>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="p-4 bg-white rounded-lg shadow-sm border">
                        <p className="text-sm text-gray-500">Total Students</p>
                        <p className="text-2xl font-semibold mt-2">{total}</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm border">
                        <p className="text-sm text-gray-500">Avg Attendance</p>
                        <p className="text-2xl font-semibold mt-2">{avgAttendance}%</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm border">
                        <p className="text-sm text-gray-500">Avg Score</p>
                        <p className="text-2xl font-semibold mt-2">{avgScore}%</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm border">
                        <p className="text-sm text-gray-500">Grade A Count</p>
                        <p className="text-2xl font-semibold mt-2">{gradeCounts[0].value}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="bg-white rounded-lg shadow-sm border p-4 h-64">
                        <h4 className="font-semibold mb-4">Student Performance Overview</h4>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={students} margin={{ bottom: 48 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} interval={0} tick={{ angle: -45, textAnchor: 'end' }} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip />
                                <Bar dataKey="score" fill="#8b5cf6" barSize={30} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border p-4 h-64">
                        <h4 className="font-semibold mb-4">Grade Distribution</h4>
                        <div className="flex items-center h-full">
                            <div className="w-2/3 h-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={gradeCounts} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                                            {gradeCounts.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="w-1/3 pl-4 h-full flex flex-col justify-center gap-3">
                                {gradeCounts.map((g, idx) => (
                                    <div key={g.name} className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full" style={{ background: COLORS[idx % COLORS.length] }}></div>
                                        <div className="text-sm text-gray-700">Grade {g.name}:</div>
                                        <div className="text-sm font-semibold text-gray-800">{g.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-4">
                    <h4 className="font-semibold mb-4">Detailed Class Statistics</h4>
                    <div className="grid grid-cols-3 gap-6 text-sm text-gray-700">
                        <div>
                            <h5 className="font-medium mb-2">Attendance Statistics</h5>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Excellent (≥90%)</span>
                                    <span>3 students</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Good (75-89%)</span>
                                    <span>3 students</span>
                                </div>
                                <div className="flex justify-between text-red-600">
                                    <span>Poor (&lt;75%)</span>
                                    <span>2 students</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h5 className="font-medium mb-2">Assignment Performance</h5>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>3 students</span>
                                    <span>Highest Score</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>58%</span>
                                    <span>Lowest Score</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-purple-600">80%</span>
                                    <span>Average Score</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h5 className="font-medium mb-2">Exam Performance</h5>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>95%</span>
                                    <span>Highest Final</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>62%</span>
                                    <span>Lowest Final</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-purple-600">83%</span>
                                    <span>Average Final</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
