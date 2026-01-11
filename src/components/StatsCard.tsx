import React, { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: string | ReactNode;
  color?: "blue" | "green" | "orange" | "purple";
}

const colorClasses = {
  blue: "bg-blue-50 border-blue-200 text-blue-600",
  green: "bg-green-50 border-green-200 text-green-600",
  orange: "bg-orange-50 border-orange-200 text-orange-600",
  purple: "bg-purple-50 border-purple-200 text-purple-600",
};

export const StatsCard = ({
  title,
  value,
  unit,
  icon,
  color = "blue",
}: StatsCardProps) => {
  return (
    <div className={`p-6 rounded-lg border-2 ${colorClasses[color]} shadow-sm`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold mt-2">
            {typeof value === "number" ? value.toFixed(1) : value}
            {unit && <span className="text-lg ml-1">{unit}</span>}
          </p>
        </div>
        <div className="text-4xl opacity-80">{icon}</div>
      </div>
    </div>
  );
};
