# Quick Start Guide - IoT Energy Monitoring Dashboard

## ⚡ Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to `http://localhost:3000` (or the port shown in terminal)

---

## 🎯 What You'll See

1. **Header** - Application title with real-time clock
2. **Stats Dashboard** - 4 key metrics:
   - Total Power (Watts)
   - Total Energy (kWh)
   - Active Devices count
   - Average Consumption (Watts)

3. **Devices Grid** - 6 IoT devices with:
   - Device name and location
   - Current power consumption
   - Total energy used
   - On/Off toggle buttons
   - Status indicator (green = active, gray = inactive)

4. **Analytics Panel** - Click any device to see:
   - 24-hour power consumption chart
   - Device-specific details
   - Real-time metrics

---

## 🔧 Available Commands

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📊 Mock Devices Included

The app comes with 6 pre-configured devices:

| Device | Location | Type | Power | Status |
|--------|----------|------|-------|--------|
| Air Conditioner | Living Room | HVAC | 2500W | Active |
| Refrigerator | Kitchen | Appliance | 600W | Active |
| Washing Machine | Laundry Room | Appliance | 1800W | Inactive |
| LED Ceiling Light | Bedroom | Light | 15W | Active |
| Water Heater | Utility Room | Appliance | 4000W | Active |
| Office Lights | Office | Light | 40W | Active |

---

## 🎮 How to Use

### Toggle Devices On/Off
- Click the red "Turn Off" button to deactivate a device
- Click the green "Turn On" button to activate a device
- Watch power consumption and energy totals update in real-time

### View Device Analytics
- Click on any device card to view its detailed 24-hour chart
- The chart shows power fluctuations over the last 24 hours
- Hover over chart bars to see exact power values

### Monitor Dashboard
- Real-time stats update every second
- Active device count reflects current state
- Total power shows sum of all active devices
- Average consumption calculates per-device average

---

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Top banner
│   ├── StatsCard.tsx   # Metric cards
│   ├── DeviceCard.tsx  # Device tiles
│   └── EnergyChart.tsx # Power chart
├── data/
│   └── mockData.ts     # Device configuration
├── types/
│   └── index.ts        # TypeScript definitions
├── App.tsx             # Main component
└── main.tsx            # Entry point
```

---

## 🛠️ Customize the App

### Add a New Device
Edit `src/data/mockData.ts` and add to the `mockDevices` array:

```typescript
{
  id: '7',
  name: 'My Device',
  location: 'My Room',
  type: 'appliance',
  isActive: true,
  currentPower: 1000,
  totalEnergy: 0,
  lastUpdated: Date.now(),
  readings: generateMockReadings(1000),
}
```

### Change Update Speed
In `src/App.tsx`, modify the interval (in milliseconds):
```typescript
}, 1000); // Change to 2000 for slower updates
```

### Modify Colors
Edit `tailwind.config.js` to customize the theme colors

---

## ⚠️ Troubleshooting

### Port 3000 Already in Use?
The app will try another port automatically, but you can specify one:
```bash
npm run dev -- --port 3001
```

### Node Modules Issues?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Hot Reload Not Working?
Restart the dev server:
```bash
# Press Ctrl+C to stop
npm run dev
```

---

## 🚀 Next Steps

1. **Explore the Code** - Review components in `src/components/`
2. **Understand Mock Data** - Check `src/data/mockData.ts`
3. **Modify Devices** - Add your own devices or change names/locations
4. **Integrate Real API** - Replace mock data with actual IoT device data
5. **Deploy** - Build with `npm run build` and deploy to production

---

## 📚 Learn More

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 💡 Tips

- **Real-time Updates**: Power values change every second to simulate real devices
- **Realistic Data**: Inactive devices show 0W consumption
- **24-hour History**: Each device maintains readings for the last 24 hours
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop

---

**Happy Monitoring! 🎉**
