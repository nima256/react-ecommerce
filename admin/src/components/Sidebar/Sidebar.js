import "./Sidebar.css";

import { MdOutlineDashboard } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [activeTab, setActiveTab] = useState();
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

  const isOpenSubmenu = (index) => {
    if (activeTab === index) {
      setIsToggleSubmenu(!isToggleSubmenu);
    } else {
      setActiveTab(index);
      setIsToggleSubmenu(true);
    }
  };

  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to={"/dashboard"}>
              <Button
                className={`w-100 ${activeTab === 0 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(0)}
              >
                <span className="icon">
                  <MdOutlineDashboard />
                </span>
                داشبورد
              </Button>
            </Link>
          </li>
          <li>
            <Button
              className={`w-100 ${
                activeTab === 1 && isToggleSubmenu ? "active" : ""
              }`}
              onClick={() => isOpenSubmenu(1)}
            >
              <span className="icon">
                <AiOutlineProduct />
              </span>
              محصولات
              <span className="arrow">
                <FaAngleLeft />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 1 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to={"/products"}>لیست محصولات</Link>
                </li>
                <li>
                  <Link to={"/product/detail"}>دیدن محصولات</Link>
                </li>
                <li>
                  <Link to={"/product/upload"}>اضافه محصول</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to={"/orders"}>
              <Button
                className={`w-100 ${activeTab === 2 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(2)}
              >
                <span className="icon">
                  <IoCartOutline />
                </span>
                سفارشات
              </Button>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <Button
                className={`w-100 ${activeTab === 3 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(3)}
              >
                <span className="icon">
                  <MdOutlineMessage />
                </span>
                پیام ها
                <span className="arrow">
                  <FaAngleLeft />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <Button
                className={`w-100 ${activeTab === 4 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(4)}
              >
                <span className="icon">
                  <IoMdNotificationsOutline />
                </span>
                اعلانات
                <span className="arrow">
                  <FaAngleLeft />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <Button
                className={`w-100 ${activeTab === 5 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(5)}
              >
                <span className="icon">
                  <IoSettingsOutline />
                </span>
                تنظیمات
                <span className="arrow">
                  <FaAngleLeft />
                </span>
              </Button>
            </Link>
          </li>
        </ul>

        <br />

        <div className="logoutWrapper">
          <div className="logoutBox">
            <Button variant="contained">
              <IoLogOutOutline />
              خروج
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
