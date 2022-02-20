import ReactFullpage from "@fullpage/react-fullpage";
import Elipse1 from "../../Assets/Svg/MiddleSlideSVG/Ellipse1";
import Elipse2 from "../../Assets/Svg/MiddleSlideSVG/Ellipse2";
import Elipse3 from "../../Assets/Svg/MiddleSlideSVG/Ellipse3";
import Img1 from "../../Assets/Img/MiddleSlide/Img1.png";
import Img2 from "../../Assets/Img/MiddleSlide/Img2.png";
import Img3 from "../../Assets/Img/MiddleSlide/Img3.png";
import Img4 from "../../Assets/Img/MiddleSlide/Img4.png";
import Money from "../../Assets/Svg/MiddleSlideSVG/Money";
import Group from "../../Assets/Svg/MiddleSlideSVG/Group";
import User from "../../Assets/Svg/MiddleSlideSVG/User";
import Download from "../../Assets/Svg/MiddleSlideSVG/Download";

const MiddleSlide = () => {
  return (
    <>
      <div className="absolute h-screen w-screen flex items-center mt-[1.5vw]">
        <Elipse1 />
      </div>
      <div className="absolute h-screen w-screen flex justify-end items-start">
        <Elipse2 />
      </div>
      <ReactFullpage
        //fullpage options
        KeyboardScrolling={(true, "down, right")}
        licenseKey={"YOUR_KEY_HERE"}
        navigation
        navigationPosition={"left"}
        scrollingSpeed={1500}
        setResponsive={true}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <a className="flex w-screen justify-between">
                  <div>
                    <img className="w-[20vw] mr-[11vw]" src={Img1} />
                  </div>
                  <div className="text-[#4D4D4D]  mt-[4vw] ml-[11vw] w-[40vw]">
                    <div>
                      <p className="text-[2.3vw] ">
                        صندوق قرض الحسنه ی خودتو داشته باش!
                      </p>
                    </div>
                    <div>
                      <p className="text-[1.2vw] mt-[2vw] leading-9">
                        با وامیون میتونی صندوق قرض الحسنه خودتو بسازی و دوستان و
                        اقوام خودتو به عضویت صندوق در بیاری و اون هارو مدیریت
                        کنی
                      </p>
                    </div>
                    <div className="flex items-center mt-[2vw]">
                      <div className="flex justify-center items-center w-[35px] h-[35px] bg-[#b3dcd7] rounded-[10px] ">
                        <Money />
                      </div>
                      <p className="text-[1vw] mr-3">
                        امکان ایجاد یک یا چند صندوق الحسنه و مدیریت آن ها
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="section">
                <a className="flex w-screen justify-between">
                  <div>
                    <img className="w-[20vw] mr-[11vw]" src={Img2} />
                  </div>
                  <div className="text-[#4D4D4D]  mt-[4vw] ml-[11vw] w-[40vw]">
                    <div>
                      <p className="text-[2.3vw] ">اعضای صندوقت رو مدیریت کن</p>
                    </div>
                    <div>
                      <p className="text-[1.2vw] mt-[2vw] leading-9">
                        با کمک پنل مدیریتی که برات طراحی کردیم میتونی به راحتی
                        اعضای صندوق خودتو مدیریت کنی و اعضای جدیدی به صندوقت
                        اضافه کنی
                      </p>
                    </div>
                    <div className="flex items-center mt-[2vw]">
                      <div className="flex justify-center items-center w-[35px] h-[35px] bg-[#fcdbc2] rounded-[10px] ">
                        <Group />
                      </div>
                      <p className="text-[1vw] mr-3">
                        پنل مدیریتی کاربردی و در عین حال ساده
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="section">
                <a className="flex w-screen justify-between">
                  <div>
                    <img className="w-[25vw] mt-[5vw] mr-[11vw]" src={Img3} />
                  </div>
                  <div className="text-[#4D4D4D]  mt-[4vw] ml-[11vw] w-[40vw]">
                    <div>
                      <p className="text-[2.3vw] ">بدون محدودیت وام بده!</p>
                    </div>
                    <div>
                      <p className="text-[1.2vw] mt-[2vw] leading-9">
                        وام دادن به اعضای صندوقت محدودیت نداره و میتونی به هر
                        چند نفر که دوست داری وام بدی و اقساط پرداخت شده هر شخص
                        رو ببینی و حتی پرداخت اقساطو بهشون یادآوری کنی
                      </p>
                    </div>
                    <div className="flex items-center mt-[2vw]">
                      <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#fff0bf] rounded-[10px] ">
                        <User />
                      </div>
                      <p className="text-[1vw] mr-3">
                        امکان حذف و اضافه کردن اعضا بدون محدودیت
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="section">
                <a className="flex w-screen justify-between">
                  <div>
                    <img className="w-[20vw] mr-[11vw]" src={Img4} />
                  </div>
                  <div className="text-[#4D4D4D]  mt-[4vw] ml-[11vw] w-[40vw]">
                    <div>
                      <p className="text-[2.3vw] ">گزارش های مالی رو ببین</p>
                    </div>
                    <div>
                      <p className="text-[1.2vw] mt-[2vw] leading-9">
                        به کمک پنل وامیون میتونی خیلی راحت گزارش مالی بگیری و
                        پرداختی هر ماه اعضا رو به راحتی ببینی و حتی گزارش ها رو
                        دانلود کنی!
                      </p>
                    </div>
                    <div className="flex items-center mt-[2vw]">
                      <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#b3dcd7] rounded-[10px] ">
                        <Download />
                      </div>
                      <p className="text-[1vw] mr-3">
                        امگان خروجی گرفتن از گزارش ها
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};
export default MiddleSlide;
