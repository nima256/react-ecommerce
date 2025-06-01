import "./popularProducts.css";

import Product from "../../components/product/product";

import { MyContext } from "../../App";
import { useContext } from "react";

const PopularProducts = () => {
  const context = useContext(MyContext);

  return (
    <section className="homeProducts">
      <div className="container-fluid forPaddingLeft">
        <div className="d-flex align-items-center ">
          <h2 className="hd mb-0 mt-0">محصولات پرطرفدار</h2>
          {context.categories?.categoryList?.length > 0 && (
            <ul className="list list-inline mr-auto filterTab mb-0">
              {context.categories?.categoryList?.map((cat) => {
                return (
                  cat?.children?.length !== 0 &&
                  cat?.children?.map((subCat, index) => {
                    return (
                      <li className="list-inline-item">
                        <a className="cursor transition">{subCat?.name}</a>
                      </li>
                    );
                  })
                );
              })}
            </ul>
          )}
        </div>

        <div className="productRow">
          <div className="item">
            <Product tag="oneInStock" />
          </div>
          <div className="item">
            <Product tag="oneInStock" />
          </div>
          <div className="item">
            <Product tag="oneInStock" />
          </div>
          <div className="item">
            <Product tag="hot" />
          </div>
          <div className="item">
            <Product tag="new" />
          </div>
          <div className="item">
            <Product tag="best" />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product tag="best" />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product tag="new" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
