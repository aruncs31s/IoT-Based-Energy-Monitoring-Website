import { Device, EnergyReading } from "../types/index";

// Generate mock readings for the last 24 hours
const generateMockReadings = (baseConsumption: number): EnergyReading[] => {
  const readings: EnergyReading[] = [];
  const now = Date.now();
  const hoursBack = 24;

  for (let i = 0; i < hoursBack * 12; i++) {
    // 5-minute intervals
    const timestamp = now - i * 5 * 60 * 1000;
    const variation = (Math.random() - 0.5) * 20;
    const power = Math.max(0, baseConsumption + variation);

    readings.push({
      timestamp,
      power,
      energy: (power / 1000) * (5 / 60), // Convert to kWh for 5 minutes
    });
  }

  return readings.reverse();
};

export const mockDevices: Device[] = [
  {
    id: "1",
    name: "Air Conditioner",
    location: "Living Room",
    type: "hvac",
    isActive: true,
    currentPower: 2500,
    totalEnergy: 45.8,
    lastUpdated: Date.now(),
    readings: generateMockReadings(2500),
  },
  {
    id: "2",
    name: "Refrigerator",
    location: "Kitchen",
    type: "appliance",
    isActive: true,
    currentPower: 600,
    totalEnergy: 12.5,
    lastUpdated: Date.now(),
    readings: generateMockReadings(600),
  },
  {
    id: "3",
    name: "Washing Machine",
    location: "Laundry Room",
    type: "appliance",
    isActive: false,
    currentPower: 0,
    totalEnergy: 8.2,
    lastUpdated: Date.now() - 3600000,
    readings: generateMockReadings(0),
  },
  {
    id: "4",
    name: "LED Ceiling Light",
    location: "Bedroom",
    type: "light",
    isActive: true,
    currentPower: 15,
    totalEnergy: 0.8,
    lastUpdated: Date.now(),
    readings: generateMockReadings(15),
  },
  {
    id: "5",
    name: "Water Heater",
    location: "Utility Room",
    type: "appliance",
    isActive: true,
    currentPower: 4000,
    totalEnergy: 32.1,
    lastUpdated: Date.now(),
    readings: generateMockReadings(4000),
  },
  {
    id: "6",
    name: "Office Lights",
    location: "Office",
    type: "light",
    isActive: true,
    currentPower: 40,
    totalEnergy: 2.4,
    lastUpdated: Date.now(),
    readings: generateMockReadings(40),
  },
];

export const getDashboardStats = (devices: Device[]) => {
  const totalPower = devices.reduce(
    (sum, device) => sum + device.currentPower,
    0,
  );
  const totalEnergy = devices.reduce(
    (sum, device) => sum + device.totalEnergy,
    0,
  );
  const activeDevices = devices.filter((d) => d.isActive).length;
  const averageConsumption = activeDevices > 0 ? totalPower / activeDevices : 0;

  return {
    totalPower,
    totalEnergy,
    activeDevices,
    averageConsumption,
  };
};
