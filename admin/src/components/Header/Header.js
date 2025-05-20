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
import { IoMdMenu } from "react-icons/io";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import Logout from "@mui/icons-material/Logout";
import LockResetIcon from "@mui/icons-material/LockReset";

import user from "../../assets/images/Header/user.png";
import { useContext, useState } from "react";
import { Divider } from "@mui/material";
import { MyContext } from "../../App";

function Header() {
  const [myAccAnchorEl, myAccSetAnchorEl] = useState(null);
  const myAccOpen = Boolean(myAccAnchorEl);
  const [notificationAnchorEl, notificationSetAnchorEl] = useState(null);
  const notificationOpen = Boolean(notificationAnchorEl);

  const context = useContext(MyContext);

  const handleOpenMyAccDrop = (event) => {
    if (myAccOpen) {
      myAccSetAnchorEl(null);
    } else {
      myAccSetAnchorEl(event.currentTarget);
      notificationSetAnchorEl(null);
    }
  };

  const handleCloseMyAccDrop = () => {
    myAccSetAnchorEl(null);
  };

  const handleOpenNotificationDrop = (event) => {
    if (notificationOpen) {
      notificationSetAnchorEl(null);
    } else {
      notificationSetAnchorEl(event.currentTarget);
      myAccSetAnchorEl(null);
    }
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

          {context.windowWidth > 992 && (
            <div className="col-sm-3 d-flex align-items-center part2">
              <Button
                className="rounded-circle ms-3"
                onClick={() =>
                  context.setIsToggleSidebar(!context.isToggleSidebar)
                }
              >
                {context.isToggleSidebar === false ? (
                  <MdMenuOpen />
                ) : (
                  <MdOutlineMenu />
                )}
              </Button>
              <SearchBox />
            </div>
          )}

          <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
            <Button
              className="rounded-circle ms-3"
              onClick={() => context.setThemeMode(!context.themeMode)}
            >
              <MdOutlineLightMode />
            </Button>
            <Button className="rounded-circle ms-3 res-hide">
              <MdOutlineShoppingCart />
            </Button>

            <Button
              className="rounded-circle ms-3"
              onClick={handleOpenNotificationDrop}
            >
              <IoMdNotificationsOutline />
            </Button>

            <Button
              className="rounded-circle ms-3"
              onClick={() => context.openNav()}
            >
              <IoMdMenu />
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
              <div className="allMenuItemWrapper">
                <MenuItem onClick={handleCloseNotificationDrop}>
                  <div className="d-flex">
                    <div className="">
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
                          &nbsp;به سبد خرید خود اضافه کرافه کرافه کرافه کرافه
                          کرافه کرافه کرافه کرد&nbsp;
                          <b>لپ تاپ بمب</b>
                        </span>
                      </h4>
                      <p className="text-sky mb-0">چند لحظه پیش</p>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleCloseNotificationDrop}>
                  <div className="d-flex">
                    <div className="">
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
                          &nbsp;به سبد خرید خود اضافه کرافه کرافه کرافه کرافه
                          کرافه کرافه کرافه کرد&nbsp;
                          <b>لپ تاپ بمب</b>
                        </span>
                      </h4>
                      <p className="text-sky mb-0">چند لحظه پیش</p>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleCloseNotificationDrop}>
                  <div className="d-flex">
                    <div className="">
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
                          &nbsp;به سبد خرید خود اضافه کرافه کرافه کرافه کرافه
                          کرافه کرافه کرافه کرد&nbsp;
                          <b>لپ تاپ بمب</b>
                        </span>
                      </h4>
                      <p className="text-sky mb-0">چند لحظه پیش</p>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleCloseNotificationDrop}>
                  <div className="d-flex">
                    <div className="">
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
                          &nbsp;به سبد خرید خود اضافه کرافه کرافه کرافه کرافه
                          کرافه کرافه کرافه کرد&nbsp;
                          <b>لپ تاپ بمب</b>
                        </span>
                      </h4>
                      <p className="text-sky mb-0">چند لحظه پیش</p>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleCloseNotificationDrop}>
                  <div className="d-flex">
                    <div className="">
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
                          &nbsp;به سبد خرید خود اضافه کرافه کرافه کرافه کرافه
                          کرافه کرافه کرافه کرد&nbsp;
                          <b>لپ تاپ بمب</b>
                        </span>
                      </h4>
                      <p className="text-sky mb-0">چند لحظه پیش</p>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleCloseNotificationDrop}>
                  <div className="d-flex">
                    <div className="">
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
                          &nbsp;به سبد خرید خود اضافه کرافه کرافه کرافه کرافه
                          کرافه کرافه کرافه کرد&nbsp;
                          <b>لپ تاپ بمب</b>
                        </span>
                      </h4>
                      <p className="text-sky mb-0">چند لحظه پیش</p>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleCloseNotificationDrop}>
                  <div className="d-flex">
                    <div className="">
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
                          &nbsp;به سبد خرید خود اضافه کرافه کرافه کرافه کرافه
                          کرافه کرافه کرافه کرد&nbsp;
                          <b>لپ تاپ بمب</b>
                        </span>
                      </h4>
                      <p className="text-sky mb-0">چند لحظه پیش</p>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleCloseNotificationDrop}>
                  <div className="d-flex">
                    <div className="">
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
                          &nbsp;به سبد خرید خود اضافه کرافه کرافه کرافه کرافه
                          کرافه کرافه کرافه کرد&nbsp;
                          <b>لپ تاپ بمب</b>
                        </span>
                      </h4>
                      <p className="text-sky mb-0">چند لحظه پیش</p>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleCloseNotificationDrop}>
                  <div className="d-flex">
                    <div className="">
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
                          &nbsp;به سبد خرید خود اضافه کرافه کرافه کرافه کرافه
                          کرافه کرافه کرافه کرد&nbsp;
                          <b>لپ تاپ بمب</b>
                        </span>
                      </h4>
                      <p className="text-sky mb-0">چند لحظه پیش</p>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleCloseNotificationDrop}>
                  <div className="d-flex">
                    <div className="">
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
                          &nbsp;به سبد خرید خود اضافه کرافه کرافه کرافه کرافه
                          کرافه کرافه کرافه کرد&nbsp;
                          <b>لپ تاپ بمب</b>
                        </span>
                      </h4>
                      <p className="text-sky mb-0">چند لحظه پیش</p>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleCloseNotificationDrop}>
                  <div className="d-flex">
                    <div className="">
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
                          &nbsp;به سبد خرید خود اضافه کرافه کرافه کرافه کرافه
                          کرافه کرافه کرافه کرد&nbsp;
                          <b>لپ تاپ بمب</b>
                        </span>
                      </h4>
                      <p className="text-sky mb-0">چند لحظه پیش</p>
                    </div>
                  </div>
                </MenuItem>
              </div>

              <div className="ps-3 pe-3 w-100 pt-2 pb-1">
                <Button className="btn-blue w-100">دیدن همه اعلان ها</Button>
              </div>
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

                <div className="userInfo res-hide">
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
