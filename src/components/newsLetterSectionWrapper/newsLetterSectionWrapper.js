import "./newsLetterSectionWrapper.css";

import imgOnTheSlide from "../../assets/images/catSlider/category-image.png";
import NewsLetter from "../../components/newsLetter/newsLetter";

const NewsLetterSectionWrapper = () => {
  return (
    <div className="newsLetterSectionWrapper p-1">
      <section className="newsLetterSection">
        <div className="container-fluid">
          <div className="box d-flex align-items-center">
            <div className="info">
              <h2>
                تنسش سنشتیبنشس تشنسمیبت <br /> نمشتیب نمشسب نتشسمب
              </h2>
              <p>تنیمس نسمتینس نسن</p>
              <br />
              <br />
              <NewsLetter />
            </div>
            <div className="img">
              <img src={imgOnTheSlide} alt="اسلاید" className="w-100" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetterSectionWrapper;
