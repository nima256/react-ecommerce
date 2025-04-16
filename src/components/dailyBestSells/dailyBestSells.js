import "./dailyBestSells.css";

import Banner from "../../assets/images/category-image.png";
import Slider from "react-slick";
import Product from "../../components/product/product";

const DailyBestSells = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // fade: true,
    arrows: true,
    rtl: true,
    // autoplay: 3000,
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
        <div className="row dirRtl">
          <div className="col-md-3 pl-5">
            <img
              src={Banner}
              alt="عکس بنر"
              className="w-100"
              style={{ background: "red" }}
            />
          </div>
          <div className="col-md-9 dirRtl dailyPopularSells">
            <Slider {...settings} className="prodSlider">
              <div className="item">
                <Product tag="oneInStock" />
              </div>
              <div className="item">
                <Product tag="hot" />
              </div>
              <div className="item">
                <Product tag="new" />
              </div>
              <div className="item">
                <Product tag="best" />
              </div>
              <div className="item">
                <Product tag="new" />
              </div>
              <div className="item">
                <Product tag="hot" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyBestSells;
