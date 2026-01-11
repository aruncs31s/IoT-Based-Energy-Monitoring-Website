export interface EnergyReading {
  timestamp: number;
  power: number; // in watts
  energy: number; // in kWh
}

export interface Device {
  id: string;
  name: string;
  location: string;
  type: "appliance" | "light" | "hvac" | "other";
  isActive: boolean;
  currentPower: number; // in watts
  totalEnergy: number; // in kWh
  lastUpdated: number;
  readings: EnergyReading[];
}

export interface DashboardStats {
  totalPower: number;
  totalEnergy: number;
  activeDevices: number;
  averageConsumption: number;
}
