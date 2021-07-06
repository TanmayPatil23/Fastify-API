const items = require("../Items");

const Item = {
  type: "object",
  properties: {
    id: {
      type: "integer",
    },
    name: {
      type: "string",
    },
  },
};

// Options for all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Item,
      },
    },
  },
  handler: function (req, reply) {
    reply.send(items);
  },
};

const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: function (req, reply) {
    const id = req.params;
    const item = items.find((i) => {
      return i.id == id;
    });
    reply.send(item);
  },
};

function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get("/items", getItemsOpts);

  //   Get Single item
  fastify.get("/items/:id", getItemOpts);

  done();
}

module.exports = itemRoutes;
