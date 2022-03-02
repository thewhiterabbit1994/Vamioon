import UserImg from "../../../../Assets/Img/UserProfileImg.jpg";
import Delete from "../../../../Assets/Svg/UserSVG/Delete";
import { useState } from "react";

export default () => {
  const [userNotifications, setuserNotifications] = useState([
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
      description: "درخواست عضویت در صندوق توسط حسین ضرابی",
      time: "12:45",
      loanType: "درخواست عضویت",
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
      description: "درخواست وام توسط حسین ضرابی",
      time: "12:45",
      loanType: "درخواست وام",
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

  const deleteNotif = (i) => {
    console.log("dsfkjyhvdy");
    let cloneArray = [...userNotifications];
    cloneArray.splice(1, i);
    setuserNotifications(cloneArray);
  };

  return (
    <div className="absolute flex w-[89vw] h-[47vw] mt-[10vw] mr-[9vw]">
      <div className="mt-[-0.9vw] ">
        <table className=" mr-[vw] w-[89vw]  table-auto">
          <thead className="">
            <tr className="text-[0.8vw] text-gray-500 ">
              <th className="text-right pr-[1.2vw] ">اعلان</th>
              <th className="text-right">تاریخ</th>
              <th className="text-right">ساعت</th>
              <th className="text-right">توضیحات</th>
              <th className="text-right"></th>
            </tr>
          </thead>
          <tbody>
            {userNotifications.map((userNotification, i) => {
              return (
                <tr
                  key={i}
                  className="text-[1vw] h-[3vw] mb-[5vw] bg-[#f2f2f2]  leading-[4.6vw] "
                >
                  <td className="pr-[1.2vw]">
                    {userNotification.loanType === "پرداخت قسط" ? (
                      <div className=" flex">
                        <div className="w-[0.5vw] h-[3vw] mr-[-1.2vw] ml-[1vw] mt-[0.8vw] rounded-[0.3vw] bg-[#00af63] "></div>

                        {userNotification.loanType}
                      </div>
                    ) : userNotification.loanType === "درخواست عضویت" ? (
                      <div className=" flex">
                        <div className="w-[0.5vw] h-[3vw] mr-[-1.2vw] ml-[1vw] mt-[0.8vw] rounded-[0.3vw] bg-[#ffcc29] "></div>

                        {userNotification.loanType}
                      </div>
                    ) : userNotification.loanType === "درخواست وام" ? (
                      <div className=" flex">
                        <div className="w-[0.5vw] h-[3vw] mr-[-1.2vw] ml-[1vw] mt-[0.8vw] rounded-[0.3vw] bg-[#f58634] "></div>

                        {userNotification.loanType}
                      </div>
                    ) : null}
                  </td>

                  <td>{userNotification.Date}</td>
                  <td>{userNotification.time}</td>
                  <td>
                    <div className="flex">{userNotification.description}</div>
                  </td>
                  <td>
                    <div
                      onClick={(i) => deleteNotif(i)}
                      className="flex cursor-pointer ml-[-2vw] text-[#026f61]"
                    >
                      <div className="mt-[1.8vw] ml-[1vw]">
                        <Delete />
                      </div>
                      <p>حذف اعلان</p>
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
