import "./poster.css";

import Poster1 from "../../assets/images/poster/poster-headset.webp";
import Poster2 from "../../assets/images/poster/poster-keyboard.webp";
import Poster3 from "../../assets/images/poster/poster-mouse.webp";

const Poster = () => {
  return (
    <div className="posterSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="box">
              <img
                src={Poster1}
                alt=""
                className="w-100 transition posterImg"
              />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <img
                src={Poster2}
                alt=""
                className="w-100 transition posterImg"
              />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <img
                src={Poster3}
                alt=""
                className="w-100 transition posterImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
