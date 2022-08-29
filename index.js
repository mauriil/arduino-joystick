const SerialPort = require("serialport").SerialPort;
const ReadlineParser = require("serialport").ReadlineParser;

const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://143.198.182.161:1883");

let lastVRx_1 = 90;
let lastVRy_1 = 90;
let lastVRx_2 = 90;
let lastVRy_2 = 90;
let lastVRx_3 = 90;
let lastVRy_3 = 90;
let lastPOT_1 = 0;
let lastPOT_2 = 0;
let lastPOT_3 = 0;
let lastPOT_4 = 0;
let lastToggle_1 = 0;
let lastToggle_2 = 0;
let lastToggle_3 = 0;
let lastToggle_4 = 0;
let lastToggle_5 = 0;
let lastToggle_6 = 0;
let lastToggle_7 = 0;
let lastToggle_8 = 0;
let lastToggle_9 = 0;

client.on("connect", function () {
  console.log("mqtt server conected");
  const port = new SerialPort({ baudRate: 9600, path: "COM4" });
  const parser = port.pipe(new ReadlineParser({ delimiter: "\n" })); // Read the port data

  port.on("open", () => {
    console.log("serial port open");
  });
  parser.on("data", (data) => {
    const [VRx_1, VRy_1, VRx_2, VRy_2, VRx_3, VRy_3, POT_1, POT_2, POT_3, POT_4, toggle_1, toggle_2, toggle_3, toggle_4, toggle_5, toggle_6, toggle_7, toggle_8, toggle_9 ] = data.split("|");
    
    if (VRx_1 != lastVRx_1) {
      client.publish('/FELIA/ROLL', VRx_1);
      lastVRx_1 = VRx_1;
    }
    if (VRy_1 != lastVRy_1) {
      client.publish('/FELIA/YAW', VRy_1);
      lastVRy_1 = VRy_1;
    }
    if (VRx_2 != lastVRx_2) {
      client.publish('/FELIA/RUDDER', VRx_2);
      lastVRx_2 = VRx_2;
    }
    if (VRy_2 != lastVRy_2) {
      client.publish('/FELIA/VRy_2', VRy_2);
      lastVRy_2 = VRy_2;
    }
    if (VRx_3 != lastVRx_3) {
      client.publish('/FELIA/CAMX', VRx_3);
      lastVRx_3 = VRx_3;
    }
    if (VRy_3 != lastVRy_3) {
      client.publish('/FELIA/CAMY', VRy_3);
      lastVRy_3 = VRy_3;
    }
    if (POT_1 != lastPOT_1) {
      client.publish('/FELIA/ESC', POT_1);
      lastPOT_1 = POT_1;
    }
    if (POT_2 != lastPOT_2) {
      client.publish('/FELIA/POT_2', POT_2);
      lastPOT_2 = POT_2;
    }
    if (POT_3 != lastPOT_3) {
      client.publish('/FELIA/POT_3', POT_3);
      lastPOT_3 = POT_3;
    }
    if (POT_4 != lastPOT_4) {
      client.publish('/FELIA/POT_4', POT_4);
      lastPOT_4 = POT_4;
    }
    if (toggle_1 != lastToggle_1) {
      client.publish('/FELIA/toggle_1', toggle_1);
      lastToggle_1 = toggle_1;
    }
    if (toggle_2 != lastToggle_2) {
      client.publish('/FELIA/toggle_2', toggle_2);
      lastToggle_2 = toggle_2;
    }
    if (toggle_3 != lastToggle_3) {
      client.publish('/FELIA/toggle_3', toggle_3);
      lastToggle_3 = toggle_1;
    }
    if (toggle_4 != lastToggle_4) {
      client.publish('/FELIA/toggle_4', toggle_4);
      lastToggle_4 = toggle_4;
    }
    if (toggle_5 != lastToggle_5) {
      client.publish('/FELIA/toggle_5', toggle_5);
      lastToggle_5 = toggle_5;
    }
    if (toggle_6 != lastToggle_6) {
      client.publish('/FELIA/toggle_6', toggle_6);
      lastToggle_6 = toggle_6;
    }
    if (toggle_7 != lastToggle_7) {
      client.publish('/FELIA/toggle_7', toggle_7);
      lastToggle_7 = toggle_7;
    }
    if (toggle_8 != lastToggle_8) {
      client.publish('/FELIA/toggle_8', toggle_8);
      lastToggle_8 = toggle_8;
    }
    if (toggle_9 != lastToggle_9) {
      client.publish('/FELIA/toggle_9', toggle_9);
      lastToggle_9toggle_9 = toggle_9;
    }

  });
  
});