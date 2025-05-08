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

import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import { dataset } from "./GDPperCapita";

const ITEM_HEIGHT = 48;

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

              <h3 className="text-white font-weight-bolder mt-3">
                ۱۲۴,۳۱۲,۶۴۲
              </h3>
              <p>۱۱۴,۴۱۲,۱۳۲ در ماه گذشته</p>
              <LineChart
                dataset={dataset}
                sx={{
                  [`& .${lineElementClasses.root}`]: {
                    strokeDasharray: "10 5",
                    strokeWidth: 4,
                  },
                  "& .MuiAreaElement-series-Germany": {
                    fill: "url('#myGradient')",
                    filter: "none", // Remove the default filtering
                  },
                }}
                xAxis={[
                  {
                    id: "Years",
                    dataKey: "date",
                    scaleType: "time",
                    min: new Date(1990, 0, 1),
                    max: new Date(2018, 0, 1),
                    valueFormatter: (date) => date.getFullYear().toString(),
                  },
                ]}
                yAxis={[
                  {
                    width: 40,
                  },
                ]}
                series={[
                  {
                    id: "France",
                    dataKey: "fr",
                    stack: "total",
                    area: true,
                    showMark: false,
                  },
                  {
                    id: "Germany",
                    dataKey: "dl",
                    stack: "total",
                    area: true,
                    showMark: false,
                  },
                  {
                    id: "United Kingdom",
                    dataKey: "gb",
                    stack: "total",
                    area: true,
                    showMark: false,
                  },
                ]}
                height={200}
              >
                <defs>
                  <linearGradient
                    id="myGradient"
                    gradientTransform="rotate(90)"
                  >
                    <stop offset="5%" stopColor="gold" />
                    <stop offset="95%" stopColor="red" />
                  </linearGradient>
                </defs>
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
