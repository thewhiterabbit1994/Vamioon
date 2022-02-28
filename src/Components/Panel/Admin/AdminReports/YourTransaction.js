import UserImg from "../../../../Assets/Img/UserProfileImg.jpg";
import Flesh from "../../../../Assets/Svg/ActiveLoansSVG/Flesh";
import GreenPlus from "../../../../Assets/Svg/ActiveLoansSVG/GreenPlus";
import OrangeMinus from "../../../../Assets/Svg/ActiveLoansSVG/OrangeMinus";
import { useState, useEffect } from "react";

export default () => {
  const [progressBarValues, setprogressBarValues] = useState({
    bar1: 0,
    bar2: 0,
    bar3: 0,
    bar4: 0,
    bar5: 0,
    bar6: 0,
    bar7: 0,
    bar8: 0,
    bar9: 0,
    bar10: 0,
    bar11: 0,
    bar12: 0,
  });
  useEffect(() => {
    setprogressBarValues({
      bar1: 90,
      bar2: 40,
      bar3: 60,
      bar4: 50,
      bar5: 15,
      bar6: 80,
      bar7: 60,
      bar8: 30,
      bar9: 90,
      bar10: 20,
      bar11: 90,
      bar12: 10,
    });
  }, []);
  const [loans, setloans] = useState([
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      price: "500.000",
      time: "12:45",
      loanType: "پرداخت قسط",
      Date: "یکشنبه 2 خرداد 1400",
      isout: false,
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      price: "1.000.000",
      time: "12:45",
      loanType: "اعطای وام",
      Date: "یکشنبه 2 خرداد 1400",
      isout: true,
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      price: "500.000",
      time: "12:45",
      loanType: "پرداخت قسط",
      Date: "یکشنبه 2 خرداد 1400",
      isout: false,
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      price: "1.000.000",
      time: "12:45",
      loanType: "اعطای وام",
      Date: "یکشنبه 2 خرداد 1400",
      isout: true,
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      price: "500.000",
      time: "12:45",
      loanType: "پرداخت قسط",
      Date: "یکشنبه 2 خرداد 1400",
      isout: false,
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      price: "1.000.000",
      time: "12:45",
      loanType: "اعطای وام",
      Date: "یکشنبه 2 خرداد 1400",
      isout: true,
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      price: "500.000",
      time: "12:45",
      loanType: "پرداخت قسط",
      Date: "یکشنبه 2 خرداد 1400",
      isout: false,
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      price: "1.000.000",
      time: "12:45",
      loanType: "اعطای وام",
      Date: "یکشنبه 2 خرداد 1400",
      isout: true,
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      price: "500.000",
      time: "12:45",
      loanType: "پرداخت قسط",
      Date: "یکشنبه 2 خرداد 1400",
      isout: false,
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      price: "1.000.000",
      time: "12:45",
      loanType: "اعطای وام",
      Date: "یکشنبه 2 خرداد 1400",
      isout: true,
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      price: "500.000",
      time: "12:45",
      loanType: "پرداخت قسط",
      Date: "یکشنبه 2 خرداد 1400",
      isout: false,
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      price: "1.000.000",
      time: "12:45",
      loanType: "اعطای وام",
      Date: "یکشنبه 2 خرداد 1400",
      isout: true,
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      price: "500.000",
      time: "12:45",
      loanType: "پرداخت قسط",
      Date: "یکشنبه 2 خرداد 1400",
      isout: false,
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      price: "1.000.000",
      time: "12:45",
      loanType: "اعطای وام",
      Date: "یکشنبه 2 خرداد 1400",
      isout: true,
    },
  ]);

  return (
    <div>
      <div className="hidescroll flex flex-col shadow-bottom absolute pb-[2vw] mt-[5.5vw] mr-[9vw] w-[58vw] h-[52vw] overflow-y-auto overflow-x-hidden scroll-smooth  rounded-[0.8vw] border-[#c4c4c4] border-[0.155vw]">
        <div className="absolute  bg-white w-[39.7vw] h-[3.5vw] rounded-t-[0.8vw]  text-[1.1vw] ">
          <div className="flex mr-[1vw] my-[1vw]">
            <div className="mt-[0.3vw]">
              <Flesh />
            </div>
            <p className="mr-[0.5vw] ">تراکنش های شما</p>
          </div>
        </div>

        <div className="mt-[10vw] flex w-full h-[7.5vw] justify-between ">
          <progress
            className={`progressfirstcolor rotate-90 rounded-[10px] w-[50vw] h-[1.5vw] bg-[#f2f2f2] mx-[-4vw]
            ${progressBarValues.bar1 >= 95 ? "barRounded" : ""}
            `}
            value={progressBarValues.bar1}
            max={100}
          />

          <progress
            className={`progresssecondcolor rotate-90 rounded-[10px] w-[50vw] h-[1.5vw] bg-[#f2f2f2] mx-[-4vw]
            ${progressBarValues.bar2 >= 95 ? "barRounded" : ""}
            `}
            value={progressBarValues.bar2}
            max={100}
          />

          <progress
            className={`progressthirdcolor rotate-90 rounded-[10px] w-[50vw] h-[1.5vw] bg-[#f2f2f2] mx-[-4vw]
            ${progressBarValues.bar3 >= 95 ? "barRounded" : ""}
            `}
            value={progressBarValues.bar3}
            max={100}
          />

          <progress
            className={`progressforthcolor rotate-90 rounded-[10px] w-[50vw] h-[1.5vw] bg-[#f2f2f2] mx-[-4vw]
            ${progressBarValues.bar4 >= 95 ? "barRounded" : ""}
            `}
            value={progressBarValues.bar4}
            max={100}
          />

          <progress
            className={`progressfirstcolor rotate-90 rounded-[10px] w-[50vw] h-[1.5vw] bg-[#f2f2f2] mx-[-4vw]
            ${progressBarValues.bar5 >= 95 ? "barRounded" : ""}
            `}
            value={progressBarValues.bar5}
            max={100}
          />

          <progress
            className={`progresssecondcolor rotate-90 rounded-[10px] w-[50vw] h-[1.5vw] bg-[#f2f2f2] mx-[-4vw]
            ${progressBarValues.bar6 >= 95 ? "barRounded" : ""}
            `}
            value={progressBarValues.bar6}
            max={100}
          />

          <progress
            className={`progressthirdcolor rotate-90 rounded-[10px] w-[50vw] h-[1.5vw] bg-[#f2f2f2] mx-[-4vw]
            ${progressBarValues.bar7 >= 95 ? "barRounded" : ""}
            `}
            value={progressBarValues.bar7}
            max={100}
          />

          <progress
            className={`progressforthcolor rotate-90 rounded-[10px] w-[50vw] h-[1.5vw] bg-[#f2f2f2] mx-[-4vw]
            ${progressBarValues.bar8 >= 95 ? "barRounded" : ""}
            `}
            value={progressBarValues.bar8}
            max={100}
          />

          <progress
            className={`progressfirstcolor rotate-90 rounded-[10px] w-[50vw] h-[1.5vw] bg-[#f2f2f2] mx-[-4vw]
            ${progressBarValues.bar9 >= 95 ? "barRounded" : ""}
            `}
            value={progressBarValues.bar9}
            max={100}
          />

          <progress
            className={`progresssecondcolor rotate-90 rounded-[10px] w-[50vw] h-[1.5vw] bg-[#f2f2f2] mx-[-4vw]
            ${progressBarValues.bar10 >= 95 ? "barRounded" : ""}
            `}
            value={progressBarValues.bar10}
            max={100}
          />

          <progress
            className={`progressthirdcolor rotate-90 rounded-[10px] w-[50vw] h-[1.5vw] bg-[#f2f2f2] mx-[-4vw]
            ${progressBarValues.bar11 >= 95 ? "barRounded" : ""}
            `}
            value={progressBarValues.bar11}
            max={100}
          />

          <progress
            className={`progressforthcolor rotate-90 rounded-[10px] w-[50vw] h-[1.5vw] bg-[#f2f2f2] mx-[-4vw]
            ${progressBarValues.bar12 >= 95 ? "barRounded" : ""}
            `}
            value={progressBarValues.bar12}
            max={100}
          />
        </div>
        <div className="flex w-[100%] mt-[7.5vw] text-[0.8vw]">
          <div className="mr-[1vw]">
            <p>فروردین</p>
          </div>
          <div className="mr-[2vw]">
            <p>اردیبهشت</p>
          </div>
          <div className="mr-[2.2vw]">
            <p>خرداد</p>
          </div>
          <div className="mr-[3.5vw]">
            <p>تیر</p>
          </div>
          <div className="mr-[3.5vw]">
            <p>مرداد</p>
          </div>
          <div className="mr-[3vw]">
            <p>شهریور</p>
          </div>
          <div className="mr-[3vw]">
            <p>مهر</p>
          </div>
          <div className="mr-[3.65vw]">
            <p>آبان</p>
          </div>
          <div className="mr-[3.7vw]">
            <p>آذر</p>
          </div>
          <div className="mr-[3.8vw]">
            <p>دی</p>
          </div>
          <div className="mr-[3.6vw]">
            <p>بهمن</p>
          </div>
          <div className="mr-[3vw]">
            <p>اسفند</p>
          </div>
        </div>
        <div className="flex w-full px-[1vw] mt-[1vw] text-[1.1vw] items-center justify-between">
          <div className="">
            <p>تراکنش های شهریور ماه</p>
          </div>
          <div className="flex items-center">
            <p>ماه</p>
            <select className="bg-[#f2f2f2] outline-none rounded-[0.7vw] mr-[1vw] px-[1vw] py-[0.5vw] w-[8vw]">
              <option>فروردین</option>
              <option>اردیبهشت</option>
              <option>خرداد</option>
              <option>تیر</option>
              <option>مرداد</option>
              <option>شهریور</option>
              <option>مهر</option>
              <option>آبان</option>
              <option>آذر</option>
              <option>دی</option>
              <option>بهمن</option>
              <option>اسفند</option>
            </select>
          </div>
        </div>
        <div className="absolute h-[0.1vw] mt-[24.7vw] mr-[1vw] w-[96.5%]  bg-[#cecece]"></div>
        <div className="mt-[1vw] z-[-10] ">
          <table className=" mr-[1vw] w-[55.5vw]  table-auto">
            <thead className="">
              <tr className="text-[0.8vw] text-gray-500 ">
                <th className="text-right pr-[1.2vw] ">موضوع تراکنش</th>
                <th className="text-right pr-[1.2vw]">کاربر</th>
                <th className="text-right">تاریخ</th>
                <th className="text-right">ساعت</th>
                <th className="text-right">مبلغ</th>
              </tr>
            </thead>
            <tbody className=" ">
              {loans.map((loan, i) => {
                return (
                  <tr className="text-[1vw] h-[3vw] mb-[5vw] bg-[#f2f2f2]  leading-[3.125vw] ">
                    <td className="pr-[1.2vw]">{loan.loanType} </td>
                    <td className="">
                      <div className="flex">
                        <img
                          className="h-[2vw] mt-[0.5vw] mx-[1vw] rounded-[0.5vw] "
                          src={loan.img}
                        />

                        {loan.fullName}
                      </div>
                    </td>
                    <td>{loan.Date}</td>
                    <td>{loan.time}</td>
                    <td
                      className={` ${
                        loan.isout
                          ? "text-[#00af63]"
                          : !loan.isout
                          ? "text-[#de7e38]"
                          : ""
                      }`}
                    >
                      <div className="flex">
                        <p>{loan.price} تومان</p>
                        <div className="ml-[-2vw]">
                          {loan.isout ? (
                            <div className="w-full flex justify-end mt-[1vw] mr-[0.5vw]">
                              <GreenPlus />
                            </div>
                          ) : (
                            <div className="w-full flex justify-end mt-[1.5vw] ml-[0.5vw] mr-[0.5vw]">
                              <OrangeMinus />
                            </div>
                          )}
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
