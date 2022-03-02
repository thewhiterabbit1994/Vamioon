import ActiveLoan from "../../../../Assets/Svg/UserSVG/ActiveLoan";
import Loan from "../../../../Assets/Svg/ActiveLoansSVG/Loan";
import Plus from "../../../../Assets/Svg/YourFundSVG/Plus";

export default () => {
  return (
    <div>
      <div className="flex justify-between items-center h-[5.15625vw] w-[89vw] absolute mr-[9vw] mt-[5vw]">
        <div className="flex">
          <div className="flex w-[22vw] justify-between  items-center text-[#026155] text-[1.1vw]">
            <div className="flex items-center text-[1.1vw]">
              <div className="flex justify-center items-center w-[3vw] h-[3vw] bg-[#b3dcd7] rounded-[10px] ">
                <ActiveLoan />
              </div>
              <p className=" mr-[1vw]">تعداد وام های فعال شما</p>
            </div>
            <div>
              <p>5 وام</p>
            </div>
          </div>
          <div className="w-[0.1vw] h-[2.3vw] bg-[#bebebe] mt-[0.4vw] mx-[1.3vw]"></div>
          <div className="flex w-[22vw] justify-between  items-center text-[#997A19] text-[1.1vw]">
            <div className="flex items-center text-[1.1vw]">
              <div className="flex justify-center items-center w-[3vw] h-[3vw] bg-[#ffe694] rounded-[10px] ">
                <Loan />
              </div>
              <p className=" mr-[1vw]">مبلغ کل وام ها</p>
            </div>
            <div>
              <p>47.800.000 تومان</p>
            </div>
          </div>
        </div>
        <div className="w-[26vw] flex  justify-end">
          <div className="flex cursor-pointer font-bold text-[#00693b] bg-[#ccefe0] rounded-[0.7vw]  px-[1vw] py-[1.2vw] text-[1vw] ">
            <div className="mt-[0.2vw]  ml-[0.5vw]">
              <Plus />
            </div>
            درخواست وام جدید
          </div>
        </div>
      </div>
    </div>
  );
};
