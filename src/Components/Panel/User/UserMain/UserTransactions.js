import FleshUpDown from "../../../../Assets/Svg/UserSVG/FleshUpDown";
import Info from "../../../../Assets/Svg/ActiveLoansSVG/info";
import { useState, useEffect } from "react";

export default () => {
  const [progressBarValues, setprogressBarValues] = useState({
    bar1: 0,
    bar2: 0,
    bar3: 0,
    bar4: 0,
    bar5: 0,
    bar6: 0,
    bar7: 0,
    bar8: 0,
    bar9: 0,
    bar10: 0,
    bar11: 0,
    bar12: 0,
  });
  useEffect(() => {
    setprogressBarValues({
      bar1: 96,
      bar2: 40,
      bar3: 60,
      bar4: 50,
      bar5: 15,
      bar6: 80,
      bar7: 60,
      bar8: 30,
      bar9: 90,
      bar10: 20,
      bar11: 90,
      bar12: 10,
    });
  }, []);

  return (
    <div>
      <div className="hidescroll flex flex-col absolute pb-[2vw] mt-[32.5vw] mr-[9vw] w-[89vw] h-[25vw] overflow-y-auto overflow-x-hidden scroll-smooth  rounded-[0.8vw] border-[#c4c4c4] border-[0.155vw]">
        <div className="absolute  bg-white w-[39.7vw] h-[3.5vw] rounded-t-[0.8vw]  text-[1.1vw] ">
          <div className="flex w-[89vw] px-[1vw] mt-[1vw] text-[1.1vw] items-center justify-between">
            <div className="flex">
              <div className="mt-[0.2vw] ml-[0.7vw]">
                <FleshUpDown />
              </div>
              <p>تراکنش های شهریور ماه</p>
            </div>
            <div className="flex items-center">
              <p>مدت زمان</p>
              <select className="bg-[#f2f2f2] outline-none rounded-[0.7vw] mr-[1vw] px-[1vw] py-[0.5vw] w-[8vw]">
                <option>3 ماهه</option>
                <option>6 ماهه</option>
                <option>1 ساله</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex mt-[0.4vw]">
          <div className="w-[49.2vw]">
            <div className="mt-[11vw] flex w-[55.5% h-[7.5vw] justify-between ">
              <progress
                className={`progressfirstcolor rotate-90 rounded-[10px] w-[30vw] h-[1.5vw] bg-[#f2f2f2] mt-[0.5vw] mx-[-4.7vw]
              
            `}
                value={progressBarValues.bar1}
                max={100}
              />

              <progress
                className={`progresssecondcolor rotate-90 rounded-[10px] w-[30vw] h-[1.5vw] bg-[#f2f2f2] mt-[0.5vw] mx-[-4.7vw]
           
            `}
                value={progressBarValues.bar2}
                max={100}
              />

              <progress
                className={`progressthirdcolor rotate-90 rounded-[10px] w-[30vw] h-[1.5vw] bg-[#f2f2f2] mt-[0.5vw] mx-[-4.7vw]
            
            `}
                value={progressBarValues.bar3}
                max={100}
              />

              <progress
                className={`progressforthcolor rotate-90 rounded-[10px] w-[30vw] h-[1.5vw] bg-[#f2f2f2] mt-[0.5vw] mx-[-4.7vw]
            
            `}
                value={progressBarValues.bar4}
                max={100}
              />

              <progress
                className={`progressfirstcolor rotate-90 rounded-[10px] w-[30vw] h-[1.5vw] bg-[#f2f2f2] mt-[0.5vw] mx-[-4.7vw]
           
            `}
                value={progressBarValues.bar5}
                max={100}
              />

              <progress
                className={`progresssecondcolor rotate-90 rounded-[10px] w-[30vw] h-[1.5vw] bg-[#f2f2f2] mt-[0.5vw] mx-[-4.7vw]
           
            `}
                value={progressBarValues.bar6}
                max={100}
              />

              <progress
                className={`progressthirdcolor rotate-90 rounded-[10px] w-[30vw] h-[1.5vw] bg-[#f2f2f2] mt-[0.5vw] mx-[-4.7vw]

            `}
                value={progressBarValues.bar7}
                max={100}
              />

              <progress
                className={`progressforthcolor rotate-90 rounded-[10px] w-[30vw] h-[1.5vw] bg-[#f2f2f2] mt-[0.5vw] mx-[-4.7vw]
           
            `}
                value={progressBarValues.bar8}
                max={100}
              />

              <progress
                className={`progressfirstcolor rotate-90 rounded-[10px] w-[30vw] h-[1.5vw] bg-[#f2f2f2] mt-[0.5vw] mx-[-4.7vw]

            `}
                value={progressBarValues.bar9}
                max={100}
              />

              <progress
                className={`progresssecondcolor rotate-90 rounded-[10px] w-[30vw] h-[1.5vw] bg-[#f2f2f2] mt-[0.5vw] mx-[-4.7vw]
           
            `}
                value={progressBarValues.bar10}
                max={100}
              />

              <progress
                className={`progressthirdcolor rotate-90 rounded-[10px] w-[30vw] h-[1.5vw] bg-[#f2f2f2] mt-[0.5vw] mx-[-4.7vw]
           
            `}
                value={progressBarValues.bar11}
                max={100}
              />

              <progress
                className={`progressforthcolor rotate-90 rounded-[10px] w-[30vw] h-[1.5vw] bg-[#f2f2f2] mt-[0.5vw] mx-[-4.7vw]
           
            `}
                value={progressBarValues.bar12}
                max={100}
              />
            </div>
            <div className="flex w-[54%]  mt-[2.5vw] text-[0.8vw]">
              <div className="mr-[1vw]">
                <p>فروردین</p>
              </div>
              <div className="mr-[1vw]">
                <p>اردیبهشت</p>
              </div>
              <div className="mr-[1.5vw]">
                <p>خرداد</p>
              </div>
              <div className="mr-[2.8vw]">
                <p>تیر</p>
              </div>
              <div className="mr-[2.7vw]">
                <p>مرداد</p>
              </div>
              <div className="mr-[2.2vw]">
                <p>شهریور</p>
              </div>
              <div className="mr-[2.4vw]">
                <p>مهر</p>
              </div>
              <div className="mr-[2.9vw]">
                <p>آبان</p>
              </div>
              <div className="mr-[3vw]">
                <p>آذر</p>
              </div>
              <div className="mr-[3.1vw]">
                <p>دی</p>
              </div>
              <div className="mr-[3vw]">
                <p>بهمن</p>
              </div>
              <div className="mr-[2.2vw]">
                <p>اسفند</p>
              </div>
            </div>
          </div>
          <div className="w-[50vw] mt-[5.5vw]">
            <div className="flex text-[1vw] text-[#4d4d4d] w-[40vw] mr-[-0.2vw] px-[1vw] justify-between ">
              <div className="flex justify-between bg-[#f2f2f2] rounded-[0.7vw] px-[1vw] py-[1.2vw] w-full">
                <div className="flex items-center">
                  <p className="font-bold">جمع مبلغ تراکنش ها</p>
                </div>
                <p className="font-bold ">50.000.000 تومان</p>
              </div>
            </div>
            <div className="flex text-[1vw] text-[#4d4d4d] w-[40vw] mr-[-0.2vw] px-[1vw] justify-between mt-[1vw] ">
              <div className="flex justify-between bg-[#f2f2f2] rounded-[0.7vw] px-[1vw] py-[1.2vw] w-full">
                <div className="flex items-center">
                  <p className="font-bold">میانگین تراکنش های انجام شده</p>
                </div>
                <p className="font-bold ">52%</p>
              </div>
            </div>
            <div className="flex text-[1vw] text-[#4d4d4d] w-[40vw] mr-[-0.2vw] px-[1vw] justify-between mt-[1vw] ">
              <div className="flex justify-between bg-[#f2f2f2] rounded-[0.7vw] px-[1vw] py-[1.2vw] w-full">
                <div className="flex items-center">
                  <p className="font-bold">بیشترین تراکنش های انجام شده در</p>
                </div>
                <p className="font-bold ">شهریور 1400</p>
              </div>
            </div>
            <div className="flex items-center mr-[1vw] mt-[1.7vw] text-[0.8vw]">
              <Info />
              <p className=" mt-[0.2vw] mr-[0.7vw] text-[#00af63] ">
                اطلاعات این جدول به صورت اتوماتیک تولید می شوند.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
