import UserActiveLoans from "../../../Components/Panel/User/UserMain/UserActiveLoans";
import UserPaymentDates from "../../../Components/Panel/User/UserMain/UserPaymentDates";
import UserTransactions from "../../../Components/Panel/User/UserMain/UserTransactions";

export default () => {
  return (
    <div className="h-[59vw]">
      <UserActiveLoans />
      <UserPaymentDates />
      <UserTransactions />
    </div>
  );
};
