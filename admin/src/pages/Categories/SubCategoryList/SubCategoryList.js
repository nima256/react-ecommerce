import DashboardBox from "../../Dashboard/components/DashboardBox";
import { MdWidgets } from "react-icons/md";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import SubCategoriesTable from "../../../components/SubCategoriesTable/SubCategoriesTable";

function SubCategoryList() {
  return (
    <>
      <div className="right-content w-100">
        <div className="dashboardBoxWrapper CategoryBoxWrapperr d-flex">
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
        <SubCategoriesTable />
      </div>
    </>
  );
}

export default SubCategoryList;
