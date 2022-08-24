const SerialPort = require("serialport").SerialPort;
const ReadlineParser = require("serialport").ReadlineParser;
const port = new SerialPort({ baudRate: 9600, path: "COM4" });
const parser = port.pipe(new ReadlineParser({ delimiter: "\n" })); // Read the port data

port.on("open", () => {
  console.log("serial port open");
});
parser.on("data", (data) => {
  console.log("got word from arduino:", data);
});
