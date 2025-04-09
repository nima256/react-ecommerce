import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css";

import Slide1 from "../../../assets/images/slide1.png";

import Button from "@mui/material/Button";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    arrows: true,
    rtl: true,
  };

  return (
    <section className="homeSlider">
      <div className="container-fluid position-relative">
        <Slider {...settings} className="home_slider_main">
          <div className="item">
            <img src={Slide1} alt="اسلایدر اول" className="w-100" />
            <div className="info">
              <h2 className="mb-4" dir="rtl">
                ستشین بمتسش <br />
                تسنیتب
              </h2>
              <p dir="rtl">برای با خبر شدن از محصولات جدید ثبت نام کنید</p>
            </div>
          </div>
          <div className="item">
            <img src={Slide1} alt="اسلایدر دوم" className="w-100" />
            <div className="info">
              <h2 className="mb-4" dir="rtl">
                بمتسش ستشین <br />
                شسیب
              </h2>
              <p dir="rtl">برای با خبر شدن از محصولات جدید ثبت نام کنید</p>
            </div>
          </div>
        </Slider>

        <div className="newsLetterBanner">
          <SendOutlinedIcon />
          <input
            dir="ltr"
            type="text"
            placeholder="آدرس ایمیل خود را وارد کنید"
          />
          <Button className="bg-g">تایید</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
