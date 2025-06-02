import "./Product.css";

import DashboardBox from "../../Dashboard/components/DashboardBox";
import { FaShoppingBag } from "react-icons/fa";
import { MdWidgets } from "react-icons/md";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import ProductsTable from "../../../components/ProductsTable/ProductsTable";

const Products = () => {
  return (
    <>
      <div className="right-content w-100">
        <div className="dashboardBoxWrapper productBoxWrapperr d-flex">
          <DashboardBox
            title="تعداد محصولات"
            num="۲۳"
            color={["#1da256", "#48d483"]}
            icon={<FaShoppingBag />}
            grow={true}
          />
          <DashboardBox
            title="تعداد دسته بندی ها"
            num="۱۱"
            color={["#c012e2", "#eb64fe"]}
            icon={<MdWidgets />}
            grow={true}
          />
          <DashboardBox
            title="تعداد شرکت ها"
            num="۳۱"
            color={["#2c78e5", "#60aff5"]}
            icon={<FaBuildingCircleCheck />}
          />
        </div>
        <ProductsTable />
      </div>
    </>
  );
};

export default Products;
