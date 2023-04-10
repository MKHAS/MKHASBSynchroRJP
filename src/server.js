// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });
const { nanoid } = require("nanoid");
// Declare a route
fastify.get("/", async (req, rep) => {
  res.send({ hello: "world" });
});

//#region GET
fastify.get("/accounts/:id", async (req, res) => {
  // get id
  // find account
  // return account if it exists
  // return 404 otherwise
  res.send({
    Name: "john",
    Surname: "doe",
    Balance: 1024,
    Transactions: [
      {
        senderId: "0000",
        recieverId: "0001",
        amount: 512,
        timestamp: new Date("2023-4-23T12:00:00Z"),
      },
      {
        senderId: "0000",
        recieverId: "0002",
        amount: 256,
        timestamp: new Date("2023-4-23T12:01:00Z"),
      },
    ],
  });
});
//#endregion

//#region POST
fastify.post("/accounts", async (req, res) => {
  //add a new account
  // get new account info
  // if initialAmount > 0 create transaction, if this fails send 400
  // otherwise send 200
  const newAccount = req.body;
  newAccount.id = nanoid();
  res.code(201).send(newAccount);
});
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
