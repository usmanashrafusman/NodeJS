const cluster = require("cluster");
const os = require("os");

module.exports = (onAdd) => {
  if (cluster.isMaster) {
    const WORKERS_LENGTH = os.cpus().length;
    for (let i = 0; i < WORKERS_LENGTH; i++) {
      cluster.fork();
    }
    console.log("Master Process Started !");
  } else {
    console.log(`Worker Process Is Started on ${process.pid}`);

    if (onAdd) {
      onAdd();
    }
  }
};
