const bcrypt = require("bcrypt");
const { User, validateBody } = require("../models/user");
const express = require("express");
const router = express.Router();

/* router.post("/registro", validateBody, async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("El usuario ya está registrado");

  user = new User(req.body);

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);

  user.password = hash;

  await user.save();

  const token = user.generateToken();
  res.header("x-auth-token", token).send("Usuario autentificado");

}); */

module.exports = router;