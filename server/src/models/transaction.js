const Joi = require("joi");
const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

function validateTransaction(transaction) {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return schema.validate(transaction);
}

exports.Transaction = Transaction;
exports.transactionSchema = transactionSchema;
exports.validate = validateTransaction;