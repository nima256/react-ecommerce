import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import "./shop.css";

import Sidebar from "../../components/sidebar/sidebar";
import { MyContext } from "../../App";

import { ThemeProvider } from "@mui/material/styles";
import { cacheRtl, theme } from "./rtlTheme";
import { CacheProvider } from "@emotion/react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

import { Button, ClickAwayListener } from "@mui/material";

const Shop = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [isOpenDropDown2, setIsOpenDropDown2] = useState(false);

  const context = useContext(MyContext);

  const { id } = useParams();

  useEffect(() => {
    alert(id);
  }, [id]);

  return (
    <>
      <section className="shoppingPage">
        <div className="container-fluid">
          <div className="shoppingData">
            <div className="row">
              <div className="col-md-3 sidebarWrapper">
                <CacheProvider value={cacheRtl}>
                  <ThemeProvider theme={theme}>
                    <Sidebar />
                  </ThemeProvider>
                </CacheProvider>
              </div>

              <div className="col-md-9 shoppingDataRightContent homeProducts pt-0 productsForShop">
                <div className="topStrip d-flex aling-items-center">
                  <p className="mb-0 ">
                    برای شما <span className="text-success">۲۹</span> تا محصول
                    پیدا شد
                  </p>
                  <div className="mr-auto d-flex align-items-center">
                    <ClickAwayListener
                      onClickAway={() => setIsOpenDropDown(false)}
                    >
                      <div className="tab_ position-relative transition">
                        <Button
                          className="btn_"
                          onClick={() => setIsOpenDropDown(!isOpenDropDown)}
                        >
                          <GridViewOutlinedIcon className="ml-3" />
                          نمایش: ۵۰
                        </Button>
                        {isOpenDropDown && (
                          <ul className="dropdownMenu">
                            <li>
                              <Button
                                onClick={() =>
                                  setIsOpenDropDown(!isOpenDropDown)
                                }
                              >
                                ۵۰
                              </Button>
                            </li>
                            <li>
                              <Button
                                onClick={() =>
                                  setIsOpenDropDown(!isOpenDropDown)
                                }
                              >
                                ۱۰۰
                              </Button>
                            </li>
                            <li>
                              <Button
                                onClick={() =>
                                  setIsOpenDropDown(!isOpenDropDown)
                                }
                              >
                                ۱۵۰
                              </Button>
                            </li>
                            <li>
                              <Button
                                onClick={() =>
                                  setIsOpenDropDown(!isOpenDropDown)
                                }
                              >
                                ۲۰۰
                              </Button>
                            </li>
                            <li>
                              <Button
                                onClick={() =>
                                  setIsOpenDropDown(!isOpenDropDown)
                                }
                              >
                                همه
                              </Button>
                            </li>
                          </ul>
                        )}
                      </div>
                    </ClickAwayListener>
                    <ClickAwayListener
                      onClickAway={() => setIsOpenDropDown2(false)}
                    >
                      <div className="tab_ mr-5 position-relative">
                        <Button
                          className="btn_"
                          onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}
                        >
                          <FilterListOutlinedIcon className="ml-3" />
                          مرتب سازی با: ویژه
                        </Button>
                        {isOpenDropDown2 && (
                          <ul className="dropdownMenu">
                            <li>
                              <Button
                                onClick={() =>
                                  setIsOpenDropDown2(!isOpenDropDown2)
                                }
                              >
                                ویژه
                              </Button>
                            </li>
                            <li>
                              <Button
                                onClick={() =>
                                  setIsOpenDropDown2(!isOpenDropDown2)
                                }
                              >
                                قیمت: کم به زیاد
                              </Button>
                            </li>
                            <li>
                              <Button
                                onClick={() =>
                                  setIsOpenDropDown2(!isOpenDropDown2)
                                }
                              >
                                قیمت: زیاد به کم
                              </Button>
                            </li>
                            <li>
                              <Button
                                onClick={() =>
                                  setIsOpenDropDown2(!isOpenDropDown2)
                                }
                              >
                                تاریخ انتشار
                              </Button>
                            </li>
                            <li>
                              <Button
                                onClick={() =>
                                  setIsOpenDropDown2(!isOpenDropDown2)
                                }
                              >
                                امتیاز
                              </Button>
                            </li>
                          </ul>
                        )}
                      </div>
                    </ClickAwayListener>
                  </div>
                </div>

                <div className="productRow pr-4 productsForShopRow w-100"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
