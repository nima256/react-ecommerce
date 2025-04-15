import "./newsLetter.css";

import Button from "@mui/material/Button";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const NewsLetter = () => {
  return (
    <>
      <div className="newsLetterBanner">
        <SendOutlinedIcon />
        <input
          dir="ltr"
          type="text"
          placeholder="آدرس ایمیل خود را وارد کنید"
        />
        <Button className="bg-g">تایید</Button>
      </div>
    </>
  );
};

export default NewsLetter;
