import "./catSlider.css";
import Slider from "react-slick";
import { useState } from "react";

import Case from "../../assets/images/catSlider/computer-case.svg";
import Motherboard from "../../assets/images/catSlider/motherboard.svg";
import Cpu from "../../assets/images/catSlider/cpu.svg";
import Gpu from "../../assets/images/catSlider/gpu.svg";
import Ram from "../../assets/images/catSlider/ram.svg";
import Power from "../../assets/images/catSlider/power.svg";
import Monitor from "../../assets/images/catSlider/monitor.svg";
import Laptop from "../../assets/images/catSlider/laptop.svg";
import Keyboard from "../../assets/images/catSlider/keyboard.svg";
import Mouse from "../../assets/images/catSlider/mouse.svg";
import Headset from "../../assets/images/catSlider/headset.svg";
import Microphone from "../../assets/images/catSlider/microphone.svg";
import Controller from "../../assets/images/catSlider/controller.svg";
import Speaker from "../../assets/images/catSlider/speaker.svg";
import Chair from "../../assets/images/catSlider/chair.svg";
import Desk from "../../assets/images/catSlider/desk.svg";

const CatSlider = () => {
  const [categories, setCategories] = useState([
    { title: "کیس کامپیوتر", bg: "#fffceb", img: Case },
    { title: "مادربرد", bg: "#ecffec", img: Motherboard },
    { title: "سی پی یو", bg: "#feefea", img: Cpu },
    { title: "کارت گرافیک", bg: "#fff3eb", img: Gpu },
    { title: "رم", bg: "#fff3ff", img: Ram },
    { title: "پاور", bg: "#f2fce4", img: Power },
    { title: "مانیتور", bg: "#feefea", img: Monitor },
    { title: "لپ تاپ", bg: "#fffceb", img: Laptop },
    { title: "کیبورد گیمینگ", bg: "#feefea", img: Keyboard },
    { title: "ماوس گیمینگ", bg: "#ecffec", img: Mouse },
    { title: "هدست گیمینگ", bg: "#fffceb", img: Headset },
    { title: "میکروفن گیمینگ", bg: "#ecffec", img: Microphone },
    { title: "دسته بازی گیمینگ", bg: "#feefea", img: Controller },
    { title: "اسپیکر گیمینگ", bg: "#fff3eb", img: Speaker },
    { title: "صندلی گیمینمگ", bg: "#ecffec", img: Chair },
    { title: "میز گیمینگ", bg: "#fff3ff", img: Desk },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: true,
    autoplay: 2000,
  };

  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid cat-container">
          <h2 className="hd">دسته بندی ها پر طرفدار</h2>
          <Slider {...settings} className="cat_slider_main">
            {categories.length !== 0 &&
              categories.map((item, index) => {
                return (
                  <div>
                    <div className="item" style={{ background: item.bg }}>
                      <div className="info">
                        <img src={item.img} alt="" className="categoryImg" />
                        <h5>{item.title}</h5>
                        <p dir="rtl">۲۸ عدد</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CatSlider;
