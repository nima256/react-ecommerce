import "./productDetails.css";
import productImage1 from "../../assets/images/productDetails/1.webp";
import productImage2 from "../../assets/images/productDetails/2.webp";
import productImage3 from "../../assets/images/productDetails/3.webp";
import productImage4 from "../../assets/images/productDetails/4-1.jpg";
import productImage5 from "../../assets/images/productDetails/5-1.jpg";
import productImage6 from "../../assets/images/productDetails/6.webp";

import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProductDetails() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // fade: true,
    arrows: true,
    dir: "rtl",
  };
  return (
    <>
      <section className="detailsPage">
        <div className="breadcrumbWrapper mb-4">
          <div className="container-fluid">
            <ul className="breadcrumb breadcrumb2 mb-0">
              <li>
                <Link>خانه</Link>
              </li>
              <li>
                <Link>لپ تاپ</Link>
              </li>
              <li>
                <Link>لپ تاپ ایسوس مدل X1502</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container-fluid detailsContainer">
          <div className="row">
            <div className="col part1">
              <div className="row" style={{ padding: "45px" }}>
                {/* productZoom start */}

                <div className="col-md-3">
                  <div className="productZoom">
                    <InnerImageZoom src={productImage1} zoomType="hover" />
                  </div>

                  <Slider {...settings} className="zoomSlider">
                    <div className="item">
                      <img src={productImage1} alt="" className="w-100" />
                    </div>
                    <div className="item">
                      <img src={productImage2} alt="" className="w-100" />
                    </div>
                    <div className="item">
                      <img src={productImage3} alt="" className="w-100" />
                    </div>
                    <div className="item">
                      <img src={productImage4} alt="" className="w-100" />
                    </div>
                    <div className="item">
                      <img src={productImage5} alt="" className="w-100" />
                    </div>
                    <div className="item">
                      <img src={productImage6} alt="" className="w-100" />
                    </div>
                    <div className="item">
                      <img src={productImage6} alt="" className="w-100" />
                    </div>
                    <div className="item">
                      <img src={productImage6} alt="" className="w-100" />
                    </div>
                    <div className="item">
                      <img src={productImage6} alt="" className="w-100" />
                    </div>
                    <div className="item">
                      <img src={productImage6} alt="" className="w-100" />
                    </div>
                    <div className="item">
                      <img src={productImage6} alt="" className="w-100" />
                    </div>
                  </Slider>
                </div>

                {/* productZoom end */}

                {/* productInfo start */}
                <div className="col-md-9 productInfo">
                  <h1>
                    لپ تاپ ایسوس TUF Gaming FA506NCR R7 7435HS 16G 1T 4G RTX
                    3050
                  </h1>
                  <div className="d-flex align-items-center mb-4">
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                    <span className="text-lightt">(۴۲ نظر)</span>
                  </div>

                  <div className="priceSec d-flex align-items-center mb-3">
                    <span className="text-g priceLarge">۲۴,۳۴۲,۹۹۹</span>
                    <div className="ml-2 d-flex flex-column">
                      <span className="text-org">۲۰٪ تخفیف</span>
                      <span className="text-lightt oldPrice">۲۵,۳۴۲,۹۹۹</span>
                    </div>
                  </div>

                  <p>
                    تسمنشیب تنمسشیبت نمشسیبتن مشسیبت نمشسیبت منستبنمستب منسبت
                    منسشبت نمسشبت منشستب منسشتب منسشیب
                  </p>
                </div>
                {/* productInfo end */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
