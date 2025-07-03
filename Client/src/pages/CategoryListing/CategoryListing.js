import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import "./CategoryListing.css";

import Sidebar from "../../components/sidebar/sidebar";
import { MyContext } from "../../App";

import { ThemeProvider } from "@mui/material/styles";
import { cacheRtl, theme } from "./rtlTheme";
import { CacheProvider } from "@emotion/react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import Skeleton from "react-loading-skeleton";

import { Button, ClickAwayListener } from "@mui/material";
import { fetchDataFromApi } from "../../utils/api";
import Product from "../../components/product/product";

const CategoryListing = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [isOpenDropDown2, setIsOpenDropDown2] = useState(false);

  const [filterId, setFilterId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState([]);

  const context = useContext(MyContext);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilterId("");

    let url = window.location.href;
    let apiEndPoint = "";

    if (url.includes("subCat")) {
      apiEndPoint = `/api/product?subCat=${id}`;
    }
    if (url.includes("category")) {
      apiEndPoint = `/api/product?category=${id}`;
    }

    setIsLoading(true);
    fetchDataFromApi(`${apiEndPoint}`).then((res) => {
      setProductData(res);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });

    fetchDataFromApi(`/api/product/`);
  }, [id]);

  function toPersianDigits(number) {
    return number?.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  }

  const filterByPrice = (price, catId) => {
    setIsLoading(true);

    let apiEndPint = `/api/product?minPrice=${price[0]}&maxPrice=${price[1]}&catId=${catId}`;

    fetchDataFromApi(apiEndPint).then((res) => {
      setProductData(res);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });
  };

  return (
    <>
      <section className="shoppingPage">
        <div className="container-fluid">
          <div className="shoppingData">
            <div className="row">
              <div className="col-md-3 sidebarWrapper">
                <CacheProvider value={cacheRtl}>
                  <ThemeProvider theme={theme}>
                    <Sidebar catId={id} filterByPrice={filterByPrice} />
                  </ThemeProvider>
                </CacheProvider>
              </div>

              <div className="col-md-9 shoppingDataRightContent homeProducts pt-0 productsForShop">
                <div className="topStrip d-flex aling-items-center">
                  {isLoading ? (
                    <Skeleton width={100} />
                  ) : (
                    <p className="mb-0 ">
                      برای شما{" "}
                      <span className="text-success">
                        {toPersianDigits(productData?.products?.length)}
                      </span>{" "}
                      تا محصول پیدا شد
                    </p>
                  )}

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

                <div className="productRow pr-4 productsForShopRow w-100">
                  {productData?.products?.length !== 0 ? (
                    productData?.products?.map((item, index) => {
                      return (
                        <div className="item" key={index}>
                          <Product data={item} isLoading={isLoading} />
                        </div>
                      );
                    })
                  ) : (
                    <div className="">
                      <h4>محصولی یافت نشد</h4>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryListing;
