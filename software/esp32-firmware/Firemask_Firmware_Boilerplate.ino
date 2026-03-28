/**
 * Firemask Refinement System (Fire Guardians)
 * ESP32 Firmware Boilerplate - Hackathon Build
 * 
 * Features:
 * - Real-time smoke (MQ-2) and flame (IR) sensor monitoring
 * - Integrated OLED display status updates
 * - IoT alarm synchronization (Placeholder for WiFi/MQTT)
 * - Navigation actuators (Laser, LED, Buzzer)
 */

#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

// --- Pin Definitions ---
#define PIN_SMOKE_ANALOG 34
#define PIN_FLAME_DIGITAL 32
#define PIN_BUZZER 25
#define PIN_LASER 26
#define PIN_LED 27

// --- OLED Configuration ---
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET -1
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

// --- Thresholds ---
const int SMOKE_WARNING_THRESHOLD = 300;
const int SMOKE_DANGER_THRESHOLD = 1000;

// --- Global Variables ---
int smokeLevel = 0;
bool flameDetected = false;
String systemStatus = "NORMAL";

void setup() {
  Serial.begin(115200);

  // Initialize Pins
  pinMode(PIN_SMOKE_ANALOG, INPUT);
  pinMode(PIN_FLAME_DIGITAL, INPUT);
  pinMode(PIN_BUZZER, OUTPUT);
  pinMode(PIN_LASER, OUTPUT);
  pinMode(PIN_LED, OUTPUT);

  // Initialize OLED
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println(F("SSD1306 allocation failed"));
    for(;;);
  }
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(0,0);
  display.println("Fire Guardians");
  display.println("System Initializing...");
  display.display();
  delay(2000);
}

void loop() {
  // 1. Read Sensors
  smokeLevel = analogRead(PIN_SMOKE_ANALOG);
  flameDetected = !digitalRead(PIN_FLAME_DIGITAL); // Active Low

  // 2. Determine System State
  if (flameDetected || smokeLevel > SMOKE_DANGER_THRESHOLD) {
    systemStatus = "DANGER";
    triggerAlarm(true);
  } else if (smokeLevel > SMOKE_WARNING_THRESHOLD) {
    systemStatus = "WARNING";
    triggerAlarm(false);
  } else {
    systemStatus = "NORMAL";
    resetActuators();
  }

  // 3. Update Display
  updateOLED();

  // 4. IoT Sync (Placeholder)
  syncToBackend();

  delay(500); // Sampling rate
}

void updateOLED() {
  display.clearDisplay();
  display.setCursor(0,0);
  display.setTextSize(1);
  display.print("Status: ");
  display.println(systemStatus);
  
  display.setCursor(0,20);
  display.print("Smoke: ");
  display.print(smokeLevel);
  display.println(" ppm");
  
  display.setCursor(0,40);
  display.print("Flame: ");
  display.println(flameDetected ? "DETECTED!" : "None");
  
  display.display();
}

void triggerAlarm(bool isDanger) {
  if (isDanger) {
    digitalWrite(PIN_BUZZER, HIGH);
    digitalWrite(PIN_LASER, HIGH);
    digitalWrite(PIN_LED, HIGH);
    Serial.println("!!! DANGER: EVACUATE NOW !!!");
  } else {
    // Pulsing buzzer for warning
    digitalWrite(PIN_BUZZER, HIGH);
    delay(100);
    digitalWrite(PIN_BUZZER, LOW);
    Serial.println("Warning: Elevated Smoke Levels");
  }
}

void resetActuators() {
  digitalWrite(PIN_BUZZER, LOW);
  digitalWrite(PIN_LASER, LOW);
  digitalWrite(PIN_LED, LOW);
}

void syncToBackend() {
  // Placeholder for WiFi/MQTT/Mind+ v1 synchronization logic
  // Serial.println("Syncing data to IoT network...");
}
