import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Ellipse from "../../Assets/Svg/SidebaarSVG/Ellipse";
import Logo from "../../Assets/Svg/NavbarSVG/Logo";
import UserPanel from "../../Assets/Svg/SidebaarSVG/UserPanel";
import VamhaIcon from "../../Assets/Svg/SidebaarSVG/VamhaIcon";
import AlertIcon from "../../Assets/Svg/SidebaarSVG/AlertsIcon";
import ReportIcon from "../../Assets/Svg/SidebaarSVG/ReportsIcon";
import Exit from "../../Assets/Svg/SidebaarSVG/Exit";
import Sandoq from "../../Assets/Svg/SidebaarSVG/Sandoq";
import VersionLogo from "../../Assets/Img/PageIcon.png";
import LogOut from "../../Components/Modals/LogOut"
import Buttons from "../../Components/Modals/Buttons"
import EmojiClever from "../../Assets/Svg/ModalSVG/EmojiClever"


export default ({to , handleLogOut}) => {
  let location = useLocation();
  const [modalLogOut, setmodalLogOut] = useState(false)
  
  return (
    <div className="fixed z-20 right-0 h-screen w-[8vw] shadow-2xl ">
      <div className="absolute z-[-10]">
        <Ellipse />
      </div>
      <div className="mt-[3vw] mr-[1.6vw]">
        <Logo />
      </div>
      <div
        className={` ${location.pathname === "/panel/admin/main" ||
          location.pathname === "/panel/admin/loans" ||
          location.pathname === "/panel/admin/reports" ||
          location.pathname === "/panel/admin/notifications"
          ? "mt-[3.75vw]"
          : "hidden"
          }`}
      >
        <Link to="admin/main">
          <div className=" w-[8vw] pt-[0.8vw] pr-[0.5vw] h-[3vw] flex">
            <div className="mt-[0.2vw]">
              <UserPanel />
            </div>
            <p
              className={`text-[1vw] pr-[1vw]  ${location.pathname === "/panel/admin/main"
                ? "text-[#00693b]"
                : "text-[#4a5e67]"
                }`}
            >
              پنل کاربری
            </p>
          </div>
        </Link>

        <div
          className={`absolute translate transition-all z-[-10] w-[8vw] h-[3vw] bg-[#b3e7d0]  ${location.pathname === "/panel/admin/main"
            ? "top-[8.5vw]"
            : location.pathname === "/panel/admin/loans"
              ? "top-[12.5vw]"
              : location.pathname === "/panel/admin/reports"
                ? "top-[16.5vw]"
                : location.pathname === "/panel/admin/notifications"
                  ? "top-[20.5vw]"
                  : "hidden"
            } `}
        >
          <div className="rounded-l-[1vw] h-[3vw] w-[0.25vw] bg-[#00693b]"></div>
        </div>

        <div className=" w-[8vw] pt-[0.8vw] pr-[0.5vw] h-[3vw] flex mt-[1vw]">
          <Link className="flex" to="admin/loans">
            <div className="mt-[0.2vw]">
              <VamhaIcon />
            </div>

            <p
              className={`text-[1vw] pr-[1vw]  ${location.pathname === "/panel/admin/loans"
                ? "text-[#00693b]"
                : "text-[#4a5e67]"
                }`}
            >
              وام ها
            </p>
          </Link>
        </div>
        <div className=" w-[8vw] pt-[0.8vw] pr-[0.5vw] h-[3vw] flex mt-[1vw]">
          <Link className="flex" to="admin/reports">
            <ReportIcon />
            <p
              className={`text-[1vw] pr-[1vw]  ${location.pathname === "/panel/admin/reports"
                ? "text-[#00693b]"
                : "text-[#4a5e67]"
                }`}
            >
              گزارشات
            </p>
          </Link>
        </div>

        <div className=" w-[8vw] pt-[0.8vw] pr-[0.5vw] h-[3vw] flex mt-[1vw]">
          <Link className="flex" to="admin/notifications">
            <AlertIcon />
            <p
              className={`text-[1vw] pr-[1vw]  ${location.pathname === "/panel/admin/notifications"
                ? "text-[#00693b]"
                : "text-[#4a5e67]"
                }`}
            >
              اعلان ها
            </p>
          </Link>
        </div>
      </div>
      <div
        className={` ${location.pathname === "/panel/user/main" ||
          location.pathname === "/panel/user/loans" ||
          location.pathname === "/panel/user/notifications"
          ? "mt-[3.75vw]"
          : "hidden"
          }`}
      >
        <Link to="user/main">
          <div className=" w-[8vw] pt-[0.8vw] pr-[0.5vw] h-[3vw] flex">
            <div className="mt-[0.1vw]">
              <Sandoq />
            </div>
            <p
              className={`text-[1vw] pr-[1vw]  ${location.pathname === "/panel/user/main"
                ? "text-[#00693b]"
                : "text-[#4a5e67]"
                }`}
            >
              صندوق
            </p>
          </div>
        </Link>

        <div
          className={`absolute translate transition-all z-[-10] w-[8vw] h-[3vw] bg-[#b3e7d0]  ${location.pathname === "/panel/user/main"
            ? "top-[8.5vw]"
            : location.pathname === "/panel/user/loans"
              ? "top-[12.5vw]"
              : location.pathname === "/panel/user/notifications"
                ? "top-[16.5vw]"
                : "hidden"
            } `}
        >
          <div className="rounded-l-[1vw] h-[3vw] w-[0.25vw] bg-[#00693b]"></div>
        </div>

        <div className=" w-[8vw] pt-[0.8vw] pr-[0.5vw] h-[3vw] flex mt-[1vw]">
          <Link className="flex" to="user/loans">
            <div className="mt-[0.2vw]">
              <VamhaIcon />
            </div>

            <p
              className={`text-[1vw] pr-[1vw]  ${location.pathname === "/panel/user/loans"
                ? "text-[#00693b]"
                : "text-[#4a5e67]"
                }`}
            >
              وام ها
            </p>
          </Link>
        </div>

        <div className=" w-[8vw] pt-[0.8vw] pr-[0.5vw] h-[3vw] flex mt-[1vw]">
          <Link className="flex" to="user/notifications">
            <AlertIcon />
            <p
              className={`text-[1vw] pr-[1vw]  ${location.pathname === "/panel/user/notifications"
                ? "text-[#00693b]"
                : "text-[#4a5e67]"
                }`}
            >
              اعلان ها
            </p>
          </Link>
        </div>
      </div>
      <div>
        <section
          className={`fixed transform transition-opacity duration-300 flex justify-center items-center  scale-0 z-30 w-full h-screen right-0 bottom-0 mt-[-200px] bg-[#00000071]  ${modalLogOut ? "scale-100 opacity-100" : "opacity-0 "
            }`}>
          <div className="fixed top-[12vw]">
            <LogOut Button={<Buttons to={to="/login"} setmodalLogOut={setmodalLogOut}/>} emoji={<EmojiClever/>} text={"آیا میخواهید از پنل خارج شوید؟"} textClassName={" w-[17.5vw] fixed flex justify-center m-auto top-[6.5vw]"}/>
          </div>
        </section>
        <div
          onClick={() => setmodalLogOut(true)}
          className=" absolute bottom-[8vw]  w-[8vw] pt-[0.8vw] pr-[0.5vw] h-[3vw] flex mt-[1vw]">
          <Link className="flex" to="#">
            <Exit />
            <p className={`text-[1vw] pr-[1vw] text-[#4a5e67]`}>خروج</p>
          </Link>
        </div>
        <div className="absolute flex flex-col justify-center items-center bottom-[1.5vw] w-[6vw] h-[5.5vw] mr-[1vw] rounded-[1vw] bg-[#fff5d4]">
          <img className="h-[1.5vw]" src={VersionLogo} />
          <p className="text-[1vw] mt-[1vw] text-[#4a5e67]">نسخه 1.1</p>
        </div>
      </div>
    </div>
  );
};
