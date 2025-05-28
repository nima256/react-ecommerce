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

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";

const Header = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const headerRef = useRef();

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

  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const getCountry = async () => {
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
      try {
        const res = await axios.get(
          "https://www.iran-locations-api.ir/api/v1/fa/states"
        );
        if (res && res.data) {
          const names = res.data.map((item) => item.name);
          setCountryList(names);
        }
      } catch (error) {
        console.log(error.message);
      }

      fetchDataFromApi("/api/category/").then((res) => {
        setCategories(res);
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };

    getCountry();
  }, []);

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
                  <Select
                    data={categories}
                    placeholder={"همه دسته بندی ها"}
                    icon={false}
                  />

                  <div className="search">
                    <input type="text" placeholder="جستجو کالا..." />
                    <SearchIcon className="searchIcon cursor" />
                  </div>
                </div>
              </div>
              {/* Header Search End */}

              <div className="col-sm-5 d-flex align-items-center">
                <div className="mr-auto d-flex align-items-center">
                  <div className="countryWrapper">
                    <Select
                      data={countryList}
                      placeholder={"مکان شما"}
                      icon={
                        <LocationOnOutlinedIcon style={{ opacity: "0.5" }} />
                      }
                    />
                  </div>

                  <ul className="list list-inline mb-0 header-tabs">
                    <li className="list-inline-item">
                      <Link to={""}>
                        <span>
                          <img src={compareIcon} alt="لوگو مقایسه" />
                          <span class="d-flex align-items-center justify-content-center position-absolute top-100 start-100 translate-middle badge rounded-pill bg-g">
                            ۵۵
                            <span class="visually-hidden">unread messages</span>
                          </span>
                          مقایسه
                        </span>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={"/cart"}>
                        <span>
                          <img src={cartIcon} alt="سبد خرید" />
                          <span class="d-flex align-items-center justify-content-center position-absolute top-100 start-100 translate-middle badge rounded-pill bg-g">
                            ۵۵
                            <span class="visually-hidden">unread messages</span>
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

        <Nav />
      </div>

      <div className="forSpacingUnderHeader"></div>
    </>
  );
};

export default Header;
