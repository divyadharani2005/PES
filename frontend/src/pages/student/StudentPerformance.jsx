import Sidebar from "../../components/Sidebar";
import StatCards from "../../components/StatCards";
import { TrendingUp, Award, Bookmark } from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function StudentPerformance() {
    const performanceData = [
        { subject: "Math", score: 85 },
        { subject: "Science", score: 92 },
        { subject: "English", score: 78 },
        { subject: "History", score: 88 },
        { subject: "Physics", score: 95 },
    ];

    const breakdownData = [
        { label: "Assignments", value: 88 },
        { label: "Mid-term Exam", value: 85 },
        { label: "Final Exam", value: 92 },
        { label: "Attendance", value: 95 },
    ];

    return (
        <div className="flex w-full min-h-screen bg-[#f3f0ff]">
            <Sidebar />
            <div className="flex-1 p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Performance Overview</h1>
                <p className="text-gray-500 mb-8">Your detailed academic performance</p>

                {/* STAT CARDS */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    <StatCards title="Overall Score" value="88%" Icon={TrendingUp} subtext="Average performance" />
                    <StatCards title="Final Grade" value="A" Icon={Award} subtext="Excellent" />
                    <StatCards title="Class Rank" value="3/18" Icon={Bookmark} subtext="Top 10% of class" />
                </div>

                {/* BAR CHART */}
                <div className="bg-white rounded-xl shadow p-6 mb-8">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Subject-wise Performance</h2>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={performanceData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="subject" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
                                <Tooltip cursor={{ fill: '#f3f0ff' }} />
                                <Bar dataKey="score" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={60} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* PROGRESS BARS */}
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-lg font-semibold text-gray-700 mb-6">Performance Breakdown</h2>
                    <div className="space-y-6">
                        {breakdownData.map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-gray-700">{item.label}</span>
                                    <span className="text-purple-600 font-bold">{item.value}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2.5">
                                    <div
                                        className="bg-purple-600 h-2.5 rounded-full"
                                        style={{ width: `${item.value}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
