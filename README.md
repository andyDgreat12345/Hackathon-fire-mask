# Firemask Refinement System (Fire Guardians)

> **Innovative technology, priceless lives saved.**

This hackathon project upgrades our rapid-deployment fire escape mask with smarter sensing, faster alerts, and connected rescue coordination. Our system integrates AI flame recognition, IoT networking, and a 6-second donning workflow to maximize survival rates in residential fires.

---

## 🚀 Project Highlights

- **Early Warning:** Air-composition sensing to detect fire probability before visible flames appear.
- **AI Verification:** Real-time flame recognition for high-confidence risk validation.
- **IoT Ecosystem:** Networked alarms synchronized across devices, mobile apps, and rescue centers.
- **Rapid Response:** Optimized 6-second donning workflow for immediate protection.
- **Smart Navigation:** Integrated lighting and laser pathfinding for safe evacuation.

---

## ⏱️ Demo Flow (Target Timeline)

| Time | Milestone |
| :--- | :--- |
| **0s** | Air analysis + AI camera detect risk; auto-alarm sync triggered. |
| **6s** | Mask donned; breathing protection active. |
| **10s** | Escape route located; network communications established. |
| **20s** | Lighting + laser pathfinding activated. |
| **27s** | **Safe exit reached.** |

---

## 📂 Repository Structure

We follow a professional open-source structure to organize our hardware, software, and documentation:

- **[`website/`](./website/)**: Source code for the [GitHub Pages](https://andyDgreat12345.github.io/Hackathon-fire-mask/) landing page.
- **[`docs/`](./docs/)**: Project documentation, including:
  - [`roadshow/`](./docs/roadshow/): Pitch deck (PPTX), posters, and PDFs.
  - [`figures/`](./docs/figures/): High-resolution images and graphs exported from the pitch.
- **[`hardware/`](./hardware/)**: Hardware design files, including:
  - [`esp32/`](./hardware/esp32/): ESP32 module assets (STL, images, and licenses).
  - [`sensors/`](./hardware/sensors/): Air and flame sensor specifications.
  - [`bom/`](./hardware/bom/): Bill of Materials and cost analysis.
  - [`schematics/`](./hardware/schematics/): Wiring diagrams and circuit designs.
- **[`software/`](./software/)**: Source code and logic:
  - [`esp32-firmware/`](./software/esp32-firmware/): C++/Arduino code for the mask terminal.
  - [`backend-mind-v1/`](./software/backend-mind-v1/): IoT data exchange and monitoring logic.
  - [`app-inventor/`](./software/app-inventor/): MIT App Inventor source for the mobile UI.
- **[`models/`](./models/)**: 3D design files:
  - [`mask/`](./models/mask/): Mask CAD files (STEP, STL).
  - [`renders/`](./models/renders/): High-quality 3D renders of the final product.
- **[`data/`](./data/)**: Sample sensor logs, demo datasets, and testing outputs.
- **[`media/`](./media/)**: Marketing assets, photos, videos, and [App UI screenshots](./media/app-ui/).

---

## 🛠️ Getting Started

### Web Preview
The project landing page is hosted via GitHub Pages. To view it:
1. Go to **Settings** > **Pages**.
2. Set the source to **Deploy from a branch**.
3. Select the `main` branch and the `/website` folder (or root if configured).
4. Visit the generated URL.

### 3D Models
- **Mask CAD (STEP):** [`models/mask/00-00-01_asm.stp`](./models/mask/00-00-01_asm.stp)
- **ESP32 STL:** [`hardware/esp32/ESP32_WeMos.stl`](./hardware/esp32/ESP32_WeMos.stl)

---

## 👥 Team Fire Guardians

- **Tianxiao Cao** — CEO (Project Planning & Operations)
- **Tianyi Sun** — CTO (Core R&D & Technical Validation)
- **Chenming Zhou** — CFO (Cost Accounting & Profit Model)

---

## 📜 Credits & License
- ESP32 STL model: "ESP32 + OLED" by PreinfalkG (Thingiverse), licensed under **CC BY-NC**.
- All other original content © 2026 Team Fire Guardians.
