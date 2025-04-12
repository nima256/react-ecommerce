import Logo from "../../assets/images/Logo.jpg";
import compareIcon from "../../assets/images/comparison.svg";
import cartIcon from "../../assets/images/cart-shopping.svg";
import accountIcon from "../../assets/images/account.svg";

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

import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const [categories, setCategories] = useState([
    "پیراهن",
    "تی شرت",
    "شلوار",
    "کفش",
    "کاپشن",
    "شلوارک",
    "تاب",
  ]);

  const countryList = [];

  useEffect(() => {
    getCountry("https://www.iran-locations-api.ir/api/v1/fa/states");
  });

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          res.data.map((item) => {
            countryList.push(item.name);
            return null;
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img
                src={Logo}
                alt="Logo"
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
                    icon={<LocationOnOutlinedIcon style={{ opacity: "0.5" }} />}
                  />
                </div>

                <ul className="list list-inline mb-0 header-tabs">
                  <li className="list-inline-item">
                    <span>
                      <img src={compareIcon} alt="لوگو مقایسه" />
                      <span class="d-flex align-items-center justify-content-center position-absolute top-100 start-100 translate-middle badge rounded-pill bg-g">
                        ۵۵<span class="visually-hidden">unread messages</span>
                      </span>
                      مقایسه
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <img src={cartIcon} alt="سبد خرید" />
                      <span class="d-flex align-items-center justify-content-center position-absolute top-100 start-100 translate-middle badge rounded-pill bg-g">
                        ۵۵<span class="visually-hidden">unread messages</span>
                      </span>
                      سبد خرید
                    </span>
                  </li>
                  <ClickAwayListener
                    onClickAway={() => setIsOpenDropDown(false)}
                  >
                    <li className="list-inline-item">
                      <span onClick={() => setIsOpenDropDown(!isOpenDropDown)}>
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
    </>
  );
};

export default Header;
