import Logo from "../Assets/Svg/NavbarSVG/Logo";
import AskQuestion from "../Assets/Svg/NavbarSVG/AskQuestion";
import Home from "../Assets/Svg/NavbarSVG/Home";
import Insta from "../Assets/Svg/NavbarSVG/Insta";
import Support from "../Assets/Svg/NavbarSVG/Support";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  return (
    <div className="flex absolute z-10 w-screen justify-between mt-[2.22265625vw] text-[0.9375vw] items-center">
      <div className="flex w-[40%] justify-around mr-[1.5625vw]  items-center">
        <Link to="/">
          <div className="cursor-pointer">
            <Logo />
          </div>
        </Link>
        <Link to="/">
          <div className="flex items-center">
            <Home />
            <p className="mr-[0.9375vw] mt-[0.234375vw]">خانه</p>
          </div>
        </Link>
        <Link to="support">
          <div className="flex items-center cursor-pointer mt-[0.234375vw]">
            <Support />
            <p className="mr-[0.9375vw] ">پشتیبانی</p>
          </div>
        </Link>
        <Link to="faq">
          <div className="flex items-center cursor-pointer">
            <AskQuestion />
            <p className="mr-[0.9375vw] mt-[0.15625vw]">سوالات متداول</p>
          </div>
        </Link>
      </div>
      <div className="flex w-[20%] justify-around ml-[1.5625vw] items-center">
        <a
          href="https://www.instagram.com/realzarrabi"
          target="_blank"
          className={`${
            location.pathname === "/login" ||
            location.pathname === "/login/verificationcode"
              ? "ml-[-12vw] flex cursor-pointer"
              : "flex cursor-pointer"
          }`}
        >
          <Insta />
          <p className="mr-[0.625vw] mt-[0.15625vw]">اینستاگرام ما</p>
        </a>
        <div
          className={`${
            location.pathname === "/login" ||
            location.pathname === "/login/verificationcode"
              ? "hidden"
              : ""
          }`}
        >
          <Link to="login">
            <button className="bg-[#00693b] px-[1.5625vw] py-[0.625vw] rounded-full text-white ">
              ورود به وامیون
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
