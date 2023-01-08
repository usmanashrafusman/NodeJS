const express = require("express");
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
  res.send(`Peep Peep Peep ${process.pid}`);
});

app.listen(3000, () => {
  console.log("Server Running");
});
