import SupportIcon from "../Assets/Svg/SupportSVG/SupportIcon";
import Elipse from "../Assets/Svg/SupportSVG/Ellipse1";
import User from "../Assets/Svg/SupportSVG/UserIcon";
import Email from "../Assets/Svg/SupportSVG/Email";
import TextIcon from "../Assets/Svg/SupportSVG/TextIcon";
import Phone from "../Assets/Svg/SupportSVG/Phone";
import Location from "../Assets/Svg/SupportSVG/Location";
import Elipse2 from "../Assets/Svg/SupportSVG/Ellipse2";
import Map from "../Assets/Img/Support/Map.png";
import GoogleLocation from "../Assets/Svg/SupportSVG/GoogleLocation";

export default () => {
  return (
    <>
      <div className="absolute z-[-10] h-screen w-screen flex  justify-end items-end">
        <Elipse />
      </div>
      <div className="flex w-screen justify-center ">
        <div className="absolute w-[80vw] mt-[8vw] m-auto ">
          <div className="w-[51vw] mr-[-5vw]">
            <div className="flex">
              <SupportIcon />
              <p className="mr-[1.2vw] text-[1.3vw]">پشتیبانی</p>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <p className="text-[#cacaca] text-[5vw] ">.</p>
                <p className="text-[1vw] mt-[3.7vw] text-[#4D4D4D]">
                  برای ارسال پیام به تیم پشتیبانی ما باید عضو وامیون باشی!
                </p>
              </div>
              <div>
                <p className="text-[1vw] text-[#00af63] mt-[3.7vw]">
                  ورود / عضویت
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mt-[-1.1vw]">
                <label
                  htmlFor="name"
                  className="absolute mt-[0.7vw] mr-[0.7vw] text-[#00693b] text-[1vw] flex  "
                >
                  <User />
                  <p className="mr-[0.6vw]"> نام و نام خانوادگی</p>
                </label>
                <input
                  className="w-[25vw] h-[6vw] pt-[2vw] pr-[2vw] border-[0.2vw] text-[1vw] outline-[#00693b] rounded-[1vw] "
                  id="name"
                  maxLength={40}
                  type="text"
                />
              </div>
              <div className="mr-[1vw] mt-[-1.1vw]">
                <label
                  htmlFor="email"
                  className="absolute mt-[0.7vw] mr-[0.7vw] text-[#00693b] text-[1vw] flex  "
                >
                  <div className="mt-[0.2vw]">
                    <Email />
                  </div>
                  <p className="mr-[0.6vw]">آدرس ایمیل</p>
                </label>
                <input
                  className="w-[25vw] h-[6vw] pt-[2vw] pr-[2vw] border-[0.2vw] text-[1vw] outline-[#00693b] rounded-[1vw] "
                  id="email"
                  maxLength={25}
                  type="text"
                />
              </div>
            </div>
            <div className="mt-[1vw]">
              <label
                htmlFor="text"
                className="absolute mt-[0.7vw] mr-[0.7vw] text-[#00693b] text-[1vw] flex  "
              >
                <div className="mt-[0.2vw]">
                  <TextIcon />
                </div>
                <p className="mr-[0.6vw]">متن پیام شما</p>
              </label>
              <textarea
                id="text"
                placeholder="پیام خودتونو اینجا وارد کنید"
                className="resize-none w-[51vw] h-[12vw] py-[3vw] px-[2vw] border-[0.2vw] text-[1vw] outline-[#00693b] rounded-[1vw]"
              />
            </div>
            <div className="flex justify-center">
              <button className="border-[0.15vw] border-[#00693b] text-[#00693b] px-[3vw] text-[1vw] py-[0.4vw] rounded-full bg-white  ">
                ارسال پیام
              </button>
            </div>
          </div>
        </div>
        <div className="bg-late-200 mr-[60vw] w-[35vw] mt-[8vw] m-auto">
          <div className="flex justify-between">
            <div>
              <p className="text-[1vw] mt-[1vw] text-[#818181]">
                اگه سوالی دارین میتونین با ما تماس بگیرین
              </p>
            </div>
            <div>
              <a
                href="tel:09904848665"
                className="relative z-10 flex justify-center items-center rounded-full py-[0.7vw] w-[10vw] bg-white "
              >
                <Phone color="#00af63" />
                <p className="text-[1vw] mt-[0.5vw] mr-[0.5vw] text-[#00af63]">
                  09904848665
                </p>
              </a>
              <div className="absolute left-[2.5vw] top-[4vw]">
                <Elipse2 />
              </div>
            </div>
          </div>
          <div>
            <p className="text-[1vw] mt-[2.25vw] text-[#4D4D4D]">
              با ما در تماس باشین
            </p>
          </div>
          <div className="w-full h-[6vw] mt-[1vw]  bg-[#f2f2f2] text-[#4D4D4D] text-[1vw] rounded-[1vw] flex justify-center items-center">
            <div className="p-[1vw]">
              <Location />
            </div>
            <div className=" w-[5vw]">آدرس ما</div>
            <div className="mr-[1vw]">
              تهران ,اتوبان نواب جنوب به شمال, بعد از خیابان آزادی, خیابان 43
              شرقی, پلاک 747, واحد 2
            </div>
          </div>
          <div className="flex justify-between">
            <a
              href="mailto:ho3einzarrabi@gmail.com"
              className="w-[55%] h-[6vw] mt-[1vw] z-10 bg-[#f2f2f2] text-[#4D4D4D] text-[1vw] rounded-[1vw] flex justify-center items-center"
            >
              <div className="p-[1vw] mr-[-3.5vw]">
                <Email color="#4D4D4D" />
              </div>
              <div className="">ایمیل ما</div>
              <div className="mr-[1.4vw]">info@vamion.com</div>
            </a>
            <a
              href="tel:09904848665"
              className="w-[43%] h-[6vw] mt-[1vw] z-10 bg-[#f2f2f2] text-[#4D4D4D] text-[1vw] rounded-[1vw] flex justify-center items-center"
            >
              <div className="p-[1vw] mr-[-1vw]">
                <Phone color="#4D4D4D" />
              </div>
              <div className=" w-[5vw]">تماس</div>
              <div className="mr-[-1.5vw]">09904848665</div>
            </a>
          </div>
          <div className="relative mt-[1vw] flex justify-center items-center pt-[7%]">
            <img className="absolute inset-0 " src={Map} />
            <a
              href="https://goo.gl/maps/YrgSttj8UafNfLcJ9"
              target="_blank"
              className="flex z-10 drop-shadow-xl text-[#4D4D4D] px-[3vw] text-[1vw] py-[1vw] rounded-xl bg-white"
            >
              <GoogleLocation />
              <p className="mr-[1vw]">موقعیت ما روی نقشه</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
