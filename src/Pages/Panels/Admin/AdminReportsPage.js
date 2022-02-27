import YourTransaction from "../../../Components/Panel/Admin/AdminReports/YourTransaction";
import FundBalance from "../../../Components/Panel/Admin/AdminReports/FundBalance";

export default () => {
  return (
    <div className="h-[59vw]">
      <YourTransaction />
      <FundBalance />
    </div>
  );
};
