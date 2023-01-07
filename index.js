const express = require("express");
const loadBalancer = require("./worker/loadBalancer");
const logger = require("./middlewares/logger");

const app = express();

app.use(logger);

const delay = (duration) => {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {}
};

app.get("/", (req, res) => {
  res.send(`Performance Example ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(1000 * 10);
  res.send(`Ding Ding Ding ${process.pid}`);
});

loadBalancer(() => {
  app.listen(3000, () => {
    console.log("Server Running");
  });
});
