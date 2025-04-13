import "./home.css";
import Banners from "../../components/banners/banners";
import CatSlider from "../../components/catSlider/catSlider";
import HomeSlider from "../../components/slider/slider";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Banners />

      <section className="homeProducts">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">محصولات پرطرفدار</h2>
            <ul className="list list-inline mr-auto filterTab">
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
        </div>
      </section>
    </>
  );
};

export default Home;
