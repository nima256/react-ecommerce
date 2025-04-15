import "./home.css";
import Banners from "../../components/banners/banners";
import CatSlider from "../../components/catSlider/catSlider";
import HomeSlider from "../../components/slider/slider";
import Product from "../../components/product/product";
import Banner from "../../assets/images/category-image.png";

import Slider from "react-slick";
import Slide1 from "../../assets/images/category-image.png";
import TopProducts from "../../components/topProducts/topProducts";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // fade: true,
    arrows: true,
    rtl: true,
    autoplay: 3000,
  };
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Banners />

      <section className="homeProducts">
        <div className="container-fluid forPaddingLeft">
          <div className="d-flex align-items-center ">
            <h2 className="hd mb-0 mt-0">محصولات پرطرفدار</h2>
            <ul className="list list-inline mr-auto filterTab mb-0">
              <li className="list-inline-item">
                <a className="cursor transition">همه</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor transition">شلوار</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor transition">پیراهن</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor transition">شلوارک</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor transition">تی شرت</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor transition">کفش</a>
              </li>
            </ul>
          </div>

          <div className="productRow">
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
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="new" />
            </div>
          </div>
        </div>
      </section>

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
            <div className="col-md-9 dirRtl">
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

      <section className="topProductSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProducts title="پرفروش ترین ها" />
            </div>
            <div className="col">
              <TopProducts title="کالا های پرطرفدار" />
            </div>
            <div className="col">
              <TopProducts title="اخیرا اضافه شده" />
            </div>
            <div className="col">
              <TopProducts title="بالاترین امتیاز" />
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
