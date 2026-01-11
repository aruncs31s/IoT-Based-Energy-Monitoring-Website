# IoT Energy Monitoring Dashboard

A modern, responsive React + TypeScript + Tailwind CSS application for monitoring IoT energy consumption in real-time with mock data.

## Features

✨ **Real-time Dashboard**
- Live energy consumption metrics
- 24-hour power usage charts
- Device status monitoring with active/inactive indicators

📊 **Device Management**
- View and control multiple IoT devices
- Monitor power consumption per device
- Track total energy usage across all devices
- Toggle devices on/off with instant feedback
- Device categorization (appliance, light, HVAC, other)

💡 **Mock Data**
- Pre-configured 6 IoT devices (Air Conditioner, Refrigerator, Washing Machine, LED Lights, Water Heater, Office Lights)
- Simulated real-time energy data updates every second
- Historical power consumption data (last 24 hours)
- Realistic power fluctuations

📈 **Analytics & Visualization**
- 24-hour power consumption charts
- Device location and type information
- Current power and total energy statistics
- Dashboard statistics (total power, total energy, active devices, average consumption)

🎨 **Modern UI/UX**
- Responsive design (mobile, tablet, desktop)
- Beautiful Tailwind CSS styling with gradient headers
- Interactive cards with hover effects
- Color-coded stats cards
- Real-time updates visualization

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Lightning-fast build tool
- **Node.js** - Runtime environment

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Installation & Setup

### 1. Clone or navigate to the project directory
```bash
cd IoT-Based-Energy-Monitoring-Website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:3000`

## Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
IoT-Based-Energy-Monitoring-Website/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # App header with title and current time
│   │   ├── StatsCard.tsx       # Reusable stats display component
│   │   ├── DeviceCard.tsx      # Individual device card with controls
│   │   └── EnergyChart.tsx     # 24-hour power consumption chart
│   ├── data/
│   │   └── mockData.ts         # Mock IoT devices and helper functions
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # React entry point
│   └── index.css               # Global Tailwind styles
├── public/                      # Static assets
├── index.html                   # HTML entry point
├── package.json                 # Project dependencies
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── vite.config.ts               # Vite build configuration
├── .gitignore                   # Git ignore file
└── README.md                    # This file
```

## Mock Devices

The dashboard includes 6 pre-configured devices with realistic power consumption patterns:

### 1. **Air Conditioner** 🌡️
- Location: Living Room
- Type: HVAC
- Status: Active
- Base Power: 2500W
- Typical Usage: Continuous cooling cycles

### 2. **Refrigerator** 🧊
- Location: Kitchen
- Type: Appliance
- Status: Active
- Base Power: 600W
- Typical Usage: Continuous operation with compressor cycles

### 3. **Washing Machine** 🌊
- Location: Laundry Room
- Type: Appliance
- Status: Inactive (can be toggled on)
- Base Power: 1800W (when running)
- Typical Usage: On-demand

### 4. **LED Ceiling Light** 💡
- Location: Bedroom
- Type: Light
- Status: Active
- Base Power: 15W
- Typical Usage: Variable lighting

### 5. **Water Heater** 🔥
- Location: Utility Room
- Type: Appliance
- Status: Active
- Base Power: 4000W
- Typical Usage: Periodic heating cycles

### 6. **Office Lights** 💡
- Location: Office
- Type: Light
- Status: Active
- Base Power: 40W
- Typical Usage: Regular operation

## Key Features Explained

### Dashboard Statistics
- **Total Power (W)**: Sum of all active device power consumption in watts
- **Total Energy (kWh)**: Cumulative energy used by all devices in kilowatt-hours
- **Active Devices**: Count of devices currently powered on
- **Avg Consumption (W)**: Average power consumption per active device

### Device Cards
Each device card displays:
- Device name with icon indicating type
- Location information
- Current power consumption in watts
- Total energy used in kilowatt-hours
- Real-time status indicator (green dot for active, gray for inactive)
- On/Off toggle button for device control

### Energy Analytics Panel
- Select any device by clicking its card
- View detailed 24-hour power consumption chart
- See device-specific information (name, location, type, status)
- Monitor real-time power and energy metrics

### Real-time Simulation
- Power consumption updates every second
- Realistic power fluctuations based on device type
- Energy totals calculated in real-time
- Historical data retained for 24-hour window

## How the Application Works

1. **Initialization**: On app load, mock devices are created with random but realistic initial readings
2. **Real-time Updates**: Every second, the app simulates power consumption changes for active devices
3. **Energy Calculation**: Energy usage is calculated from power consumption (kWh = W × hours)
4. **Data Retention**: The app keeps the last 288 readings per device (24 hours × 12 readings/hour)
5. **Device Control**: Users can toggle devices on/off, which affects real-time power calculations
6. **Chart Visualization**: Selected device data is displayed as a bar chart showing power trends

## Customization Guide

### Adding New Devices

Edit `src/data/mockData.ts` and add a new device object to the `mockDevices` array:

```typescript
{
  id: '7',
  name: 'Device Name',
  location: 'Room Name',
  type: 'appliance' | 'light' | 'hvac' | 'other',
  isActive: true,
  currentPower: 1000,  // watts
  totalEnergy: 0,      // kWh
  lastUpdated: Date.now(),
  readings: generateMockReadings(1000),
}
```

### Changing Colors and Themes

Edit `tailwind.config.js` to customize:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### Modifying Update Frequency

In `src/App.tsx`, change the interval duration:
```typescript
}, 1000); // Change 1000 to desired milliseconds
```

### Adjusting Power Fluctuation Range

In `src/data/mockData.ts`, modify the variation calculation:
```typescript
const variation = (Math.random() - 0.5) * 100; // Change 100 to your range
```

## Component Details

### Header Component
- Displays application title and description
- Shows current date and time
- Responsive gradient background

### StatsCard Component
- Reusable component for displaying metrics
- Supports color coding (blue, green, orange, purple)
- Shows title, value, unit, and icon
- Props: `title`, `value`, `unit`, `icon`, `color`

### DeviceCard Component
- Displays individual device information
- Shows device icon based on type
- Real-time power and energy metrics
- Toggle button for device control
- Status indicator with color coding

### EnergyChart Component
- Bar chart visualization of 24-hour power usage
- Interactive tooltips showing exact wattage
- Responsive to real-time data changes
- Scales automatically based on maximum power

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

- Efficient state management with React hooks
- Optimized re-renders using React.StrictMode
- Lightweight Tailwind CSS for minimal bundle size
- No external charting libraries (custom implementation)
- Real-time updates limited to 1-second intervals

## Future Enhancement Ideas

- [ ] Real API integration with actual IoT devices
- [ ] Database backend for persistent data storage
- [ ] User authentication and multi-user support
- [ ] Energy cost calculations based on utility rates
- [ ] Alerts and notifications for high consumption
- [ ] Monthly/yearly consumption reports
- [ ] Device automation rules and scheduling
- [ ] Export data to CSV/PDF formats
- [ ] Dark mode toggle
- [ ] Predictive analytics using machine learning
- [ ] Mobile app version
- [ ] Multiple location support

## Troubleshooting

### Port 3000 Already in Use
```bash
# Change the port in vite.config.ts
server: {
  port: 3001,
}
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Check for type errors
npx tsc --noEmit
```

## License

MIT License - feel free to use this project for personal and commercial purposes.

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests to improve the application.

## Support

For questions or issues, please open an issue on the project repository.

---

**Last Updated**: 2024
**Version**: 1.0.0
**Author**: Your Name