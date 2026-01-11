# IoT Energy Monitoring Dashboard - Setup & Installation Guide

## 🎉 Welcome!

You have successfully created a **modern IoT Energy Monitoring Dashboard** built with React, TypeScript, and Tailwind CSS!

## 📋 What Was Created

### Core Application Files
- **src/App.tsx** - Main application component with real-time state management
- **src/main.tsx** - React entry point
- **src/index.css** - Global Tailwind styles with custom configurations

### React Components
- **src/components/Header.tsx** - Application header with title and timestamp
- **src/components/StatsCard.tsx** - Reusable stats display component (4 variants)
- **src/components/DeviceCard.tsx** - Device tile with controls and status
- **src/components/EnergyChart.tsx** - 24-hour power consumption bar chart

### Data & Types
- **src/data/mockData.ts** - 6 pre-configured IoT devices with mock readings
- **src/types/index.ts** - TypeScript interfaces (Device, EnergyReading, DashboardStats)

### Configuration Files
- **package.json** - Project dependencies and scripts
- **tsconfig.json** - TypeScript compiler configuration
- **tsconfig.node.json** - TypeScript for Node.js files
- **tailwind.config.js** - Tailwind CSS theme configuration
- **postcss.config.js** - PostCSS with Tailwind plugin
- **vite.config.ts** - Vite build tool configuration
- **index.html** - HTML entry point

### Documentation
- **README.md** - Comprehensive project documentation
- **QUICKSTART.md** - Quick start guide for developers
- **SETUP.md** - This file

### Git Configuration
- **.gitignore** - Standard Node.js/npm ignore patterns

---

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
cd IoT-Based-Energy-Monitoring-Website
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
The application will automatically open at `http://localhost:3000` (or another port if 3000 is in use).

---

## ✨ Features

### Real-time Monitoring
- **Live Power Metrics**: Displays current power consumption in watts
- **Energy Tracking**: Accumulates total energy usage in kWh
- **Auto-Updates**: Data updates every second with realistic fluctuations
- **24-hour History**: Charts show power trends over the last 24 hours

### Device Management
- **6 Pre-configured Devices**: Air Conditioner, Refrigerator, Washing Machine, LED Lights, Water Heater, Office Lights
- **On/Off Control**: Toggle devices with instant feedback
- **Status Indicators**: Green dot for active, gray for inactive
- **Type Categories**: Appliance, Light, HVAC, Other

### Dashboard Analytics
- **Total Power**: Sum of all active device power (watts)
- **Total Energy**: Cumulative usage across all devices (kWh)
- **Active Devices**: Real-time count of powered-on devices
- **Average Consumption**: Per-device power average (watts)

### Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly controls
- Beautiful gradient UI

---

## 📦 Available Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🎯 Project Structure

```
IoT-Based-Energy-Monitoring-Website/
├── src/
│   ├── components/
│   │   ├── Header.tsx           # App header (140 lines)
│   │   ├── StatsCard.tsx        # Stats cards (40 lines)
│   │   ├── DeviceCard.tsx       # Device cards (70 lines)
│   │   └── EnergyChart.tsx      # Power chart (40 lines)
│   ├── data/
│   │   └── mockData.ts          # Device config & helpers (120 lines)
│   ├── types/
│   │   └── index.ts             # TypeScript types (24 lines)
│   ├── App.tsx                  # Main component (185 lines)
│   ├── main.tsx                 # Entry point (10 lines)
│   └── index.css                # Global styles (60 lines)
├── public/                       # Static assets
├── index.html                    # HTML template (13 lines)
├── package.json                  # Dependencies (25 lines)
├── tsconfig.json                 # TS config (27 lines)
├── tsconfig.node.json            # Node TS config (10 lines)
├── tailwind.config.js            # Tailwind config (16 lines)
├── postcss.config.js             # PostCSS config (6 lines)
├── vite.config.ts                # Vite config (10 lines)
├── .gitignore                    # Git ignore
├── README.md                     # Full documentation
├── QUICKSTART.md                 # Quick start guide
└── SETUP.md                      # This file
```

---

## 📊 Mock Devices

The application comes with 6 pre-configured devices:

### 1. Air Conditioner
- **Location**: Living Room
- **Type**: HVAC
- **Base Power**: 2500W
- **Status**: Active
- **Purpose**: Climate control with realistic cooling cycles

### 2. Refrigerator
- **Location**: Kitchen
- **Type**: Appliance
- **Base Power**: 600W
- **Status**: Active
- **Purpose**: Continuous cooling with compressor cycles

### 3. Washing Machine
- **Location**: Laundry Room
- **Type**: Appliance
- **Base Power**: 1800W
- **Status**: Inactive (toggle to activate)
- **Purpose**: High-power on-demand appliance

### 4. LED Ceiling Light
- **Location**: Bedroom
- **Type**: Light
- **Base Power**: 15W
- **Status**: Active
- **Purpose**: Low-power lighting system

### 5. Water Heater
- **Location**: Utility Room
- **Type**: Appliance
- **Base Power**: 4000W
- **Status**: Active
- **Purpose**: High-power periodic heating

### 6. Office Lights
- **Location**: Office
- **Type**: Light
- **Base Power**: 40W
- **Status**: Active
- **Purpose**: Standard office lighting

---

## 🔧 How It Works

### Real-time Simulation
1. **Initialization**: Each device starts with predefined power consumption
2. **Updates**: Every 1 second, the app recalculates power for active devices
3. **Fluctuations**: Power varies ±100W to simulate realistic behavior
4. **Energy Tracking**: Energy accumulates based on power consumption
5. **Data Retention**: Keeps last 24 hours (288 readings) per device

### Component Flow
```
App.tsx (State Management)
├── Header (Static UI)
├── StatsCard (Dashboard Metrics)
│   ├── Total Power
│   ├── Total Energy
│   ├── Active Devices
│   └── Average Consumption
├── DeviceCard[] (Grid Layout)
│   ├── Device Info
│   ├── Toggle Button
│   └── Status Indicator
└── Analytics Panel
    ├── EnergyChart (Selected Device)
    └── Device Details
```

### State Updates
```typescript
// Updates every 1000ms (1 second)
setInterval(() => {
  // For each active device:
  // 1. Add power variation
  // 2. Calculate energy increase
  // 3. Add reading to history
  // 4. Keep last 288 readings
}, 1000);
```

---

## 🎨 Customization Guide

### Add New Device

Edit `src/data/mockData.ts`:

```typescript
{
  id: '7',
  name: 'TV System',
  location: 'Entertainment Room',
  type: 'appliance',
  isActive: true,
  currentPower: 150,
  totalEnergy: 2.5,
  lastUpdated: Date.now(),
  readings: generateMockReadings(150),
}
```

### Change Update Frequency

Edit `src/App.tsx`:

```typescript
}, 1000); // Change 1000 to desired milliseconds
// 500 = updates twice per second
// 2000 = updates every 2 seconds
```

### Modify Power Fluctuation

Edit `src/data/mockData.ts`:

```typescript
const variation = (Math.random() - 0.5) * 100; // ±50W instead of ±100W
```

### Customize Colors

Edit `tailwind.config.js`:

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

---

## 🔌 Integration with Real IoT Devices

To connect real devices:

### 1. Create API Service

Create `src/services/api.ts`:

```typescript
export async function fetchDevices() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/devices`);
  return response.json();
}

export async function toggleDevice(id: string, isActive: boolean) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/devices/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ isActive }),
  });
  return response.json();
}
```

### 2. Update App.tsx

```typescript
useEffect(() => {
  const loadDevices = async () => {
    try {
      const data = await fetchDevices();
      setDevices(data);
    } catch (error) {
      console.error('Failed to load devices:', error);
    }
  };

  loadDevices();
  const interval = setInterval(loadDevices, 5000); // Poll every 5 seconds
  return () => clearInterval(interval);
}, []);
```

### 3. Set Environment Variables

Create `.env.local`:

```
VITE_API_URL=https://your-api.com
```

---

## 📱 Responsive Breakpoints

The app is optimized for:

- **Mobile**: 320px - 767px (Single column layout)
- **Tablet**: 768px - 1024px (Two column layout)
- **Desktop**: 1025px+ (Three column layout)

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Toggle devices on/off
- [ ] Watch power values update in real-time
- [ ] Check that energy accumulates
- [ ] Click devices to view analytics
- [ ] Verify 24-hour chart displays
- [ ] Test on mobile (resize browser)
- [ ] Check console for errors

### Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📊 Performance Tips

- App updates every 1 second (configurable)
- Maintains 288 readings per device (24 hours)
- No external charting libraries (custom implementation)
- Efficient React renders with proper state management
- Minimal CSS bundle size with Tailwind

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy Options

**Vercel** (Recommended):
```bash
npm install -g vercel
vercel
```

**Netlify**:
```bash
npm run build
# Drag dist folder to Netlify
```

**Traditional Hosting**:
1. Run `npm run build`
2. Upload `dist/` folder to your server
3. Configure server to serve `index.html` for all routes

---

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Use a different port
npm run dev -- --port 3001
```

### Dependencies Installation Failed

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Check for type errors
npx tsc --noEmit
```

### Styles Not Applied

```bash
# Rebuild Tailwind CSS
npm run dev
# Or clear browser cache (Ctrl+Shift+Delete)
```

### Hot Reload Not Working

```bash
# Restart the dev server
# Press Ctrl+C to stop
npm run dev
```

---

## 📚 Learning Resources

- [React 18 Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 🎯 Next Steps

1. ✅ **Run the app**: `npm install && npm run dev`
2. 📖 **Read the README**: Comprehensive feature documentation
3. 🎮 **Explore the UI**: Toggle devices, view analytics
4. 🔧 **Customize**: Add your own devices or change settings
5. 🌐 **Integrate**: Connect to real IoT device APIs
6. 🚀 **Deploy**: Build and deploy to production

---

## 💡 Key Takeaways

- **React State Management**: Uses hooks (useState, useEffect) for real-time updates
- **TypeScript Safety**: Fully typed components and interfaces
- **Tailwind CSS**: Responsive, utility-first styling
- **Mock Data**: Realistic simulation for demonstration
- **Real-time Updates**: 1-second interval for live metrics
- **Responsive Design**: Works on all devices

---

## 🤝 Need Help?

1. Check `README.md` for detailed documentation
2. Review `QUICKSTART.md` for quick reference
3. Check component code for implementation details
4. Review browser console for error messages

---

## 📝 Project Info

- **Version**: 1.0.0
- **Created**: 2024
- **License**: MIT
- **Technology**: React 18 + TypeScript + Tailwind CSS
- **Build Tool**: Vite

---

**Your IoT Energy Monitoring Dashboard is ready! Start it with `npm run dev`** ⚡🎉
