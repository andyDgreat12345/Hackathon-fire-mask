# Technical Schematic & Wiring Guide - Firemask Refinement System

This document provides the wiring connections and circuit description for the Firemask Refinement System prototype.

---

## 🔌 Pin Mapping Table

The following table outlines the connections between the ESP32 OLED Development Board and the peripheral components.

| Component | Pin (ESP32) | Pin (Component) | Description |
| :--- | :--- | :--- | :--- |
| **MQ-2 Sensor** | 5V | VCC | Power Supply (5V) |
| | GND | GND | Ground |
| | GPIO 34 | AO | Analog Output (Smoke Level) |
| | GPIO 35 | DO | Digital Output (Threshold Alert) |
| **IR Flame Sensor** | 3.3V | VCC | Power Supply (3.3V) |
| | GND | GND | Ground |
| | GPIO 32 | DO | Digital Output (Flame Detection) |
| | GPIO 33 | AO | Analog Output (Flame Intensity) |
| **Active Buzzer** | GPIO 25 | POS (+) | Alarm Signal (PWM) |
| | GND | NEG (-) | Ground |
| **Laser Diode** | GPIO 26 | POS (+) | Pathfinding Laser Control |
| | GND | NEG (-) | Ground |
| **High-Power LED** | GPIO 27 | POS (+) | Escape Headlamp Control |
| | GND | NEG (-) | Ground |
| **OLED Display** | GPIO 21 | SDA | I2C Data (Integrated) |
| | GPIO 22 | SCL | I2C Clock (Integrated) |

---

## 🛠️ Circuit Description

### 1. Power Management
The system is powered by a **3.7V 500mAh LiPo battery**. The ESP32 OLED board includes an integrated charging circuit and a voltage regulator to provide stable 3.3V and 5V (via boost or USB) rails for the sensors.

### 2. Sensor Integration
- **MQ-2 Smoke Sensor:** Connected to an analog pin (GPIO 34) to provide a continuous reading of smoke concentration. The digital pin (GPIO 35) can be used for an interrupt-driven hardware alert.
- **IR Flame Sensor:** Connected to GPIO 32 (Digital) for immediate flame detection and GPIO 33 (Analog) to measure the intensity/proximity of the fire.

### 3. Output Actuators
- **Active Buzzer:** Driven by a PWM signal on GPIO 25 to create varying alarm tones based on the risk level.
- **Laser & LED:** Controlled via digital outputs (GPIO 26 and 27) to assist in navigation and visibility during evacuation.

### 4. Visual Feedback
The **integrated 0.96" OLED** uses the I2C protocol (SDA: GPIO 21, SCL: GPIO 22) to display real-time sensor data and system status.

---

## 📝 Assembly Notes
- **Resistors:** Ensure appropriate current-limiting resistors are used for the Laser Diode and High-Power LED if not already integrated into their modules.
- **Shielding:** The MQ-2 sensor requires a "burn-in" period (preheating) of at least 24-48 hours for stable readings.
- **Enclosure:** All components should be housed in a 3D-printed, heat-resistant enclosure within the mask frame.
