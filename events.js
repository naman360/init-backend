const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("checkout", () => {
  console.log("Checkout triggered");
});

customEmitter.on("payment-received", (payment) => {
  console.log(" Payment Received", payment);
});

customEmitter.emit("checkout");
customEmitter.emit("payment-received", 100);
