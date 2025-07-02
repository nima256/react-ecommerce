const { ProductReviews } = require("../models/productReviews");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  let reviews = [];

  try {
    if (req.query.productId !== undefined && req.query.productId !== null) {
      reviews = await ProductReviews.find({ productId: req.query.productId });
    } else {
      reviews = await ProductReviews.find();
    }

    if (!reviews) {
      res.status(500).json({ success: false });
    }

    return res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

router.get("/get/count", async (req, res) => {
  const productReviews = await ProductReviews.countDocument();

  if (!productReviews) {
    res.status(500).json({ success: false });
  } else {
    res.send({ productReviews: productReviews });
  }
});

router.get("/:id", async (req, res) => {
  const review = await ProductReviews.findById(req.params.id);

  if (!review) {
    res.status(500).json({ message: "نظر مورد نظر شما یافت نشد" });
  }

  return res.status(200).send(review);
});

router.post("/add", async (req, res) => {
  let review = new ProductReviews({
    productId: req.body.productId,
    customerName: req.body.customerName,
    customerId: req.body.customerId,
    review: req.body.review,
    customerRating: req.body.customerRating,
  });

  if (!review) {
    res.status(500).json({ error: err, success: false });
  }

  review = await review.save();

  res.status(201).json(review);
});

module.exports = router;
