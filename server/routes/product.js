const { Category } = require("../models/category");
const { Product } = require("../models/product");
const { ImageUpload } = require("../models/imageUpload");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const mongoose = require("mongoose");

const ImageKit = require("imagekit");

const imageKit = new ImageKit({
  publicKey: process.env.IMAGE_KIT_PUBLIC,
  privateKey: process.env.IMAGE_KIT_PRIVATE,
  urlEndpoint: process.env.IMAGE_KIT_URL_ENDPOINT,
});

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
      const file = fs.readFileSync(req.files[i].path);
      const upload = await imageKit.upload({
        file: file,
        fileName: req.files[i].filename,
        folder: "/products",
      });

      imagesArr.push({
        url: upload.url,
        fileId: upload.fileId,
      });
      fs.unlinkSync(`uploads/${req.files[i].filename}`);
    }

    const imageUploaded = new ImageUpload({
      images: imagesArr,
    });

    await imageUploaded.save();

    return res.status(200).json(imagesArr);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "خطا در آپلود تصویر" });
  }
});

router.post("/create", async (req, res) => {
  const category = await Category.findById(req.body.category);
  if (!category) {
    return res.status(404).send("دسته بندی پیدا نشد");
  }

  const images_Array = [];
  const uploadedImages = await ImageUpload.find();

  const images_Arr = uploadedImages?.map((item) => {
    item?.images?.map((image) => {
      images_Array.push(image);
    });
  });

  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    images: images_Array,
    brand: req.body.brand,
    price: req.body.price,
    offerPrice: req.body.offerPrice,
    catName: req.body.catName,
    catId: req.body.catId,
    subCatId: req.body.subCatId,
    subCat: req.body.subCat,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    isFeatured: req.body.isFeatured,
    productWeight: req.body.productWeight,
  });

  product = await product.save();

  if (!product) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }

  imagesArr = [];
  res.status(201).json(product);
});

router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage);
  const totalPosts = await Product.countDocuments();
  const totalPages = Math.ceil(totalPosts / perPage);

  if (page > totalPages) {
    return res.status(404).json({ message: "صفحه مورد نظر پیدا نشد" });
  }

  let productList = [];

  if (req.query.minPrice !== undefined && req.query.maxPrice !== undefined) {
    if (
      req.query.subCatId !== undefined &&
      req.query.subCatId !== null &&
      req.query.subCatId !== ""
    ) {
      productList = await Product.find({
        subCatId: req.query.subCatId,
      }).populate("category");
    }

    const filteredProducts = productList.filter((product) => {
      if (req.query.minPrice && product.price < parseInt(+req.query.minPrice)) {
        return false;
      }
      if (req.query.maxPrice && product.price > parseInt(+req.query.maxPrice)) {
        return false;
      }
      return true;
    });

    if (!productList) {
      res.status(500).json({ success: false });
    }
    return res.status(200).json({
      products: filteredProducts,
      totalPages: totalPages,
      page: page,
    });
  } else if (req.query.page !== undefined && req.query.perPage !== undefined) {
    productList = await Product.find()
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!productList) {
      res.status(500).json({ success: false });
    }
    return res.status(200).json({
      products: productList,
      totalPages: totalPages,
      page: page,
    });
  } else {
    productList = await Product.find(req.query).populate("category");

    if (
      req.query.category !== "" &&
      req.query.category !== null &&
      req.query.category !== undefined
    ) {
      productList = await Product.find({ catId: req.query.category }).populate(
        "category"
      );
    } else if (
      req.query.catName !== "" &&
      req.query.catName !== null &&
      req.query.catName !== undefined
    ) {
      productList = await Product.find({ catName: req.query.catName }).populate(
        "category"
      );
    } else if (
      req.query.subCatId !== "" &&
      req.query.subCatId !== null &&
      req.query.subCatId !== undefined
    ) {
      productList = await Product.find({
        subCatId: req.query.subCatId,
      }).populate("category");
    }

    if (
      req.query.rating !== "" &&
      req.query.rating !== null &&
      req.query.rating !== undefined
    ) {
      if (
        req.query.category !== "" &&
        req.query.category !== null &&
        req.query.category !== undefined
      ) {
        productList = await Product.find({
          rating: req.query.rating,
          catId: req.query.category,
        }).populate("category");
      }
    }

    if (
      req.query.rating !== "" &&
      req.query.rating !== null &&
      req.query.rating !== undefined
    ) {
      if (
        req.query.subCatId !== "" &&
        req.query.subCatId !== null &&
        req.query.subCatId !== undefined
      ) {
        productList = await Product.find({
          rating: req.query.rating,
          subCatId: req.query.subCatId,
        });
      }
    }

    if (!productList) {
      res.status(500).json({ success: false });
    }

    return res.status(200).json({
      products: productList,
      totalPages: totalPages,
      page: page,
    });
  }
});

router.get("/get/count", async (req, res) => {
  const productsCount = await Product.countDocuments();

  if (!productsCount) {
    res.status(500).json({ success: false });
  } else {
    res.send({
      productsCount: productsCount,
    });
  }
});

router.get("/featured", async (req, res) => {
  const productList = await Product.find({ isFeatured: true });

  if (!productList) {
    res.status(500).json({ success: false });
  }

  return res.status(200).json(productList);
});

router.get("/:id", async (req, res) => {
  productEditId = req.params.id;

  const product = await Product.findById(req.params.id).populate("category");

  if (!product) {
    res.status(500).json({ message: "محصول مد نظر شما یافت نشد" });
  }

  return res.status(200).send(product);
});

router.delete("/deleteImage", async (req, res) => {
  const imgUrl = req.query.img;

  if (!imgUrl) {
    return res.status(400).json({ message: "URL تصویر مورد نیاز است." });
  }

  try {
    const imageDoc = await ImageUpload.findOne({ "images.url": imgUrl });

    if (!imageDoc) {
      return res.status(404).json({ message: "تصویر پیدا نشد." });
    }

    const imageObj = imageDoc.images.find((img) => img.url === imgUrl);

    if (!imageObj) {
      return res
        .status(404)
        .json({ message: "تصویر با این URL در سند یافت نشد." });
    }

    await imageKit.deleteFile(imageObj.fileId);

    const updateResult = await ImageUpload.updateOne(
      { _id: imageDoc._id },
      { $pull: { images: { url: imgUrl } } }
    );
    const updatedImageDoc = await ImageUpload.findById(imageDoc._id);

    if (updatedImageDoc && updatedImageDoc.images.length === 0) {
      await ImageUpload.deleteOne({ _id: updatedImageDoc._id });
      return res
        .status(200)
        .json({ success: true, message: "تصویر و سند مربوطه حذف شد." });
    }

    res.status(200).json({ success: true, message: "تصویر حذف شد." });
  } catch (error) {
    console.error("خطا در حذف تصویر:", error);
    res.status(500).json({ error: "خطا در حذف تصویر." });
  }
});

router.delete("/:id", async (req, res) => {
  const product = await Product.findById(req.paramd.id);
  const images = product.images;

  for (img of images) {
    const imgUrl = img;
    const urlArr = imgUrl.split("/");
    const image = urlArr[urlArr.length - 1];

    const imageName = image.split(".")[0];

    if (imageName) {
      for (const img of images) {
        try {
          const result = await imageKit.listFiles({
            searchQuery: `url="${img}"`,
          });
          if (result.length > 0) {
            await imageKit.deleteFile(result[0].fileId);
          }
        } catch (err) {
          console.log(`خطا در حذف تصویر ${img}`, err);
        }
      }
    }
  }

  const deletedProduct = await Product.findByIdAndDelete(req.params.id);

  if (!deletedProduct) {
    res.status(404).json({ message: "محصول پیدا نشد", success: false });
  }

  res.status(200).json({
    success: true,
    message: "محصول حذف شد",
  });
});

router.put("/:id", async (req, res) => {
  const product = await Product.findByIdAndUpadte(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      images: req.body.images,
      brand: req.body.brand,
      price: req.body.price,
      offerPrice: req.body.offerPrice,
      catName: req.body.catName,
      catId: req.body.catId,
      subCatId: req.body.subCatId,
      subCat: req.body.subCat,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      isFeatured: req.body.isFeatured,
      productWeight: req.body.productWeight,
    },
    { new: true }
  );

  if (!product) {
    res.status(404).json({
      message: "محصول قابل ویرایش نیست",
      success: false,
    });
  }

  imagesArr = [];

  res.status(200).json({
    message: "محصول آپدیت شد",
    success: true,
  });
});

module.exports = router;
