const mongoose = require("mongoose");

var objToday = new Date(),
  weekday = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ),
  dayOfWeek = weekday[objToday.getDay()],
  domEnder = (function () {
    var a = objToday;
    if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
    a = parseInt((a + "").charAt(1));
    return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th";
  })(),
  dayOfMonth =
    today + (objToday.getDate() < 10)
      ? "0" + objToday.getDate() + domEnder
      : objToday.getDate() + domEnder,
  months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ),
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear(),
  curHour =
    objToday.getHours() > 12
      ? objToday.getHours() - 12
      : objToday.getHours() < 10
      ? "0" + objToday.getHours()
      : objToday.getHours(),
  curMinute =
    objToday.getMinutes() < 10
      ? "0" + objToday.getMinutes()
      : objToday.getMinutes(),
  curSeconds =
    objToday.getSeconds() < 10
      ? "0" + objToday.getSeconds()
      : objToday.getSeconds(),
  curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today =
  curHour +
  ":" +
  curMinute +
  "." +
  curSeconds +
  curMeridiem +
  " " +
  dayOfWeek +
  " " +
  dayOfMonth +
  " of " +
  curMonth +
  ", " +
  curYear;

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    price: {
      type: Number,
      default: 0,
    },
    offerPrice: {
      type: Number,
      default: 0,
    },
    catName: {
      type: String,
      default: "",
    },
    catId: {
      type: String,
      default: "",
    },
    subCatId: {
      type: String,
      default: "",
    },
    subCat: {
      type: String,
      default: "",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    weight: {
      type: String,
      default: null,
    },
    dateCreated: {
      type: String,
      default: today,
    },
  },
  { timesstamps: true }
);

productSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

productSchema.set("toJSON", {
  virtual: true,
});

exports.Product = mongoose.model("Product", productSchema);
exports.productSchema = productSchema;