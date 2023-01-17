const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const _ = require("lodash");
const mongoose = require("mongoose");
const validator = require("../middleware/joiValidator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type:String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  isAdmin: Boolean,

  
  legalID: {
    type:String,
    required: true,
  },

});

userSchema.methods.generateToken = function () {
  return jwt.sign(
    _.pick(this, ["_id", "name", "legalID","password","email", "surname"]),
    config.get("jwtPrivateKey")
  );
};

const User = mongoose.model("User", userSchema);

const reqSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": `El campo "name" es requerido` }),
  email: Joi.string()
    .required()
    .email()
    .messages({ "any.required": `El campo "email" es requerido` }),
  password: Joi.string()
    .required()
    .messages({ "any.required": `El campo "password" es requerido` }),
  isAdmin: Joi.boolean()

    .messages({ "any.required": `El campo "Admin" es requerido` }),
    legalID: Joi.string()
    .required()
    .messages({ "any.required": `El campo "de DNI/CIF" es requerido` }),
    surname: Joi.string(),

});

exports.User = User;
exports.validateBody = validator(reqSchema);