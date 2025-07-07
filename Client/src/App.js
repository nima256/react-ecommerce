import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/home";
import Shop from "./pages/Shop/shop";
import CategoryListing from "./pages/CategoryListing/CategoryListing";
import Footer from "./components/footer/footer";
import NotFound from "./pages/NotFound/notFound";
import ProductDetails from "./pages/ProductDetails/productDetails";
import Cart from "./pages/cart/cart";
import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils/api";

const MyContext = createContext();

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchDataFromApi("/api/category").then((res) => {
      setCategories(res);
    });
  }, []);

  const values = {
    categories,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {categories?.categoryList?.length !== 0 && <Header />}

        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/product/category/:id" element={<CategoryListing />} />
          <Route exact={true} path="/product/subCat/:id" element={<CategoryListing />} />
          <Route exact={true} path="/product/:id" element={<Home />} />
          <Route exact={true} path="/shop" element={<Shop />} />
          <Route
            exact={true}
            path="/product/details"
            element={<ProductDetails />}
          />
          <Route exact={true} path="/cart" element={<Cart />} />
          <Route exact={true} path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
