import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

import "./ProductUpload.css";

// rtl
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Button } from "@mui/material";
import { useRef } from "react";

const theme = (outerTheme) =>
  createTheme({
    direction: "rtl",
  });

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
// rtl end

function ProductUpload() {
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeCompany = (event) => {
    setCompany(event.target.value);
  };

  return (
    <>
      <div className="right-content w-100">
        <form action="" className="form">
          <div className="row">
            <div className="col-sm-12">
              <div className="card p-4">
                <h5 className="mb-4">اطلاعات اصلی</h5>
                <div className="form-group">
                  <h6>عنوان</h6>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <h6>توضیحات</h6>
                  <textarea rows={5} cols={10} name="" id=""></textarea>
                </div>

                <div className="row">
                  <div className="col">
                    <div class="form-group">
                      <h6>دسته بندی</h6>
                      <CacheProvider value={cacheRtl}>
                        <ThemeProvider theme={theme}>
                          <Select
                            value={category}
                            onChange={handleChangeCategory}
                            displayEmpty
                            className="w-100"
                          >
                            <MenuItem value="">
                              <em>انتخاب کنید</em>
                            </MenuItem>
                            <MenuItem value={"laptop"}>لپ تاپ</MenuItem>
                            <MenuItem value={"keyboard"}>کیبورد</MenuItem>
                            <MenuItem value={"mouse"}>ماوس</MenuItem>
                          </Select>
                        </ThemeProvider>
                      </CacheProvider>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-group">
                      <h6>شرکت</h6>
                      <CacheProvider value={cacheRtl}>
                        <ThemeProvider theme={theme}>
                          <Select
                            value={company}
                            onChange={handleChangeCompany}
                            displayEmpty
                            className="w-100"
                          >
                            <MenuItem value="">
                              <em>انتخاب کنید</em>
                            </MenuItem>
                            <MenuItem value={"laptop"}>ایسوس</MenuItem>
                            <MenuItem value={"keyboard"}>لنوو</MenuItem>
                            <MenuItem value={"mouse"}>اچ پی</MenuItem>
                          </Select>
                        </ThemeProvider>
                      </CacheProvider>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <h6>قیمت عادی</h6>
                      <input type="text" />
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <h6>قیمت بعد تخفیف</h6>
                      <input type="text" />
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <h6>وزن</h6>
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProductUpload;
