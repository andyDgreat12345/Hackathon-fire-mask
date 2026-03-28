# Firemask Refinement System (Fire Guardians)

Innovative technology, priceless lives saved. This hackathon project upgrades our rapid-deployment fire escape mask with smarter sensing, faster alerts, and connected rescue coordination.

## Highlights

- Air-composition sensing for early warning
- AI flame recognition for risk verification
- IoT networked alarms and rescue coordination
- Mobile app monitoring (MIT App Inventor)
- 6-second donning workflow

## Demo Flow (Target Timeline)

- 0s: Air analysis + AI camera detect risk, auto-alarm sync
- 6s: Mask donned, breathing protection active
- 10s: Escape route located + network comms established
- 20s: Lighting + laser pathfinding activated
- 27s: Safe exit reached

## What Is New In This Upgrade

- Air-sensitive detector to mark fire probability before flames appear
- AI flame camera validation for higher confidence
- Mind + v1 backend for synchronized device status and alerts
- Community-ready monitoring and remote rescue visibility

## Repository Structure

- `index.html`, `style.css`, `script.js`: GitHub Pages site (root deploy)
- `docs/roadshow/`: Pitch materials (PowerPoint, posters, PDFs)
- `hardware/`: BOM, sensor details, wiring diagrams
- `software/`: Firmware, backend, and app code
- `data/`: Sample logs, demo JSON, test outputs
- `models/mask/`: Mask CAD files (STEP, STL, GLB)
- `models/esp32/`: ESP32 module assets (STL + images)
- `media/ppt/`: Figures exported from the pitch deck
- `media/app-ui/`: App UI screenshots (normal + danger state)

## Web Demo (GitHub Pages)

1. Push this repo to GitHub.
2. In GitHub: Settings -> Pages -> Deploy from branch.
3. Select `main` and `/root`.
4. The site will publish at `https://<user>.github.io/<repo>/`.

## 3D Models

- Mask CAD (STEP): `models/mask/00-00-01_asm.stp`
- ESP32 STL: `models/esp32/ESP32_WeMos.stl`
- If you convert to GLB, save as `models/esp32/esp32.glb` for web preview

## App UI Screenshots

The site expects these two files:

- `media/app-ui/app-normal.png`
- `media/app-ui/app-alert.png`

Replace the placeholder images with your real screenshots and the App UI section updates automatically.

## Credits

- ESP32 STL model: "ESP32 + OLED" by PreinfalkG (Thingiverse), CC BY-NC

## Team

- Tianxiao Cao - CEO
- Tianyi Sun - CTO
- Chenming Zhou - CFO
