import "./catSlider.css";
import categoryImg from "../../assets/images/category-image.png";
import Slider from "react-slick";
import { useState } from "react";

const CatSlider = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: true,
    rtl: true,
  };

  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid cat-container">
          <h2 className="hd">دسته بندی ها پر طرفدار</h2>
          <Slider {...settings} className="cat_slider_main">
            {itemBg.length !== 0 &&
              itemBg.map((item, index) => {
                return (
                  <div>
                    <div className="item" style={{ background: item }}>
                      <div className="info">
                        <img src={categoryImg} alt="" className="categoryImg" />
                        <h5>پیراهن</h5>
                        <p dir="rtl">۲۸ عدد</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            {/* <div className="item">
              <div className="info">
                <img src={categoryImg} alt="" className="categoryImg" />
                <h5>پیراهن</h5>
                <p dir="rtl">۲۸ عدد</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={categoryImg} alt="" className="categoryImg" />
                <h5>تی شرت</h5>
                <p dir="rtl">۲۸ عدد</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={categoryImg} alt="" className="categoryImg" />
                <h5>شلوار</h5>
                <p dir="rtl">۲۸ عدد</p>{" "}
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={categoryImg} alt="" className="categoryImg" />
                <h5>کفش</h5>
                <p dir="rtl">۲۸ عدد</p>{" "}
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={categoryImg} alt="" className="categoryImg" />
                <h5>کاپشن</h5>
                <p dir="rtl">۲۸ عدد</p>{" "}
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={categoryImg} alt="" className="categoryImg" />
                <h5>شلوارک</h5>
                <p dir="rtl">۲۸ عدد</p>{" "}
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={categoryImg} alt="" className="categoryImg" />
                <h5>تاب</h5>
                <p dir="rtl">۲۸ عدد</p>{" "}
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={categoryImg} alt="" className="categoryImg" />
                <h5>کفش</h5>
                <p dir="rtl">۲۸ عدد</p>{" "}
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={categoryImg} alt="" className="categoryImg" />
                <h5>کاپشن</h5>
                <p dir="rtl">۲۸ عدد</p>{" "}
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={categoryImg} alt="" className="categoryImg" />
                <h5>شلوارک</h5>
                <p dir="rtl">۲۸ عدد</p>{" "}
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={categoryImg} alt="" className="categoryImg" />
                <h5>تاب</h5>
                <p dir="rtl">۲۸ عدد</p>{" "}
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CatSlider;
