import { Button } from "@mui/material";
import "./DashboardBox.css";

import { BsThreeDotsVertical } from "react-icons/bs";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { IoTimeOutline } from "react-icons/io5";

import { useState } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ITEM_HEIGHT = 48;

function DashboardBox(props) {
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
      <div
        className="dashboardBox"
        style={{
          backgroundImage: `linear-gradient(to left, ${props.color?.[0]} , ${props.color?.[1]})`,
        }}
      >
        {props.grow === true ? (
          <span className="chart">
            <TrendingDownIcon />
          </span>
        ) : (
          <span className="chart">
            <TrendingUpIcon />
          </span>
        )}

        <div className="d-flex w-100">
          <div className="col1">
            <h4 className="text-white mb-0">تمام کاربران</h4>
            <span className="text-white">۲۷۷</span>
          </div>

          <div className="me-auto">
            {props.icon ? <span className="icon">{props.icon}</span> : ""}
          </div>
        </div>

        <div className="d-flex align-items-center bottomEle">
          <h6 className="text-white mb-0 mt-0">ماه گذشته</h6>
          <div className="me-auto">
            <Button className="me-auto toggleIcon" onClick={handleClick}>
              <BsThreeDotsVertical />
            </Button>
            <Menu
              className='dropdown_menu'
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
                روز گذشته
                <IoTimeOutline />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                هفته گذشته
                <IoTimeOutline />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                ماه گذشته
                <IoTimeOutline />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                سال گذشته
                <IoTimeOutline />
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardBox;
