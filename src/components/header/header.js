import "../header/header.css";
import Logo from "../../assets/images/Logo.jpg";
import Select from "../selectDrop/select";

import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const [categories, setCategories] = useState([
    "پیراهن",
    "تی شرت",
    "شلوار",
    "کلاه",
    "کفش",
    "کت",
    "عینک",
    "کاپشن",
    "جوراب",
    "شلوارک",
    "تاب",
  ]);

  const countryList = [];

  useEffect(() => {
    getCountry("https://www.iran-locations-api.ir/api/v1/fa/states");
  }, []);

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          res.data.map((item) => {
            countryList.push(item.name);
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
              <img src={Logo} alt="Logo" />
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
              <div className="countryWrapper">
                <Select
                  data={countryList}
                  placeholder={"مکان شما"}
                  icon={<LocationOnOutlinedIcon style={{ opacity: "0.5" }} />}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
