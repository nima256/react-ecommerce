import { useState } from "react";
import "../selectDrop/select.css";

const Select = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  return (
    <div className="selectDrop cursor">
      <span className="openSelect" onClick={openSelect}>
        همه دسته بندی ها
      </span>

      {isOpenSelect === true && (
        <div className="selectDropp">
          <div className="searchField">
            <input type="text" />
          </div>
          <ul className="searchResults">
            <li onClick={() => setIsOpenSelect(false)}>پیراهن</li>
            <li onClick={() => setIsOpenSelect(false)}>تی شرت</li>
            <li onClick={() => setIsOpenSelect(false)}>شلوار</li>
            <li onClick={() => setIsOpenSelect(false)}>کلاه</li>
            <li onClick={() => setIsOpenSelect(false)}>کفش</li>
            <li onClick={() => setIsOpenSelect(false)}>کت</li>
            <li onClick={() => setIsOpenSelect(false)}>عینک</li>
            <li onClick={() => setIsOpenSelect(false)}>کاپشن</li>
            <li onClick={() => setIsOpenSelect(false)}>جوراب</li>
            <li onClick={() => setIsOpenSelect(false)}>شلوارک</li>
            <li onClick={() => setIsOpenSelect(false)}>تاب</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
