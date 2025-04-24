import "./topProducts.css";

import img1 from "../../assets/images/category-image.png";
import Tooman from "../../assets/images/product/toman.svg";

import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

import { ThemeProvider } from "@mui/material/styles";
import { cacheRtl, theme } from "./rtlTheme";
import { CacheProvider } from "@emotion/react";

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
              <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                  <Rating
                    className="ratingForTopProducts py-2"
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </ThemeProvider>
              </CacheProvider>
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
              <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                  <Rating
                    className="ratingForTopProducts py-2"
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </ThemeProvider>
              </CacheProvider>
              <div className="d-flex align-items-center">
                <span className="price text-g font-weight-bold">
                  ۱,۱۲۹,۰۰۰ <img src={Tooman} alt="" className="toomanSvg" />
                </span>
                <span className="oldPrice">
                  ۳,۵۱۴,۰۰۰
                  <img src={Tooman} alt="" className="toomanSvg oldToomanSvg" />
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
              <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                  <Rating
                    className="ratingForTopProducts py-2"
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </ThemeProvider>
              </CacheProvider>
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
