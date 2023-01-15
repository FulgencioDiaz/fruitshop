const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const validator = require("../middleware/joiValidator");
const createUploader = require("../utils/multer");
const cloudinary = require("../utils/cloudinary");

const productSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
  cloudinaryId: {
    type: String,
    required: false,
  }
});

const Product = mongoose.model("Product", productSchema);

const removeImage = (cloudinaryId) => {
  return cloudinary.uploader.destroy(cloudinaryId, { invalidate: true });
};

const reqSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": `El campo "name" es requerido` }),

  price: Joi.number()
    .required()
    .messages({ "any.required": `El campo "price" es requerido` }),
 
  file: Joi.object()
  .required()
  .messages({
    "any.required": `El campo "image" es requerido`,
  }),
});

const VALID_IMAGE_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
  "image/png": "png",
};

const imageValidator = (mimetype) => VALID_IMAGE_TYPES[mimetype];

exports.Product = Product;
exports.productSchema = productSchema;
exports.validateBody = validator(reqSchema);
exports.upload = createUploader(imageValidator);
exports.removeImage = removeImage;