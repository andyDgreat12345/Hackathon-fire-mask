# Sample Sensor Logs & Demo Datasets - Firemask Refinement System

This document provides realistic sample data generated from the Firemask Refinement System sensors during testing. This data can be used for training AI models or demonstrating the "Air-Sensitive Detector" logic.

---

## 📊 1. Smoke Sensor (MQ-2) Sample Log

The following dataset represents a simulated fire scenario where smoke levels rise over time.

| Timestamp (s) | Smoke Level (ppm) | Risk Level | Status |
| :--- | :--- | :--- | :--- |
| 0 | 150 | 0.05 | Normal |
| 5 | 165 | 0.08 | Normal |
| 10 | 210 | 0.15 | Normal |
| 15 | 350 | 0.32 | **Warning** |
| 20 | 680 | 0.58 | **Warning** |
| 25 | 1250 | 0.85 | **Danger** |
| 30 | 2400 | 0.98 | **Danger** |

---

## 🔥 2. Flame Sensor (IR) Sample Log

The following dataset represents a simulated fire scenario where flames are detected and confirmed.

| Timestamp (s) | Flame Intensity (Analog) | Flame Detected (Digital) | Status |
| :--- | :--- | :--- | :--- |
| 0 | 1023 | 0 | No Flame |
| 5 | 1015 | 0 | No Flame |
| 10 | 980 | 0 | No Flame |
| 15 | 850 | 0 | No Flame |
| 20 | 420 | 1 | **Flame Detected** |
| 25 | 150 | 1 | **Flame Detected** |
| 30 | 85 | 1 | **Flame Detected** |

---

## 🌐 3. IoT Network Sync (JSON Format)

The following JSON object represents the data packet sent from the Firemask terminal to the **Mind+ v1** backend and mobile app.

```json
{
  "device_id": "FG-MASK-001",
  "timestamp": "2026-03-28T15:30:00Z",
  "sensors": {
    "smoke_ppm": 1250,
    "flame_detected": true,
    "flame_intensity": 150,
    "battery_level": 85
  },
  "status": {
    "risk_probability": 0.92,
    "system_state": "DANGER",
    "donning_status": "ACTIVE",
    "navigation_active": true
  },
  "location": {
    "lat": 31.2304,
    "lon": 121.4737,
    "floor": 4,
    "room": "402"
  }
}
```

---

## 📝 Data Interpretation
- **Smoke Level (ppm):** A value above 300 ppm triggers a "Warning", and above 1000 ppm triggers a "Danger" state.
- **Flame Intensity (Analog):** Lower values indicate higher infrared intensity (closer or larger flames).
- **Risk Probability:** A calculated value (0.0 to 1.0) based on both smoke and flame sensor inputs.
