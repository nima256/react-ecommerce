import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useState } from "react";

function QuantityBox() {
  const [value, setValue] = useState(1);

  const toPersianDigits = (num) =>
    String(num).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

  const handleInputChange = (e) => {
    const val = e.target.value.replace(/[۰-۹]/g, (d) =>
      "۰۱۲۳۴۵۶۷۸۹".indexOf(d)
    );
    if (!isNaN(val) && val !== "") {
      setValue(Number(val));
    }
  };

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => {
    if (value !== 1) {
      setValue((prev) => Math.max(prev - 1, 0));
    }
  };
  return (
    <>
      <div className="addCartSection pt-4 pb-4 d-flex align-items-center">
        <div className="counterSec ml-3">
          <input
            type="text"
            value={toPersianDigits(value)}
            onChange={handleInputChange}
            style={{ textAlign: "center", width: "54px" }}
            inputMode="numeric"
            pattern="[0-9۰-۹]*"
            dir="rtl"
          />
          <span className="arrow plus" onClick={increment}>
            <KeyboardArrowUpOutlinedIcon />
          </span>
          <span className="arrow minus" onClick={decrement}>
            <KeyboardArrowDownOutlinedIcon />
          </span>
        </div>
      </div>
    </>
  );
}

export default QuantityBox;
