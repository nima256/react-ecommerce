import Logo from "../../assets/images/header/Logo.jpg";
import compareIcon from "../../assets/images/header/comparison.svg";
import cartIcon from "../../assets/images/header/cart-shopping.svg";
import accountIcon from "../../assets/images/header/account.svg";

import "../header/header.css";
import Select from "../selectDrop/select";
import Nav from "../nav/nav";

import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Button from "@mui/material/Button";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";
import { MyContext } from "../../App";

const Header = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const headerRef = useRef();

  const context = useContext(MyContext);

  // const [categories, setCategories] = useState([
  //   "کیس کامپیوتر",
  //   "مادربرد",
  //   "سی پی یو",
  //   "خنک کننده سی پی یو",
  //   "کارت گرافیک",
  //   "رم",
  //   "هارد اس اس دی",
  //   "پاور",
  //   "فن کیس",
  //   "مانیتور",
  //   "هارد اکسترنال",
  //   "لپ تاپ",
  //   "کیبورد گیمینگ",
  //   "ماوس گیمینگ",
  //   "هدست گیمینگ",
  //   "میکروفن گیمینگ",
  //   "دسته بازی گیمینگ",
  //   "اسپیکر گیمینگ",
  //   "ماوس پد گیمینگ",
  //   "صندلی گیمینگ",
  //   "میز گیمینگ",
  // ]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (headerRef.current) {
        if (position > 100) {
          headerRef.current.classList.add("fixed");
        } else {
          headerRef.current.classList.remove("fixed");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setCategories(context.categories);
  }, [context.categories]);

  return (
    <>
      <div className="headerWrapper" ref={headerRef}>
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2">
                <img
                  src={Logo}
                  alt="لوگو وب سایت"
                  style={{ width: "200px", height: "80px" }}
                />
              </div>

              {/* Header Search Start */}
              <div className="col-sm-5 d-flex align-items-center">
                <div className="headerSearch d-flex align-items-center">
                  {categories?.categoryList?.length !== 0 &&
                    categories?.categoryList !== undefined && (
                      <Select
                        data={categories?.categoryList}
                        placeholder={"همه دسته بندی ها"}
                        icon={false}
                      />
                    )}

                  <div className="search">
                    <input type="text" placeholder="جستجو کالا..." />
                    <SearchIcon className="searchIcon cursor" />
                  </div>
                </div>
              </div>
              {/* Header Search End */}

              <div className="col-sm-5 d-flex align-items-center">
                <div className="mr-auto d-flex align-items-center">
                  <ul className="list list-inline mb-0 header-tabs">
                    <li className="list-inline-item">
                      <Link to={""}>
                        <span>
                          <img src={compareIcon} alt="لوگو مقایسه" />
                          <span className="d-flex align-items-center justify-content-center position-absolute top-100 start-100 translate-middle badge rounded-pill bg-g">
                            ۵۵
                            <span className="visually-hidden">
                              unread messages
                            </span>
                          </span>
                          مقایسه
                        </span>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={"/cart"}>
                        <span>
                          <img src={cartIcon} alt="سبد خرید" />
                          <span className="d-flex align-items-center justify-content-center position-absolute top-100 start-100 translate-middle badge rounded-pill bg-g">
                            ۵۵
                            <span className="visually-hidden">
                              unread messages
                            </span>
                          </span>
                          سبد خرید
                        </span>
                      </Link>
                    </li>
                    <ClickAwayListener
                      onClickAway={() => setIsOpenDropDown(false)}
                    >
                      <li className="list-inline-item">
                        <span
                          onClick={() => setIsOpenDropDown(!isOpenDropDown)}
                        >
                          <img src={accountIcon} alt="حساب کاربری" />
                          حساب کاربری
                        </span>
                        {isOpenDropDown && (
                          <ul className="dropdownMenu ">
                            <li>
                              <Button>
                                <Person4OutlinedIcon />
                                حساب من
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <LocalShippingOutlinedIcon />
                                پیگیری سفارش
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <SettingsOutlinedIcon />
                                تنظیمات
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <LogoutIcon />
                                خروج
                              </Button>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ClickAwayListener>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>

        {categories?.categoryList?.length !== 0 &&
          categories?.categoryList !== undefined && (
            <Nav data={categories?.categoryList} />
          )}
      </div>

      <div className="forSpacingUnderHeader"></div>
    </>
  );
};

export default Header;
