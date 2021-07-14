const items = require("../Items");

const getItems = (req, reply) => {
  reply.send(items);
};

const getItem = (req, reply) => {
  const { id } = req.params;
  const item = items.find((item) => item.id == id);
  reply.send(item);
};

const addItem = (req, reply) => {
  const { name } = req.body;
  // to be done
};

module.exports = {
  getItems,
  getItem,
  addItem,
};
