import "./home.css";

import Poster from "../../components/poster/poster";
import CatSlider from "../../components/catSlider/catSlider";
import HomeSlider from "../../components/mainSlider/slider";
import DailyBestSells from "../../components/dailyBestSells/dailyBestSells";
import PopularProducts from "../../components/popularProducts/popularProducts";
import TopProductSection from "../../components/topProductSection/topProductSection";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const context = useContext(MyContext);

  useEffect(() => {
    context.categories?.categoryList?.length > 0 &&
      setCategories(context.categories);
  }, [context.categories]);

  return (
    <>
      <HomeSlider />
      {context.categories?.categoryList?.length > 0 && (
        <CatSlider data={context.categories?.categoryList} />
      )}
      <Poster />
      <PopularProducts />
      <DailyBestSells />
      <TopProductSection />
    </>
  );
};

export default Home;
