import "./footer.css";

import BoxIcon1 from "../../assets/images/footer/footerBoxIcon1.svg";
import BoxIcon2 from "../../assets/images/footer/footerBoxIcon2.svg";
import BoxIcon3 from "../../assets/images/footer/footerBoxIcon3.svg";
import BoxIcon4 from "../../assets/images/footer/footerBoxIcon4.svg";
import BoxIcon5 from "../../assets/images/footer/footerBoxIcon5.svg";

import Myket from "../../assets/images/footer/myket.svg";
import sibApp from "../../assets/images/footer/sib-app.svg";

import eNamad from "../../assets/images/footer/e-namad.png";
import Kasbokar from "../../assets/images/footer/kasbokar.webp";
import Rezi from "../../assets/images/footer/rezi.webp";

import Logo from "../../assets/images/header/Logo.jpg";
import { Link } from "react-router-dom";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import NewsLetter from "../../components/newsLetter/newsLetter";

const Footer = () => {
  return (
    <>
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
                <img className="w-100" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="footerWrapper">
        <div className="footerBoxes">
          <div className="contaier-fluid">
            <div className="row w-100 pr-1">
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

        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 part1">
                <Link to={"/"}>
                  <img
                    src={Logo}
                    alt="لوگو وب سایت"
                    style={{ width: "200px", height: "80px" }}
                  />
                </Link>
                <br />
                <br />
                <p>تنشت نسنستب نشستیبم نستبش</p>
                <br />
                <p>
                  <LocationOnOutlinedIcon />
                  <strong>آدرس:</strong> تسنسیشنب شنسیتب منشسیب منسشتنمیب
                  مشسنتیب مشسینب سشیمنبت
                </p>
                <p>
                  <HeadphonesOutlinedIcon />
                  <strong>با ما تماس بگیرید: </strong>
                  <span dir="rtl">۰۹۱۲۱۲۳۱۲۳۴</span>
                </p>
                <p>
                  <EmailOutlinedIcon />
                  <strong>ایمیل:</strong> <span dir="rtl">email@gmail.com</span>
                </p>
                <p>
                  <WatchLaterOutlinedIcon />
                  <strong>ساعت کاری:</strong> از ساعت ۰۹:۰۰ تا ۲۰:۰۰
                </p>
              </div>

              <div className="col-md-6 part2">
                <div className="row">
                  <div className="col">
                    <h3>حساب کاربری</h3>
                    <ul>
                      <li>
                        <Link to={""}>ثبت نام</Link>
                      </li>
                      <li>
                        <Link to={""}>مشاهده سبد خرید</Link>
                      </li>
                      <li>
                        <Link to={""}>پیگیری سفارش</Link>
                      </li>
                      <li>
                        <Link to={""}>درخواست پشتیبانی</Link>
                      </li>
                      <li>
                        <Link to={""}>مقایسه محصولات</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>پرطرفدار ها</h3>
                    <ul>
                      <li>
                        <Link to={""}>پیراهن</Link>
                      </li>
                      <li>
                        <Link to={""}>شلوار</Link>
                      </li>
                      <li>
                        <Link to={""}>کفش</Link>
                      </li>
                      <li>
                        <Link to={""}>کاپشن</Link>
                      </li>
                      <li>
                        <Link to={""}>شلوارک</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>درباره وب سایت</h3>
                    <ul>
                      <li>
                        <Link to={""}>حریم خصوصی</Link>
                      </li>
                      <li>
                        <Link to={""}>شرایط استفاده</Link>
                      </li>
                      <li>
                        <Link to={""}>درباره ما</Link>
                      </li>
                      <li>
                        <Link to={""}>ارتباط با ما</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <h3>راهنمای خرید</h3>
                    <ul>
                      <li>
                        <Link to={""}>طریقه تحویل سفارش</Link>
                      </li>
                      <li>
                        <Link to={""}>نحوه ثبت سفارش</Link>
                      </li>
                      <li>
                        <Link to={""}>شیوه‌های پرداخت</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 part3 ForApps">
                <h3>نصب برنامه</h3>
                <ul>
                  <li>
                    <p>از طریق اپ استور یا گوگل پلی</p>
                  </li>
                  <li>
                    <div className="d-flex">
                      <Link to={""}>
                        <img src={Myket} alt="مایکت دانلود" />
                      </Link>
                      <Link to={""}>
                        <img src={sibApp} className="mx-3" alt="مایکت دانلود" />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <p>نماد های معتبر</p>
                  </li>
                  <li>
                    <Link to={""}>
                      <img className="namad mx-3" src={eNamad} alt="اینماد" />
                    </Link>
                    <Link to={""}>
                      <img
                        className="namad mx-3"
                        src={Kasbokar}
                        alt="کسب و کار"
                      />
                    </Link>
                    <Link to={""}>
                      <img className="namad mx-3" src={Rezi} alt="رضی" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <hr />

            <div className="row lastStrip">
              <div className="col-md-3 d-flex align-items-center">
                <p>تمام حقوق اين وب‌ سایت برای خداوند متعال است</p>
              </div>
              <div className="col-md-6 d-flex">
                <div className="m-auto d-flex align-items-center">
                  <div className="phonum d-flex align-items-center mx-5">
                    <span>
                      <HeadphonesOutlinedIcon />
                    </span>
                    <div className="info mr-3">
                      <h3 className="text-g mb-0" dir="ltr">
                        ۰۲۸ - ۳۲۳۳۱۲۳۲
                      </h3>
                      <p className="mb-0 text-center">پاسخگو به سوالات شما</p>
                    </div>
                  </div>
                  <div className="phonum d-flex align-items-center mx-5">
                    <span>
                      <HeadphonesOutlinedIcon />
                    </span>
                    <div className="info mr-3">
                      <h3 className="text-g mb-0" dir="ltr">
                        ۰۲۸ - ۳۲۳۳۱۲۳۲
                      </h3>
                      <p className="mb-0 text-center">پاسخگو به سوالات شما</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 part3 d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <h5>ما را دنبال کنید</h5>
                  <ul className="list list-inline">
                    <li className="list-inline-item">
                      <Link to={""}>
                        <InstagramIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <TelegramIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <WhatsAppIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
