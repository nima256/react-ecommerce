import "./productDetails.css";
import productImage from "../../assets/images/productDetails/69iRwhapxX8Lc0yE-1_11zon.jpeg";

import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

import { Link } from "react-router-dom";

import Rating from "@mui/material/Rating";

function ProductDetails() {
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

        <div className="container-fluid">
          <div className="row">
            <div className="col part1">
              <div className="row">
                {/* productZoom start */}
                <div className="col-md-3 ">
                  <div className="productZoom">
                    <InnerImageZoom src={productImage} zoomType="hover" />
                  </div>
                </div>
                {/* productZoom end */}

                {/* productInfo start */}
                <div className="col-md-9 productInfo">
                  <h1>تمکسشنیبتسشنباسشمینبتنسمشیبتمنسشیب</h1>
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
