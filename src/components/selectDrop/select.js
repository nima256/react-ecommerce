import { useState } from "react";
import "../selectDrop/select.css";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Select = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState("همه دسته بندی ها");

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index, e) => {
    setSelectedIndex(index);
    setIsOpenSelect(false);
    setSelectedItem(e.target.textContent);
  };

  return (
    <div className="selectDrop cursor">
      <span className="openSelect" onClick={openSelect}>
        {selectedItem} <ArrowDropDownIcon className="dropDownArrow" />
      </span>

      {isOpenSelect === true && (
        <div className="selectDropp">
          <div className="searchField">
            <input type="text" />
          </div>
          <ul className="searchResults">
            <li
              onClick={(e) => closeSelect(0, e)}
              className={`${selectedIndex === 0 ? "active" : ""}`}
            >
              همه دسته بندی ها
            </li>
            <li
              onClick={(e) => closeSelect(1, e)}
              className={`${selectedIndex === 1 ? "active" : ""}`}
            >
              پیراهن
            </li>
            <li
              onClick={(e) => closeSelect(2, e)}
              className={`${selectedIndex === 2 ? "active" : ""}`}
            >
              تی شرت
            </li>
            <li
              onClick={(e) => closeSelect(3, e)}
              className={`${selectedIndex === 3 ? "active" : ""}`}
            >
              شلوار
            </li>
            <li
              onClick={(e) => closeSelect(4, e)}
              className={`${selectedIndex === 4 ? "active" : ""}`}
            >
              کلاه
            </li>
            <li
              onClick={(e) => closeSelect(5, e)}
              className={`${selectedIndex === 5 ? "active" : ""}`}
            >
              کفش
            </li>
            <li
              onClick={(e) => closeSelect(6, e)}
              className={`${selectedIndex === 6 ? "active" : ""}`}
            >
              کت
            </li>
            <li
              onClick={(e) => closeSelect(7, e)}
              className={`${selectedIndex === 7 ? "active" : ""}`}
            >
              عینک
            </li>
            <li
              onClick={(e) => closeSelect(8, e)}
              className={`${selectedIndex === 8 ? "active" : ""}`}
            >
              کاپشن
            </li>
            <li
              onClick={(e) => closeSelect(9, e)}
              className={`${selectedIndex === 9 ? "active" : ""}`}
            >
              جوراب
            </li>
            <li
              onClick={(e) => closeSelect(10, e)}
              className={`${selectedIndex === 10 ? "active" : ""}`}
            >
              شلوارک
            </li>
            <li
              onClick={(e) => closeSelect(11, e)}
              className={`${selectedIndex === 11 ? "active" : ""}`}
            >
              تاب
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
