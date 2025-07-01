import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./resposive.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext, useEffect, useState } from "react";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/ProductList/Products";
import ProductDetails from "./pages/Products/ProductDetails/ProductDetails";
import ProductUpload from "./pages/Products/ProductUpload/ProductUpload";
import Orders from "./pages/Orders/OrdersList/Orders";
import { fetchDataFromApi } from "./utils/api";
import OrderDetails from "./pages/Orders/OrdersDetails/OrderDetails";
import Categories from "./pages/Categories/CategoryList/Categories";
import LoadingBar from "react-top-loading-bar";
import AddCategory from "./pages/Categories/AddCategory/AddCategory";
import { Alert, Snackbar } from "@mui/material";
import EditCategory from "./pages/Categories/EditCategory/EditCategory";
import SubCategoryList from "./pages/Categories/SubCategoryList/SubCategoryList";
import AddSubCategory from "./pages/Categories/AddSubCategory/AddSubCategory";
import ProductEdit from "./pages/Products/ProductEdit/ProductEdit";

const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [themeMode, setThemeMode] = useState(true);
  const [windowWidth, setWindowsWidth] = useState(window.innerWidth);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [progress, setProgress] = useState(0);
  const [catData, setCatData] = useState([]);
  const [productData, setProductData] = useState([]);

  const [alertBox, setAlertBox] = useState({
    msg: "",
    error: false,
    open: false,
  });

  useEffect(() => {
    if (themeMode === true) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("themeMode", "light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
    }
  }, [themeMode]);

  useEffect(() => {
    const handleResize = () => {
      setWindowsWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    fetchCategory();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchCategory = () => {
    setProgress(30);
    fetchDataFromApi("/api/category").then((res) => {
      setCatData(res);
      setProgress(100);
    });
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowsWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    fetchProduct();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchProduct = () => {
    setProgress(30);
    fetchDataFromApi("/api/product").then((res) => {
      setProductData(res);
      setProgress(100);
    });
  };

  const openNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;

    setAlertBox((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLoginPage,
    setIsLoginPage,
    themeMode,
    setThemeMode,
    windowWidth,
    openNav,
    isOpenNav,
    setIsOpenNav,
    progress,
    setProgress,
    alertBox,
    setAlertBox,
    fetchCategory,
    catData,
    fetchProduct,
    productData,
  };

  useEffect(() => {}, [isToggleSidebar]);

  useEffect(() => {
    if (alertBox.open) {
      setShowAlert(true);
    } else {
      // Delay unmounting Alert to allow transition
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 300); // match MUI Snackbar's close animation duration

      return () => clearTimeout(timeout);
    }
  }, [alertBox.open]);

  const colorForLoadingBar = themeMode ? "black" : "white";

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <LoadingBar
          color={colorForLoadingBar}
          height={3}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          className="topLoadingBar"
        />

        <Snackbar
          open={alertBox.open}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          {showAlert && (
            <Alert
              onClose={handleClose}
              severity={alertBox.error ? "error" : "success"}
              variant="filled"
              sx={{ width: "100%" }}
            >
              {alertBox.msg}
            </Alert>
          )}
        </Snackbar>

        {isLoginPage !== true && <Header />}

        <div className="main d-flex">
          {isLoginPage !== true && (
            <>
              <div
                className={`sidebarOverlay d-none ${
                  isOpenNav === true && "open"
                }`}
                onClick={() => setIsOpenNav(false)}
              ></div>
              <div
                className={`sidebarWrapper 
                ${isToggleSidebar === true ? "toggle" : ""} 
                ${isOpenNav === true ? "open" : ""}
              `}
              >
                <Sidebar />
              </div>
            </>
          )}

          <div
            className={`content ${isLoginPage === true && "full"} ${
              isToggleSidebar === true ? "toggle" : ""
            }`}
          >
            <Routes>
              <Route path={"/"} exact={true} element={<Dashboard />} />
              <Route path={"/dashboard"} exact={true} element={<Dashboard />} />
              <Route path={"/login"} exact={true} element={<Login />} />
              <Route path={"/products"} exact={true} element={<Products />} />
              <Route
                path={"/product/detail"}
                exact={true}
                element={<ProductDetails />}
              />
              <Route
                path={"/product/upload"}
                exact={true}
                element={<ProductUpload />}
              />
              <Route
                path={"/product/edit/:id"}
                exact={true}
                element={<ProductEdit />}
              />
              <Route path={"/orders"} exact={true} element={<Orders />} />
              <Route
                path={"/orders/detail"}
                exact={true}
                element={<OrderDetails />}
              />
              <Route
                path={"/categories"}
                exact={true}
                element={<Categories />}
              />
              <Route
                path={"/categories/add"}
                exact={true}
                element={<AddCategory />}
              />
              <Route
                path={"/categories/edit/:id"}
                exact={true}
                element={<EditCategory />}
              />
              <Route
                path={"/subCategories"}
                exact={true}
                element={<SubCategoryList />}
              />
              <Route
                path={"/subCategories/add"}
                exact={true}
                element={<AddSubCategory />}
              />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
