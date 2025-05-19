import MenuItem from "@mui/material/MenuItem";
import { CacheProvider } from "@emotion/react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import pImg from "../../assets/images/category-image.png";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import "./ProductsTable.css";

const theme = createTheme({ direction: "rtl" });
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function ProductsTable() {
  const [showBy, setShowBy] = useState("");

  const [CatBy, setCatBy] = useState("");
  return (
    <>
      <div className="card shadow border-0 p-3 mt-4">
        <h3 className="hd">پرفروش ترین کالا ها</h3>
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
                      <em>هیچی</em>
                    </MenuItem>
                    <MenuItem value={10}>سلام</MenuItem>
                    <MenuItem value={20}>سلام ۲ </MenuItem>
                    <MenuItem value={30}>سلام ۳</MenuItem>
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
                    onChange={(e) => setCatBy(e.target.value)}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    className="w-100"
                  >
                    <MenuItem value="">
                      <em>هیچی</em>
                    </MenuItem>
                    <MenuItem value={10}>سلام</MenuItem>
                    <MenuItem value={20}>سلام ۲ </MenuItem>
                    <MenuItem value={30}>سلام ۳</MenuItem>
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
                <th>برند</th>
                <th>قیمت</th>
                <th>موجودی</th>
                <th>امتیاز</th>
                <th>تعداد سفارش</th>
                <th>فروش</th>
                <th>عملیات ها</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#۱</td>
                <td style={{ width: "220px" }}>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src={pImg} alt="" className="w-100" />
                      </div>
                    </div>
                    <div className="info">
                      <h6>لپ تاپ ایسوس مدل سلام خدافز</h6>
                      <p>
                        تی سیتس تی شمسیب تمنشسیب تشسیتمن شسیت تمن شسیتمن منت
                        شسیتنم منستش منتس
                      </p>
                    </div>
                  </div>
                </td>
                <td>لپ تاپ</td>
                <td>ایسوس</td>
                <td>
                  <del className="old">۳۲,۰۰۰,۰۰۰</del>
                  <span className="new text-danger">۳۲,۰۰۰,۰۰۰</span>
                </td>
                <td>۱۲</td>
                <td>(۱۶) ۴.۹</td>
                <td>۱۲</td>
                <td>۶۴,۰۰۰,۰۰۰</td>
                <td>
                  <div className="actions d-flex align-items-center justify-content-evenly">
                    <Link to={"/product/details"}>
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                    </Link>
                    <Button className="success" color="success">
                      <FaPencilAlt />
                    </Button>
                    <Button className="error">
                      <MdDelete color="error" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#۱</td>
                <td style={{ width: "220px" }}>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src={pImg} alt="" className="w-100" />
                      </div>
                    </div>
                    <div className="info">
                      <h6>لپ تاپ ایسوس مدل سلام خدافز</h6>
                      <p>
                        تی سیتس تی شمسیب تمنشسیب تشسیتمن شسیت تمن شسیتمن منت
                        شسیتنم منستش منتس
                      </p>
                    </div>
                  </div>
                </td>
                <td>لپ تاپ</td>
                <td>ایسوس</td>
                <td>
                  <del className="old">۳۲,۰۰۰,۰۰۰</del>
                  <span className="new text-danger">۳۲,۰۰۰,۰۰۰</span>
                </td>
                <td>۱۲</td>
                <td>(۱۶) ۴.۹</td>
                <td>۱۲</td>
                <td>۶۴,۰۰۰,۰۰۰</td>
                <td>
                  <div className="actions d-flex align-items-center justify-content-evenly">
                    <Link to={"/product/details"}>
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                    </Link>
                    <Button className="success" color="success">
                      <FaPencilAlt />
                    </Button>
                    <Button className="error">
                      <MdDelete color="error" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#۱</td>
                <td style={{ width: "220px" }}>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src={pImg} alt="" className="w-100" />
                      </div>
                    </div>
                    <div className="info">
                      <h6>لپ تاپ ایسوس مدل سلام خدافز</h6>
                      <p>
                        تی سیتس تی شمسیب تمنشسیب تشسیتمن شسیت تمن شسیتمن منت
                        شسیتنم منستش منتس
                      </p>
                    </div>
                  </div>
                </td>
                <td>لپ تاپ</td>
                <td>ایسوس</td>
                <td>
                  <del className="old">۳۲,۰۰۰,۰۰۰</del>
                  <span className="new text-danger">۳۲,۰۰۰,۰۰۰</span>
                </td>
                <td>۱۲</td>
                <td>(۱۶) ۴.۹</td>
                <td>۱۲</td>
                <td>۶۴,۰۰۰,۰۰۰</td>
                <td>
                  <div className="actions d-flex align-items-center justify-content-evenly">
                    <Link to={"/product/details"}>
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                    </Link>
                    <Button className="success" color="success">
                      <FaPencilAlt />
                    </Button>
                    <Button className="error">
                      <MdDelete color="error" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#۱</td>
                <td style={{ width: "220px" }}>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src={pImg} alt="" className="w-100" />
                      </div>
                    </div>
                    <div className="info">
                      <h6>لپ تاپ ایسوس مدل سلام خدافز</h6>
                      <p>
                        تی سیتس تی شمسیب تمنشسیب تشسیتمن شسیت تمن شسیتمن منت
                        شسیتنم منستش منتس
                      </p>
                    </div>
                  </div>
                </td>
                <td>لپ تاپ</td>
                <td>ایسوس</td>
                <td>
                  <del className="old">۳۲,۰۰۰,۰۰۰</del>
                  <span className="new text-danger">۳۲,۰۰۰,۰۰۰</span>
                </td>
                <td>۱۲</td>
                <td>(۱۶) ۴.۹</td>
                <td>۱۲</td>
                <td>۶۴,۰۰۰,۰۰۰</td>
                <td>
                  <div className="actions d-flex align-items-center justify-content-evenly">
                    <Link to={"/product/details"}>
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                    </Link>
                    <Button className="success" color="success">
                      <FaPencilAlt />
                    </Button>
                    <Button className="error">
                      <MdDelete color="error" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#۱</td>
                <td style={{ width: "220px" }}>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src={pImg} alt="" className="w-100" />
                      </div>
                    </div>
                    <div className="info">
                      <h6>لپ تاپ ایسوس مدل سلام خدافز</h6>
                      <p>
                        تی سیتس تی شمسیب تمنشسیب تشسیتمن شسیت تمن شسیتمن منت
                        شسیتنم منستش منتس
                      </p>
                    </div>
                  </div>
                </td>
                <td>لپ تاپ</td>
                <td>ایسوس</td>
                <td>
                  <del className="old">۳۲,۰۰۰,۰۰۰</del>
                  <span className="new text-danger">۳۲,۰۰۰,۰۰۰</span>
                </td>
                <td>۱۲</td>
                <td>(۱۶) ۴.۹</td>
                <td>۱۲</td>
                <td>۶۴,۰۰۰,۰۰۰</td>
                <td>
                  <div className="actions d-flex align-items-center justify-content-evenly">
                    <Link to={"/product/details"}>
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                    </Link>
                    <Button className="success" color="success">
                      <FaPencilAlt />
                    </Button>
                    <Button className="error">
                      <MdDelete color="error" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#۱</td>
                <td style={{ width: "220px" }}>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src={pImg} alt="" className="w-100" />
                      </div>
                    </div>
                    <div className="info">
                      <h6>لپ تاپ ایسوس مدل سلام خدافز</h6>
                      <p>
                        تی سیتس تی شمسیب تمنشسیب تشسیتمن شسیت تمن شسیتمن منت
                        شسیتنم منستش منتس
                      </p>
                    </div>
                  </div>
                </td>
                <td>لپ تاپ</td>
                <td>ایسوس</td>
                <td>
                  <del className="old">۳۲,۰۰۰,۰۰۰</del>
                  <span className="new text-danger">۳۲,۰۰۰,۰۰۰</span>
                </td>
                <td>۱۲</td>
                <td>(۱۶) ۴.۹</td>
                <td>۱۲</td>
                <td>۶۴,۰۰۰,۰۰۰</td>
                <td>
                  <div className="actions d-flex align-items-center justify-content-evenly">
                    <Link to={"/product/details"}>
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                    </Link>
                    <Button className="success" color="success">
                      <FaPencilAlt />
                    </Button>
                    <Button className="error">
                      <MdDelete color="error" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#۱</td>
                <td style={{ width: "220px" }}>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src={pImg} alt="" className="w-100" />
                      </div>
                    </div>
                    <div className="info">
                      <h6>لپ تاپ ایسوس مدل سلام خدافز</h6>
                      <p>
                        تی سیتس تی شمسیب تمنشسیب تشسیتمن شسیت تمن شسیتمن منت
                        شسیتنم منستش منتس
                      </p>
                    </div>
                  </div>
                </td>
                <td>لپ تاپ</td>
                <td>ایسوس</td>
                <td>
                  <del className="old">۳۲,۰۰۰,۰۰۰</del>
                  <span className="new text-danger">۳۲,۰۰۰,۰۰۰</span>
                </td>
                <td>۱۲</td>
                <td>(۱۶) ۴.۹</td>
                <td>۱۲</td>
                <td>۶۴,۰۰۰,۰۰۰</td>
                <td>
                  <div className="actions d-flex align-items-center justify-content-evenly">
                    <Link to={"/product/details"}>
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                    </Link>
                    <Button className="success" color="success">
                      <FaPencilAlt />
                    </Button>
                    <Button className="error">
                      <MdDelete color="error" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#۱</td>
                <td style={{ width: "220px" }}>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src={pImg} alt="" className="w-100" />
                      </div>
                    </div>
                    <div className="info">
                      <h6>لپ تاپ ایسوس مدل سلام خدافز</h6>
                      <p>
                        تی سیتس تی شمسیب تمنشسیب تشسیتمن شسیت تمن شسیتمن منت
                        شسیتنم منستش منتس
                      </p>
                    </div>
                  </div>
                </td>
                <td>لپ تاپ</td>
                <td>ایسوس</td>
                <td>
                  <del className="old">۳۲,۰۰۰,۰۰۰</del>
                  <span className="new text-danger">۳۲,۰۰۰,۰۰۰</span>
                </td>
                <td>۱۲</td>
                <td>(۱۶) ۴.۹</td>
                <td>۱۲</td>
                <td>۶۴,۰۰۰,۰۰۰</td>
                <td>
                  <div className="actions d-flex align-items-center justify-content-evenly">
                    <Link to={"/product/details"}>
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                    </Link>
                    <Button className="success" color="success">
                      <FaPencilAlt />
                    </Button>
                    <Button className="error">
                      <MdDelete color="error" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#۱</td>
                <td style={{ width: "220px" }}>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src={pImg} alt="" className="w-100" />
                      </div>
                    </div>
                    <div className="info">
                      <h6>لپ تاپ ایسوس مدل سلام خدافز</h6>
                      <p>
                        تی سیتس تی شمسیب تمنشسیب تشسیتمن شسیت تمن شسیتمن منت
                        شسیتنم منستش منتس
                      </p>
                    </div>
                  </div>
                </td>
                <td>لپ تاپ</td>
                <td>ایسوس</td>
                <td>
                  <del className="old">۳۲,۰۰۰,۰۰۰</del>
                  <span className="new text-danger">۳۲,۰۰۰,۰۰۰</span>
                </td>
                <td>۱۲</td>
                <td>(۱۶) ۴.۹</td>
                <td>۱۲</td>
                <td>۶۴,۰۰۰,۰۰۰</td>
                <td>
                  <div className="actions d-flex align-items-center justify-content-evenly">
                    <Link to={"/product/details"}>
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                    </Link>
                    <Button className="success" color="success">
                      <FaPencilAlt />
                    </Button>
                    <Button className="error">
                      <MdDelete color="error" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#۱</td>
                <td style={{ width: "220px" }}>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img src={pImg} alt="" className="w-100" />
                      </div>
                    </div>
                    <div className="info">
                      <h6>لپ تاپ ایسوس مدل سلام خدافز</h6>
                      <p>
                        تی سیتس تی شمسیب تمنشسیب تشسیتمن شسیت تمن شسیتمن منت
                        شسیتنم منستش منتس
                      </p>
                    </div>
                  </div>
                </td>
                <td>لپ تاپ</td>
                <td>ایسوس</td>
                <td>
                  <del className="old">۳۲,۰۰۰,۰۰۰</del>
                  <span className="new text-danger">۳۲,۰۰۰,۰۰۰</span>
                </td>
                <td>۱۲</td>
                <td>(۱۶) ۴.۹</td>
                <td>۱۲</td>
                <td>۶۴,۰۰۰,۰۰۰</td>
                <td>
                  <div className="actions d-flex align-items-center justify-content-evenly">
                    <Link to={"/product/details"}>
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                    </Link>
                    <Button className="success" color="success">
                      <FaPencilAlt />
                    </Button>
                    <Button className="error">
                      <MdDelete color="error" />
                    </Button>
                  </div>
                </td>
              </tr>
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
