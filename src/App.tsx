import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { StatsCard } from "./components/StatsCard";
import { DeviceCard } from "./components/DeviceCard";
import { EnergyChart } from "./components/EnergyChart";
import { mockDevices, getDashboardStats } from "./data/mockData";
import { Device } from "./types/index";

function App() {
  const [devices, setDevices] = useState<Device[]>(mockDevices);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(
    mockDevices[0]?.id || null,
  );
  const stats = getDashboardStats(devices);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setDevices((prevDevices: Device[]) =>
        prevDevices.map((device: Device) => {
          if (!device.isActive) {
            return device;
          }

          // Simulate power fluctuations for active devices
          const variation = (Math.random() - 0.5) * 100;
          const newPower = Math.max(0, device.currentPower + variation);
          const energyIncrease = (newPower / 1000) * (1 / 3600); // per second

          return {
            ...device,
            currentPower: newPower,
            totalEnergy: device.totalEnergy + energyIncrease,
            lastUpdated: Date.now(),
            readings: [
              ...device.readings,
              {
                timestamp: Date.now(),
                power: newPower,
                energy: energyIncrease,
              },
            ].slice(-288), // Keep last 24 hours (12 readings per hour * 24)
          };
        }),
      );
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const handleToggleDevice = (id: string) => {
    setDevices((prevDevices: Device[]) =>
      prevDevices.map((device: Device) =>
        device.id === id
          ? {
              ...device,
              isActive: !device.isActive,
              currentPower: !device.isActive ? device.currentPower : 0,
            }
          : device,
      ),
    );
  };

  const selectedDevice = devices.find((d: Device) => d.id === selectedDeviceId);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto p-6">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Power"
            value={stats.totalPower}
            unit="W"
            icon="⚡"
            color="blue"
          />
          <StatsCard
            title="Total Energy"
            value={stats.totalEnergy}
            unit="kWh"
            icon="📊"
            color="green"
          />
          <StatsCard
            title="Active Devices"
            value={stats.activeDevices}
            unit=""
            icon="🔌"
            color="orange"
          />
          <StatsCard
            title="Avg Consumption"
            value={stats.averageConsumption}
            unit="W"
            icon="📈"
            color="purple"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Devices List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Devices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {devices.map((device: Device) => (
                <div
                  key={device.id}
                  onClick={() => setSelectedDeviceId(device.id)}
                  className="cursor-pointer"
                >
                  <DeviceCard device={device} onToggle={handleToggleDevice} />
                </div>
              ))}
            </div>
          </div>

          {/* Selected Device Chart and Details */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics</h2>
            {selectedDevice ? (
              <div className="space-y-4">
                <EnergyChart device={selectedDevice} />
                <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Device Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium">{selectedDevice.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">
                        {selectedDevice.location}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-medium capitalize">
                        {selectedDevice.type}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span
                        className={`font-medium ${selectedDevice.isActive ? "text-green-600" : "text-gray-400"}`}
                      >
                        {selectedDevice.isActive ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Power:</span>
                      <span className="font-medium">
                        {selectedDevice.currentPower.toFixed(0)} W
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Energy:</span>
                      <span className="font-medium">
                        {selectedDevice.totalEnergy.toFixed(2)} kWh
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 text-center">
                <p className="text-gray-500">
                  Click on a device to view analytics
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
