import "./Orders.css";
import DashboardBox from "../../Dashboard/components/DashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import OrdersTable from "../../../components/OrdersTable/OrdersTable";

function Orders() {
  return (
    <>
      <div className="right-content w-100">
        <div className="dashboardBoxWrapper ordersBoxWrapperr d-flex">
          <DashboardBox
            title="در انتظار تایید"
            num="۲"
            color={["#1da256", "#48d483"]}
            icon={<FaUserCircle />}
            grow={true}
          />
          <DashboardBox
            title="در حال ارسال"
            num="۱"
            color={["#c012e2", "#eb64fe"]}
            icon={<FaShoppingCart />}
          />
          <DashboardBox
            title="تکمیل شده"
            num="۲۱"
            color={["#2c78e5", "#60aff5"]}
            icon={<MdShoppingBag />}
            grow={true}
          />
          <DashboardBox
            title="لغو شده"
            num="۵"
            color={["#c012e2", "#eb64fe"]}
            icon={<MdShoppingBag />}
            grow={true}
          />
        </div>
        <OrdersTable />
      </div>
    </>
  );
}

export default Orders;
