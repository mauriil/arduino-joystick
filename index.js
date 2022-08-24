const SerialPort = require("serialport").SerialPort;
const ReadlineParser = require("serialport").ReadlineParser;

const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://143.198.182.161:1883");

let lastX = 90;
let lastY = 90;
let lastPOT = 0;

client.on("connect", function () {
  console.log("mqtt server conected");
  const port = new SerialPort({ baudRate: 9600, path: "COM4" });
  const parser = port.pipe(new ReadlineParser({ delimiter: "\n" })); // Read the port data

  port.on("open", () => {
    console.log("serial port open");
  });
  parser.on("data", (data) => {
    const [X, Y, POT] = data.split("|");
    
    if (X != lastX) {
      console.log("🚀 X", X);
      client.publish('/FELIA/ROLL', X);
      lastX = X;
    }
    if (Y != lastY) {
      console.log("🚀 Y", Y);
      client.publish('/FELIA/YAW', Y);
      lastY = Y;
    }
    if (POT != lastPOT) {
      console.log("🚀 POT", POT);
      client.publish('/FELIA/ESC', POT);
      lastPOT = POT;
    }
  });
  
});