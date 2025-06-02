import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext, useEffect, useState } from "react";

import "./ProductUpload.css";

// rtl
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Button } from "@mui/material";
import { useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaRegImages } from "react-icons/fa";
import { CircularProgress } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MyContext } from "../../../App";
import {
  deleteImages,
  fetchDataFromApi,
  uploadImage,
} from "../../../utils/api";

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
  const [subCategoryVal, setSubCategoryVal] = useState("");
  const [subCategoryData, setSubCategoryData] = useState("");
  const [company, setCompany] = useState("");
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    subCat: "",
    description: "",
    brand: "",
    price: null,
    offerPrice: null,
    subCatId: "",
    catName: "",
    catId: "",
    category: "",
    countInStock: null,
    rating: 0,
    isFeatured: null,
    discount: null,
    productRam: [],
    size: [],
    productWeight: [],
  });

  const context = useContext(MyContext);

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeSubCategory = (event) => {
    setSubCategoryVal(event.target.value);
  };

  const handleChangeCompany = (event) => {
    setCompany(event.target.value);
  };

  const removeImg = async (index, imgUrl) => {
    try {
      await deleteImages(`/api/category/deleteImage?img=${imgUrl}`);

      const newPreviews = previews.filter((img) => img !== imgUrl);
      setPreviews(newPreviews);

      context.setAlertBox({
        open: true,
        error: false,
        msg: "تصویر حذف شد",
      });
    } catch (error) {
      console.error("Error deleting image:", error);
      context.setAlertBox({
        open: true,
        error: true,
        msg: "خطا در حذف تصویر",
      });
    }
  };

  const onChageFile = async (e, apiEndPoint) => {
    const formData = new FormData();
    const img_arr = [];

    try {
      const files = e.target.files;
      setUploding(true);

      for (let file of files) {
        if (
          file &&
          [
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/webp",
            "image/svg+xml",
          ].includes(file.type)
        ) {
          formData.append("images", file);
        } else {
          context.setAlertBox({
            open: true,
            error: true,
            msg: "لطفا فرمت مناسبی برای آپلود عکس انتخاب کنید",
          });
          setUploding(false);
          return;
        }
      }

      await uploadImage(apiEndPoint, formData);
      const response = await fetchDataFromApi("/api/imageUpload");

      if (response?.length) {
        response.forEach((item) => {
          item?.images?.forEach((img) => {
            img_arr.push(img);
          });
        });

        const uniqueArray = img_arr.filter((item) => !previews.includes(item));
        const appendedArray = [...previews, ...uniqueArray];

        setPreviews(appendedArray);

        setTimeout(() => {
          setUploding(false);
          context.setAlertBox({
            open: true,
            error: false,
            msg: " عکس با موفقیت آپلود شد",
          });
        }, 200);
      }
    } catch (error) {
      console.error(error);
      setUploding(false);
      const errorMsg =
        error?.response?.data?.error || "خطای ناشناخته‌ای رخ داده است";
      context.setAlertBox({
        open: true,
        error: true,
        msg: errorMsg,
      });
    }
  };

  const inputChange = (e) => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  const selectCat = (cat, id) => {
    formFields.catName = cat;
    formFields.catId = id;
  };

  const selectSubCat = (subCat, id) => {
    setFormFields(() => ({
      ...formFields,
      subCat: subCat,
      subCatId: id,
    }));
  };

  useEffect(() => {
    const subCatArr = [];

    context.catData?.categoryList?.length !== 0 &&
      context.catData?.categoryList?.map((cat, index) => {
        if (cat?.children.length !== 0) {
          cat?.children?.map((subCat) => {
            subCatArr.push(subCat);
          });
        }
      });

    setSubCategoryData(subCatArr);
  }, [context.catData]);

  return (
    <>
      <div className="right-content pb-0 w-100">
        <form action="" className="form">
          <div className="row">
            <div className="col-sm-12">
              <div className="card p-4">
                <h5 className="mb-4">اطلاعات اصلی</h5>
                <div className="form-group">
                  <h6>عنوان</h6>
                  <input
                    type="text"
                    name="name"
                    value={formFields.name}
                    onChange={inputChange}
                  />
                </div>
                <div className="form-group">
                  <h6>توضیحات</h6>
                  <textarea
                    rows={5}
                    cols={10}
                    value={formFields.description}
                    name="description"
                    onChange={inputChange}
                  ></textarea>
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
                            {context.catData?.categoryList?.length !== 0 &&
                              context.catData?.categoryList?.map(
                                (cat, index) => {
                                  return (
                                    <MenuItem
                                      value={cat._id}
                                      key={index}
                                      onClick={() =>
                                        selectCat(cat.name, cat._id)
                                      }
                                    >
                                      {cat.name}
                                    </MenuItem>
                                  );
                                }
                              )}
                          </Select>
                        </ThemeProvider>
                      </CacheProvider>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-group">
                      <h6>زیر دسته بندی</h6>
                      <CacheProvider value={cacheRtl}>
                        <ThemeProvider theme={theme}>
                          <Select
                            value={subCategoryVal}
                            onChange={handleChangeSubCategory}
                            displayEmpty
                            className="w-100"
                          >
                            <MenuItem value="">
                              <em>انتخاب کنید</em>
                            </MenuItem>
                            {subCategoryData?.length !== 0 &&
                              subCategoryData?.map((subCat, index) => {
                                return (
                                  <MenuItem
                                    value={subCat._id}
                                    key={index}
                                    onClick={() =>
                                      selectSubCat(subCat.name, subCat._id)
                                    }
                                  >
                                    {subCat.name}
                                  </MenuItem>
                                );
                              })}
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
                      <input
                        type="text"
                        name="price"
                        value={formFields.price}
                        onChange={inputChange}
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <h6>قیمت بعد تخفیف</h6>
                      <input type="text" name="offerPrice" value={formFields.offerPrice} onChange={inputChange} />
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
      <div className="imageBoxForRightContent w-100">
        <form action="" className="form">
          <div className="row">
            <div className="col-sm-12">
              <div className="card p-4">
                <div className="imagesUploadSec">
                  <h5 className="mb-3">تصویر دسته بندی</h5>
                </div>

                <div className="imgUploadBox d-flex align-item-center">
                  {previews?.length !== 0 &&
                    previews?.map((img, index) => {
                      return (
                        <div className="uploadBox" key={index}>
                          <span
                            className="remove"
                            onClick={() => removeImg(index, img)}
                          >
                            <IoCloseSharp />
                          </span>
                          <div className="box">
                            <LazyLoadImage
                              alt={"image"}
                              effect="blur"
                              className="w-100"
                              src={img.url}
                            />
                          </div>
                        </div>
                      );
                    })}

                  <div className="uploadBox">
                    {uploading === true ? (
                      <div className="progressBar text-center align-items-center justify-content-center flex-column">
                        <CircularProgress />
                        <span>در حال آپلود</span>
                      </div>
                    ) : (
                      <>
                        <input
                          type="file"
                          multiple
                          name="images"
                          onChange={(e) =>
                            onChageFile(e, "/api/category/upload")
                          }
                        />
                        <div className="info">
                          <FaRegImages />
                          <h5>آپلود عکس</h5>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <br />

                <Button type="submit" className="btn-blue btn-lg w-100">
                  <FaCloudUploadAlt />
                  &nbsp;
                  {isLoading === true ? (
                    <CircularProgress color="inherit" className="loader" />
                  ) : (
                    "انتشار"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProductUpload;
