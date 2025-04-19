import { Link } from "react-router-dom";
import "./shop.css";
import Sidebar from "../../components/sidebar/sidebar";

import { ThemeProvider } from "@mui/material/styles";
import { cacheRtl, theme } from "./rtlTheme";
import { CacheProvider } from "@emotion/react";

const Shop = () => {
  return (
    <>
      <section className="shoppingPage">
        <div className="container-fluid">
          <div className="breadcrumb flex-column">
            <h1>سلام</h1>
            <ul className="list list-inline mb-0">
              <li className="list-inline-item">
                <Link to={"/"}>خانه</Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>فروشگاه</Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>لپ تاپ</Link>
              </li>
            </ul>
          </div>

          <div className="shoppingData">
            <div className="row">
              <div className="col-md-3 sidebarWrapper">
                <CacheProvider value={cacheRtl}>
                  <ThemeProvider theme={theme}>
                    <div dir="rtl">
                      <Sidebar />
                    </div>
                  </ThemeProvider>
                </CacheProvider>
              </div>

              <div className="col-md-9 shoppingDataRightContent"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
