import { useState } from "react";
import { Pencil, AlertTriangle, Users } from "lucide-react";
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
    const lowAttendance = students.filter((s) => s.attendance < 75);
    const avgAttendance = (
        students.reduce((sum, s) => sum + (s.attendance || 0), 0) / Math.max(1, students.length)
    ).toFixed(0);
    const gradeACount = students.filter((s) => s.grade === "A").length;

    return (
        <div className="flex w-full min-h-screen bg-[#f3f0ff]">
            <Sidebar />
            <div className="flex-1 p-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">Manage Student Performance</h1>
                    <p className="text-sm text-gray-500">Update and track student records</p>
                </div>

                {lowAttendance.length > 0 && (
                    <div className="mb-6 border border-red-200 bg-red-50 text-red-700 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div className="mt-1 text-red-600">
                                <AlertTriangle size={18} />
                            </div>
                            <div>
                                <p className="font-medium">Low Attendance Alert</p>
                                <p className="text-sm text-gray-600">{lowAttendance.length} student(s) have attendance below 75%: {lowAttendance.map((s) => s.name).join(', ')}</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="p-4 bg-white rounded-lg shadow-sm border flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Total Students</p>
                            <p className="text-2xl font-semibold mt-2">{total}</p>
                        </div>
                        <div className="text-purple-200">
                            <Users size={28} />
                        </div>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-sm border flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Average Attendance</p>
                            <p className="text-2xl font-semibold mt-2">{avgAttendance}%</p>
                        </div>
                        <div className="text-purple-200">
                            <Users size={28} />
                        </div>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-sm border flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Students with Grade A</p>
                            <p className="text-2xl font-semibold mt-2">{gradeACount}</p>
                        </div>
                        <div className="text-purple-200">
                            <Users size={28} />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                    <div className="p-4 border-b">
                        <h2 className="font-semibold">Student Records</h2>
                        <p className="text-xs text-gray-500">Click Edit to update attendance and marks</p>
                    </div>

                    <div className="p-4 overflow-x-auto">
                        <table className="min-w-full text-left">
                            <thead className="text-xs text-gray-500 bg-gray-50">
                                <tr>
                                    <th className="p-3">ID</th>
                                    <th className="p-3">STUDENT NAME</th>
                                    <th className="p-3">ATTENDANCE</th>
                                    <th className="p-3">ASSIGNMENT</th>
                                    <th className="p-3">MID EXAM</th>
                                    <th className="p-3">FINAL EXAM</th>
                                    <th className="p-3">GRADE</th>
                                    <th className="p-3">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((s, i) => (
                                    <tr key={i} className="border-t text-sm">
                                        <td className="p-3 text-gray-600">#{i + 1}</td>
                                        <td className="p-3">{s.name}</td>
                                        <td className={`p-3 ${s.attendance < 75 ? 'text-red-500' : ''}`}>{s.attendance}%</td>
                                        <td className="p-3">{s.assignment}%</td>
                                        <td className="p-3">{s.mid}%</td>
                                        <td className="p-3">{s.final}%</td>
                                        <td className="p-3">
                                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${s.grade === 'A' ? 'bg-green-100 text-green-700' :
                                                    s.grade === 'B' ? 'bg-blue-100 text-blue-700' :
                                                        s.grade === 'C' ? 'bg-yellow-100 text-yellow-700' :
                                                            'bg-red-100 text-red-700'
                                                }`}>{s.grade}</span>
                                        </td>
                                        <td className="p-3">
                                            <button className="flex items-center gap-2 px-3 py-1 border rounded-md text-sm text-purple-600 hover:bg-purple-50">
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
        </div>
    );
}
