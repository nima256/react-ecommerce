import "./dailyBestSells.css";

import Banner from "../../assets/images/category-image.png";
import Slider from "react-slick";
import Product from "../../components/product/product";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/api";

const DailyBestSells = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [homeSlider, setHomeSlider] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: 2000,
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchDataFromApi(`/api/product/featured`).then((res) => {
      setFeaturedProducts(res);
    });

    fetchDataFromApi("/api/homeBanner").then((res) => {
      setHomeSlider(res);
    });
  }, []);

  return (
    <section className="homeProducts homeProductsRow2 pt-0">
      <div className="container-fluid forPaddingLeft">
        <div className="d-flex align-items-center ">
          <h2 className="hd mb-0 mt-0">محصولات ویژه</h2>
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
              {featuredProducts?.length !== 0 &&
                featuredProducts?.map((item, index) => {
                  return (
                    <div className="item" key={index}>
                      <Product data={item} />
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyBestSells;
