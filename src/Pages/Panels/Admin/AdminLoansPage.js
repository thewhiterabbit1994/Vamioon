import ActiveLoan from "../../../Components/Panel/Admin/AdminLoan/ActiveLoan";
import SettledLoans from "../../../Components/Panel/Admin/AdminLoan/SettledLoans";
import LoansHeader from "../../../Components/Panel/Admin/AdminLoan/LoansHeader";

export default () => {
  return (
    <div className="h-[59vw]">
      <LoansHeader />
      <ActiveLoan />
      <SettledLoans />
    </div>
  );
};
