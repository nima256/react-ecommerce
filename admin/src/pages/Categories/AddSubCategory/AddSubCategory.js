import { IoCloseSharp } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaRegImages } from "react-icons/fa";
import { Button, CircularProgress, MenuItem, Select } from "@mui/material";
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

function AddSubCategory() {
  const [isLoading, setIsLoading] = useState(false);
  const [uploading, setUploding] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    images: [],
    color: "",
    slug: "",
    parentId: "",
  });
  const [categoryVal, setCategoryValue] = useState("");
  const [catData, setCatData] = useState([]);
  console.log(catData);

  const context = useContext(MyContext);

  const formData = new FormData();

  const history = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    context.setProgress(20);
    fetchDataFromApi("/api/category").then((res) => {
      setCatData(res);
      context.setProgress(100);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeInput = (e) => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  const addCat = (e) => {
    e.preventDefault();

    formFields.slug = formFields.name;

    if (formFields.name !== "" && formFields.parentId !== "") {
      setIsLoading(true);

      postData("/api/category/create", formFields).then((res) => {
        setIsLoading(false);
        context.fetchCategory();

        history("/subCategories");
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

  const hangleChangeCategory = (event) => {
    setCategoryValue(event.target.value);
    setFormFields(() => ({
      ...formFields,
      name: event.target.value,
    }));
  };

  const selectCat = (cat, id) => {
    formFields.parentId = id;
  };

  return (
    <>
      <div className="right-content w-100">
        <form className="form" onSubmit={addCat}>
          <div className="row">
            <div className="col-sm-9">
              <div className="card p-4 mt-0">
                <div className="form-group">
                  <h5 className="mb-3">دسته بندی والد</h5>
                  <Select
                    value={categoryVal}
                    onChange={hangleChangeCategory}
                    displayEmpty
                    inputProps={{ "aria-label": "Whithout label" }}
                  >
                    <MenuItem value="">
                      <em value={null}>None</em>
                    </MenuItem>
                    {catData?.categoryList?.length !== 0 &&
                      catData?.categoryList?.map((cat, index) => {
                        return (
                          <MenuItem
                            value={cat.id}
                            key={index}
                            onClick={() => selectCat(cat.name, cat._id)}
                          >
                            {cat.name}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </div>
                <div className="form-group">
                  <h5 className="mb-3">زیر دسته بندی</h5>
                  <input
                    type="text"
                    name="name"
                    onChange={changeInput}
                    value={formFields.name}
                  />
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

export default AddSubCategory;
