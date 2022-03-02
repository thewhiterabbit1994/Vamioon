import UserImg from "../../../../Assets/Img/UserProfileImg.jpg";
import LinkArrow from "../../../../Assets/Svg/ActiveLoansSVG/LinkArrow";
import { useState } from "react";
import PaymentDetails from "../../../Modals/PaymentDetails"

export default () => {
  const [modalPaymentDetails, setmodalPaymentDetails] = useState(false)
  const [openTab, setopenTab] = useState(1);
  const [installmentPayments, setinstallmentPayments] = useState([
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "پرداخت قسط توسط حسین ضرابی",
      time: "12:45",
      loanType: "پرداخت قسط",
      Date: "یکشنبه 2 خرداد 1400",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "پرداخت قسط توسط حسین ضرابی",
      time: "12:45",
      loanType: "پرداخت قسط",
      Date: "یکشنبه 2 خرداد 1400",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "پرداخت قسط توسط حسین ضرابی",
      time: "12:45",
      loanType: "پرداخت قسط",
      Date: "یکشنبه 2 خرداد 1400",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "پرداخت قسط توسط حسین ضرابی",
      time: "12:45",
      loanType: "پرداخت قسط",
      Date: "یکشنبه 2 خرداد 1400",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "پرداخت قسط توسط حسین ضرابی",
      time: "12:45",
      loanType: "پرداخت قسط",
      Date: "یکشنبه 2 خرداد 1400",
    },

    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "پرداخت قسط توسط حسین ضرابی",
      time: "12:45",
      loanType: "پرداخت قسط",
      Date: "یکشنبه 2 خرداد 1400",
    },

    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "پرداخت قسط توسط حسین ضرابی",
      time: "12:45",
      loanType: "پرداخت قسط",
      Date: "یکشنبه 2 خرداد 1400",
    },

    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "پرداخت قسط توسط حسین ضرابی",
      time: "12:45",
      loanType: "پرداخت قسط",
      Date: "یکشنبه 2 خرداد 1400",
    },
  ]);
  const [joinRequests, setjoinRequests] = useState([
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "درخواست عضویت در صندوق توسط حسین ضرابی",
      time: "12:45",
      loanType: "درخواست عضویت",
      Date: "یکشنبه 2 خرداد 1400",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "درخواست عضویت در صندوق توسط حسین ضرابی",
      time: "12:45",
      loanType: "درخواست عضویت",
      Date: "یکشنبه 2 خرداد 1400",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "درخواست عضویت در صندوق توسط حسین ضرابی",
      time: "12:45",
      loanType: "درخواست عضویت",
      Date: "یکشنبه 2 خرداد 1400",
    },

    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "درخواست عضویت در صندوق توسط حسین ضرابی",
      time: "12:45",
      loanType: "درخواست عضویت",
      Date: "یکشنبه 2 خرداد 1400",
    },

    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "درخواست عضویت در صندوق توسط حسین ضرابی",
      time: "12:45",
      loanType: "درخواست عضویت",
      Date: "یکشنبه 2 خرداد 1400",
    },

    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "درخواست عضویت در صندوق توسط حسین ضرابی",
      time: "12:45",
      loanType: "درخواست عضویت",
      Date: "یکشنبه 2 خرداد 1400",
    },
  ]);
  const [loanRequests, setloanRequests] = useState([
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "درخواست وام توسط حسین ضرابی",
      time: "12:45",
      loanType: "درخواست وام",
      Date: "یکشنبه 2 خرداد 1400",
    },

    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "درخواست وام توسط حسین ضرابی",
      time: "12:45",
      loanType: "درخواست وام",
      Date: "یکشنبه 2 خرداد 1400",
    },

    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "درخواست وام توسط حسین ضرابی",
      time: "12:45",
      loanType: "درخواست وام",
      Date: "یکشنبه 2 خرداد 1400",
    },

    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      description: "درخواست وام توسط حسین ضرابی",
      time: "12:45",
      loanType: "درخواست وام",
      Date: "یکشنبه 2 خرداد 1400",
    },
  ]);
  return (
    <div className="absolute flex w-[89vw] h-[47vw] mt-[10vw] mr-[9vw]">
      <PaymentDetails setmodalPaymentDetails={setmodalPaymentDetails} modalPaymentDetails={modalPaymentDetails} />
      <div className="mr-[-1vw] mt-[2vw]">
        <div
          onClick={() => setopenTab(1)}
          className="flex text-[1vw] text-[#4d4d4d] cursor-pointer w-[18vw] px-[1vw] justify-between "
        >
          <div
            className={`flex justify-between  rounded-[0.7vw] px-[1vw] py-[1.2vw] w-full
          ${openTab === 1 ? "bg-[#d6d6d6]" : "bg-[#f2f2f2]"}
          `}
          >
            <div className="flex items-center">
              <div className="w-[0.8vw] h-[0.8vw] ml-[1vw] rounded-[0.3vw] bg-[#00af63] "></div>
              <p className="font-bold">
                پرداخت قسط ({installmentPayments.length}){" "}
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => setopenTab(2)}
          className="flex text-[1vw] text-[#4d4d4d] cursor-pointer w-[18vw] px-[1vw] justify-between mt-[1vw] "
        >
          <div
            className={`flex justify-between  rounded-[0.7vw] px-[1vw] py-[1.2vw] w-full
           ${openTab === 2 ? "bg-[#d6d6d6]" : "bg-[#f2f2f2]"}
           `}
          >
            <div className="flex items-center">
              <div className="w-[0.8vw] h-[0.8vw] ml-[1vw] rounded-[0.3vw] bg-[#ffcc29] "></div>
              <p className="font-bold">درخواست عضویت ({joinRequests.length})</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => setopenTab(3)}
          className="flex text-[1vw] text-[#4d4d4d] cursor-pointer w-[18vw] px-[1vw] justify-between mt-[1vw] "
        >
          <div
            className={`flex justify-between  rounded-[0.7vw] px-[1vw] py-[1.2vw] w-full
           ${openTab === 3 ? "bg-[#d6d6d6]" : "bg-[#f2f2f2]"}
           `}
          >
            <div className="flex items-center">
              <div className="w-[0.8vw] h-[0.8vw] ml-[1vw] rounded-[0.3vw] bg-[#f58634] "></div>
              <p className="font-bold">درخواست وام ({loanRequests.length})</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[-0.9vw] ">
        <table className=" mr-[1vw] w-[71vw]  table-auto">
          <thead className="">
            <tr className="text-[0.8vw] text-gray-500 ">
              <th className="text-right pr-[1.2vw] ">اعلان</th>
              <th className="text-right pr-[1.2vw]">کاربر</th>
              <th className="text-right">تاریخ</th>
              <th className="text-right">ساعت</th>
              <th className="text-right">توضیحات</th>
              <th className="text-right"></th>
            </tr>
          </thead>
          <tbody className={`${openTab === 1 ? "" : "hidden"}`}>
            {installmentPayments.map((installmentPayment, i) => {
              return (
                <tr
                  key={i}
                  className="text-[1vw] h-[3vw] mb-[5vw] bg-[#f2f2f2]  leading-[4.6vw] "
                >
                  <td className="pr-[1.2vw]">
                    <div className=" flex">
                      <div className="w-[0.5vw] h-[3vw] mr-[-1.2vw] ml-[1vw] mt-[0.8vw] rounded-[0.3vw] bg-[#00af63] "></div>

                      {installmentPayment.loanType}
                    </div>
                  </td>
                  <td className="">
                    <div className="flex">
                      <img
                        className="h-[2vw] mt-[1.2vw] mx-[1vw] rounded-[0.5vw] "
                        src={installmentPayment.img}
                      />

                      {installmentPayment.fullName}
                    </div>
                  </td>
                  <td>{installmentPayment.Date}</td>
                  <td>{installmentPayment.time}</td>
                  <td>
                    <div className="flex">{installmentPayment.description}</div>
                  </td>
                  <td>
                    <div
                      onClick={() => setmodalPaymentDetails(true)}
                      className="flex cursor-pointer ml-[-2vw] text-[#026f61]">
                      <p>مشاهده ی جزئیات پرداخت</p>
                      <div className="mt-[1.9vw] mr-[1vw]">
                        <LinkArrow />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tbody className={`${openTab === 2 ? "" : "hidden"}`}>
            {joinRequests.map((joinRequest, i) => {
              return (
                <tr
                  key={i}
                  className="text-[1vw] h-[3vw] mb-[5vw] bg-[#f2f2f2]  leading-[4.6vw] "
                >
                  <td className="pr-[1.2vw]">
                    <div className=" flex">
                      <div className="w-[0.5vw] h-[3vw] mr-[-1.2vw] ml-[1vw] mt-[0.8vw] rounded-[0.3vw] bg-[#ffcc29] "></div>

                      {joinRequest.loanType}
                    </div>
                  </td>
                  <td className="">
                    <div className="flex">
                      <img
                        className="h-[2vw] mt-[1.2vw] mx-[1vw] rounded-[0.5vw] "
                        src={joinRequest.img}
                      />

                      {joinRequest.fullName}
                    </div>
                  </td>
                  <td>{joinRequest.Date}</td>
                  <td>{joinRequest.time}</td>
                  <td>
                    <div className="flex">{joinRequest.description}</div>
                  </td>
                  <td>
                    <div className="flex cursor-pointer ml-[-0.3vw] text-[#026f61]">
                      <p>مشاهده ی جزئیات</p>
                      <div className="mt-[1.9vw] mr-[1vw]">
                        <LinkArrow />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tbody className={`${openTab === 3 ? "" : "hidden"}`}>
            {loanRequests.map((loanRequest, i) => {
              return (
                <tr
                  key={i}
                  className="text-[1vw] h-[3vw] mb-[5vw] bg-[#f2f2f2]  leading-[4.6vw] "
                >
                  <td className="pr-[1.2vw]">
                    <div className=" flex">
                      <div className="w-[0.5vw] h-[3vw] mr-[-1.2vw] ml-[1vw] mt-[0.8vw] rounded-[0.3vw] bg-[#f58634] "></div>

                      {loanRequest.loanType}
                    </div>
                  </td>
                  <td className="">
                    <div className="flex">
                      <img
                        className="h-[2vw] mt-[1.2vw] mx-[1vw] rounded-[0.5vw] "
                        src={loanRequest.img}
                      />

                      {loanRequest.fullName}
                    </div>
                  </td>
                  <td>{loanRequest.Date}</td>
                  <td>{loanRequest.time}</td>
                  <td>
                    <div className="flex">{loanRequest.description}</div>
                  </td>
                  <td>
                    <div className="flex cursor-pointer ml-[-1.5vw] text-[#026f61]">
                      <p>مشاهده ی جزئیات</p>
                      <div className="mt-[1.9vw] mr-[1vw]">
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
  );
};
