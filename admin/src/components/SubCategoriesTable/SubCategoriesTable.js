import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { MyContext } from "../../App";
import { deleteData, fetchDataFromApi } from "../../utils/api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoCloseSharp } from "react-icons/io5";

function SubCategoriesTable() {
  const [catData, setCatData] = useState([]);
  const context = useContext(MyContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    context.setProgress(20);
    fetchDataFromApi("/api/category").then((res) => {
      setCatData(res);
      context.setProgress(100);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteSubCat = (id) => {
    context.setProgress(30);
    deleteData(`/api/category/${id}`).then((res) => {
      context.setProgress(100);
      fetchDataFromApi("/api/category").then((res) => {
        setCatData(res);
        context.setProgress({
          open: true,
          error: false,
          msg: "زیر دسته بندی حذف شد.",
        });
      });
    });
  };

  return (
    <>
      <div className="card shadow border-0 p-3 mt-4">
        <div className="d-flex">
          <h3 className="hd">لیست ریز دسته بندی ها</h3>
          <Link to={"/subCategories/add"} className="me-auto">
            <Button className="btn-blue">افزودن زیر دسته بندی</Button>
          </Link>
        </div>
        <div className="table-responsive mt-3">
          <table className="table table-bordered v-align">
            <thead>
              <tr className="thead-styles">
                <th style={{ width: "100px" }}>عکس</th>
                <th>دسته بندی</th>
                <th>زیر دسته بندی ها</th>
              </tr>
            </thead>

            <tbody>
              {catData?.categoryList?.length !== 0 &&
                catData?.categoryList?.map((item, index) => {
                  if (item?.children?.length !== 0) {
                    return (
                      <tr>
                        <td>
                          <div
                            className="d-flex align-items-center"
                            style={{ width: "150px" }}
                          >
                            <div className="img card shadow m-0">
                              <LazyLoadImage
                                alt={"image"}
                                effect="blur"
                                className="w-100"
                                src={item?.images[0].url}
                              />
                            </div>
                          </div>
                        </td>
                        <td>{item.name}</td>
                        <td>
                          {item?.children?.length !== 0 &&
                            item?.children?.map((subCat, key) => {
                              return (
                                <span
                                  className="badge text-bg-primary mx-1"
                                  key={key}
                                >
                                  {subCat.name} &nbsp;
                                  <IoCloseSharp
                                    className="cursor"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => deleteSubCat(subCat._id)}
                                  />
                                </span>
                              );
                            })}
                        </td>
                      </tr>
                    );
                  }
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SubCategoriesTable;
