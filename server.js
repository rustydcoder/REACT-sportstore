const express = require("express");
const chokidar = require("chokidar");
const jsonServer = require("json-server");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(jsonServer.bodyParser);

const fileName = process.argv[2] || "./data.js";
const port = process.argv[3] || 3500;

let router = undefined;

const createServer = () => {
  delete require.cache[require.resolve(fileName)];

  setTimeout(() => {
    router = jsonServer.router(
      fileName.endsWith(".js") ? require(fileName)() : fileName
    );
  }, 100);
};

createServer();

app.use("/api", (req, res, next) => router(req, res, next));

chokidar.watch(fileName).on("change", () => {
  console.log("Reloading web service data...");
  createServer();
  console.log("Reloading web service data complete.");
});

app.listen(port, () =>
  console.log(`Web service running on port http://localhost${port}/api`)
);
