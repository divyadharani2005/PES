import { AlertCircle, TrendingDown, CheckCircle } from "lucide-react";

export default function RiskBadge({ attendance, grade, showLabel = true }) {
    let riskLevel = "low";
    let color = "bg-green-100 text-green-700";
    let icon = <CheckCircle size={16} />;
    let label = "Excellent";

    if (attendance < 75 || grade === "D") {
        riskLevel = "high";
        color = "bg-red-100 text-red-700";
        icon = <AlertCircle size={16} />;
        label = "At Risk";
    } else if (attendance < 85 || grade === "C") {
        riskLevel = "medium";
        color = "bg-yellow-100 text-yellow-700";
        icon = <TrendingDown size={16} />;
        label = "Medium Risk";
    }

    return (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${color} ${riskLevel === 'high' ? 'animate-pulse' : ''}`}>
            {icon}
            {showLabel && label}
        </div>
    );
}
