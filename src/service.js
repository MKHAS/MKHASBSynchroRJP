class Service {
  constructor() {}
  getAccount = async (req, res) => {
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
  };
  addAccount = async (req, res) => {
    //add a new account
    // get new account info
    // if initialAmount > 0 create transaction, if this fails send 400
    // otherwise send 200
    const newAccount = req.body;
    newAccount.id = nanoid();
    res.code(201).send(newAccount);
  };
}

module.exports = Service;
