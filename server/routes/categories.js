const express = require("express");
const router = express.Router();
const slugify = require("slugify");
const multer = require("multer");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY,
  api_key: process.env.CLOUDINARY,
  api_secret: process.env.CLOUDINARY,
  secure: true,
});

const { Category } = require("../models/category");
const { ImageUpload } = require("../models/imageUpload");

var imagesArr = [];
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.array("images"), async (req, res) => {
  imagesArr = [];
  try {
    for (let i = 0; i < req?.files?.length; i++) {
      const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: false,
      };

      const img = await cloudinary.uploader.upload(
        req.files[i].path,
        options,
        function (error, result) {
          imagesArr.push(result.secure_url);
          fs.unlinkSync(`uploads/${req.files[i].filename}`);
        }
      );

      let imageUploaded = new ImageUpload({
        images: imagesArr,
      });

      imageUploaded = await imageUploaded.save();
      return res.status(200).json(imagesArr);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/create", async (req, res) => {
  let catObj = [];

  if (imagesArr.length > 0) {
    catObj = {
      name: req.body.name,
      images: imagesArr,
      color: req.body.color,
      slug: req.body.name,
    };
  } else {
    catObj = {
      name: req.body.name,
      slug: req.body.name,
    };
  }

  if (req.body.parentId) {
    catObj.parentId = req.body.parentId;
  }

  let category = new Category(catObj);

  if (!category) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }

  category = await category.save();

  imagesArr = [];

  res.status(201).json(category);
});

const createCategories = (categories, parentId = null) => {
  const categoryList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }

  for (let cat of category) {
    categoryList.push({
      _id: cat._id,
      name: cat.name,
      images: cat.images,
      color: cat.color,
      slug: cat.slug,
      children: createCategories(categories, cat._id),
    });
  }

  return categoryList;
};

router.get("/", async (req, res) => {
  try {
    const categoryList = await Category.find();
    if (!categoryList) {
      res.status(500).json({ success: false });
    }

    if (categoryList) {
      const categoryData = createCategories(categoryList);

      return res.status(200).json({
        categoryList: categoryData,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/get/count", async (req, res) => {
  const categoryCount = await Category.countDocuments({ parentId: undefined });
  if (!categoryCount) {
    res.status(500).json({ success: false });
  } else {
    res.send({
      categoryCount: categoryCount,
    });
  }
});

router.get("/subCat/get/count", async (req, res) => {
  const category = await Category.find();

  if (!category) {
    res.status(500).json({ success: false });
  } else {
    const subCatList = [];
    for (let cat of category) {
      if (cat.parentId !== undefined) {
        subCatList.push(cat);
      }
    }

    res.send({
      categoryCount: subCatList.length,
    });
  }
});

router.get("/:id", async (req, res) => {
  categoryEditId = req.params.id;

  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(500).json({ message: "دسته بندی مورد نظر شما پیدا نشد" });
  }
  return res.status(200).send(category);
});

router.delete("/deleteImage", async (req, res) => {
  const imgUrl = req.query.img;

  const urlArr = imgUrl.split("/");
  const image = urlArr[urlArr.length - 1];

  const imageName = image.split(".")[0];

  const response = await cloudinary.uploader.destroy(imageName);

  if (response) {
    res.status(200).send(response);
  }
});

router.delete("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);
  const images = category.images;

  for (img of images) {
    const imgUrl = img;
    const urlArr = imgUrl.split("/");
    const image = urlArr[urlArr.length - 1];

    const imageName = image.split(".")[0];

    cloudinary.uploader.destroy(imageName);
  }

  const deletedCat = await Category.findByIdAndDelete(req.params.id);

  if (!deletedCat) {
    res.status(404).json({
      message: "دسته بندی پیدا نشد",
      success: false,
    });
  }

  res.status(200).json({
    success: true,
    message: "دسته بندی پاک شد",
  });
});

router.put("/:id", async (req, res) => {
  const category = await Category.findByAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      images: req.body.images,
      color: req.body.color,
    },
    { new: true }
  );

  if (!category) {
    return res.status(500).json({
      message: "آپدیت دسته بندی انجام نشد",
      success: false,
    });
  }

  imagesArr = [];

  res.send(category);
});

module.exports = router;
