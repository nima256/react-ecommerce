import "./product.css";
import productImage from "../../assets/images/category-image.png";
import Tooman from "../../assets/images/toman.svg";

import { Link } from "react-router-dom";

import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import { styled } from "@mui/material/styles";

const Product = ({ tag }) => {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#3bb77e",
      color: "#fff",
      fontSize: 15,
    },
  }));

  return (
    <>
      <div className="productThumb">
        {tag && (
          <span className={`badge ${tag}`}>
            {tag === "oneInStock"
              ? "تک موجود"
              : tag === "hot"
              ? "داغ"
              : tag === "new"
              ? "جدید"
              : tag === "best"
              ? "بهترین"
              : null}
          </span>
        )}
        <Link>
          <div className="imgWrapper">
            <img src={productImage} alt="" className="w-100 productImg" />

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
                    <a className="cursor">
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
        </Link>

        <div className="info dirRtl">
          <span className="d-block catName">لی</span>
          <h4 className="title">
            <Link>تسشینب نیسشتب نمسشیب نتسش یبنم تتنسب </Link>
          </h4>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          <span className="brand d-block text-g">
            از <Link className="text-g">اکبر کده</Link>
          </span>

          <div className="d-flex align-items-center mt-3">
            <div className="d-flex align-items-center">
              <span className="price text-g font-weight-bold">
                ۱,۱۲۹,۰۰۰ <img src={Tooman} alt="" className="toomanSvg" />
              </span>
              <span className="oldPrice">
                ۳,۵۱۴,۰۰۰ <img src={Tooman} alt="" className="toomanSvg" />
              </span>
            </div>
            <Button className="bg-g mr-auto transition">
              اضافه کردن
              <ShoppingCartOutlinedIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
