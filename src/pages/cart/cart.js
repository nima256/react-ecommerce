import "./cart.css";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

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

                <div className="mr-auto clearCart"><DeleteOutlineOutlinedIcon className='ml-1' />پاک کردن سبد خرید</div>
              </div>
            </div>


            <div className="col-md-5">
                
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
