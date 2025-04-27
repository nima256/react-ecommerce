import "./cart.css";

import Image1 from '../../assets/images/productDetails/1.webp'

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

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
                          <div className="img">
                            <img src={Image1} alt="" className='w-100' />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-md-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
