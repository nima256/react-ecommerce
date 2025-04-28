import "./cart.css";

import Image1 from "../../assets/images/productDetails/1.webp";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import QuantityBox from "../../components/quantityBox/quantityBox";

function Cart() {
  return (
    <>
      <section className="cartSection mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="d-flex align-items-center w-100">
                <div className="right">
                  <h1 className="hd mb-0">سبد خرید</h1>
                  <p>
                    <span className="text-g mb-0">۵</span> محصول در سبد خرید شما
                  </p>
                </div>

                <div className="mr-auto clearCart d-flex align-items-center cursor">
                  <DeleteOutlineOutlinedIcon className="ml-1" />
                  پاک کردن سبد خرید
                </div>
              </div>

              <div className="cartWrapper mt-4">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>محصول</th>
                        <th>قیمت واحد</th>
                        <th>تعداد</th>
                        <th>جمع قیمت</th>
                        <th>حذف</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="img">
                              <img src={Image1} alt="" className="w-100" />
                            </div>

                            <div className="info pr-4">
                              <Link to={""}>
                                <h5>
                                  لپ تاپ ایسوس TUF Gaming FA506NCR R7 7435HS 16G
                                  1T 4G RTX 3050
                                </h5>
                              </Link>
                            </div>
                          </div>
                        </td>

                        <td>
                          <span>۲۴,۳۴۲,۹۹۹</span>
                        </td>
                        <td>
                          <QuantityBox />
                        </td>

                        <td>
                          <span className="text-g">۲۴,۳۴۲,۹۹۹</span>
                        </td>

                        <td style={{ textAlign: "center" }}>
                          <span className="cursor">
                            <DeleteOutlineOutlinedIcon />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="img">
                              <img src={Image1} alt="" className="w-100" />
                            </div>

                            <div className="info pr-4">
                              <Link to={""}>
                                <h5>
                                  لپ تاپ ایسوس TUF Gaming FA506NCR R7 7435HS 16G
                                  1T 4G RTX 3050
                                </h5>
                              </Link>
                            </div>
                          </div>
                        </td>

                        <td>
                          <span>۲۴,۳۴۲,۹۹۹</span>
                        </td>
                        <td>
                          <QuantityBox />
                        </td>

                        <td>
                          <span className="text-g">۲۴,۳۴۲,۹۹۹</span>
                        </td>

                        <td style={{ textAlign: "center" }}>
                          <span className="cursor">
                            <DeleteOutlineOutlinedIcon />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="img">
                              <img src={Image1} alt="" className="w-100" />
                            </div>

                            <div className="info pr-4">
                              <Link to={""}>
                                <h5>
                                  لپ تاپ ایسوس TUF Gaming FA506NCR R7 7435HS 16G
                                  1T 4G RTX 3050
                                </h5>
                              </Link>
                            </div>
                          </div>
                        </td>

                        <td>
                          <span>۲۴,۳۴۲,۹۹۹</span>
                        </td>
                        <td>
                          <QuantityBox />
                        </td>

                        <td>
                          <span className="text-g">۲۴,۳۴۲,۹۹۹</span>
                        </td>

                        <td style={{ textAlign: "center" }}>
                          <span className="cursor">
                            <DeleteOutlineOutlinedIcon />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="img">
                              <img src={Image1} alt="" className="w-100" />
                            </div>

                            <div className="info pr-4">
                              <Link to={""}>
                                <h5>
                                  لپ تاپ ایسوس TUF Gaming FA506NCR R7 7435HS 16G
                                  1T 4G RTX 3050
                                </h5>
                              </Link>
                            </div>
                          </div>
                        </td>

                        <td>
                          <span>۲۴,۳۴۲,۹۹۹</span>
                        </td>
                        <td>
                          <QuantityBox />
                        </td>

                        <td>
                          <span className="text-g">۲۴,۳۴۲,۹۹۹</span>
                        </td>

                        <td>
                          <span className="cursor">
                            <DeleteOutlineOutlinedIcon />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-md-5 cartRightBox">
              <div className="card p-4 shadow">
                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-lightt">جمع قیمت کالا</h5>
                  <h3 className="mr-auto mb-0 font-weight-bold">
                    <span className="text-g">۲۴,۳۴۲,۹۹۹</span>
                  </h3>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-lightt">هزینه ارسال</h5>
                  <h3 className="mr-auto mb-0 font-weight-bold">
                    <span className="text-g">۹۸,۳۴۲</span>
                  </h3>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-lightt">قیمت تمام شده</h5>
                  <h3 className="mr-auto mb-0 font-weight-bold">
                    <span className="text-g">۲۴,۴۴۱,۳۴۱</span>
                  </h3>
                </div>

                <br />
                <Button className="btn-g btn-lg">تکمیل سفارش</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
