# AI & IoT Integration Guide - Firemask Refinement System (Hercules)

This document details the advanced AI verification and IoT communication layers of the Firemask Refinement System, utilizing **HuskyLens**, **Mind+**, and **SIoT**.

---

## 🧠 1. AI Flame Recognition (HuskyLens / 二哈2)

We use the **HuskyLens (DFRobot)** AI camera to provide high-confidence flame verification, reducing false alarms from the smoke sensors.

### 🛠️ Training & Logic:
- **Model Training:** The HuskyLens is trained using its built-in "Object Classification" or "Object Recognition" mode to identify various flame patterns and fire colors.
- **Verification Workflow:**
  1. The **MQ-2 Smoke Sensor** triggers an initial "Warning" state.
  2. The **HuskyLens** is activated to scan the environment.
  3. If a flame is recognized, the system escalates to the **"Danger"** state and triggers the full alarm sync.
- **Interface:** Connected to the ESP32 via **I2C** or **UART** for real-time result polling.

---

## 🌐 2. IoT Communication (Mind+ & SIoT)

The "Hercules" ecosystem relies on a robust IoT backbone for synchronized alerts across multiple stakeholders.

### 📡 Data Flow:
1. **Terminal (ESP32):** Collects data from air sensors (O2, CO, Smoke) and the AI camera.
2. **Mind+ Platform:** Acts as the primary development environment for orchestrating the communication logic.
3. **SIoT Server:** A lightweight MQTT-based IoT server that handles:
   - **Device Sync:** Synchronizing status across all masks in the network.
   - **Cloud Storage:** Logging historical risk data.
4. **Mobile App (MIT App Inventor):** Subscribes to SIoT topics to display:
   - Real-time air composition (O2, CO, Temperature).
   - Activated carbon filter life.
   - Emergency "Call Police" and "Rescue Sync" buttons.

---

## 📱 3. Mobile App UI Features

Based on our "Hercules" design, the mobile app provides critical survival data:
- **Oxygen Concentration:** Real-time % monitoring.
- **Carbon Monoxide:** ppm levels for toxicity warning.
- **Smoke Density:** % levels for visibility assessment.
- **Filter Life:** Predicted lifespan of the activated carbon cartridge.
- **Environment Sim:** A testing mode to check system readiness.

---

## 🏗️ 4. System Architecture

The complete ecosystem connects the **Intelligent Fire Mask** to a **Cloud Server**, which then notifies:
- **Mobile Apps** (Family/User)
- **IoT Management Centers** (Building Security)
- **Emergency Fire Rescue** (Automatic dispatch)

> See the full diagram in [`docs/figures/system_architecture.jpg`](../../docs/figures/system_architecture.jpg).
