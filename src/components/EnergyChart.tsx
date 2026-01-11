import React from "react";
import { Device } from "../types/index";

interface EnergyChartProps {
  device: Device;
}

export function EnergyChart({ device }: EnergyChartProps) {
  const readings = device.readings.slice(-288); // Last 24 hours (12 readings per hour)
  const maxPower = Math.max(...readings.map((r) => r.power), 1);
  const chartHeight = 200;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h3 className="font-bold text-gray-900 mb-4">
        {device.name} - 24hr Power Usage
      </h3>

      <div className="flex items-end gap-1 h-48 bg-gray-50 p-4 rounded">
        {readings.map((reading, index) => {
          const height = (reading.power / maxPower) * chartHeight;
          return (
            <div
              key={index}
              className="flex-1 bg-blue-500 rounded-t opacity-75 hover:opacity-100 transition-opacity"
              style={{ height: `${height}px`, minHeight: "2px" }}
              title={`${reading.power.toFixed(0)}W`}
            />
          );
        })}
      </div>

      <div className="flex justify-between mt-4 text-xs text-gray-500">
        <span>24h ago</span>
        <span>Now</span>
      </div>
    </div>
  );
}
