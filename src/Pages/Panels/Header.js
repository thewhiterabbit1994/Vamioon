import { useState } from "react";
import { useLocation } from "react-router-dom";
import UserPanel from "../../Assets/Svg/HeaderSVG/UserPanel";
import Alert from "../../Assets/Svg/HeaderSVG/Alert";
import Loans from "../../Assets/Svg/HeaderSVG/Loans";
import Reports from "../../Assets/Svg/HeaderSVG/Reports";
import Today from "../../Assets/Svg/HeaderSVG/Today";
import Search from "../../Assets/Svg/HeaderSVG/Search";
import adminImg from "../../Assets/Img/UserProfileImg.jpg";
import Arrow from "../../Assets/Svg/HeaderSVG/Arrow";
import UserSettingModal from "../../Assets/Svg/UserSettingModalSVG/UserSettingModal";
import Sandoq from "../../Assets/Svg/HeaderSVG/Sandoq";

export default () => {
  let location = useLocation();

  const [isUserSettingModalDisplay, setisUserSettingModalDisplay] =
    useState(false);
  const persianMonth = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const weekDayArray = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];
  const date = new Date().toLocaleDateString("fa-IR");
  const getWeekDay = new Date().getDay();
  const getWeekDayStringified = `${getWeekDay}`;
  let weekDay = getWeekDayStringified
    .replace(6, "شنبه")
    .replace(0, "یکشنبه")
    .replace(1, "دوشنبه")
    .replace(2, "سه شنبه")
    .replace(3, "چهارشنبه")
    .replace(4, "پنجشنبه")
    .replace(5, "جمعه");

  const sepratedDate = date.split("/");
  const day = sepratedDate[2];
  const month = sepratedDate[1]
    .replace("۱۰", persianMonth[9])
    .replace("۱۱", persianMonth[10])
    .replace("۱۲", persianMonth[11])
    .replace("۱", persianMonth[0])
    .replace("۲", persianMonth[1])
    .replace("۳", persianMonth[2])
    .replace("۴", persianMonth[3])
    .replace("۵", persianMonth[4])
    .replace("۶", persianMonth[5])
    .replace("۷", persianMonth[6])
    .replace("۸", persianMonth[7])
    .replace("۹", persianMonth[8]);
  const year = sepratedDate[0];
  console.log("---------------------------------------");
  console.log("year is :", year);
  console.log("month is :", month);
  console.log("day is :", day);
  console.log("full date is :", date);
  console.log("---------------------------------------");
  return (
    <>
      <div
        className={`
    ${
      location.pathname === "/panel/admin/main" ||
      location.pathname === "/panel/admin/loans" ||
      location.pathname === "/panel/admin/reports" ||
      location.pathname === "/panel/admin/notifications"
        ? "w-[90vw] mr-[9vw] fixed top-0 z-10 bg-white h-[5vw] flex justify-between items-center"
        : "hidden"
    }
     `}
      >
        <div className="flex  justify-between items-center">
          <div>
            {location.pathname === "/panel/admin/main" ? (
              <UserPanel />
            ) : location.pathname === "/panel/admin/loans" ? (
              <Loans />
            ) : location.pathname === "/panel/admin/reports" ? (
              <Reports />
            ) : location.pathname === "/panel/admin/notifications" ? (
              <Alert />
            ) : (
              ""
            )}
          </div>
          <p className="text-[1.2vw] mr-[0.8vw]">
            {location.pathname === "/panel/admin/main"
              ? " پنل کاربری"
              : location.pathname === "/panel/admin/loans"
              ? "وام ها"
              : location.pathname === "/panel/admin/reports"
              ? "گزارشات"
              : location.pathname === "/panel/admin/notifications"
              ? "اعلان ها"
              : ""}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <div className="flex justify-between items-center">
              <Today />
              <p className="text-[0.9vw] mt-[0.2vw] mr-[0.5vw] text-[#4a5e67]">
                امروز
              </p>
            </div>
          </div>
          <div>
            <p className="text-[0.9vw] mt-[0.2vw] mr-[1.5vw] ml-[1.5vw] text-[#4a5e67]">
              {weekDay + "," + day + " " + month + " " + year}
            </p>
          </div>
          <div className="flex">
            <div className="absolute mt-[1vw] mr-[1vw]">
              <Search />
            </div>
            <input
              placeholder="افراد را جستوجو کنید"
              className="flex w-[22vw] h-[2.8vw] outline-none bg-[#f2f2f2] px-[3vw] text-[1vw] text-[#4a5e67] rounded-[0.8vw] "
            />
          </div>
          <div
            onClick={() =>
              setisUserSettingModalDisplay(!isUserSettingModalDisplay)
            }
            className="cursor-pointer flex justify-between items-center w-fit h-[2.8vw] mx-[1vw] bg-white rounded-[0.8vw] border-[#c4c4c4] border-[0.155vw]"
          >
            <img className="h-[2vw] rounded-full mr-[1vw]" src={adminImg} />
            <p className="text-[0.9vw] mt-[0.2vw] px-[0.5vw] text-[#4a5e67]">
              محمد حسین ضرابی
            </p>
            <div className="pl-[0.5vw]">
              <Arrow />
            </div>
          </div>
          <div
            className={`translate transition-opacity absolute top-[3.2vw] left-[0.5vw] opacity-100  ${
              isUserSettingModalDisplay
                ? "cursor-pointer"
                : "opacity-0 scale-0 "
            } `}
          >
            <UserSettingModal />
          </div>
        </div>
      </div>
      <div
        className={`
    ${
      location.pathname === "/panel/user/main" ||
      location.pathname === "/panel/user/loans" ||
      location.pathname === "/panel/user/reports" ||
      location.pathname === "/panel/user/notifications"
        ? "w-[90vw] mr-[9vw] fixed top-0 z-10 bg-white h-[5vw] flex justify-between items-center"
        : "hidden"
    }
     `}
      >
        <div className="flex justify-between items-center">
          <div>
            {location.pathname === "/panel/user/main" ? (
              <Sandoq />
            ) : location.pathname === "/panel/user/loans" ? (
              <Loans />
            ) : location.pathname === "/panel/user/notifications" ? (
              <Alert />
            ) : (
              ""
            )}
          </div>
          <p className="text-[1.2vw] mr-[0.8vw]">
            {location.pathname === "/panel/user/main"
              ? "صندوق همکاران شرکت"
              : location.pathname === "/panel/user/loans"
              ? "وام ها"
              : location.pathname === "/panel/user/notifications"
              ? "اعلان ها"
              : ""}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <div className="flex justify-between items-center">
              <Today />
              <p className="text-[0.9vw] mt-[0.2vw] mr-[0.5vw] text-[#4a5e67]">
                امروز
              </p>
            </div>
          </div>
          <div>
            <p className="text-[0.9vw] mt-[0.2vw] mr-[1.5vw] ml-[1.5vw] text-[#4a5e67]">
              {weekDay + "," + day + " " + month + " " + year}
            </p>
          </div>
          <div className="flex">
            <div className="absolute mt-[1vw] mr-[1vw]">
              <Search />
            </div>
            <input
              placeholder="نام صندوق را جستوجو کنید"
              className="flex w-[22vw] h-[2.8vw] outline-none bg-[#f2f2f2] px-[3vw] text-[1vw] text-[#4a5e67] rounded-[0.8vw] "
            />
          </div>
          <div
            onClick={() =>
              setisUserSettingModalDisplay(!isUserSettingModalDisplay)
            }
            className="cursor-pointer flex justify-between items-center w-fit h-[2.8vw] mx-[1vw] bg-white rounded-[0.8vw] border-[#c4c4c4] border-[0.155vw]"
          >
            <img className="h-[2vw] rounded-full mr-[1vw]" src={adminImg} />
            <p className="text-[0.9vw] mt-[0.2vw] px-[0.5vw] text-[#4a5e67]">
              محمد حسین ضرابی
            </p>
            <div className="pl-[0.5vw]">
              <Arrow />
            </div>
          </div>
          <div
            className={`translate transition-opacity absolute top-[3.2vw] left-[0.5vw] opacity-100  ${
              isUserSettingModalDisplay
                ? "cursor-pointer"
                : "opacity-0 scale-0 "
            } `}
          >
            <UserSettingModal />
          </div>
        </div>
      </div>
    </>
  );
};
