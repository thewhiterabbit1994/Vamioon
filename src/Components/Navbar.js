import Logo from "../Assets/Svg/NavbarSVG/Logo";
import AskQuestion from "../Assets/Svg/NavbarSVG/AskQuestion";
import Home from "../Assets/Svg/NavbarSVG/Home";
import Insta from "../Assets/Svg/NavbarSVG/Insta";
import Support from "../Assets/Svg/NavbarSVG/Support";

const Navbar = () => {
  return (
    <div className="flex w-screen justify-between mt-[5vh] text-[12px] items-center">
      <div className="flex w-[40%] justify-around mr-[20px]  items-center">
        <div className="cursor-pointer">
          <Logo />
        </div>
        <div className="flex items-center cursor-pointer">
          <Home />
          <p className="mr-3 mt-[3px]">خانه</p>
        </div>
        <div className="flex items-center cursor-pointer mt-[3px]">
          <Support />
          <p className="mr-3 ">پشتیبانی</p>
        </div>
        <div className="flex items-center cursor-pointer">
          <AskQuestion />
          <p className="mr-3 mt-0.5">سوالات متداول</p>
        </div>
      </div>
      <div className="flex w-[20%] justify-around ml-[20px] items-center">
        <a
          href="https://www.instagram.com/realzarrabi"
          target="_blank"
          className="flex mt-1 cursor-pointer"
        >
          <Insta />
          <p className="mr-2 mt-[2px]">اینستاگرام ما</p>
        </a>
        <div>
          <button className="bg-[#00693b] px-5 py-2 rounded-full text-white  ">
            ورود به وامیون
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
