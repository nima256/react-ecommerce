import "./CategoriesTable.css";

import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { MyContext } from "../../App";
import { deleteData, fetchDataFromApi } from "../../utils/api";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CategoriesTable() {
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

  const deleteCat = (id) => {
    context.setProgress(30);
    deleteData(`/api/category/${id}`).then((res) => {
      context.setProgress(100);
      fetchDataFromApi("/api/category").then((res) => {
        setCatData(res);
      });
    });
  };

  console.log(catData);

  return (
    <>
      <div className="card shadow border-0 p-3 mt-4">
        <div className="d-flex">
          <h3 className="hd">لیست دسته بندی ها</h3>
          <Link to={"/category/add"} className="me-auto">
            <Button className="btn-blue">افزودن دسته بندی</Button>
          </Link>
        </div>
        <div className="table-responsive mt-3">
          <table className="table table-bordered v-align">
            <thead>
              <tr className="thead-styles">
                <th>عکس</th>
                <th>دسته بندی</th>
                <th>رنگ</th>
                <th>عملیات ها</th>
              </tr>
            </thead>

            <tbody>
              {catData?.categoryList?.length !== 0 &&
                catData?.categoryList?.map((cat, index) => {
                  return (
                    <tr key={cat._id}>
                      <td>
                        <div
                          className="imgWrapper"
                          style={{ width: "50px", flex: "0 0 50px" }}
                        >
                          <div className="img card shadow m-0">
                            <LazyLoadImage
                              alt={"image"}
                              effect="blur"
                              className="w-100"
                              src={cat?.images[0]}
                            />
                          </div>
                        </div>
                      </td>

                      <td>{cat?.name}</td>
                      <td>{cat?.color}</td>
                      <td>
                        <div className="actions d-flex align-items-center justify-content-evenly">
                          <Link to={`/category/edit/${cat?._id}`}>
                            <Button className="pencil">
                              <FaPencilAlt />
                            </Button>
                          </Link>

                          <Button
                            className="delete"
                            onClick={() => deleteCat(cat._id)}
                          >
                            <MdDelete />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CategoriesTable;
