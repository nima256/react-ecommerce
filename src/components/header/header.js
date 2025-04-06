import "../header/header.css";
import Logo from "../../assets/images/Logo.jpg";
import Select from "../selectDrop/select";

import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} alt="Logo" />
            </div>

            {/* Header Search Start */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <Select />
                <div className="search">
                  <input type="text" placeholder="جستجو کالا" />
                  <SearchIcon className="searchIcon cursor" />
                </div>
              </div>
            </div>
            {/* Header Search End */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
