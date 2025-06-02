import "./AddCategory.css";

import { IoCloseSharp } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaRegImages } from "react-icons/fa";
import { Button, CircularProgress } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../App";
import {
  deleteData,
  deleteImages,
  fetchDataFromApi,
  postData,
  uploadImage,
} from "../../../utils/api";

function AddCategory() {
  const [isLoading, setIsLoading] = useState(false);
  const [uploading, setUploding] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    images: [],
    color: "",
    slug: "",
    parentId: "",
  });

  const context = useContext(MyContext);

  const [previews, setPreviews] = useState([]);

  const history = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeInput = (e) => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  const uniqueArrayRef = useRef([]);

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

  useEffect(() => {
    // This works in modern browsers
    const isPageRefresh =
      window.performance &&
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isPageRefresh) {
      deleteData("/api/imageUpload/deleteAllImages");
    }
  }, []);

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

  const addCat = (e) => {
    e.preventDefault();

    const appendedArray = [...previews, ...uniqueArrayRef.current];

    formFields.slug = formFields.name;
    formFields.images = appendedArray;

    if (
      formFields.name !== "" &&
      formFields.color !== "" &&
      appendedArray.length !== 0
    ) {
      setIsLoading(true);

      postData("/api/category/create", formFields).then((res) => {
        setIsLoading(false);
        context.fetchCategory();

        deleteData("/api/imageUpload/deleteAllImages");

        history("/categories");

        context.setAlertBox({
          open: true,
          error: false,
          msg: "دسته بندی با موفقیت اضافه شد",
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
      <div className="right-content w-100">
        <form className="form" onSubmit={addCat}>
          <div className="row">
            <div className="col-sm-9">
              <div className="card p-4 mt-0">
                <div className="form-group">
                  <h5 className="mb-3">نام دسته بندی</h5>
                  <input
                    type="text"
                    name="name"
                    onChange={changeInput}
                    value={formFields.name}
                  />
                </div>
                <div className="form-group">
                  <h5 className="mb-3">رنگ</h5>
                  <input
                    type="text"
                    name="color"
                    onChange={changeInput}
                    value={formFields.color}
                  />
                </div>

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

export default AddCategory;
