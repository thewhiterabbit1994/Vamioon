import UserImg from "../../../../Assets/Img/UserProfileImg.jpg";
import Active from "../../../../Assets/Svg/ActiveLoansSVG/Active";
import { useState } from "react";

export default () => {
  const [loans, setloans] = useState([
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "کمک هزینه",
      settledDate: "اول هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "فوری",
      settledDate: "15 هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "تحصیلی",
      settledDate: "20 هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "خرید خودرو",
      settledDate: "آخر هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "کمک هزینه",
      settledDate: "اول هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "فوری",
      settledDate: "15 هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "تحصیلی",
      settledDate: "20 هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "خرید خودرو",
      settledDate: "آخر هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "کمک هزینه",
      settledDate: "اول هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "فوری",
      settledDate: "15 هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "تحصیلی",
      settledDate: "20 هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "خرید خودرو",
      settledDate: "آخر هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "کمک هزینه",
      settledDate: "اول هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "فوری",
      settledDate: "15 هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "تحصیلی",
      settledDate: "20 هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "خرید خودرو",
      settledDate: "آخر هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "کمک هزینه",
      settledDate: "اول هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "فوری",
      settledDate: "15 هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "تحصیلی",
      settledDate: "20 هر ماه",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      loanTokenPrice: "50.000.000",
      loanInstallment: "12",
      loanType: "خرید خودرو",
      settledDate: "آخر هر ماه",
    },
  ]);
  return (
    <div className="">
      <div className="hidescroll flex shadow-bottom absolute pb-[2vw] mt-[11vw] mr-[9vw] w-[44vw] h-[47vw] overflow-y-auto overflow-x-hidden scroll-smooth  rounded-[0.8vw] border-[#c4c4c4] border-[0.155vw]">
        <div className="absolute  bg-white w-[39.7vw] h-[3.5vw] rounded-t-[0.8vw]  text-[1.1vw] ">
          <div className="flex mr-[1vw] mt-[1vw]">
            <Active />
            <p className="mr-[0.5vw]">وام های فعال</p>
          </div>
        </div>
        <div className="mt-[3.5vw] z-[-10] ">
          <table className=" mr-[1vw] w-[42vw]  table-auto">
            <thead className="">
              <tr className="text-[0.8vw] ">
                <th className="text-right pr-[1.2vw] ">
                  نام دریافت کننده ی وام
                </th>
                <th className="text-right">مبلغ وام</th>
                <th className="text-right">تعدا اقساط</th>
                <th className="text-right">موعد پرداخت</th>
                <th className="text-right">نوع وام</th>
              </tr>
            </thead>
            <tbody className=" ">
              {loans.map((loan, i) => {
                return (
                  <tr
                    key={i}
                    className="text-[1vw] h-[3vw] mb-[5vw] bg-[#f2f2f2]  leading-[3.125vw] "
                  >
                    <td className="">
                      <div className="flex">
                        <img
                          className="h-[2vw] mt-[0.5vw] mx-[1vw] rounded-[0.5vw] "
                          src={loan.img}
                        />

                        {loan.fullName}
                      </div>
                    </td>
                    <td>{loan.loanTokenPrice} تومان</td>
                    <td>{loan.loanInstallment} قسط</td>
                    <td>{loan.settledDate}</td>
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
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className=" absolute mt-[53.5vw] flex items-start  mr-[25vw]   ">
        <button className="text-[1vw] bg-[#fff] px-[2vw] py-[0.5vw] rounded-[0.8vw] drop-shadow-lg">
          مشاهده ی همه
        </button>
      </div>
    </div>
  );
};
