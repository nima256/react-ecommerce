import "./topProducts.css";

import img1 from "../../assets/images/category-image.png";
import Tooman from "../../assets/images/toman.svg";

import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const TopProducts = (props) => {
  return (
    <>
      <div className="topSelling_box">
        <h3>{props.title}</h3>

        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to={""}>
              <img src={img1} alt="عکس اول" className="w-100" />
            </Link>
          </div>

          <div className="info px-3">
            <Link to={""}>
              <h4>تیسنب نسیتبنسی نسشتینمب نتسی بنستب</h4>
              <Rating
                className="ratingForTopProducts"
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
              />
              <div className="d-flex align-items-center">
                <span className="price text-g font-weight-bold">
                  ۱,۱۲۹,۰۰۰ <img src={Tooman} alt="" className="toomanSvg" />
                </span>
                <span className="oldPrice">
                  ۳,۵۱۴,۰۰۰ <img src={Tooman} alt="" className="toomanSvg" />
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to={""}>
              <img src={img1} alt="عکس اول" className="w-100" />
            </Link>
          </div>

          <div className="info px-3">
            <Link to={""}>
              <h4>تیسنب نسیتبنسی نسشتینمب نتسی بنستب</h4>
              <Rating
                className="ratingForTopProducts"
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
              />
              <div className="d-flex align-items-center">
                <span className="price text-g font-weight-bold">
                  ۱,۱۲۹,۰۰۰ <img src={Tooman} alt="" className="toomanSvg" />
                </span>
                <span className="oldPrice">
                  ۳,۵۱۴,۰۰۰ <img src={Tooman} alt="" className="toomanSvg" />
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to={""}>
              <img src={img1} alt="عکس اول" className="w-100" />
            </Link>
          </div>

          <div className="info px-3">
            <Link to={""}>
              <h4>تیسنب نسیتبنسی نسشتینمب نتسی بنستب</h4>
              <Rating
                className="ratingForTopProducts"
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
              />
              <div className="d-flex align-items-center">
                <span className="price text-g font-weight-bold">
                  ۱,۱۲۹,۰۰۰ <img src={Tooman} alt="" className="toomanSvg" />
                </span>
                <span className="oldPrice">
                  ۳,۵۱۴,۰۰۰ <img src={Tooman} alt="" className="toomanSvg" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProducts;
