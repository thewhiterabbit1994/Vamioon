import YellowRing from "../../../../Assets/Svg/UserSVG/YellowRing";
import LinkArrow from "../../../../Assets/Svg/ActiveLoansSVG/LinkArrow";
import { useState } from "react";

export default () => {
  const [payments, setpayments] = useState([
    {
      paymentTitle: "پرداخت قسط",
      priceOfInstallment: "500.000",
      remainingInstallmentsdate: "5",
    },
    {
      paymentTitle: "پرداخت قسط",
      priceOfInstallment: "300.000",
      remainingInstallmentsdate: "2",
    },
    {
      paymentTitle: "پرداخت قسط",
      priceOfInstallment: "50.000",
      remainingInstallmentsdate: "5",
    },
    {
      paymentTitle: "پرداخت قسط",
      priceOfInstallment: "800.000",
      remainingInstallmentsdate: "4",
    },
  ]);
  return (
    <div className="">
      <div className="hidescroll z-[1] flex absolute pb-[2vw] mt-[5.5vw] mr-[58vw] w-[40vw] h-[26vw] overflow-y-auto overflow-x-hidden scroll-smooth  rounded-[0.8vw] border-[#c4c4c4] border-[0.155vw]">
        <div className="absolute  bg-white w-[39.7vw] h-[3.5vw] rounded-t-[0.8vw]  text-[1.1vw] ">
          <div className="flex mr-[1vw] mt-[1vw]">
            <YellowRing />
            <p className="mr-[0.5vw]">موعد های پرداخت</p>
          </div>
        </div>
        <div className="mt-[3.5vw] z-[-10] ">
          <table className=" mr-[1vw] w-[38vw]  table-auto">
            <thead className="">
              <tr className="text-[0.8vw] ">
                <th className="text-right"></th>
                <th className="text-right">مبلغ قسط</th>
                <th className="text-right">موعد پرداخت تا</th>
                <th className="text-right"></th>
              </tr>
            </thead>
            <tbody className=" ">
              {payments.map((payment, i) => {
                return (
                  <tr
                    key={i}
                    className="text-[1vw] h-[3vw] mb-[5vw] bg-[#f2f2f2]  leading-[3.85vw] "
                  >
                    <td className="text-center ">{payment.paymentTitle}</td>
                    <td>{payment.priceOfInstallment} تومان</td>
                    <td>{payment.remainingInstallmentsdate} ساعت دیگر</td>
                    <td>
                      <div className="flex cursor-pointer ml-[-2vw] text-[#006fb8]">
                        <p>پرداخت قسط</p>
                        <div className="cursor-pointer mt-[1.5vw] mr-[1vw]">
                          <LinkArrow />
                        </div>
                      </div>
                    </td>
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
