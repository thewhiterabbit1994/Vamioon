import YourFund from "../../../../Assets/Svg/YourFundSVG/YourFund";
import Send from "../../../../Assets/Svg/YourFundSVG/Send";
import Pen from "../../../../Assets/Svg/YourFundSVG/Pen";
import Plus from "../../../../Assets/Svg/YourFundSVG/Plus";

export default () => {
  return (
    <div className="absolute h-[33.75vw] mt-[5.5vw] mr-[50vw] w-[48vw]  rounded-[0.8vw] border-[#c4c4c4] border-[0.155vw]">
      <div className="absolute  bg-white w-[39.7vw] h-[3.5vw] rounded-t-[0.8vw]  text-[1.1vw] ">
        <div className="flex mr-[1vw] my-[1vw]">
          <YourFund />
          <p className="mr-[0.5vw]">صندوق شما</p>
        </div>
      </div>
      <div className="flex text-[1vw] text-[#4d4d4d] w-full px-[1vw] justify-between mt-[4vw] ">
        <div className="flex justify-between bg-[#f2f2f2] rounded-[0.7vw] px-[1vw] py-[1.2vw] w-[22.5vw]">
          <p className="">نام صندوق</p>
          <p className="font-bold ">آلفا دِوز</p>
        </div>
        <div className="flex justify-between bg-[#f2f2f2] rounded-[0.7vw] px-[1vw] py-[1.2vw] w-[22.5vw]">
          <p className="">تاریخ تاسیس</p>
          <p className="font-bold ">2 خرداد 1400</p>
        </div>
      </div>
      <div className="flex text-[1vw] text-[#4d4d4d] w-full px-[1vw] justify-between mt-[1vw] ">
        <div className="flex justify-between bg-[#f2f2f2] rounded-[0.7vw] px-[1vw] py-[1.2vw] w-full">
          <p className="">مدیر / مدیران صندوق</p>
          <p className="font-bold ">محمد حسین ضرابی</p>
        </div>
      </div>
      <div className="flex text-[1vw] text-[#4d4d4d] w-full px-[1vw] justify-between mt-[1vw] ">
        <div className="flex justify-between bg-[#f2f2f2] rounded-[0.7vw] px-[1vw] py-[1.2vw] w-[22.5vw]">
          <p className="">تعداد اعضای صندوق</p>
          <p className="font-bold ">28 نفر</p>
        </div>
        <div className="flex justify-between bg-[#f2f2f2] rounded-[0.7vw] px-[1vw] py-[1.2vw] w-[22.5vw]">
          <p className="">موجودی صندوق</p>
          <p className="font-bold ">50.000.000 تومان</p>
        </div>
      </div>
      <div className="flex text-[1vw] text-[#4d4d4d] w-full px-[1vw] justify-between mt-[1vw] ">
        <div className="flex-col justify-between bg-[#f2f2f2] rounded-[0.7vw] px-[1vw] py-[1.2vw] w-full">
          <div className="flex justify-between w-full">
            <p className="">قوانین صندوق</p>
            <div className="flex cursor-pointer bg-[#c4c4c4] rounded-[0.7vw] mt-[-0.25vw] px-[1vw] py-[0.6vw] text-[0.8vw] ">
              <div className="mt-[0.2vw] ml-[0.5vw]">
                <Send />
              </div>
              ارسال به اعضای صندوق
            </div>
          </div>
          <p className="pt-[1vw] font-bold pb-[0.5vw]">
            هر عضو صندوق اجازه ی 1 بار وام گرفتن در یک دوره ی 6 ماهه را دارد.
          </p>
        </div>
      </div>
      <div className="h-[0.1vw] my-[1vw] w-[95.5%] m-auto bg-[#cecece]"></div>
      <div className="w-full flex px-[1vw] mt-[1.4vw] justify-between">
        <div className="flex cursor-pointer font-bold text-[#00693b] bg-[#ccefe0] rounded-[0.7vw] mt-[-0.25vw] px-[2.5vw] py-[1.2vw] text-[1vw] ">
          <div className="mt-[0.1vw]  ml-[0.5vw]">
            <Plus />
          </div>
          افزودن اعضا
        </div>
        <div className="flex cursor-pointer font-bold text-[#997919] bg-[#ffe694] rounded-[0.7vw] mt-[-0.25vw] px-[2vw] py-[1.2vw] text-[1vw] ">
          <div className="mt-[0.2vw]  ml-[0.5vw]">
            <Pen />
          </div>
          ویرایش صندوق
        </div>
      </div>
    </div>
  );
};
