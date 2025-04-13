import "./product.css";
import productImage from "../../assets/images/category-image.png";
import Tooman from "../../assets/images/toman.svg";

import { Link } from "react-router-dom";

import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Product = () => {
  return (
    <>
      <div className="productThumb">
        <Link>
          <div className="imgWrapper">
            <img src={productImage} alt="" className="w-100 productImg" />
          </div>
        </Link>

        <div className="info">
          <span className="d-block catName">لی</span>
          <h4 className="title">
            <Link>تسشینب نیسشتب نمسشیب نتسش یبنم تتنسب </Link>
          </h4>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          <span className="brand d-block text-g">
            از <Link className="text-g">اکبر کده</Link>
          </span>

          <div className="d-flex align-items-center mt-3">
            <div className="d-flex align-items-center">
              <span className="price text-g font-weight-bold">
                ۱,۱۲۹,۰۰۰ <img src={Tooman} alt="" className="toomanSvg" />
              </span>
              <span className="oldPrice">
                ۳,۵۱۴,۰۰۰ <img src={Tooman} alt="" className="toomanSvg" />
              </span>
            </div>
            <Button className="bg-g mr-auto transition">
              <ShoppingCartOutlinedIcon />
              اضافه کردن
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
