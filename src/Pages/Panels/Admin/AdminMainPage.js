import FundMembers from "../../../Components/Panel/Admin/AdminMain/FundMembers";
import YourBankAccount from "../../../Components/Panel/Admin/AdminMain/YourBankAccount";
import YourFund from "../../../Components/Panel/Admin/AdminMain/YourFund";

export default () => {
  return (
    <div className="h-[59vw]">
      <FundMembers />
      <YourFund />
      <YourBankAccount />
    </div>
  );
};
