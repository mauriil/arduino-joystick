const SerialPort = require("serialport").SerialPort;
const ReadlineParser = require("serialport").ReadlineParser;
const port = new SerialPort({ baudRate: 9600, path: "COM4" });
const parser = port.pipe(new ReadlineParser({ delimiter: "\n" })); // Read the port data

let lastX = 90;
let lastY = 90;
let lastPOT = 0;

port.on("open", () => {
  console.log("serial port open");
});
parser.on("data", (data) => {
  const [X, Y, POT] = data.split("|");
  if (X != lastX) {
    console.log("🚀 ~ file: index.js ~ line 16 ~ parser.on ~ X", X);
    lastX = X;
  }
  if (Y != lastY) {
    console.log("🚀 ~ file: index.js ~ line 16 ~ parser.on ~ Y", Y);    
    lastY = Y;
  }
  if (POT != lastPOT) {
    console.log("🚀 ~ file: index.js ~ line 16 ~ parser.on ~ POT", POT);    
    lastPOT = POT;
  }
});
