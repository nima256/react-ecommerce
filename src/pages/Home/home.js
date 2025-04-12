import Banners from "../../components/banners/banners";
import CatSlider from "../../components/catSlider/catSlider";
import HomeSlider from "./slider/slider";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Banners />
    </>
  );
};

export default Home;
