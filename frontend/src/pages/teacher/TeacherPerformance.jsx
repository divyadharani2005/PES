import React, { useState } from "react";
import {
    Users,
    CalendarDays,
    AlertTriangle,
    Search,
    Pencil,
    Download,
    X,
} from "lucide-react";
import Sidebar from "../../components/Sidebar";

const sampleStudents = [
    { id: 1, name: "Emma Johnson", attendance: 95, assignment: 88, mid: 85, final: 90, grade: "A" },
    { id: 2, name: "Liam Smith", attendance: 72, assignment: 75, mid: 70, final: 65, grade: "B" }, // Low attendance
    { id: 3, name: "Olivia Brown", attendance: 88, assignment: 92, mid: 90, final: 95, grade: "A" },
    { id: 4, name: "Noah Davis", attendance: 92, assignment: 85, mid: 80, final: 82, grade: "B" },
    { id: 5, name: "Ava Wilson", attendance: 65, assignment: 60, mid: 55, final: 58, grade: "C" }, // Low attendance & Low final
];

const calculateGrade = (final) => {
    if (final >= 90) return "A";
    if (final >= 80) return "B";
    if (final >= 70) return "C";
    if (final >= 60) return "D";
    return "F";
};

export default function TeacherPerformance() {
    const [students, setStudents] = useState(sampleStudents);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEdit = (student) => {
        setSelectedStudent({ ...student });
        setIsEditModalOpen(true);
    };

    const handleSave = () => {
        const updatedStudent = {
            ...selectedStudent,
            grade: calculateGrade(selectedStudent.final)
        };
        setStudents(students.map(s => s.id === updatedStudent.id ? updatedStudent : s));
        setIsEditModalOpen(false);
    };

    // Stats
    const total = students.length;
    const lowAttendance = students.filter(s => s.attendance < 75).length;
    const avgAttendance = (students.reduce((sum, s) => sum + s.attendance, 0) / (total || 1)).toFixed(1);

    return (
        <div className="flex w-full min-h-screen bg-[#f3f0ff]">
            <Sidebar />

            <div className="flex-1 p-8">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Student Performance Management</h1>
                        <p className="text-gray-500">Track and manage student academic records</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition shadow-sm">
                            <Download size={18} />
                            Export Data
                        </button>
                    </div>
                </div>

                {/* STATS OVERVIEW */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Total Students</p>
                            <p className="text-2xl font-bold mt-1 text-gray-800">{total}</p>
                        </div>
                        <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                            <Users size={24} />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Avg Attendance</p>
                            <p className="text-2xl font-bold mt-1 text-gray-800">{avgAttendance}%</p>
                        </div>
                        <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                            <CalendarDays size={24} />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Low Attendance Alerts</p>
                            <p className="text-2xl font-bold mt-1 text-red-500">{lowAttendance}</p>
                        </div>
                        <div className="bg-red-100 p-3 rounded-lg text-red-600">
                            <AlertTriangle size={24} />
                        </div>
                    </div>
                </div>

                {/* STUDENT TABLE */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="font-semibold text-gray-700">Student Performance Records</h2>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                <Search size={16} />
                            </span>
                            <input
                                type="text"
                                placeholder="Search student..."
                                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-xs text-gray-500 uppercase font-semibold">
                                <tr>
                                    <th className="p-4">Name</th>
                                    <th className="p-4">Attendance</th>
                                    <th className="p-4">Assig.</th>
                                    <th className="p-4">Mid</th>
                                    <th className="p-4">Final</th>
                                    <th className="p-4">Grade</th>
                                    <th className="p-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {students.map((s) => (
                                    <tr key={s.id} className="hover:bg-gray-50 transition">
                                        <td className="p-4 font-medium text-gray-800">{s.name}</td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-16 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full ${s.attendance < 75 ? 'bg-red-500' : 'bg-green-500'}`}
                                                        style={{ width: `${s.attendance}%` }}
                                                    ></div>
                                                </div>
                                                <span className={`text-sm ${s.attendance < 75 ? 'text-red-500 font-semibold' : 'text-gray-600'}`}>
                                                    {s.attendance}%
                                                </span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-sm text-gray-600">{s.assignment}%</td>
                                        <td className="p-4 text-sm text-gray-600">{s.mid}%</td>
                                        <td className="p-4 text-sm text-gray-600">{s.final}%</td>
                                        <td className="p-4">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold leading-none ${s.grade === 'A' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'
                                                }`}>
                                                {s.grade}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <button
                                                onClick={() => handleEdit(s)}
                                                className="p-1.5 hover:bg-purple-50 rounded-lg text-purple-600 transition"
                                                title="Edit Performance"
                                            >
                                                <Pencil size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* EDIT MODAL */}
            {isEditModalOpen && selectedStudent && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 backdrop-blur-sm">
                    <div className="bg-white p-8 rounded-2xl w-[450px] shadow-2xl animate-in zoom-in duration-200">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Edit Student Score</h2>
                            <button
                                onClick={() => setIsEditModalOpen(false)}
                                className="p-1 hover:bg-gray-100 rounded-full text-gray-400 transition"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Student Name</label>
                                <input
                                    type="text"
                                    value={selectedStudent.name}
                                    readOnly
                                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-500 outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Attendance %</label>
                                    <input
                                        type="number"
                                        value={selectedStudent.attendance}
                                        onChange={(e) => setSelectedStudent({ ...selectedStudent, attendance: Number(e.target.value) })}
                                        className="w-full p-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Assignment %</label>
                                    <input
                                        type="number"
                                        value={selectedStudent.assignment}
                                        onChange={(e) => setSelectedStudent({ ...selectedStudent, assignment: Number(e.target.value) })}
                                        className="w-full p-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mid Exam %</label>
                                    <input
                                        type="number"
                                        value={selectedStudent.mid}
                                        onChange={(e) => setSelectedStudent({ ...selectedStudent, mid: Number(e.target.value) })}
                                        className="w-full p-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Final Exam %</label>
                                    <input
                                        type="number"
                                        value={selectedStudent.final}
                                        onChange={(e) => setSelectedStudent({ ...selectedStudent, final: Number(e.target.value) })}
                                        className="w-full p-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-3">
                            <button
                                onClick={() => setIsEditModalOpen(false)}
                                className="flex-1 py-3 bg-gray-100 text-gray-600 rounded-xl font-semibold hover:bg-gray-200 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition shadow-lg shadow-purple-200"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
