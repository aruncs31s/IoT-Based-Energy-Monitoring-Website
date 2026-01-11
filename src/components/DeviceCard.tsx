import React from "react";
import { Device } from "../types/index";

interface DeviceCardProps {
  device: Device;
  onToggle: (id: string) => void;
}

const getDeviceIcon = (type: Device["type"]) => {
  switch (type) {
    case "appliance":
      return "🔌";
    case "light":
      return "💡";
    case "hvac":
      return "❄️";
    default:
      return "⚙️";
  }
};

const getStatusColor = (isActive: boolean) => {
  return isActive ? "bg-green-500" : "bg-gray-400";
};

export const DeviceCard = ({ device, onToggle }: DeviceCardProps) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{getDeviceIcon(device.type)}</span>
          <div>
            <h3 className="font-bold text-gray-900">{device.name}</h3>
            <p className="text-sm text-gray-500">{device.location}</p>
          </div>
        </div>
        <div
          className={`w-3 h-3 rounded-full ${getStatusColor(device.isActive)}`}
        />
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Current Power</span>
          <span className="font-bold text-gray-900">
            {device.currentPower.toFixed(0)} W
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Total Energy</span>
          <span className="font-bold text-gray-900">
            {device.totalEnergy.toFixed(2)} kWh
          </span>
        </div>
      </div>

      <button
        onClick={() => onToggle(device.id)}
        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
          device.isActive
            ? "bg-red-100 text-red-600 hover:bg-red-200"
            : "bg-green-100 text-green-600 hover:bg-green-200"
        }`}
      >
        {device.isActive ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
};
