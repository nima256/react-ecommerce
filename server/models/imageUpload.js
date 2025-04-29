const mongoose = require("mongoose");

const imageUploadSchema = mongoose.Schema({
  images: [
    {
      type: String,
      reuqired: true,
    },
  ],
});

imageUploadSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

imageUploadSchema.set("toJSON", {
  virtual: true,
});

exports.ImageUpload = mongoose.model("ImageUpload", imageUploadSchema);
exports.imageUploadSchema = imageUploadSchema;
