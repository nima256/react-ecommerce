import "./sidebar.css";

import laptopLogo from "../../assets/images/sidebar/laptop.svg";

import { useState } from "react";

import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

function Sidebar() {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="sidebar">
        <div className="card border-0 shadow">
          <h3>دسته بندی ها</h3>
          <div className="catList">
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={laptopLogo} alt="" width={30} />
              </span>
              <h4 className="mb-0 mr-3 ml-3">لپ تاپ</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle mr-auto">
                ۳۰
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={laptopLogo} alt="" width={30} />
              </span>
              <h4 className="mb-0 mr-3 ml-3">لپ تاپ</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle mr-auto">
                ۳۰
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={laptopLogo} alt="" width={30} />
              </span>
              <h4 className="mb-0 mr-3 ml-3">لپ تاپ</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle mr-auto">
                ۳۰
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={laptopLogo} alt="" width={30} />
              </span>
              <h4 className="mb-0 mr-3 ml-3">لپ تاپ</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle mr-auto">
                ۳۰
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={laptopLogo} alt="" width={30} />
              </span>
              <h4 className="mb-0 mr-3 ml-3">لپ تاپ</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle mr-auto">
                ۳۰
              </span>
            </div>
          </div>
        </div>

        <div dir="rtl" className="card border-0 shadow">
          <h3>فیلتر ها</h3>
          <Slider
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
              از: <strong className="text-success">۱۴۴</strong>
            </span>
            <span className="mr-auto">
              تا: <strong className="text-success">۱۴۴</strong>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
