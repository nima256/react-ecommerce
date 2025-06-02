const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  fileId: {
    type: String,
    required: true,
  },
});

const imageUploadSchema = new mongoose.Schema({
  images: [ImageSchema],
});

imageUploadSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

imageUploadSchema.set("toJSON", {
  virtual: true,
});

exports.ImageUpload = mongoose.model("ImageUpload", imageUploadSchema);
exports.imageUploadSchema = imageUploadSchema;
