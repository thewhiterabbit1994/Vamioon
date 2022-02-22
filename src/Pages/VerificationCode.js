import Ellipse from "../Assets/Svg/LoginSVG/Ellipse";
import Logo from "../Assets/Svg/LoginSVG/Logo";
import Phone from "../Assets/Svg/LoginSVG/Phone";
import Support from "../Assets/Svg/NavbarSVG/Support";
import Clock from "../Assets/Svg/LoginSVG/Clock";
import Flash from "../Assets/Svg/LoginSVG/Flash";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

export default () => {
  const inputE1 = useRef(null);
  const inputE2 = useRef(null);
  const inputE3 = useRef(null);
  const inputE4 = useRef(null);
  const btnSubmit = useRef(null);
  const [enterCode, setenterCode] = useState("");
  const [timerValue, settimerValue] = useState({
    minutes: 3,
    seconds: "00",
  });
  let [time, settime] = useState(179);

  console.log(time);
  function updateTimer() {
    if (time === 0) {
      settime(0);
    } else {
      settime(time - 1);
    }
    settimerValue({
      minutes: Math.floor(time / 60),
      seconds: time - Math.floor(time / 60) * 60,
    });
  }
  useEffect(() => {
    setTimeout(() => {
      updateTimer();
    }, 1000);
  }, [time]);

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
          <div className="flex text-[0.9vw] w-full text-[#4D4D4D] py-[1.8vw] pr-[2.5vw]">
            <Phone />
            <p className="mr-[0.6vw]">شماره موبایل شما</p>
            <p className="mr-[2vw]">09904848665</p>
            <Link to="/login">
              <div className="mr-[8.4vw] cursor-pointer">
                <Flash />
              </div>
            </Link>
          </div>
          <div className="w-[25vw] mr-[2.5vw] h-[0.1vw] mb-[2vw] bg-[#c4c4c475]"></div>
          <p className="text-[0.9vw] text-[#4D4D4D] pb-[1.8vw] pr-[2.5vw]">
            کد ارسال شده به شماره موبایل خود را وارد کنید
          </p>
          <div className="mx-[2.5vw]">
            <label
              htmlFor="phone"
              className="absolute mt-[0.7vw] mr-[0.7vw] text-[#00693b] text-[1vw] flex  "
            ></label>
            <section className="flex flex-row-reverse  justify-between">
              <input
                id="username"
                className="h-[3.5vw] text-center text-[#000] w-[3vw] bg-[#d6d6d6] outline-[#00693b] rounded-[0.4vw]  text-[1.5vw]"
                type="number"
                ref={inputE1}
                onChange={({ target: { value } }) => {
                  if (!isNaN(Number(value))) {
                    Number(value);
                    setenterCode(enterCode + value);
                    inputE2.current.focus();
                  } else {
                    inputE1.current.value = "";
                  }
                }}
              />
              <div className="flex items-center text-[2vw] mt-[0.5vw] text-[#d6d6d6]">
                -
              </div>
              <input
                id="username"
                className="h-[3.5vw] text-center text-[#000] w-[3vw] bg-[#d6d6d6] outline-[#00693b] rounded-[0.4vw]  text-[1.5vw]"
                type="number"
                ref={inputE2}
                onChange={({ target: { value } }) => {
                  if (!isNaN(Number(value))) {
                    Number(value);
                    setenterCode(enterCode + value);
                    inputE3.current.focus();
                  } else {
                    inputE2.current.value = "";
                  }
                }}
              />
              <div className="flex items-center text-[2vw] mt-[0.5vw] text-[#d6d6d6]">
                -
              </div>
              <input
                id="username"
                className="h-[3.5vw] text-center text-[#000] w-[3vw] bg-[#d6d6d6] outline-[#00693b] rounded-[0.4vw]  text-[1.5vw]"
                type="number"
                ref={inputE3}
                onChange={({ target: { value } }) => {
                  if (!isNaN(Number(value))) {
                    Number(value);
                    setenterCode(enterCode + value);
                    inputE4.current.focus();
                  } else {
                    inputE3.current.value = "";
                  }
                }}
              />
              <div className="flex items-center text-[2vw] mt-[0.5vw] text-[#d6d6d6]">
                -
              </div>
              <input
                id="username"
                className="h-[3.5vw] text-center text-[#000] w-[3vw] bg-[#d6d6d6] outline-[#00693b] rounded-[0.4vw]  text-[1.5vw]"
                type="number"
                ref={inputE4}
                onChange={({ target: { value } }) => {
                  if (!isNaN(Number(value))) {
                    Number(value);
                    setenterCode(enterCode + value);
                    btnSubmit.current.focus();
                  } else {
                    inputE4.current.value = "";
                  }
                }}
              />
            </section>
          </div>
          <div className="flex mt-[2vw] w-full justify-between px-[2vw]">
            <p className="text-[1.1vw]  text-[#4D4D4D]">
              کدی دریافت نکردید؟
              <a
                onClick={() => {
                  if (time === 0) {
                    settime(179);
                  }
                }}
                className={`text-[#00af63] ${
                  time === 0 ? "cursor-pointer" : "cursor-not-allowed"
                } `}
              >
                ارسال مجدد کد
              </a>
            </p>
            <div className="flex text-[1.2vw] ml-[0.5vw]">
              {timerValue.seconds} : {timerValue.minutes}
              <div className="mt-[0.5vw] mr-[0.5vw]">
                <Clock />
              </div>
            </div>
          </div>
          <button
            ref={btnSubmit}
            className="bg-[#00693b] text-[1.1vw] mt-[1vw] mb-[1.2vw] mx-[2vw] px-[10vw] py-[1vw] rounded-full text-white "
          >
            ارسال و ورود
          </button>
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
