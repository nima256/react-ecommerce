import { Button } from "@mui/material";
import "./notFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <section className="notFound">
        <div className="container-fluid">
          <div className="box">
            <img src="" alt="" />
            <br />
            <br />
            <h1>صفحه پیدا نشد</h1>
            <p>
              صفحه ای که شما به دنبالش هستید حذف شده است. از صفحه اصلی بازدید
              کنید یا مشکل را با ما در میان بگذارید.
            </p>
            <br />
            <div className="d-flex align-items-center justify-content-center">
              <Link to={"/"}>
                <Button className="btn-g btn-lg">بازگشت به صفحه اصلی</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
