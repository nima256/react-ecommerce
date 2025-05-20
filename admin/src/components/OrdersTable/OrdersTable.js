import MenuItem from "@mui/material/MenuItem";
import { CacheProvider } from "@emotion/react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaEye } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
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

import "./OrdersTable.css";

const theme = createTheme({ direction: "rtl" });
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function OrdersTable() {
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
                <th>شماره سفارش</th>
                <th>نام و نام خانوادگی</th>
                <th>تعداد محصول</th>
                <th>مبلغ</th>
                <th>وضعیت</th>
                <th>تاریخ</th>
                <th>عملیات ها</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#۱</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="info">
                      <h6>اکبر پلاتینی</h6>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="categoryBox">۲ عدد</div>
                </td>
                <td>
                  <span className="new">۳۲,۰۰۰,۰۰۰</span>
                </td>
                <td>
                  <span className="orderStatusForTable orderStatus pendingOrder">
                    در انتظار تایید
                  </span>
                </td>
                <td>۱۴۰۴/۰۵/۲۱</td>
                <td>
                  <div className="actions d-flex align-items-center justify-content-evenly">
                    <Link to={"/product/details"}>
                      <Button className="eye">
                        <FaEye />
                      </Button>
                    </Link>
                    <Button className="download">
                      <FaDownload />
                    </Button>
                    <Button className="delete">
                      <MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#۱</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="info">
                      <h6>اکبر پلاتینی</h6>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="categoryBox">۲ عدد</div>
                </td>
                <td>
                  <span className="new">۳۲,۰۰۰,۰۰۰</span>
                </td>
                <td>
                  <span className="orderStatusForTable shippingOrder">
                    در حال ارسال
                  </span>
                </td>
                <td>۱۴۰۴/۰۵/۲۱</td>
                <td>
                  <div className="actions d-flex align-items-center justify-content-evenly">
                    <Link to={"/product/details"}>
                      <Button className="eye">
                        <FaEye />
                      </Button>
                    </Link>
                    <Button className="download">
                      <FaDownload />
                    </Button>
                    <Button className="delete">
                      <MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#۱</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="info">
                      <h6>اکبر پلاتینی</h6>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="categoryBox">۲ عدد</div>
                </td>
                <td>
                  <span className="new">۳۲,۰۰۰,۰۰۰</span>
                </td>
                <td>
                  <span className="orderStatusForTable cancelledOrder">لغو شده</span>
                </td>
                <td>۱۴۰۴/۰۵/۲۱</td>
                <td>
                  <div className="actions d-flex align-items-center justify-content-evenly">
                    <Link to={"/product/details"}>
                      <Button className="eye">
                        <FaEye />
                      </Button>
                    </Link>
                    <Button className="download">
                      <FaDownload />
                    </Button>
                    <Button className="delete">
                      <MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#۱</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="info">
                      <h6>اکبر پلاتینی</h6>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="categoryBox">۲ عدد</div>
                </td>
                <td>
                  <span className="new">۳۲,۰۰۰,۰۰۰</span>
                </td>
                <td>
                  <span className="orderStatusForTable recievedOrder">
                    تکمیل شده
                  </span>
                </td>
                <td>۱۴۰۴/۰۵/۲۱</td>
                <td>
                  <div className="actions d-flex align-items-center justify-content-evenly">
                    <Link to={"/product/details"}>
                      <Button className="eye">
                        <FaEye />
                      </Button>
                    </Link>
                    <Button className="download">
                      <FaDownload />
                    </Button>
                    <Button className="delete">
                      <MdDelete />
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

export default OrdersTable;
