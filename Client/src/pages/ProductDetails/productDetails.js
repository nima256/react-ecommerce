import "./productDetails.css";
import productImage1 from "../../assets/images/productDetails/1.webp";
import productImage2 from "../../assets/images/productDetails/2.webp";
import productImage3 from "../../assets/images/productDetails/3.webp";
import productImage4 from "../../assets/images/productDetails/4-1.jpg";
import productImage5 from "../../assets/images/productDetails/5-1.jpg";
import productImage6 from "../../assets/images/productDetails/6.webp";

import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Link, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useEffect, useRef, useState } from "react";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import { Button } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import { cacheRtl, theme } from "./rtlTheme";
import { CacheProvider } from "@emotion/react";
import Product from "../../components/product/product";
import QuantityBox from "../../components/quantityBox/quantityBox";
import { fetchDataFromApi } from "../../utils/api";

function ProductDetails() {
  const [zoomImage, setZoomImage] = useState(productImage1);
  const [value, setValue] = useState(1);
  const [activeTabs, setActiveTabs] = useState(2);
  const [currentProduct, setCurrentProdcut] = useState({});

  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  const { id } = useParams();

  const zoomSliderSettings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: 1000,
  };

  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  const goto = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };

  // For number to be Persian Start

  const toPersianDigits = (num) =>
    String(num).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

  const handleInputChange = (e) => {
    const val = e.target.value.replace(/[۰-۹]/g, (d) =>
      "۰۱۲۳۴۵۶۷۸۹".indexOf(d)
    );
    if (!isNaN(val) && val !== "") {
      setValue(Number(val));
    }
  };

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => {
    if (value !== 1) {
      setValue((prev) => Math.max(prev - 1, 0));
    }
  };
  // For number to be Persian End

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // fade: true,
    arrows: true,
    autoplay: 3000,
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchDataFromApi(`/api/product/${id}`).then((res) => {
      setCurrentProdcut(res);
    });
  }, [id]);

  return (
    <>
      <section className="detailsPage">
        <div className="container detailsContainer pt-5 pb-3">
          <div className="row">
            {/* productZoom start */}
            <div className="col-md-4">
              <div className="productZoom">
                <Slider
                  {...zoomSliderSettings}
                  className="zoomSliderBig"
                  ref={zoomSliderBig}
                >
                  <div className="item">
                    <InnerImageZoom src={productImage1} zoomType="hover" />
                  </div>
                  <div className="item">
                    <InnerImageZoom src={productImage2} zoomType="hover" />
                  </div>
                  <div className="item">
                    <InnerImageZoom src={productImage3} zoomType="hover" />
                  </div>
                  <div className="item">
                    <InnerImageZoom src={productImage4} zoomType="hover" />
                  </div>
                  <div className="item">
                    <InnerImageZoom src={productImage5} zoomType="hover" />
                  </div>
                  <div className="item">
                    <InnerImageZoom src={productImage6} zoomType="hover" />
                  </div>
                </Slider>
              </div>

              <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
                <div className="item">
                  <img
                    src={productImage1}
                    alt=""
                    className="w-100"
                    onClick={() => goto(0)}
                  />
                </div>
                <div className="item">
                  <img
                    src={productImage2}
                    alt=""
                    className="w-100"
                    onClick={() => goto(1)}
                  />
                </div>
                <div className="item">
                  <img
                    src={productImage3}
                    alt=""
                    className="w-100"
                    onClick={() => goto(2)}
                  />
                </div>
                <div className="item">
                  <img
                    src={productImage4}
                    alt=""
                    className="w-100"
                    onClick={() => goto(3)}
                  />
                </div>
                <div className="item">
                  <img
                    src={productImage5}
                    alt=""
                    className="w-100"
                    onClick={() => goto(4)}
                  />
                </div>
                <div className="item">
                  <img
                    src={productImage6}
                    alt=""
                    className="w-100"
                    onClick={() => goto(5)}
                  />
                </div>
              </Slider>
            </div>
            {/* productZoom end */}

            {/* productInfo start */}
            <div className="col-md-8 productInfo">
              <h1>
                لپ تاپ ایسوس TUF Gaming FA506NCR R7 7435HS 16G 1T 4G RTX 3050
              </h1>
              <div className="d-flex align-items-center mb-4">
                <CacheProvider value={cacheRtl}>
                  <ThemeProvider theme={theme}>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </ThemeProvider>
                </CacheProvider>
                <span className="text-lightt">(۴۲ نظر)</span>
              </div>

              <div className="priceSec d-flex align-items-center mb-3">
                <span className="text-g priceLarge">۲۴,۳۴۲,۹۹۹</span>
                <div className="ml-2 d-flex flex-column">
                  <span className="text-org">۲۰٪ تخفیف</span>
                  <span className="text-lightt oldPrice">۲۵,۳۴۲,۹۹۹</span>
                </div>
              </div>

              <p className="">
                تسمنشیب تنمسشیبت نمشسیبتن مشسیبت نمشسیبت منستبنمستب منسبت منسشبت
                نمسشبت منشستب منسشتب منسشیب تسمنشیب تنمسشیبت نمشسیبتن مشسیبت
                نمشسیبت منستبنمستب منسبت منسشبت نمسشبت منشستب منسشتب منسشیب
                تسمنشیب تنمسشیبت نمشسیبتن مشسیبت نمشسیبت منستبنمستب منسبت منسشبت
                نمسشبت منشستب منسشتب منسشیب تسمنشیب تنمسشیبت نمشسیبتن مشسیبت
                نمشسیبت منستبنمستب منسبت منسشبت نمسشبت منشستب منسشتب منسشیب
              </p>
              <p>
                تسمنشیب تنمسشیبت نمشسیبتن مشسیبت نمشسیبت منستبنمستب منسبت منسشبت
                نمسشبت منشستب منسشتب منسشیب تسمنشیب تنمسشیبت نمشسیبتن مشسیبت
                نمشسیبت منستبنمستب منسبت منسشبت نمسشبت منشستب منسشتب منسشیب
                تسمنشیب تنمسشیبت نمشسیبتن مشسیبت نمشسیبت منستبنمستب منسبت منسشبت
                نمسشبت منشستب منسشتب منسشیب تسمنشیب تنمسشیبت نمشسیبتن مشسیبت
                نمشسیبت منستبنمستب منسبت منسشبت نمسشبت منشستب منسشتب منسشیب
                تسمنشیب تنمسشیبت نمشسیبتن مشسیبت نمشسیبت منستبنمستب منسبت منسشبت
                نمسشبت منشستب منسشتب منسشیب
              </p>

              <div className="d-flex align-items-center">
                <div>
                  <QuantityBox />
                </div>
                <div className="d-flex align-items-center">
                  <Button className="btn-g btn-lg ml-3">
                    <ShoppingCartOutlinedIcon />
                  </Button>

                  <Button className="move btn-border btn-lg ml-3">
                    <CompareArrowsOutlinedIcon />
                  </Button>
                </div>
              </div>
            </div>
            {/* productInfo end */}
          </div>

          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline ">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 0 && "active"}`}
                    onClick={() => setActiveTabs(0)}
                  >
                    توضیحات
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 1 && "active"}`}
                    onClick={() => setActiveTabs(1)}
                  >
                    ویژگی ها
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 2 && "active"}`}
                    onClick={() => setActiveTabs(2)}
                  >
                    نظرات (۳)
                  </Button>
                </li>
              </ul>

              {activeTabs === 0 && (
                <div className="tabContent">
                  <p>
                    تمسشتیبم شسنمتیبسشب شستینمبشسینب سشمبتسشیبتسشمنب سشمیبتسشنمی
                    بسشتمبتمسشتیبم شسنمتیبسشب شستینمبشسینب سشمبتسشیبتسشمنب
                    سشمیبتسشنمی بسشتمبتمسشتیبم شسنمتیبسشب شستینمبشسینب
                    سشمبتسشیبتسشمنب سشمیبتسشنمی بسشتمبتمسشتیبم شسنمتیبسشب
                    شستینمبشسینب سشمبتسشیبتسشمنب سشمیبتسشنمی بسشتمب
                  </p>
                </div>
              )}
              {activeTabs === 1 && (
                <div className="tabContent">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr className="stand-up">
                          <th>گارانتی</th>
                          <td>الماس</td>
                        </tr>
                        <tr className="stand-up">
                          <th>گارانتی</th>
                          <td>الماس</td>
                        </tr>
                        <tr className="stand-up">
                          <th>گارانتی</th>
                          <td>الماس</td>
                        </tr>
                        <tr className="stand-up">
                          <th>گارانتی</th>
                          <td>الماس</td>
                        </tr>
                        <tr className="stand-up">
                          <th>گارانتی</th>
                          <td>الماس</td>
                        </tr>
                        <tr className="stand-up">
                          <th>گارانتی</th>
                          <td>الماس</td>
                        </tr>
                        <tr className="stand-up">
                          <th>گارانتی</th>
                          <td>الماس</td>
                        </tr>
                        <tr className="stand-up">
                          <th>گارانتی</th>
                          <td>الماس</td>
                        </tr>
                        <tr className="stand-up">
                          <th>گارانتی</th>
                          <td>الماس</td>
                        </tr>
                        <tr className="stand-up">
                          <th>گارانتی</th>
                          <td>الماس</td>
                        </tr>
                        <tr className="stand-up">
                          <th>گارانتی</th>
                          <td>الماس</td>
                        </tr>
                        <tr className="stand-up">
                          <th>گارانتی</th>
                          <td>الماس</td>
                        </tr>
                        <tr className="stand-up">
                          <th>گارانتی</th>
                          <td>الماس</td>
                        </tr>
                        <tr className="stand-up">
                          <th>گارانتی</th>
                          <td>الماس</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTabs === 2 && (
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-7">
                      <h3>نظرات و سوالات مشتریان</h3>
                      <br />
                      <div className="card p-4 reviewsCard">
                        <div className="info pr-5">
                          <div className="d-flex align-items-center">
                            <h5 className="text-lightt">علی</h5>
                            <div className="mr-auto">
                              <CacheProvider value={cacheRtl}>
                                <ThemeProvider theme={theme}>
                                  <Rating defaultValue={5} />
                                </ThemeProvider>
                              </CacheProvider>
                            </div>
                          </div>
                          <h6 className="text-lightt">
                            پنجشنبه ۴ اردیبهشت ۱۴۰۴
                          </h6>

                          <p>
                            تینمسش سیتنس نشسیب نم نمشسی نمشسیتب نمسشیب سمشنیبن
                            نسمشیتب نمسشیب نشستینمب س
                          </p>
                        </div>
                      </div>
                      <div className="card p-4 reviewsCard">
                        <div className="info pr-5">
                          <div className="d-flex align-items-center">
                            <h5 className="text-lightt">علی</h5>
                            <div className="mr-auto">
                              <CacheProvider value={cacheRtl}>
                                <ThemeProvider theme={theme}>
                                  <Rating defaultValue={2} />
                                </ThemeProvider>
                              </CacheProvider>
                            </div>
                          </div>
                          <h6 className="text-lightt">
                            پنجشنبه ۴ اردیبهشت ۱۴۰۴
                          </h6>

                          <p>
                            تینمسش سیتنس نشسیب نم نمشسی نمشسیتب نمسشیب سمشنیبن
                            نسمشیتب نمسشیب نشستینمب س
                          </p>
                        </div>
                      </div>
                      <div className="card p-4 reviewsCard">
                        <div className="info pr-5">
                          <div className="d-flex align-items-center">
                            <h5 className="text-lightt">علی</h5>
                            <div className="mr-auto">
                              <CacheProvider value={cacheRtl}>
                                <ThemeProvider theme={theme}>
                                  <Rating defaultValue={2} />
                                </ThemeProvider>
                              </CacheProvider>
                            </div>
                          </div>
                          <h6 className="text-lightt">
                            پنجشنبه ۴ اردیبهشت ۱۴۰۴
                          </h6>

                          <p>
                            تینمسش سیتنس نشسیب نم نمشسی نمشسیتب نمسشیب سمشنیبن
                            نسمشیتب نمسشیب نشستینمب س
                          </p>
                        </div>
                      </div>
                      <div className="card p-4 reviewsCard">
                        <div className="info pr-5">
                          <div className="d-flex align-items-center">
                            <h5 className="text-lightt">علی</h5>
                            <div className="mr-auto">
                              <CacheProvider value={cacheRtl}>
                                <ThemeProvider theme={theme}>
                                  <Rating defaultValue={2} />
                                </ThemeProvider>
                              </CacheProvider>
                            </div>
                          </div>
                          <h6 className="text-lightt">
                            پنجشنبه ۴ اردیبهشت ۱۴۰۴
                          </h6>

                          <p>
                            تینمسش سیتنس نشسیب نم نمشسی نمشسیتب نمسشیب سمشنیبن
                            نسمشیتب نمسشیب نشستینمب س
                          </p>
                        </div>
                      </div>
                      <div className="card p-4 reviewsCard">
                        <div className="info pr-5">
                          <div className="d-flex align-items-center">
                            <h5 className="text-lightt">علی</h5>
                            <div className="mr-auto">
                              <CacheProvider value={cacheRtl}>
                                <ThemeProvider theme={theme}>
                                  <Rating defaultValue={2} />
                                </ThemeProvider>
                              </CacheProvider>
                            </div>
                          </div>
                          <h6 className="text-lightt">
                            پنجشنبه ۴ اردیبهشت ۱۴۰۴
                          </h6>

                          <p>
                            تینمسش سیتنس نشسیب نم نمشسی نمشسیتب نمسشیب سمشنیبن
                            نسمشیتب نمسشیب نشستینمب س
                          </p>
                        </div>
                      </div>

                      <br />
                      <br />

                      <form action="" className="reviewForm">
                        <h4>نظر خود را بنویسید</h4> <br />
                        <div className="form-group">
                          <textarea
                            name=""
                            id=""
                            className="form-control"
                            placeholder="چیزی بنویسید ..."
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="نام"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="ایمیل"
                              />
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="form-group">
                          <Button className="btn-g btn-lg">ثبت نظر</Button>
                        </div>
                      </form>
                    </div>

                    <div className="col-md-5 pr-5">
                      <h4>آمار نظرات کاربران</h4>
                      <div className="d-flex align-items-center mt-2">
                        <CacheProvider value={cacheRtl}>
                          <ThemeProvider theme={theme}>
                            <Rating defaultValue={4.0} key={4} readOnly />
                          </ThemeProvider>
                        </CacheProvider>
                        <strong className="mr-3">۴ از ۵</strong>
                      </div>

                      <br />

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="ml-3">۵ ستاره</span>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "80%", height: "20px" }}
                          >
                            ۸۰٪
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="ml-3">۴ ستاره</span>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "70%", height: "20px" }}
                          >
                            ۷۰٪
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="ml-3">۳ ستاره</span>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "55%", height: "20px" }}
                          >
                            ۵۵٪
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="ml-3">۲ ستاره</span>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "35%", height: "20px" }}
                          >
                            ۳۵٪
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="ml-3">۱ ستاره</span>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "25%", height: "20px" }}
                          >
                            ۲۵٪
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="relatedProducts pt-5 pb-4">
            <h2 className="hd mb-0 mt-0">کالا های مرتبط</h2>
            <br />
            <Slider {...settings2} className="prodSlider">
              <div className="item">
                <Product title="سلام" tag="oneInStock" />
              </div>
              <div className="item">
                <Product title="خدافزی" tag="oneInStock" />
              </div>
              <div className="item">
                <Product title="شب بخیر" tag="oneInStock" />
              </div>
              <div className="item">
                <Product title="صبح بخیر" tag="oneInStock" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
