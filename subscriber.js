// subscriber.js
const mqtt = require("mqtt");

// HiveMQ Public Broker (WebSocket, 非TLS)
const brokerUrl = "ws://broker.hivemq.com:8000/mqtt";

const client = mqtt.connect(brokerUrl);

client.on("connect", () => {
  console.log("Connected to broker");
  client.subscribe("test/ws-demo", (err) => {
    if (!err) {
      console.log("Subscribed to test/ws-demo");
    }
  });
});

client.on("message", (topic, message) => {
  console.log(`Received: ${topic} => ${message.toString()}`);
});
