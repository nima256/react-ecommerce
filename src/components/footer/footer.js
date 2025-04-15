import "./footer.css";

import BoxIcon1 from "../../assets/images/footerBoxIcon1.svg";
import BoxIcon2 from "../../assets/images/footerBoxIcon2.svg";
import BoxIcon3 from "../../assets/images/footerBoxIcon3.svg";
import BoxIcon4 from "../../assets/images/footerBoxIcon4.svg";
import BoxIcon5 from "../../assets/images/footerBoxIcon5.svg";

const Footer = () => {
  return (
    <>
      <div className="footerWrapper">
        <div className="footerBoxes">
          <div className="contaier-fluid">
            <div className="row w-100">
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={BoxIcon1} alt="آیکون" />
                  </span>
                  <div className="info">
                    <h4>شستشسم سشتینبم</h4>
                    <p>شسیبت مشسنیتبنم</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={BoxIcon2} alt="آیکون" />
                  </span>
                  <div className="info">
                    <h4>شستشسم سشتینبم</h4>
                    <p>شسیبت مشسنیتبنم</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={BoxIcon3} alt="آیکون" />
                  </span>
                  <div className="info">
                    <h4>شستشسم سشتینبم</h4>
                    <p>شسیبت مشسنیتبنم</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={BoxIcon4} alt="آیکون" />
                  </span>
                  <div className="info">
                    <h4>شستشسم سشتینبم</h4>
                    <p>شسیبت مشسنیتبنم</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={BoxIcon5} alt="آیکون" />
                  </span>
                  <div className="info">
                    <h4>شستشسم سشتینبم</h4>
                    <p>شسیبت مشسنیتبنم</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
