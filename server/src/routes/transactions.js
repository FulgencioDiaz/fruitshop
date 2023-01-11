const { Transaction, validate } = require("../models/transaction");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const categories = await Transaction.find({});

  res.send(categories);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const transaction = new Transaction(req.body);

  await transaction.save();

  res.send(transaction);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.send(transaction);
});

router.delete("/:id", async (req, res) => {
  const transaction = await Transaction.findByIdAndDelete(req.params.id);

  res.send(transaction);
});

module.exports = router;