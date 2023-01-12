const express = require("express");
const {
  Product,
  validateBody,
  upload,
  removeImage,
} = require("../models/product");

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find({});

  res.send(products);
});

router.post(
  "/",
  [auth, admin],
  upload.single("image"),
  validateBody,
  async (req, res) => {
    const { name, price } = req.body;
    const { path: image, filename: cloudinaryId } = req.file;



    const product = new Product({ name, price, image, cloudinaryId });
    await product.save();

    res.send(product);
  }
);

router.put(
  "/:id",
  auth,
  upload.single("image"),
  validateBody,
  async (req, res) => {
    const { name, price } = req.body;
    const { path: image, filename: cloudinaryId } = req.file;

    let product = await Product.findById(req.params.id);
    if (!product) return res.status(400).send("Producto no encontrado");

    await removeImage(product.cloudinaryId);


    product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, image, cloudinaryId },
      { new: true }
    );

    res.send(product);
  }
);

router.delete("/:id", [auth, admin], async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(400).send("Producto no encontrado");

  await removeImage(product.cloudinaryId);

  res.send(product);
});

module.exports = router;