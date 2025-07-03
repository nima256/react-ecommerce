import "./sidebar.css";

import laptopLogo from "../../assets/images/sidebar/laptop.svg";
import Tooman from "../../assets/images/product/toman.svg";
import bannerImg from "../../assets/images/poster/poster-keyboard.webp";

import { useContext, useEffect, useState } from "react";

import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import { Button, ButtonBase } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "../../App";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function valuetext(value) {
  return `${value}°C`;
}

function Sidebar(props) {
  const [value, setValue] = useState([0, 100]);
  const [catId, setCatId] = useState("");
  const context = useContext(MyContext);
  const { id } = useParams();

  useEffect(() => {
    setCatId(id);
    props.filterByPrice(value, id);
  }, [id]);

  useEffect(() => {
    props.filterByPrice(value, catId);
  }, [value, id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toPersianDigits = (num) => {
    if (num === null || num === undefined || isNaN(num)) return "";
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    const withCommas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return withCommas.replace(/\d/g, (digit) => persianDigits[digit]);
  };

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
                  <Link to={`/category/${cat?.id}`} index={index}>
                    <ButtonBase
                      className="catItem d-flex align-items-center w-100 justify-content-start"
                      focusRipple
                    >
                      <span className="img">
                        <img src={laptopLogo} alt="" width={30} />
                      </span>
                      <h4 className="mb-0 mr-3 ml-3">{cat?.name}</h4>
                    </ButtonBase>
                  </Link>
                );
              })}
          </div>
        </div>

        <div dir="rtl" className="card border-0 shadow">
          <h3>فیلتر ها</h3>
          <Slider
            min={0}
            max={50000}
            color="success"
            className="rangeSlider"
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            getAriaValueText={toPersianDigits}
            valueLabelFormat={toPersianDigits}
          />

          <div className="d-flex pt-2 pb-2 priceRange">
            <span>
              از: &nbsp;
              <strong className="text-success min-price">
                {toPersianDigits(value[0])}{" "}
                <img src={Tooman} alt="" className="toomanSvg" />
              </strong>
            </span>
            <span className="mr-auto">
              تا: &nbsp;
              <strong className="text-success max-price">
                {toPersianDigits(value[1])}
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
