//#region services and imports
// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });
const openapiGlue = require("fastify-openapi-glue");
const Service = require("./service.js");

const options = {
  specification: `${currentDir}/openapi.yaml`,
  service: new Service(),
  securityHandlers: new Security(),
  prefix: "v1",
};

fastify.register(openapiGlue, options);
//#endregion

//#region GET
fastify.get("/accounts/:id", async (req, res) => {
  // get id
  // find account
  // return account if it exists
  // return 404 otherwise
});
//#endregion

//#region POST
fastify.post("/accounts", async (req, res) => {});
//#endregion

// #region RUN
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
