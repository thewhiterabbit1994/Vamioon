import Active from "../../../../Assets/Svg/ActiveLoansSVG/Active";
import { useState } from "react";

export default () => {
  const [loans, setloans] = useState([
    {
      loanPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "خرید جهیزیه",
      priceOfInstallment: "500.000",
      remainingInstallments: "5",
      nextInstallmentsDate: "1 مرداد 1400",
    },
    {
      loanPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "کمک هزینه",
      priceOfInstallment: "500.000",
      remainingInstallments: "5",
      nextInstallmentsDate: "1 مرداد 1400",
    },
    {
      loanPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "فوری",
      priceOfInstallment: "500.000",
      remainingInstallments: "5",
      nextInstallmentsDate: "1 مرداد 1400",
    },
    {
      loanPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "تحصیلی",
      priceOfInstallment: "500.000",
      remainingInstallments: "5",
      nextInstallmentsDate: "1 مرداد 1400",
    },
  ]);
  return (
    <div className="">
      <div className="hidescroll flex absolute pb-[2vw] mt-[5.5vw] mr-[9vw] w-[48vw] h-[26vw] overflow-y-auto overflow-x-hidden scroll-smooth  rounded-[0.8vw] border-[#c4c4c4] border-[0.155vw]">
        <div className="absolute  bg-white w-[39.7vw] h-[3.5vw] rounded-t-[0.8vw]  text-[1.1vw] ">
          <div className="flex mr-[1vw] mt-[1vw]">
            <Active />
            <p className="mr-[0.5vw]">وام های فعال شما</p>
          </div>
        </div>
        <div className="mt-[3.5vw] z-[-10] ">
          <table className=" mr-[1vw] w-[46vw]  table-auto">
            <thead className="">
              <tr className="text-[0.8vw] ">
                <th className="text-center">ردیف</th>
                <th className="text-right">مبلغ وام</th>
                <th className="text-right">تعداد اقساط</th>
                <th className="text-right">نوع وام</th>

                <th className="text-right">مبلغ هر قسط</th>
                <th className="text-right">اقساط باقیمانده</th>
                <th className="text-right">موعد پرداخت بعدی</th>
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
                    <td>{loan.loanPrice} تومان</td>
                    <td>{loan.loanInstallment} قسط</td>
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
                    <td>{loan.priceOfInstallment} تومان</td>
                    <td>{loan.remainingInstallments} قسط</td>
                    <td>{loan.nextInstallmentsDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
