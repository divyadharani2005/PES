import { useState } from "react";
import { Pencil } from "lucide-react";
import Sidebar from "../../components/Sidebar";

const sampleStudents = [
    { name: "Emma Johnson", attendance: 95, assignment: 88, mid: 85, final: 92, grade: "A" },
    { name: "Liam Smith", attendance: 78, assignment: 75, mid: 72, final: 78, grade: "B" },
    { name: "Olivia Brown", attendance: 92, assignment: 90, mid: 88, final: 94, grade: "A" },
    { name: "Noah Davis", attendance: 68, assignment: 65, mid: 70, final: 72, grade: "C" },
    { name: "Ava Wilson", attendance: 88, assignment: 85, mid: 82, final: 87, grade: "B" },
    { name: "Ethan Martinez", attendance: 55, assignment: 58, mid: 60, final: 62, grade: "D" },
    { name: "Sophia Garcia", attendance: 98, assignment: 95, mid: 92, final: 96, grade: "A" },
    { name: "Mason Rodriguez", attendance: 82, assignment: 80, mid: 78, final: 83, grade: "B" },
];

export default function TeacherPerformance() {
    const [students] = useState(sampleStudents);

    const total = students.length;
    const lowAttendance = students.filter(s => s.attendance < 75).length;
    const avgGrade = (
        students.reduce((sum, s) => sum + (s.final || 0), 0) / Math.max(1, students.length) / 25
    ).toFixed(1); // crude GPA-ish value for demo

    return (
        <div className="flex w-full min-h-screen bg-[#f3f0ff]">
            <Sidebar />
            <div className="flex-1 p-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Teacher Performance Panel</h1>
                        <p className="text-sm text-gray-500">Manage and track student performance</p>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="p-4 bg-white rounded-lg shadow-sm border">
                        <p className="text-sm text-gray-500">Total Students</p>
                        <p className="text-2xl font-semibold mt-2">{total}</p>
                        <p className="text-xs text-gray-400">Active this semester</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm border">
                        <p className="text-sm text-gray-500">Low Attendance Alerts</p>
                        <p className="text-2xl font-semibold mt-2 text-red-500">{lowAttendance}</p>
                        <p className="text-xs text-gray-400">Below 75%</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm border">
                        <p className="text-sm text-gray-500">Average Grade</p>
                        <p className="text-2xl font-semibold mt-2">{avgGrade}</p>
                        <p className="text-xs text-gray-400">GPA scale</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm border">
                        <p className="text-sm text-gray-500">Performance Trend</p>
                        <p className="text-2xl font-semibold mt-2">+12%</p>
                        <p className="text-xs text-gray-400">From last semester</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                    <div className="p-4 border-b">
                        <h2 className="font-semibold">Student Performance</h2>
                    </div>

                    <table className="min-w-full text-left">
                        <thead className="text-xs text-gray-500 bg-gray-50">
                            <tr>
                                <th className="p-4">Student Name</th>
                                <th className="p-4">Attendance</th>
                                <th className="p-4">Assignment</th>
                                <th className="p-4">Mid Exam</th>
                                <th className="p-4">Final Exam</th>
                                <th className="p-4">Grade</th>
                                <th className="p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((s, i) => (
                                <tr key={i} className="border-t">
                                    <td className="p-4">{s.name}</td>
                                    <td className={`p-4 ${s.attendance < 75 ? 'text-red-500' : ''}`}>{s.attendance}%</td>
                                    <td className="p-4">{s.assignment}%</td>
                                    <td className="p-4">{s.mid}%</td>
                                    <td className="p-4">{s.final}%</td>
                                    <td className="p-4">{s.grade}</td>
                                    <td className="p-4">
                                        <button className="flex items-center gap-2 px-3 py-1 border rounded-md text-sm text-purple-600">
                                            <Pencil size={14} /> Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
