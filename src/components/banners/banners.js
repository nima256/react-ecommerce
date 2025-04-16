import "./banners.css";
import Banner1 from "../../assets/images/banners/banner1.png";

const Banners = () => {
  return (
    <div className="bannerSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="box">
              <img
                src={Banner1}
                alt=""
                className="w-100 transition bannersImg"
              />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <img
                src={Banner1}
                alt=""
                className="w-100 transition bannersImg"
              />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <img
                src={Banner1}
                alt=""
                className="w-100 transition bannersImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
