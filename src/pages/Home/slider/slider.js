import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

import Slide1 from "../../../assets/images/slide1.jpg";
import Slide2 from "../../../assets/images/slide2.jpg";
import Slide3 from "../../../assets/images/slide3.jpg";
import Slide4 from "../../../assets/images/slide4.png";

const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    // fade: true,
    arrows: true,
  };

  return (
    <section className="homeSliderr">
      <div className="container-fluid">
        <Slider {...settings} className="home_slider_mainn">
          <div className="itemmm">
            <img src={Slide4} alt="اسلایدر اول" className="w-100" />
            <div className="info">
              <h2 className="mb-4" dir="rtl">
                ستشین بمتسش <br />
                تسنیتب
              </h2>
              <p>برای با خبر شدن از محصولات جدید ثبت نام کنید</p>
            </div>
          </div>
          <div className="itemmm">
            <img src={Slide4} alt="اسلایدر دوم" className="w-100" />
            <div className="info">
              <h2 className="mb-4" dir="rtl">
                بمتسش ستشین <br />
                شسیب
              </h2>
              <p>برای با خبر شدن از محصولات جدید ثبت نام کنید</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
