# Sensor Specifications - Firemask Refinement System

This document provides technical details for the primary sensors used in the Firemask Refinement System.

---

## 1. MQ-2 Smoke and Combustible Gas Sensor

The MQ-2 is a semiconductor-based gas sensor used for detecting smoke and various combustible gases.

| Parameter | Specification |
| :--- | :--- |
| **Detection Range** | 300 - 10,000 ppm (Smoke, LPG, Propane, Hydrogen) |
| **Operating Voltage** | 5V DC |
| **Heater Voltage** | 5V ± 0.1V |
| **Heater Resistance** | 33Ω ± 5% |
| **Heater Consumption** | < 800mW |
| **Response Time** | < 10s |
| **Recovery Time** | < 30s |
| **Operating Temp.** | -20°C to 50°C |
| **Output Type** | Analog (Voltage) and Digital (TTL) |

### 🔍 Application in Firemask:
- **Early Warning:** Detects rising smoke levels before visible flames appear.
- **Risk Assessment:** Provides a quantitative measure of air quality to trigger the "Danger" state.

---

## 2. IR Flame Sensor Module

The IR Flame Sensor is sensitive to infrared radiation emitted by flames, typically in the 760nm to 1100nm wavelength range.

| Parameter | Specification |
| :--- | :--- |
| **Detection Wavelength** | 760nm - 1100nm |
| **Detection Angle** | ~60° |
| **Operating Voltage** | 3.3V - 5V DC |
| **Detection Distance** | 20cm - 100cm (Adjustable sensitivity) |
| **Output Type** | Digital (High/Low) and Analog (Voltage) |
| **Comparator Chip** | LM393 |

### 🔍 Application in Firemask:
- **Flame Verification:** Confirms the presence of fire to validate smoke sensor alerts.
- **Proximity Warning:** Triggers immediate evacuation if flames are detected in close proximity.

---

## 3. Integrated OLED Display (SSD1306)

The ESP32 module includes an integrated 0.96" OLED display for real-time status monitoring.

| Parameter | Specification |
| :--- | :--- |
| **Resolution** | 128 x 64 pixels |
| **Interface** | I2C (Address: 0x3C) |
| **Driver IC** | SSD1306 |
| **Display Color** | White or Blue (depending on module) |
| **Viewing Angle** | > 160° |

### 🔍 Application in Firemask:
- **Live Risk Monitor:** Displays air composition and flame probability.
- **Status Alerts:** Shows "Normal", "Warning", or "Danger" states.
- **Navigation:** Provides simple directional cues for evacuation.
