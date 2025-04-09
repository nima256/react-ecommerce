import "./nav.css";
import MegaMenyImg from "../../assets/images/megaMenu.png";

import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav d-flex align-items-center">
        <div className="container-fluid">
          <div className="row position-relative">
            <div className="col-sm-2 part1 d-flex align-items-center">
              <Button className="bg-g text-white catTab">
                <GridViewOutlinedIcon />
                &nbsp; همه دسته بندی ها&nbsp;
                <ArrowDropDownIcon />
              </Button>
            </div>
            <div className="col-sm-8 part2 position-static">
              <nav>
                <ul className="list list-inline mb-0">
                  <li className="list-inline-item">
                    <Button>
                      <Link>خانه</Link>
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>درباره ما</Link>
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>فروشگاه</Link>
                    </Button>
                  </li>
                  <li className="list-inline-item position-static">
                    <Button>
                      <Link>
                        منو بزرگ <ArrowDropDownIcon />
                      </Link>
                    </Button>

                    <div className="dropdown_menu megaMenu">
                      <div className="row">
                        <div className="col">
                          <h4 className="text-g">پیراهن و تی شرت</h4>
                          <ul className="mt-3 mb-0">
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col">
                          <h4 className="text-g">شلوار لی و کتان</h4>
                          <ul className="mt-3 mb-0">
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col">
                          <h4 className="text-g">عینک دودی و ساده</h4>
                          <ul className="mt-3 mb-0">
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                            <li>
                              <Link to={""}>سلام</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col">
                          <img
                            src={MegaMenyImg}
                            alt="عکس منو بزرگ"
                            className="megaMenuImg"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>بلاگ</Link>
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>
                        صفحه ها <ArrowDropDownIcon />
                      </Link>
                    </Button>

                    <div className="dropdown_menu ">
                      <ul className="p-0">
                        <li>
                          <Button>
                            <Link to={"/about"}>درباره ما</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>ارتباط با ما</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>حساب من</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>ورود</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>ثبت نام</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>فراموشی رمز عبور</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>بازنشانی پسورد</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>آموزش خرید</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>حفظ حریم خصوصی</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>مقررات استفاده از خدمات</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>صفحه ۴۰۴</Link>
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>ارتباط با ما</Link>
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-sm-2 part3 d-flex align-items-center">
              <div className="phonum d-flex align-items-center mr-auto">
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
        </div>
      </div>
    </>
  );
};

export default Nav;
