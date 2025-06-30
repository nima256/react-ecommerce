import "./popularProducts.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Product from "../../components/product/product";
import { MyContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import { fetchDataFromApi } from "../../utils/api";

const theme = createTheme({ direction: "rtl" });
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const PopularProducts = () => {
  const context = useContext(MyContext);
  const [value, setValue] = useState(0);
  const [selectedCat, setSelectedCat] = useState();
  const [categories, setCategories] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (context.categories?.categoryList?.length > 0) {
      setCategories(context.categories);
      setSelectedCat(context.categories?.categoryList[0]?.id);
    }
  }, [context.categories]);

  useEffect(() => {
    if (selectedCat) {
      setIsLoading(true);
      fetchDataFromApi(
        `/api/product?catId=${selectedCat}&page=1&perPage=10`
      ).then((res) => {
        setFilterData(res.products);
        setIsLoading(false);
      });
    }
  }, [selectedCat]);

  const filterProducts = (id) => {
    setIsLoading(true);
    fetchDataFromApi(`/api/product?catId=${id}&page=1&perPage=10`).then(
      (res) => {
        setFilterData(res.products);
        setIsLoading(false);
      }
    );
  };

  return (
    <section className="homeProducts">
      <div className="container-fluid forPaddingLeft">
        <div className="d-flex align-items-center ">
          <h2 className="hd mb-0 mt-0">محصولات پرطرفدار</h2>
          <div className="me-auto filters_Products w-50">
            {context.categories?.categoryList?.length > 0 && (
              <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                  >
                    {context.categories?.categoryList?.map((cat) => {
                      return (
                        <Tab
                          key={cat.id}
                          label={cat?.name}
                          onClick={() => filterProducts(cat?.id)}
                        />
                      );
                    })}
                  </Tabs>
                </ThemeProvider>
              </CacheProvider>
            )}
          </div>
        </div>

        <div className="productRow">
          {filterData?.length !== 0 &&
            filterData?.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <Product tag="oneInStock" data={item} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
