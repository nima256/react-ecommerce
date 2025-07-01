/* eslint-disable jsx-a11y/anchor-is-valid */
import "./product.css";
import productImage from "../../assets/images/category-image.png";
import Tooman from "../../assets/images/product/toman.svg";

import { Link } from "react-router-dom";

import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import { styled } from "@mui/material/styles";

import { ThemeProvider } from "@mui/material/styles";
import { cacheRtl, theme } from "./rtlTheme";
import { CacheProvider } from "@emotion/react";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Product = (props) => {
  const [productData, setProductData] = useState();
  const context = useContext(MyContext);

  useEffect(() => {
    setProductData(props.data);
  }, [props.data]);

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#3bb77e",
      color: "#fff",
      fontSize: 15,
    },
  }));

  const toPersianDigits = (num) => {
    if (num === null || num === undefined || isNaN(num)) return "";
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    const withCommas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return withCommas.replace(/\d/g, (digit) => persianDigits[digit]);
  };

  function extractImageUrl(str) {
    if (!str || typeof str !== "string") return null;

    const match = str.match(/url:\s*'([^']+)'/);
    return match ? match[1] : null;
  }

  return (
    <>
      <div className="productThumb">
        {props.tag &&
          (props.isLoading ? (
            <Skeleton width={50} />
          ) : (
            <span className={`badge ${props.tag}`}>
              {props.tag === "oneInStock"
                ? "تک موجود"
                : props.tag === "hot"
                ? "داغ"
                : props.tag === "new"
                ? "جدید"
                : props.tag === "best"
                ? "بهترین"
                : null}
            </span>
          ))}
        <Link to={`/product/${productData?.id}`}>
          {props.isLoading ? (
            <Skeleton height={250} />
          ) : (
            <div className="imgWrapper">
              <img
                src={
                  productData?.images?.[0]
                    ? extractImageUrl(productData?.images[0]) +
                      "?im=Resize=(420,420)"
                    : ""
                }
                alt=""
                className="w-100 productImg"
              />

              <div className="overlay transition">
                <ul className="list list-inline mb-0">
                  <LightTooltip
                    title="مقایسه"
                    slots={{
                      transition: Fade,
                    }}
                    slotProps={{
                      transition: { timeout: 600 },
                    }}
                  >
                    <li className="list-inline-item">
                      <a href="#" className="cursor">
                        <CompareArrowsIcon />
                      </a>
                    </li>
                  </LightTooltip>
                  <LightTooltip
                    title="دیدن سریع"
                    slots={{
                      transition: Fade,
                    }}
                    slotProps={{
                      transition: { timeout: 600 },
                    }}
                  >
                    <li className="list-inline-item">
                      <a className="cursor">
                        <RemoveRedEyeOutlinedIcon />
                      </a>
                    </li>
                  </LightTooltip>
                </ul>
              </div>
            </div>
          )}
        </Link>

        <div className="info dirRtl">
          {props.isLoading ? (
            <Skeleton width={50} />
          ) : (
            <span className="d-block catName">{productData?.catName}</span>
          )}
          {props.isLoading ? (
            <Skeleton width={80} />
          ) : (
            <h4 className="title">{productData?.name.substr(0,25)+'...'}</h4>
          )}
          {props.isLoading ? (
            <Skeleton width={150} />
          ) : (
            <CacheProvider value={cacheRtl}>
              <ThemeProvider theme={theme}>
                <Rating
                  name="read-only"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
              </ThemeProvider>
            </CacheProvider>
          )}

          {props.isLoading ? (
            <Skeleton width={200} />
          ) : (
            <div className="d-flex align-items-center mt-3">
              {productData?.offerPrice ? (
                <div className="d-flex align-items-center">
                  <div className="priceWrapper">
                    <span className="price text-g font-weight-bold">
                      {/* <span>۱,۱۲۹,۰۰۰</span> */}
                      <span>{toPersianDigits(productData?.offerPrice)}</span>
                      <img src={Tooman} alt="" className="toomanSvg" />
                    </span>
                  </div>
                  <div className="priceWrapper">
                    <span className="oldPrice">
                      {/* <span>۳,۵۱۴,۰۰۰</span> */}
                      <span>{toPersianDigits(productData?.price)}</span>
                      <img
                        src={Tooman}
                        alt=""
                        className="toomanSvg oldToomanSvg"
                      />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="d-flex align-items-center">
                  <span className="price text-g font-weight-bold">
                    {/* <span>۱,۱۲۹,۰۰۰</span> */}
                    <span>{toPersianDigits(productData?.price)}</span>
                    <img src={Tooman} alt="" className="toomanSvg" />
                  </span>
                </div>
              )}

              <Button className="bg-g mr-auto transition">
                <ShoppingCartOutlinedIcon />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
