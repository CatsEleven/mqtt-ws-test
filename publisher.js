// publisher.js
const mqtt = require("mqtt");

const brokerUrl = "ws://broker.hivemq.com:8000/mqtt";

const client = mqtt.connect(brokerUrl);

client.on("connect", () => {
  console.log("Connected to broker");
  client.publish("test/ws-demo", "Hello over WebSocket");
  console.log("Message sent");
  client.end();
});
