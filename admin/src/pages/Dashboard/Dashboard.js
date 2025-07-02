import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { Button } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import { LineChart } from "@mui/x-charts/LineChart";
import { useContext, useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { CacheProvider } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

import "./Dashboard.css";
import DashboardBox from "../Dashboard/components/DashboardBox";
import { MyContext } from "../../App";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import { deleteData, fetchDataFromApi } from "../../utils/api";

const ITEM_HEIGHT = 48;
const theme = createTheme({ direction: "rtl" });
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function Dashboard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productData, setProductData] = useState([]);
  const [showBy, setShowBy] = useState("");
  const [CatBy, setCatBy] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCategory, setTotalCategory] = useState(0);
  const [totalSubCategory, setTotalSubCategory] = useState(0);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const context = useContext(MyContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    context.setProgress(40);
    fetchDataFromApi("/api/product?page=1&perPage=8").then((res) => {
      setProductData(res);
      context.setProgress(100);
    });

    fetchDataFromApi("/api/category").then((res) => {
      setCategoryData(res);
    });

    fetchDataFromApi("/api/products/get/count").then((res) => {
      setTotalProducts(res.productsCount);
    });
    fetchDataFromApi("/api/category/get/count").then((res) => {
      setTotalCategory(res.categoryCount);
    });
    fetchDataFromApi("/api/category/subCat/get/count").then((res) => {
      setTotalSubCategory(res.subCategoryCount);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteProduct = (id) => {
    context.setProgress(30);
    deleteData(`/api/product/${id}`).then((res) => {
      context.setProgress(100);
      context.setAlertBox({
        open: true,
        error: false,
        msg: "محصول با موفقیت حذف شد",
      });
      fetchDataFromApi(`/api/product?page=${page}&perPage=8`).then((res) => {
        setProductData(res);
      });
      context.fetchCategory();
    });
  };

  const handleChange = (event, value) => {
    context.setProgress(40);
    setPage(value);
    fetchDataFromApi(`/api/product?page=${value}&perPage=8`).then((res) => {
      setProductData(res);
      context.setProgress(100);
      window.scrollTo({
        top: 200,
        behavior: "smooth",
      });
    });
  };

  const showPerPage = (e) => {
    setShowBy(e.target.value);
    context.setProgress(40);
    fetchDataFromApi(`/api/product/page=${1}&perPage=${e.target.value}`).then(
      (res) => {
        setProductData(res);
        context.setProgress(100);
      }
    );
  };

  const handleChangeCategory = (event) => {
    console.log(event.target.value);
    if (event.target.value !== "") {
      setCatBy(event.target.value);
      fetchDataFromApi(`/api/product?category=${event.target.value}`).then(
        (res) => {
          setProductData(res);
          context.setProgress(100);
        }
      );
    }
    if (event.target.value === "") {
      setCatBy(event.target.value);
      fetchDataFromApi(`/api/product?page=${1}&perPage=${8}`).then((res) => {
        setProductData(res);
        context.setProgress(100);
      });
    }
  };

  function extractImageUrl(str) {
    if (!str || typeof str !== "string") return null;

    const match = str.match(/url:\s*'([^']+)'/); // extract value between url: '...'
    return match ? match[1] : null;
  }

  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                title="تمام کاربران"
                num="۵۴"
                color={["#1da256", "#48d483"]}
                icon={<FaUserCircle />}
                grow={true}
              />
              <DashboardBox
                title="تمام سفارشات"
                num="۱۱۲"
                color={["#c012e2", "#eb64fe"]}
                icon={<FaShoppingCart />}
              />
              <DashboardBox
                title="تمام محصولات"
                num="۶۴۲"
                color={["#2c78e5", "#60aff5"]}
                icon={<MdShoppingBag />}
              />
              <DashboardBox
                title="تمام نظرات"
                num="۵"
                color={["#e1950e", "#f3cd29"]}
                icon={<GiStarsStack />}
                grow={true}
              />
            </div>
          </div>

          <div className="col-md-4 pe-0 topPart2">
            <div className="box graphBox">
              <div className="d-flex align-items-center bottomEle">
                <h4 className="text-white mb-0 mt-0">فروش کل</h4>
                <div className="me-auto">
                  <Button className="me-auto toggleIcon" onClick={handleClick}>
                    <BsThreeDotsVertical />
                  </Button>
                  <Menu
                    className="dropdown_menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <IoTimeOutline />
                      روز گذشته
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoTimeOutline />
                      هفته گذشته
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoTimeOutline />
                      ماه گذشته
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoTimeOutline />
                      سال گذشته
                    </MenuItem>
                  </Menu>
                </div>
              </div>

              <h3 className="text-white fw-bolder mt-3">۱۲۴,۳۱۲,۶۴۲</h3>
              <p>۱۱۴,۴۱۲,۱۳۲ در ماه گذشته</p>
              <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                  <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                      {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                      },
                    ]}
                    height={200}
                  />
                </ThemeProvider>
              </CacheProvider>
            </div>
          </div>
        </div>
        <ProductsTable />
      </div>
    </>
  );
}

export default Dashboard;
