import { useEffect, useState } from "react";
import "../selectDrop/select.css";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const Select = ({ data, placeholder, icon }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(placeholder);

  const [listData, setListData] = useState([]);
  const [listData2, setListData2] = useState([]);

  useEffect(() => {
    if (data?.length !== 0) {
      setListData(data);
      setListData2(data);
    }
  }, [data]);

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index, item) => {
    setSelectedIndex(index);
    setIsOpenSelect(false);
    setSelectedItem(item);
  };

  const filterList = (e) => {
    const keyward = e.target.value;

    const list = listData2.filter((item) => {
      return item.includes(keyward);
    });

    const list2 = list.filter((item, index) => list.indexOf(item) === index);

    setListData(list2);
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
      <div className="selectDropWrapper cursor position-relative">
        {icon}
        <span
          className="selectDropp"
          style={{ fontSize: "15px" }}
          onClick={openSelect}
        >
          {selectedItem.length > 14
            ? selectedItem.substr(0, 14) + "..."
            : selectedItem}
          <ArrowDropDownIcon className="dropDownArrow" />
        </span>

        {isOpenSelect === true && (
          <div className="selectDrop">
            <div className="searchField">
              <input
                type="text"
                placeholder="جستجو دسته بندی..."
                onChange={filterList}
              />
            </div>
            <ul className="searchResults">
              <li
                key={0}
                onClick={() => closeSelect(0, placeholder)}
                className={`${selectedIndex === 0 ? "active" : ""}`}
              >
                {placeholder}
              </li>
              {listData?.map((item, index) => {
                return (
                  <li
                    key={index + 1}
                    onClick={() => closeSelect(index + 1, item.name)}
                    className={`${selectedIndex === index + 1 ? "active" : ""}`}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
