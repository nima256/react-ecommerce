import "./topProductSection.css";
import TopProducts from "../../components/topProducts/topProducts";

const TopProductSection = () => {
  return (
    <section className="topProductSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <TopProducts title="پرفروش ترین ها" />
          </div>
          <div className="col">
            <TopProducts title="کالا های پرطرفدار" />
          </div>
          <div className="col">
            <TopProducts title="اخیرا اضافه شده" />
          </div>
          <div className="col">
            <TopProducts title="بالاترین امتیاز" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopProductSection;
