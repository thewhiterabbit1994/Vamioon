import OrangeAlmas from "../../../../Assets/Svg/UserSVG/OrangeAlmas";
import LoanTick from "../../../../Assets/Svg/UserSVG/LoanTick";
import LoanX from "../../../../Assets/Svg/UserSVG/LoanX";
import { useState } from "react";

export default () => {
  const [loans, setloans] = useState([
    {
      loanType: "فوری",
      loanPrice: "50.000.000",
      loanInstallment: "12",
      paidInstallment: "12",
      remainingInstallments: "5",
      firstInstallmentsDate: "1 مرداد 1400",
      lastInstallmentsDate: "1 مرداد 1400",
      priceOfInstallment: "500.000",
      idLoanPaid: true,
    },
    {
      loanType: "خرید جهیزیه",
      loanPrice: "50.000.000",
      loanInstallment: "12",
      paidInstallment: "12",
      remainingInstallments: "5",
      firstInstallmentsDate: "1 مرداد 1400",
      lastInstallmentsDate: "1 مرداد 1400",
      priceOfInstallment: "500.000",
      idLoanPaid: true,
    },
    {
      loanType: "کمک هزینه",
      loanPrice: "50.000.000",
      loanInstallment: "12",
      paidInstallment: "12",
      remainingInstallments: "5",
      firstInstallmentsDate: "1 مرداد 1400",
      lastInstallmentsDate: "1 مرداد 1400",
      priceOfInstallment: "500.000",
      idLoanPaid: false,
    },
    {
      loanType: "خرید جهیزیه",
      loanPrice: "50.000.000",
      loanInstallment: "12",
      paidInstallment: "12",
      remainingInstallments: "5",
      firstInstallmentsDate: "1 مرداد 1400",
      lastInstallmentsDate: "1 مرداد 1400",
      priceOfInstallment: "500.000",
      idLoanPaid: false,
    },
    {
      loanType: "خرید جهیزیه",
      loanPrice: "50.000.000",
      loanInstallment: "12",
      paidInstallment: "12",
      remainingInstallments: "5",
      firstInstallmentsDate: "1 مرداد 1400",
      lastInstallmentsDate: "1 مرداد 1400",
      priceOfInstallment: "500.000",
      idLoanPaid: true,
    },
    {
      loanType: "خرید جهیزیه",
      loanPrice: "50.000.000",
      loanInstallment: "12",
      paidInstallment: "12",
      remainingInstallments: "5",
      firstInstallmentsDate: "1 مرداد 1400",
      lastInstallmentsDate: "1 مرداد 1400",
      priceOfInstallment: "500.000",
      idLoanPaid: true,
    },
    {
      loanType: "خرید جهیزیه",
      loanPrice: "50.000.000",
      loanInstallment: "12",
      paidInstallment: "12",
      remainingInstallments: "5",
      firstInstallmentsDate: "1 مرداد 1400",
      lastInstallmentsDate: "1 مرداد 1400",
      priceOfInstallment: "500.000",
      idLoanPaid: true,
    },
    {
      loanType: "خرید جهیزیه",
      loanPrice: "50.000.000",
      loanInstallment: "12",
      paidInstallment: "12",
      remainingInstallments: "5",
      firstInstallmentsDate: "1 مرداد 1400",
      lastInstallmentsDate: "1 مرداد 1400",
      priceOfInstallment: "500.000",
      idLoanPaid: true,
    },
    {
      loanType: "خرید جهیزیه",
      loanPrice: "50.000.000",
      loanInstallment: "12",
      paidInstallment: "12",
      remainingInstallments: "5",
      firstInstallmentsDate: "1 مرداد 1400",
      lastInstallmentsDate: "1 مرداد 1400",
      priceOfInstallment: "500.000",
      idLoanPaid: true,
    },
    {
      loanType: "خرید جهیزیه",
      loanPrice: "50.000.000",
      loanInstallment: "12",
      paidInstallment: "12",
      remainingInstallments: "5",
      firstInstallmentsDate: "1 مرداد 1400",
      lastInstallmentsDate: "1 مرداد 1400",
      priceOfInstallment: "500.000",
      idLoanPaid: true,
    },
    {
      loanType: "خرید جهیزیه",
      loanPrice: "50.000.000",
      loanInstallment: "12",
      paidInstallment: "12",
      remainingInstallments: "5",
      firstInstallmentsDate: "1 مرداد 1400",
      lastInstallmentsDate: "1 مرداد 1400",
      priceOfInstallment: "500.000",
      idLoanPaid: true,
    },
    {
      loanType: "خرید جهیزیه",
      loanPrice: "50.000.000",
      loanInstallment: "12",
      paidInstallment: "12",
      remainingInstallments: "5",
      firstInstallmentsDate: "1 مرداد 1400",
      lastInstallmentsDate: "1 مرداد 1400",
      priceOfInstallment: "500.000",
      idLoanPaid: true,
    },
  ]);
  return (
    <div className="">
      <div className="hidescroll shadow-bottom flex absolute pb-[2vw] mt-[11vw] mr-[9vw] w-[89vw] h-[47vw] overflow-y-auto overflow-x-hidden scroll-smooth  rounded-[0.8vw] border-[#c4c4c4] border-[0.155vw]">
        <div className="absolute  bg-white w-[39.7vw] h-[3.5vw] rounded-t-[0.8vw]  text-[1.1vw] ">
          <div className="flex mr-[1vw] mt-[1vw]">
            <div className="mt-[0.2vw]">
              <OrangeAlmas />
            </div>
            <p className="mr-[0.5vw]">وام های فعال شما</p>
          </div>
        </div>
        <div className="mt-[3.5vw] z-[-10] ">
          <table className=" mr-[1vw] w-[87vw]  table-auto">
            <thead className="">
              <tr className="text-[0.8vw] ">
                <th className="text-center">ردیف</th>
                <th className="text-right">نوع وام</th>
                <th className="text-right">مبلغ وام</th>
                <th className="text-right">تعداد اقساط</th>

                <th className="text-right">اقساط پرداخت شده</th>
                <th className="text-right">اقساط باقی مانده</th>
                <th className="text-right">تاریخ اولین قسط</th>
                <th className="text-right">تاریخ آخرین قسط</th>
                <th className="text-right">مبلغ هر قسط</th>
                <th className="text-right">وضعیت وام</th>
              </tr>
            </thead>
            <tbody className=" ">
              {loans.map((loan, i) => {
                return (
                  <tr
                    key={i}
                    className="text-[1vw] h-[3vw] mb-[5vw] bg-[#f2f2f2]  leading-[3.85vw] "
                  >
                    <td className="text-center">{i + 1}</td>
                    <td
                      className={`${
                        loan.loanType === "کمک هزینه"
                          ? "text-[#00af63]"
                          : loan.loanType === "فوری"
                          ? "text-[#de7e38]"
                          : "text-[#037d6d]"
                      }`}
                    >
                      {loan.loanType}
                    </td>
                    <td>{loan.loanPrice} تومان</td>
                    <td>{loan.loanInstallment} قسط</td>
                    <td>{loan.paidInstallment} قسط</td>
                    <td>{loan.remainingInstallments} قسط</td>
                    <td>{loan.firstInstallmentsDate}</td>
                    <td>{loan.lastInstallmentsDate}</td>
                    <td>{loan.priceOfInstallment} تومان</td>
                    <td>
                      {loan.idLoanPaid ? (
                        <div className="flex text-[#00af63]">
                          <div className="mt-[1.5vw] ml-[0.6vw] ">
                            <LoanTick />
                          </div>
                          <p>تسویه شده</p>
                        </div>
                      ) : (
                        <div className="flex text-[#dd792f]">
                          <div className="mt-[1.5vw] ml-[0.6vw] ">
                            <LoanX />
                          </div>
                          <p>تسویه نشده</p>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className=" absolute mt-[53.5vw] flex items-start  mr-[49vw]   ">
        <button className="text-[1vw] bg-[#fff] px-[2vw] py-[0.5vw] rounded-[0.8vw] drop-shadow-lg">
          مشاهده ی همه
        </button>
      </div>
    </div>
  );
};
