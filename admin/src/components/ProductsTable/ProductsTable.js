import MenuItem from "@mui/material/MenuItem";
import { CacheProvider } from "@emotion/react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import pImg from "../../assets/images/category-image.png";
import Pagination from "@mui/material/Pagination";
import { useContext, useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { Link } from "react-router-dom";
import { Button, Checkbox } from "@mui/material";

import "./ProductsTable.css";
import { MyContext } from "../../App";
import { deleteData, fetchDataFromApi } from "../../utils/api";
import { LazyLoadImage } from "react-lazy-load-image-component";

const theme = createTheme({ direction: "rtl" });
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ProductsTable() {
  const [showBy, setShowBy] = useState("");
  const [CatBy, setCatBy] = useState("");
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCategory, setTotalCategory] = useState(0);
  const [totalSubCategory, setTotalSubCategory] = useState(0);
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
      <div className="card shadow border-0 p-3 mt-4">
        <h3 className="hd">تمام محصولات</h3>
        <div className="row cardFilters mt-3">
          <div className="col-md-3">
            <h4>تعداد کالا</h4>
            <CacheProvider value={cacheRtl}>
              <ThemeProvider theme={theme}>
                <FormControl size="small" className="w-100">
                  <Select
                    value={showBy}
                    onChange={(e) => setShowBy(e.target.value)}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    labelId="demo-select-small-label"
                    className="w-100"
                  >
                    <MenuItem value="">
                      <em>انتخاب کنید</em>
                    </MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20 </MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                  </Select>
                </FormControl>
              </ThemeProvider>
            </CacheProvider>
          </div>
          <div className="col-md-3">
            <h4>دسته بندی با</h4>
            <CacheProvider value={cacheRtl}>
              <ThemeProvider theme={theme}>
                <FormControl size="small" className="w-100">
                  <Select
                    value={CatBy}
                    onChange={(e) => handleChangeCategory(e)}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    className="w-100"
                  >
                    <MenuItem value="">
                      <em value="all">همه</em>
                    </MenuItem>
                    {categoryData?.categoryList?.length !== 0 &&
                      categoryData?.categoryList?.map((cat, index) => {
                        return (
                          <MenuItem value={cat.id} key={index}>
                            {cat.name}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </ThemeProvider>
            </CacheProvider>
          </div>
        </div>

        <div className="table-responsive mt-3">
          <table className="table table-bordered v-align">
            <thead>
              <tr className="thead-styles">
                <th>عدد</th>
                <th>محصول</th>
                <th>دسته بندی</th>
                <th>زیر دسته بندی</th>
                <th>قیمت</th>
                <th>وزن</th>
                <th>موجودی</th>
                <th>امتیاز</th>
                <th>تعداد سفارش</th>
                <th>فروش</th>
                <th>عملیات ها</th>
              </tr>
            </thead>

            <tbody>
              {productData?.products?.length !== 0 &&
                productData?.products?.length !== undefined &&
                productData?.products?.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <Checkbox {...label} /> <span>{index + 1}</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center productBox">
                          <div
                            className="imgWrapper"
                            style={{ width: "50px", flex: "0 0 50px" }}
                          >
                            <div className="img card shadow m-0">
                              <LazyLoadImage
                                alt={"image"}
                                effect="blur"
                                className="w-100"
                                src={
                                  item?.images?.[0]
                                    ? extractImageUrl(item.images[0])
                                    : ""
                                }
                              />
                            </div>
                          </div>
                          <div className="info pe-3">
                            <h6>{item?.name}</h6>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="categoryBox">
                          {item?.category?.name}
                        </div>
                      </td>
                      <td>{item?.subCat}</td>
                      <td>
                        {item?.offerPrice ? (
                          <>
                            <del className="old">{item?.price}</del>
                            <span className="new text-danger">
                              {item?.offerPrice}
                            </span>
                          </>
                        ) : (
                          <span className="old">{item?.price}</span>
                        )}
                      </td>
                      <td>{item?.weight}</td>
                      <td>{item?.countInStock}</td>
                      <td>{item?.rating}</td>
                      <td>۱۲</td>
                      <td>۶۴,۰۰۰,۰۰۰</td>
                      <td>
                        <div className="actions d-flex align-items-center justify-content-evenly">
                          <Link to={`/product/details/${item?._id}`}>
                            <Button className="eye">
                              <FaEye />
                            </Button>
                          </Link>
                          <Link to={`/product/edit/${item?._id}`}>
                            <Button className="pencil">
                              <FaPencilAlt />
                            </Button>
                          </Link>

                          <Button
                            className="delete"
                            onClick={() => deleteProduct(item?.id)}
                          >
                            <MdDelete />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

          <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
              <div className="d-flex tableFooter">
                <p>
                  نتیجه <b>۱۲</b> از <b>۶۰</b> محصول
                </p>
                <Pagination
                  count={10}
                  color="primary"
                  className="pagination"
                  showFirstButton
                  showLastButton
                />
              </div>
            </ThemeProvider>
          </CacheProvider>
        </div>
      </div>
    </>
  );
}

export default ProductsTable;
