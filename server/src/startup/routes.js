require("express-async-errors");

const errors = require("../middleware/errors");

const products = require("../routes/products");
const transactions = require("../routes/transactions");
const users = require("../routes/users");
const auths = require("../routes/auths");

const helmet = require("helmet");
const compression = require("compression");
const express = require("express");

module.exports = function (app) {
  app.use(helmet());
  app.use(compression());

  app.use(express.json());

 
  app.use("/products", products);
  app.use("/transactions", transactions);
  app.use("/users", users);
  app.use("/auths", auths);

  app.get("/ping", (req, res) => {
    res.send("pong");
  });

  app.use(errors);
 
};