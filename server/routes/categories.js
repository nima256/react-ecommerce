const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const ImageKit = require("imagekit");

const imageKit = new ImageKit({
  publicKey: process.env.IMAGE_KIT_PUBLIC,
  privateKey: process.env.IMAGE_KIT_PRIVATE,
  urlEndpoint: process.env.IMAGE_KIT_URL_ENDPOINT,
});

const { Category } = require("../models/category");
const { ImageUpload } = require("../models/imageUpload");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`),
});

const upload = multer({ storage });

let imagesArr = [];

router.post("/upload", upload.array("images"), async (req, res) => {
  imagesArr = [];
  try {
    for (const file of req.files) {
      const fileData = fs.readFileSync(file.path);
      const result = await imageKit.upload({
        file: fileData,
        fileName: `${Date.now()}-${file.originalname}`,
        folder: "/categories",
      });
      imagesArr.push({ url: result.url, fileId: result.fileId });
      fs.unlinkSync(file.path);
    }

    const imageUploaded = new ImageUpload({ images: imagesArr });
    await imageUploaded.save();

    res.status(200).json(imagesArr);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "خطا در آپلود تصویر" });
  }
});

router.post("/create", async (req, res) => {
  try {
    const catObj = {
      name: req.body.name,
      slug: req.body.name,
      images: imagesArr.length ? imagesArr : [],
      color: req.body.color || undefined,
      parentId: req.body.parentId || undefined,
    };

    const category = new Category(catObj);
    const savedCategory = await category.save();

    imagesArr = [];
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const createCategories = (categories, parentId = null) => {
  return categories
    .filter((cat) => String(cat.parentId || null) === String(parentId))
    .map((cat) => ({
      _id: cat._id,
      id: cat._id,
      name: cat.name,
      images: cat.images,
      color: cat.color,
      slug: cat.slug,
      children: createCategories(categories, cat._id),
    }));
};

router.get("/", async (req, res) => {
  try {
    const categoryList = await Category.find();
    const categoryData = createCategories(categoryList);
    res.status(200).json({ categoryList: categoryData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "خطا در دریافت دسته‌بندی‌ها" });
  }
});

router.get("/get/count", async (req, res) => {
  try {
    const count = await Category.countDocuments({ parentId: undefined });
    res.send({ categoryCount: count });
  } catch {
    res.status(500).json({ success: false });
  }
});

router.get("/subCat/get/count", async (req, res) => {
  try {
    const categories = await Category.find();
    const subCatCount = categories.filter(
      (cat) => cat.parentId !== undefined
    ).length;
    res.send({ categoryCount: subCatCount });
  } catch {
    res.status(500).json({ success: false });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category)
      return res.status(404).json({ message: "دسته بندی پیدا نشد" });
    res.status(200).send(category);
  } catch {
    res.status(500).json({ message: "خطا در دریافت اطلاعات دسته بندی" });
  }
});

router.delete("/deleteImage", async (req, res) => {
  const imgUrl = req.query.img;
  try {
    const imageDoc = await ImageUpload.findOne({ "images.url": imgUrl });
    if (!imageDoc) return res.status(404).json({ message: "تصویر پیدا نشد" });

    const imageObj = imageDoc.images.find((img) => img.url === imgUrl);
    await imageKit.deleteFile(imageObj.fileId);

    await ImageUpload.updateOne(
      { _id: imageDoc._id },
      { $pull: { images: { url: imgUrl } } }
    );

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "خطا در حذف تصویر" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category)
      return res.status(404).json({ message: "دسته بندی پیدا نشد" });

    for (const image of category.images) {
      if (image?.fileId) {
        try {
          await imageKit.deleteFile(image.fileId);
        } catch (err) {
          console.warn(`خطا در حذف فایل ${image.fileId}:`, err.message);
        }
      }
    }

    await Category.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "دسته بندی و تصاویر آن پاک شدند" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "خطا در حذف دسته بندی یا تصاویر" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        images: req.body.images,
        color: req.body.color,
      },
      { new: true }
    );

    if (!category)
      return res.status(404).json({ message: "دسته بندی پیدا نشد" });

    imagesArr = [];
    res.send(category);
  } catch (error) {
    res.status(500).json({ message: "خطا در آپدیت دسته بندی" });
  }
});

module.exports = router;
