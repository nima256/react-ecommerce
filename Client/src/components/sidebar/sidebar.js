import "./sidebar.css";

import laptopLogo from "../../assets/images/sidebar/laptop.svg";
import Tooman from "../../assets/images/product/toman.svg";
import bannerImg from "../../assets/images/poster/poster-keyboard.webp";

import { useContext, useState } from "react";

import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function valuetext(value) {
  return `${value}°C`;
}

function Sidebar() {
  const [value, setValue] = useState([150, 856]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const context = useContext(MyContext);


  return (
    <>
      <div className="sidebar">
        <div className="card border-0 shadow">
          <h3>دسته بندی ها</h3>
          <div className="catList">
            {context?.categories?.categoryList?.length !== 0 &&
              context?.categories?.categoryList !== undefined &&
              context?.categories?.categoryList?.map((cat, index) => {
                return (
                  <Link to={`/cat/`} index={index}>
                    <div className="catItem d-flex align-items-center">
                      <span className="img">
                        <img src={laptopLogo} alt="" width={30} />
                      </span>
                      <h4 className="mb-0 mr-3 ml-3">{cat?.name}</h4>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>

        <div dir="rtl" className="card border-0 shadow">
          <h3>فیلتر ها</h3>
          <Slider
            min={0}
            max={1000}
            color="success"
            className="rangeSlider"
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />

          <div className="d-flex pt-2 pb-2 priceRange">
            <span>
              از: &nbsp;
              <strong className="text-success min-price">
                {value[0]} <img src={Tooman} alt="" className="toomanSvg" />
              </strong>
            </span>
            <span className="mr-auto">
              تا: &nbsp;
              <strong className="text-success max-price">
                {value[1]}
                <img src={Tooman} alt="" className="toomanSvg maxToomanSvg" />
              </strong>
            </span>
          </div>

          <div className="filters">
            <h5>برند</h5>
            <ul>
              <li>
                <Checkbox {...label} color="success" />
                ایسوس (۵۶)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                لنوو (۱۲)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                ایسر (۲۴)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                ایسوس (۵۶)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                لنوو (۱۲)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                ایسر (۲۴)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                ایسوس (۵۶)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                لنوو (۱۲)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                ایسر (۲۴)
              </li>
            </ul>
          </div>
          <div className="filters">
            <h5>نمیدونم</h5>
            <ul>
              <li>
                <Checkbox {...label} color="success" />
                فعلا (۲۴۵)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                حله (۱۲۱)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                باشه (۳۴)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                فعلا (۲۴۵)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                حله (۱۲۱)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                باشه (۳۴)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                فعلا (۲۴۵)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                حله (۱۲۱)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                باشه (۳۴)
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <Button className="btn btn-g">
              <FilterAltOutlinedIcon />
              اعمال فیلتر
            </Button>
          </div>
        </div>

        <img src={bannerImg} alt="" className="w-100" />
      </div>
    </>
  );
}

export default Sidebar;
