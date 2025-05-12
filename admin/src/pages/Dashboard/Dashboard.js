import DashboardBox from "./components/DashboardBox";
import "./Dashboard.css";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { Button } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { LineChart } from "@mui/x-charts/LineChart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import pImg from "../../assets/images/category-image.png";
import Pagination from "@mui/material/Pagination";

const theme = createTheme({ direction: "rtl" });

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const ITEM_HEIGHT = 48;

function Dashboard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState("");
  const [CatBy, setCatBy] = useState("");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                color={["#1da256", "#48d483"]}
                icon={<FaUserCircle />}
                grow={true}
              />
              <DashboardBox
                color={["#c012e2", "#eb64fe"]}
                icon={<FaShoppingCart />}
              />
              <DashboardBox
                color={["#2c78e5", "#60aff5"]}
                icon={<MdShoppingBag />}
              />
              <DashboardBox
                color={["#e1950e", "#f3cd29"]}
                icon={<GiStarsStack />}
              />
            </div>
          </div>

          <div className="col-md-4 pe-0">
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

              <h3 className="text-white fw-bolder mt-3">
                ۱۲۴,۳۱۲,۶۴۲
              </h3>
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
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
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
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
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
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
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
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
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
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
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
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
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
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
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
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
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
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
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
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
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
                  <p>نتیجه <b>۱۲</b> از <b>۶۰</b> محصول</p>
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
      </div>
    </>
  );
}

export default Dashboard;
