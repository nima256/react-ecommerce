import "./ForTestSlider.css";
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
import { fetchDataFromApi } from "../../utils/api";

function ForTestSlider() {
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

            {/* productInfo end */}
          </div>
        </div>
      </section>
    </>
  );
}

export default ForTestSlider;
