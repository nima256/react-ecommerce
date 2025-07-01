import "./ProductEdit.css";

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../../App";
import {
  deleteData,
  deleteImages,
  editData,
  fetchDataFromApi,
  uploadImage,
} from "../../../utils/api";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Button } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaRegImages } from "react-icons/fa";
import { CircularProgress } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";

const theme = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function ProductEdit() {
  const [categoryVal, setCategoryVal] = useState("");
  const [subCatVal, setSubCatVal] = useState("");
  const [isFeaturedValue, setIsFeaturedValue] = useState("");
  const [catData, setCatData] = useState([]);
  const [subCatData, setSubCatData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploading, setUploding] = useState(false);
  const [product, setProduct] = useState([]);
  const [previews, setPreviews] = useState([]);
  let { id } = useParams();
  const history = useNavigate();
  const [formFields, setFormFields] = useState({
    name: "",
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

  const context = useContext(MyContext);

  const formData = new FormData();

  useEffect(() => {
    const isPageRefresh =
      window.performance &&
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isPageRefresh) {
      deleteData("/api/imageUpload/deleteAllImages");
    }
  }, []);

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

    setSubCatData(subCatArr);
  }, [context.catData]);

  useEffect(() => {
    window.scrollTo(0, 0);

    setCatData(context.catData);

    fetchDataFromApi("/api/imageUpload").then((res) => {
      res?.map((item) => {
        item?.images?.map((img) => {
          deleteImages(`/api/category/deleteImage?img=${img}`).then((res) => {
            deleteData("/api/imageUpload/deleteAllImages");
          });
        });
      });
    });

    fetchDataFromApi(`/api/product/${id}`).then((res) => {
      setProduct(res);
      setFormFields({
        name: res.name,
        subCat: res.subCat,
        description: res.description,
        price: res.price,
        offerPrice: res.offerPrice,
        subCatId: res.subCatId,
        catName: res.catName,
        catId: res.catId,
        category: res.category,
        countInStock: res.countInStock,
        rating: res.rating,
        isFeatured: res.isFeatured,
        weight: res.weight,
      });
      setPreviews(res.images);
      context.setProgress(100);
    });
  }, []);

  const handleChangeCategory = (event) => {
    setCategoryVal(event.target.value);
    setFormFields(() => ({
      ...formFields,
      category: event.target.value,
    }));
  };

  const handleChangeSubCategory = (event) => {
    setSubCatVal(event.target.value);
    setFormFields(() => ({
      ...formFields,
      subCat: event.target.value,
    }));

    formFields.subCatId = event.target.value;
  };

  const handleChangeisFeaturedValue = (event) => {
    setIsFeaturedValue(event.target.value);
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

  let img_arr = [];
  let uniqueArray = [];

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

  const editProduct = (e) => {
    e.preventDefault();

    const appendedArray = [...previews, ...uniqueArray];

    img_arr = [];

    formData.append("name", formFields.name);
    formData.append("subCat", formFields.subCat);
    formData.append("description", formFields.description);
    formData.append("price", formFields.price);
    formData.append("offerPrice", formFields.offerPrice);
    formData.append("subCatId", formFields.subCatId);
    formData.append("catName", formFields.catName);
    formData.append("catId", formFields.catId);
    formData.append("category", formFields.category);
    formData.append("countInStock", formFields.countInStock);
    formData.append("rating", formFields.rating);
    formData.append("isFeatured", formFields.isFeatured);
    formData.append("weight", formFields.weight);

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

      editData(`/api/product/${id}`, formFields).then((res) => {
        setIsLoading(false);

        deleteData("/api/imageUpload/deleteAllImages");

        history("/products");

        context.setAlertBox({
          open: true,
          error: false,
          msg: "محصول با موفقیت ویرایش شد",
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

  function extractImageUrl(str) {
    if (!str || typeof str !== "string") return null;

    const match = str.match(/url:\s*'([^']+)'/); // extract value between url: '...'
    return match ? match[1] : null;
  }

  return (
    <>
      <div className="">
        <form className="form" onSubmit={editProduct}>
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
                              value={categoryVal}
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
                              value={subCatVal}
                              onChange={handleChangeSubCategory}
                              displayEmpty
                              className="w-100"
                            >
                              <MenuItem value="">
                                <em value="">انتخاب کنید</em>
                              </MenuItem>
                              {subCatData?.length !== 0 &&
                                subCatData?.map((subCat, index) => {
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
                              value={isFeaturedValue}
                              onChange={handleChangeisFeaturedValue}
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
                        console.log();
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
                                src={extractImageUrl(img)}
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

export default ProductEdit;
