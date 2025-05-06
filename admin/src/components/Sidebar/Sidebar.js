import "./Sidebar.css";

import { MdOutlineDashboard } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to={"/"}>
              <Button className="w-100">
                <span className="icon">
                  <MdOutlineDashboard />
                </span>
                داشبورد
                <span className="arrow">
                  <FaAngleLeft />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Button className="w-100">
                <span className="icon">
                  <AiOutlineProduct />
                </span>
                محصولات
                <span className="arrow">
                  <FaAngleLeft />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Button className="w-100">
                <span className="icon">
                  <IoCartOutline />
                </span>
                سفارشات
                <span className="arrow">
                  <FaAngleLeft />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Button className="w-100">
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
            <Link to={"/"}>
              <Button className="w-100">
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
            <Link to={"/"}>
              <Button className="w-100">
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
          <li>
            <Link to={"/"}>
              <Button className="w-100">
                <span className="icon">
                  <MdOutlineDashboard />
                </span>
                داشبورد
                <span className="arrow">
                  <FaAngleLeft />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Button className="w-100">
                <span className="icon">
                  <AiOutlineProduct />
                </span>
                محصولات
                <span className="arrow">
                  <FaAngleLeft />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Button className="w-100">
                <span className="icon">
                  <IoCartOutline />
                </span>
                سفارشات
                <span className="arrow">
                  <FaAngleLeft />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Button className="w-100">
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
            <Link to={"/"}>
              <Button className="w-100">
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
            <Link to={"/"}>
              <Button className="w-100">
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
          <li>
            <Link to={"/"}>
              <Button className="w-100">
                <span className="icon">
                  <MdOutlineDashboard />
                </span>
                داشبورد
                <span className="arrow">
                  <FaAngleLeft />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Button className="w-100">
                <span className="icon">
                  <AiOutlineProduct />
                </span>
                محصولات
                <span className="arrow">
                  <FaAngleLeft />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Button className="w-100">
                <span className="icon">
                  <IoCartOutline />
                </span>
                سفارشات
                <span className="arrow">
                  <FaAngleLeft />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Button className="w-100">
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
            <Link to={"/"}>
              <Button className="w-100">
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
            <Link to={"/"}>
              <Button className="w-100">
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
      </div>
    </>
  );
}

export default Sidebar;
