import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css";

import Slide1 from "../../assets/images/mainSlider/mainSlider.jpg";
import Slide2 from "../../assets/images/mainSlider/mainSlide2.jpg";
import Slide3 from "../../assets/images/mainSlider/mainSlide3.jpg";
import Slide4 from "../../assets/images/mainSlider/mainSlide4.jpg";
import Slide5 from "../../assets/images/mainSlider/mainSlide5.jpg";

import NewsLetter from "../newsLetter/newsLetter";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    arrows: true,
    // autoplay: 3000,
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
            <NewsLetter />
          </div>
          <div className="item">
            <img src={Slide2} alt="اسلایدر دوم" className="w-100" />
            <div className="info">
              <h2 className="mb-4" dir="rtl">
                بمتسش ستشین <br />
                شسیب
              </h2>
              <p dir="rtl">برای با خبر شدن از محصولات جدید ثبت نام کنید</p>
            </div>
            <NewsLetter />
          </div>
          <div className="item">
            <img src={Slide3} alt="اسلایدر دوم" className="w-100" />
            <div className="info">
              <h2 className="mb-4" dir="rtl">
                بمتسش ستشین <br />
                شسیب
              </h2>
              <p dir="rtl">برای با خبر شدن از محصولات جدید ثبت نام کنید</p>
            </div>
            <NewsLetter />
          </div>
          <div className="item">
            <img src={Slide4} alt="اسلایدر دوم" className="w-100" />
            <div className="info">
              <h2 className="mb-4" dir="rtl">
                بمتسش ستشین <br />
                شسیب
              </h2>
              <p dir="rtl">برای با خبر شدن از محصولات جدید ثبت نام کنید</p>
            </div>
            <NewsLetter />
          </div>
          <div className="item">
            <img src={Slide5} alt="اسلایدر دوم" className="w-100" />
            <div className="info">
              <h2 className="mb-4" dir="rtl">
                بمتسش ستشین <br />
                شسیب
              </h2>
              <p dir="rtl">برای با خبر شدن از محصولات جدید ثبت نام کنید</p>
            </div>
            <NewsLetter />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
