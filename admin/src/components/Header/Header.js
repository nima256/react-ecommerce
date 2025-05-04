import "./Header.css";

import { Link } from "react-router-dom";
import logo from "../../assets/images/Header/Logo.jpg";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox/SearchBox";

import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import Logout from "@mui/icons-material/Logout";
import LockResetIcon from "@mui/icons-material/LockReset";

import user from "../../assets/images/Header/user.png";
import { useState } from "react";
import { Divider } from "@mui/material";

function Header() {
  const [myAccAnchorEl, myAccSetAnchorEl] = useState(null);
  const myAccOpen = Boolean(myAccAnchorEl);
  const handleOpenMyAccDrop = (event) => {
    myAccSetAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    myAccSetAnchorEl(null);
  };

  const [notificationAnchorEl, notificationSetAnchorEl] = useState(null);
  const notificationOpen = Boolean(notificationAnchorEl);
  const handleOpenNotificationDrop = (event) => {
    notificationSetAnchorEl(event.currentTarget);
  };
  const handleCloseNotificationDrop = () => {
    notificationSetAnchorEl(null);
  };

  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center">
          {/* logo Wrapper */}
          <div className="col-sm-2 part1">
            <Link to={"/"} className="d-flex align-items-center logo">
              <img src={logo} alt="لوگو" />
              <span className="me-2">نمیدونم</span>
            </Link>
          </div>

          <div className="col-sm-3 d-flex align-items-center part2">
            <Button className="rounded-circle ms-3">
              <MdMenuOpen />
            </Button>
            <SearchBox />
          </div>

          <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
            <Button className="rounded-circle ms-3">
              <MdOutlineLightMode />
            </Button>
            <Button className="rounded-circle ms-3">
              <MdOutlineShoppingCart />
            </Button>
            <Button className="rounded-circle ms-3">
              <MdOutlineEmail />
            </Button>
            <Button
              className="rounded-circle ms-3"
              onClick={handleOpenNotificationDrop}
            >
              <IoMdNotificationsOutline />
            </Button>
            <Menu
              anchorEl={notificationAnchorEl}
              className="dropdown_list"
              id="account-menu"
              open={notificationOpen}
              onClose={handleCloseNotificationDrop}
              onClick={handleCloseNotificationDrop}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <div className="head pe-3 pb-0 pt-2 ps-5">
                <h4>اعلان ها (۱۲)</h4>
              </div>

              <Divider className="mb-2" style={{ opacity: "0.5" }} />

              <MenuItem onClick={handleCloseNotificationDrop}>
                <div className="d-flex align-items-center">
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src={user} alt="" />
                    </span>
                  </div>
                </div>

                <div className="dropdownInfo">
                  <h4>
                    <span>
                      &nbsp;
                      <b>اکبر</b>
                      &nbsp;به سبد خرید خود اضافه کرد&nbsp;
                      <b>لپ تاپ بمب</b>
                    </span>
                  </h4>
                </div>
              </MenuItem>
            </Menu>

            <div className="myAccWrapper">
              <Button
                className="myAcc d-flex align-items-center"
                onClick={handleOpenMyAccDrop}
              >
                <div className="userImg">
                  <span className="rounded-circle">
                    <img src={user} alt="" />
                  </span>
                </div>

                <div className="userInfo">
                  <h4>علی علیی</h4>
                  <p dir="ltr" className="mb-0">
                    @jskadl45
                  </p>
                </div>
              </Button>
              <Menu
                anchorEl={myAccAnchorEl}
                id="account-menu"
                open={myAccOpen}
                onClose={handleCloseMyAccDrop}
                onClick={handleCloseMyAccDrop}
                transformOrigin={{ horizontal: "left", vertical: "top" }}
                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              >
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <ListItemIcon>
                    <PermIdentityOutlinedIcon fontSize="small" />
                  </ListItemIcon>
                  اکانت من
                </MenuItem>
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <ListItemIcon>
                    <LockResetIcon fontSize="small" />
                  </ListItemIcon>
                  بازگردانی رمز عبور
                </MenuItem>
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  خروج
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
