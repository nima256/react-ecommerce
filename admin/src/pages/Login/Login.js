import "./Login.css";
import Logo from "../../assets/images/Header/Logo.jpg";

import { MyContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsLoginPage(true);
  }, [context]);

  const focusInput = (index) => {
    setInputIndex(index);
  };

  return (
    <>
      <section className="loginSection">
        <div className="loginBox">
          <div className="logo text-center">
            <img src={Logo} alt="" width="80px" />
            <h5 className="fw-bold">ورود به تشنسمیبت</h5>
          </div>

          <div className="wrapper mt-3 card border shadow">
            <form action="">
              <div
                className={`form-group mb-3 position-relative ${
                  inputIndex === 0 && "focus"
                }`}
              >
                <span className="icon">
                  <MdEmail />
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="ایمیل خود را وارد کنید"
                  onFocus={() => focusInput(0)}
                  onBlur={() => setInputIndex(null)}
                />
              </div>

              <div
                className={`form-group mb-3 position-relative ${
                  inputIndex === 1 && "focus"
                }`}
              >
                <span className="icon">
                  <MdPassword />
                </span>
                <input
                  type={isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="پسورد خود را وارد کنید"
                  onFocus={() => focusInput(1)}
                  onBlur={() => setInputIndex(null)}
                />

                <span
                  className="toggleShowPassword"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  {isShowPassword === true ? <IoEyeOffSharp /> : <IoEyeSharp />}
                </span>
              </div>


              <div className="form-group mb-3">
                <Button className='btn-blue btn-lg w-100'>ورود</Button>
              </div>
              
              <div className="form-group text-center">
                <Link to={'/forgot-password'} className='link'>فراموشی رمز عبور</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
