import "./home.css";

import Banners from "../../components/banners/banners";
import CatSlider from "../../components/catSlider/catSlider";
import HomeSlider from "../../components/mainSlider/slider";
import Footer from "../../components/footer/footer";
import DailyBestSells from "../../components/dailyBestSells/dailyBestSells";
import PopularProducts from "../../components/popularProducts/popularProducts";
import TopProductSection from "../../components/topProductSection/topProductSection";
import NewsLetterSectionWrapper from "../../components/newsLetterSectionWrapper/newsLetterSectionWrapper";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Banners />
      <PopularProducts />
      <DailyBestSells />
      <TopProductSection />
      <NewsLetterSectionWrapper />
      <Footer />
    </>
  );
};

export default Home;
