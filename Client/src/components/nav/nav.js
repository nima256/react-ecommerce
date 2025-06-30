/* eslint-disable jsx-a11y/anchor-is-valid */
import "./nav.css";
import MegaMenyImg from "../../assets/images/navMegaMenu/megaMenu.png";

import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Nav = (props) => {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    setNavData(props.data);
  }, []);

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
                    <Link to={"/"}>
                      <Button>خانه</Button>
                    </Link>
                  </li>
                  {navData !== undefined &&
                    navData?.length !== 0 &&
                    navData
                      ?.filter((item, idx) => idx < 3)
                      .map((item, index) => {
                        return (
                          <li className="list-inline-item" key={index}>
                            <Link to={`/category/${item?.id}`}>
                              <Button>
                                {item.name}
                                {item?.children?.length !== 0 && (
                                  <MdKeyboardArrowDown
                                    className={`rotateIcon`}
                                  />
                                )}
                              </Button>
                            </Link>
                            {item?.children?.length !== 0 && (
                              <div className="dropdown_menu">
                                <ul className="mb-0 ps-0">
                                  {item?.children.map((item_, index_) => {
                                    return (
                                      <li
                                        key={index_}
                                        style={{ width: "100%" }}
                                      >
                                        <Link
                                          to={`/category/subCat/${item?.id}`}
                                        >
                                          <Button
                                            style={{
                                              width: "100%",
                                              textAlign: "right",
                                              justifyContent: "flex-start",
                                            }}
                                          >
                                            {item_.name}
                                          </Button>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            )}
                          </li>
                        );
                      })}
                  <li className="list-inline-item">
                    <Link to={""}>
                      <Button>درباره ما</Button>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={"/shop"}>
                      <Button>فروشگاه</Button>
                    </Link>
                  </li>
                  <li className="list-inline-item position-static">
                    <Link>
                      <Button>
                        منو بزرگ <ArrowDropDownIcon />
                      </Button>
                    </Link>

                    <div className="dropdown_menu megaMenu">
                      <div className="row">
                        {navData !== undefined &&
                          navData?.length !== 0 &&
                          navData
                            ?.filter((item, idx) => idx < 6)
                            .map((item, index) => {
                              return (
                                <div className="col" key={index}>
                                  <Link to={`/category/${item?.id}`}>
                                    <h4 className="text-g">{item?.name}</h4>
                                  </Link>

                                  {item?.children?.length !== 0 && (
                                    <ul className="mt-3 mb-0">
                                      {item?.children?.map((item_, index_) => {
                                        return (
                                          <li key={index_}>
                                            <Link
                                              to={`/category/subCat/${item_?.id}`}
                                            >
                                              {item_?.name}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  )}
                                </div>
                              );
                            })}
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
                    <Link>
                      <Button>بلاگ</Button>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link>
                      <Button>
                        صفحه ها <ArrowDropDownIcon />
                      </Button>
                    </Link>

                    <div className="dropdown_menu ">
                      <ul className="p-0">
                        <li>
                          <Link to={"/about"}>
                            <Button>درباره ما</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/about"}>
                            <Button>ارتباط با ما</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/about"}>
                            <Button>حساب من</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/about"}>
                            <Button>ورود</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/about"}>
                            <Button>ثبت نام</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/about"}>
                            <Button>فراموشی رمز عبور</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/about"}>
                            <Button>بازنشانی پسورد</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/about"}>
                            <Button>آموزش خرید</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/about"}>
                            <Button>حریم خصوصی</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/about"}>
                            <Button>شرایط استفاده</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/about"}>
                            <Button>صفحه ۴۰۴</Button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <Link>
                      <Button>ارتباط با ما</Button>
                    </Link>
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
