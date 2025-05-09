import "./dailyBestSells.css";

import Banner from "../../assets/images/category-image.png";
import Slider from "react-slick";
import Product from "../../components/product/product";

const DailyBestSells = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // fade: true,
    arrows: true,
    autoplay: 3000,
  };

  return (
    <section className="homeProducts homeProductsRow2 pt-0">
      <div className="container-fluid forPaddingLeft">
        <div className="d-flex align-items-center ">
          <h2 className="hd mb-0 mt-0">بهترین فروش روزانه</h2>
          <ul className="list list-inline mr-auto filterTab mb-0">
            <li className="list-inline-item">
              <a className="cursor transition">ویژه</a>
            </li>
            <li className="list-inline-item">
              <a className="cursor transition">پر طرفدار</a>
            </li>
            <li className="list-inline-item">
              <a className="cursor transition">جدید</a>
            </li>
          </ul>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-3 pl-5">
            <img
              src={Banner}
              alt="عکس بنر"
              className="w-100"
              style={{ background: "red" }}
            />
          </div>
          <div className="col-md-9 dailyPopularSells">
            <Slider {...settings} className="prodSlider">
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
      </div>
    </section>
  );
};

export default DailyBestSells;
