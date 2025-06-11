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
  deleteData,
  deleteImages,
  fetchDataFromApi,
  postData,
  uploadImage,
} from "../../../utils/api";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
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
  const [isFeaturedVal, setIsFeaturedVal] = useState("");
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [catData, setCatData] = useState([]);
  const formData = new FormData();
  const [formFields, setFormFields] = useState({
    name: "",
    images: [],
    subCat: "",
    description: "",
    price: null,
    offerPrice: null,
    subCatId: "",
    catName: "",
    catId: "",
    category: "",
    countInStock: null,
    rating: 0,
    isFeatured: null,
    weight: null,
  });
  const history = useNavigate();

  const context = useContext(MyContext);

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeSubCategory = (event) => {
    setSubCategoryVal(event.target.value);
  };

  const handleChangeisFeaturedVal = (event) => {
    setIsFeaturedVal(event.target.value);
    setFormFields(() => ({
      ...formFields,
      isFeatured: event.target.value,
    }));
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

  // For image
  const onChageFile = async (e, apiEndPoint) => {
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

  useEffect(() => {
    const isPageRefresh =
      window.performance &&
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isPageRefresh) {
      deleteData("/api/imageUpload/deleteAllImages");
    }
  }, []);

  const removeImg = async (index, imgUrl) => {
    try {
      await deleteImages(`/api/product/deleteImage?img=${imgUrl.url}`);

      const newPreviews = previews.filter((img) => img.url !== imgUrl.url);
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

  const addProduct = (e) => {
    e.preventDefault();

    const appendedArray = [...previews];

    formFields.images = appendedArray;

    if (
      formFields.name !== "" &&
      formFields.images.length > 0 &&
      formFields.subCat !== "" &&
      formFields.description !== "" &&
      formFields.price !== null &&
      formFields.subCatId !== "" &&
      formFields.catName !== "" &&
      formFields.catId !== "" &&
      formFields.countInStock !== null &&
      formFields.isFeatured !== null &&
      formFields.weight !== null
    ) {
      setIsLoading(true);

      postData("/api/product/create", formFields).then((res) => {
        setIsLoading(false);
        context.fetchProduct();

        deleteData("/api/imageUpload/deleteAllImages");

        history("/products");

        context.setAlertBox({
          open: true,
          error: false,
          msg: "محصول با موفقیت اضافه شد",
        });
      });
    } else {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "لطفا تمام اطلاعات را پر کنید",
      });
      return false;
    }
  };

  return (
    <>
      <div className="">
        <form className="form" onSubmit={addProduct}>
          <div className="right-content pb-0 w-100">
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
                      <div className="form-group">
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
                                <em value="">انتخاب کنید</em>
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
                      <div className="form-group">
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
                                <em value="">انتخاب کنید</em>
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
                      <div className="form-group">
                        <h6>محصول ویژه است؟</h6>
                        <CacheProvider value={cacheRtl}>
                          <ThemeProvider theme={theme}>
                            <Select
                              value={isFeaturedVal}
                              onChange={handleChangeisFeaturedVal}
                              displayEmpty
                              className="w-100"
                            >
                              <MenuItem value={null}>
                                <em value={null}>انتخاب کنید</em>
                              </MenuItem>

                              <MenuItem value={true}>بله</MenuItem>
                              <MenuItem value={false}>خیر</MenuItem>
                            </Select>
                          </ThemeProvider>
                        </CacheProvider>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <h6>قیمت</h6>
                        <input
                          type="number"
                          name="price"
                          value={formFields.price}
                          onChange={inputChange}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <h6>قیمت بعد تخفیف</h6>
                        <input
                          type="number"
                          name="offerPrice"
                          value={formFields.offerPrice}
                          onChange={inputChange}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <h6>موجودی کالا</h6>
                        <input
                          type="number"
                          name="countInStock"
                          value={formFields.countInStock}
                          onChange={inputChange}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <h6>وزن</h6>
                        <input
                          type="number"
                          name="weight"
                          value={formFields.weight}
                          onChange={inputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="imageBoxForRightContent w-100">
            <div className="row">
              <div className="col-sm-12">
                <div className="card p-4 mt-0">
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
                              onChageFile(e, "/api/product/upload")
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
          </div>
        </form>
      </div>
    </>
  );
}

export default ProductUpload;
