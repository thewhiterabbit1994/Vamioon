import Ellipse from "../Assets/Svg/LoginSVG/Ellipse";
import Logo from "../Assets/Svg/LoginSVG/Logo";
import Phone from "../Assets/Svg/LoginSVG/Phone";
import Support from "../Assets/Svg/NavbarSVG/Support";
import { Link } from "react-router-dom";
import { useState } from "react";

export default () => {
  const [phoneInput, setphoneInput] = useState("");
  return (
    <div>
      <div className="absolute z-[-10]">
        <Ellipse />
      </div>
      <div className=" absolute w-screen  flex flex-col items-center justify-center mt-[6vw]">
        <div>
          <Logo />
        </div>
        <div className="text-[#4D4D4D] text-[0.9vw] my-[1vw] ">
          <p>صندوق قرض الحسنه خودتو بساز!</p>
        </div>
        <div className="w-[30vw] rounded-[1vw] border-[0.1vw] h-fit bg-white">
          <p className="text-[0.9vw] text-[#4D4D4D] py-[1.8vw] pr-[2.5vw]">
            برای ورود / عضویت شماره موبایل خود را وارد کنید
          </p>
          <div className="mx-[2.5vw]">
            <label
              htmlFor="phone"
              className="absolute mt-[0.7vw] mr-[0.7vw] text-[#00693b] text-[1vw] flex  "
            >
              <Phone />
              <p className="mr-[0.6vw]">شماره موبایل</p>
            </label>
            <input
              value={phoneInput}
              onChange={(e) => setphoneInput(e.target.value)}
              className="w-[25vw] h-[6vw] pt-[2vw] pr-[2vw] border-[0.2vw] text-[1vw] outline-[0.5vw] outline-[#00693b] rounded-[1vw] "
              id="phone"
              maxLength={11}
              type="text"
            />
          </div>
          <div className="flex  px-[2vw]">
            <p className="text-[#cacaca] text-[3vw] mt-[1.5vw]">.</p>
            <p className="text-[1.1vw] mt-[3.5vw] text-[#4D4D4D]">
              استفاده از خدمات وامیون به منزله قبول
              <a className="text-[#00af63] "> شرایط و ضوابط </a>
              می باشد
            </p>
          </div>
          <Link to="/login/verificationcode">
            <button className="bg-[#00693b] text-[1.1vw] mt-[1vw] mb-[1vw] mx-[2vw] px-[10.4vw] py-[1vw] rounded-full text-white ">
              دریافت کد
            </button>
          </Link>
        </div>
        <div className="flex">
          <div className="my-[1vw] ml-[0.6vw]">
            <Support color="#4D4D4D" />
          </div>
          <div>
            <p className="text-[#4D4D4D] text-[0.9vw] ml-[0.6vw] my-[1vw] ">
              نیاز به راهنمایی دارید؟
            </p>
          </div>
          <div>
            <Link to="/support">
              <p className="text-[#00af63] text-[0.9vw] my-[1vw] ">
                تماس با پشتیبانی
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
