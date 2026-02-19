import { BarChart3, Users, TrendingUp, Award } from "lucide-react";

export default function ClassStatistics({ students }) {
    const stats = {
        totalStudents: students.length,
        avgAttendance: Math.round(students.reduce((s, a) => s + (a.attendance || 0), 0) / Math.max(1, students.length)),
        avgGrade: (students.reduce((s, a) => {
            const gradeValue = a.grade === 'A' ? 4 : a.grade === 'B' ? 3 : a.grade === 'C' ? 2 : 1;
            return s + gradeValue;
        }, 0) / students.length).toFixed(1),
        passRate: Math.round((students.filter(s => s.grade !== 'D').length / students.length) * 100),
    };

    return (
        <div className="grid grid-cols-4 gap-4 bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
            <div className="p-4 rounded-lg bg-white shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-600">Total Students</p>
                        <p className="text-2xl font-bold mt-2 text-gray-800">{stats.totalStudents}</p>
                    </div>
                    <Users size={28} className="text-purple-500 opacity-50" />
                </div>
            </div>

            <div className="p-4 rounded-lg bg-white shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-600">Avg Attendance</p>
                        <p className="text-2xl font-bold mt-2 text-gray-800">{stats.avgAttendance}%</p>
                    </div>
                    <BarChart3 size={28} className="text-blue-500 opacity-50" />
                </div>
            </div>

            <div className="p-4 rounded-lg bg-white shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-600">Avg Grade</p>
                        <p className="text-2xl font-bold mt-2 text-gray-800">{stats.avgGrade}/4</p>
                    </div>
                    <Award size={28} className="text-green-500 opacity-50" />
                </div>
            </div>

            <div className="p-4 rounded-lg bg-white shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-600">Pass Rate</p>
                        <p className="text-2xl font-bold mt-2 text-gray-800">{stats.passRate}%</p>
                    </div>
                    <TrendingUp size={28} className="text-orange-500 opacity-50" />
                </div>
            </div>
        </div>
    );
}
