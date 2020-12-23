const express = require("express");
const chokidar = require("chokidar");
const jsonServer = require("json-server");
const cors = require("cors");
const fs = require("fs");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const queryResolvers = require("./serverQueriesResolver");
const mutationResolvers = require("./serverMutationsResolver");
const auth = require("./authMiddleware");

const app = express();
app.use(cors());
app.use(jsonServer.bodyParser);
app.use(auth);

const fileName = process.argv[2] || "./data.js";
const port = process.argv[3] || 3500;

let router = undefined;
let graph = undefined;

const createServer = () => {
  delete require.cache[require.resolve(fileName)];

  setTimeout(() => {
    router = jsonServer.router(
      fileName.endsWith(".js") ? require(fileName)() : fileName
    );

    let schema =
      fs.readFileSync("./serverQueriesSchema.graphql", "utf-8") +
      fs.readFileSync("./serverMutationsSchema.graphql", "utf-8");

    let resolvers = { ...queryResolvers, ...mutationResolvers };

    graph = graphqlHTTP({
      schema: buildSchema(schema),
      rootValue: resolvers,
      graphiql: true,
      context: { db: router.db },
    });
  }, 100);
};

createServer();

app.use("/api", (req, res, next) => router(req, res, next));
app.use("/graphql", (req, res, next) => graph(req, res, next));

chokidar.watch(fileName).on("change", () => {
  console.log("Reloading web service data...");
  createServer();
  console.log("Reloading web service data complete.");
});

app.listen(port, () =>
  console.log(`Web service running on port http://localhost:${port}/`)
);
