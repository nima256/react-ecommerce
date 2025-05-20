import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { Button } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import { LineChart } from "@mui/x-charts/LineChart";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { CacheProvider } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

import "./Dashboard.css";
import DashboardBox from "../Dashboard/components/DashboardBox";
import ProductsTable from "../../components/ProductsTable/ProductsTable";

const ITEM_HEIGHT = 48;
const theme = createTheme({ direction: "rtl" });
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function Dashboard() {
  const [anchorEl, setAnchorEl] = useState(null);

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
