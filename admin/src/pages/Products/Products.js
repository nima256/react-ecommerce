import "./Product.css";

import DashboardBox from "../Dashboard/components/DashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import ProductsTable from "../../components/ProductsTable/ProductsTable";

const Products = () => {
  return (
    <>
      <div className="right-content w-100">
        <div className="dashboardBoxWrapper dashboardBoxWrapperr d-flex">
          <DashboardBox
            color={["#1da256", "#48d483"]}
            icon={<FaUserCircle />}
            grow={true}
          />
          <DashboardBox
            color={["#c012e2", "#eb64fe"]}
            icon={<FaShoppingCart />}
          />
          <DashboardBox
            color={["#2c78e5", "#60aff5"]}
            icon={<MdShoppingBag />}
          />
        </div>
        <ProductsTable />
      </div>
    </>
  );
};

export default Products;
