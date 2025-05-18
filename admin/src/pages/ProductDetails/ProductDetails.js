import "./ProductDetails.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdBrandingWatermark } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import LinearProgress from "@mui/material/LinearProgress";

import image1 from "../../assets/images/productDetails/1.webp";
import image2 from "../../assets/images/productDetails/2.webp";
import image3 from "../../assets/images/productDetails/3.webp";
import image4 from "../../assets/images/productDetails/4-1.jpg";
import image5 from "../../assets/images/productDetails/5-1.jpg";
import image6 from "../../assets/images/productDetails/6.webp";
import UserImgCircle from "../../components/UserImgCircle/UserImgCircle";

// rtl
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const theme = (outerTheme) =>
  createTheme({
    direction: "rtl",
  });

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
// rtl end

function ProductDetails() {
  var productSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  var productSliderSmlSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="card productDetailsSection">
          <div className="row">
            <div className="col-md-4">
              <div className="sliderWrapper pt-3 pb-3 ps-4 pe-4">
                <h5 className="mb-4">گالری محصول</h5>
                <Slider {...productSliderSettings} className="sliderBig mb-2">
                  <div className="item">
                    <img src={image1} alt="" className="w-100" />
                  </div>
                </Slider>
                <Slider {...productSliderSmlSettings} className="sliderSml">
                  <div className="item">
                    <img src={image2} alt="" className="w-100" />
                  </div>
                  <div className="item">
                    <img src={image3} alt="" className="w-100" />
                  </div>
                  <div className="item">
                    <img src={image4} alt="" className="w-100" />
                  </div>
                  <div className="item">
                    <img src={image5} alt="" className="w-100" />
                  </div>
                  <div className="item">
                    <img src={image6} alt="" className="w-100" />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-md-8">
              <div className="pt-3 pb-3 ps-4 pe-4">
                <h5 className="mb-4">توضیحات محصول</h5>
                <h4>
                  تینمشس نمسشیبت مشنسی بمسش م شسمسشنمسش سشنمی بنشسمیت تشس
                  یمنبتمنسشیب
                </h4>

                <div className="productInfo mt-3">
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">شرکت</span>
                    </div>
                    <div className="col-sm-9">
                      :<span>ایسوس</span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdCategory />
                      </span>
                      <span className="name">دسته بندی</span>
                    </div>
                    <div className="col-sm-9">
                      :
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <div className="spanWrapepr">
                              <span>لپ تاپ</span>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="spanWrapepr">
                              <span>لپ تاپ ایسوس</span>
                            </div>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">برچسب</span>
                    </div>
                    <div className="col-sm-9">
                      :
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <div className="spanWrapepr">
                              <span>لپ تاپ اداری</span>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="spanWrapepr">
                              <span>لپ تاپ رم ۸</span>
                            </div>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">رنگ</span>
                    </div>
                    <div className="col-sm-9">
                      :<span>مشکی</span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">قیمت</span>
                    </div>
                    <div className="col-sm-9">
                      :<span>۲۷,۰۰۰,۰۰۰</span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">موجودی</span>
                    </div>
                    <div className="col-sm-9">
                      :<span>۲۲</span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">نظرات</span>
                    </div>
                    <div className="col-sm-9">
                      :<span>۴</span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">زمان انتشار</span>
                    </div>
                    <div className="col-sm-9">
                      :<span>۰۲ اردیبهشت ۱۴۰۳</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h4 className="mt-4 mb-3">توضیحات محصول</h4>
            <p>
              تشسنیم نسشتیب شسمی بشسنمیب سشنمیب تسشی تشسنیم نسشتیب شسمی بشسنمیب
              سشنمیب تسشی تشسنیم نسشتیب شسمی بشسنمیب سشنمیب تسشی تشسنیم نسشتیب
              شسمی بشسنمیب سشنمیب تسشی تشسنیم نسشتیب شسمی بشسنمیب سشنمیب تسشی
              تشسنیم نسشتیب شسمی بشسنمیب سشنمیب تسشی تشسنیم نسشتیب شسمی بشسنمیب
              سشنمیب تسشی تشسنیم نسشتیب شسمی بشسنمیب سشنمیب تسشی تشسنیم نسشتیب
              شسمی بشسنمیب سشنمیب تسشی تشسنیم نسشتیب شسمی بشسنمیب سشنمیب تسشی
            </p>

            <br />

            <h5 className="mt-4 mb-4">آنالیز نظرات</h5>
            <div className="ratingSection">
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">۵ ستاره</span>

                <div className="col2">
                  <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={theme}>
                      <LinearProgress variant="determinate" value={80} />
                    </ThemeProvider>
                  </CacheProvider>
                </div>

                <div className="col3">(۲۲)</div>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">۴ ستاره</span>

                <div className="col2">
                  <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={theme}>
                      <LinearProgress variant="determinate" value={50} />
                    </ThemeProvider>
                  </CacheProvider>
                </div>

                <div className="col3">(۲)</div>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">۳ ستاره</span>

                <div className="col2">
                  <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={theme}>
                      <LinearProgress variant="determinate" value={30} />
                    </ThemeProvider>
                  </CacheProvider>
                </div>

                <div className="col3">(۲)</div>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">۲ ستاره</span>

                <div className="col2">
                  <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={theme}>
                      <LinearProgress variant="determinate" value={10} />
                    </ThemeProvider>
                  </CacheProvider>
                </div>

                <div className="col3">(۲)</div>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">۱ ستاره</span>

                <div className="col2">
                  <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={theme}>
                      <LinearProgress variant="determinate" value={20} />
                    </ThemeProvider>
                  </CacheProvider>
                </div>

                <div className="col3">(۲)</div>
              </div>
            </div>

            <br />

            <h5 className="mt-4 mb-4">نظرات کاربران</h5>

            <div className="reviewSection">
              <div className="reviewRow">
                <div className="row">
                  <div className="col-sm-7">
                    <div className="userInfo d-flex">
                      <UserImgCircle lg={true} />

                      <div className="info pe-2">
                        <h5>علی علیی</h5>
                        <span>۳۶ دقیقه پیش</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
