import Qollak from "../../../../Assets/Svg/ActiveLoansSVG/Qollak";
import DownFlesh from "../../../../Assets/Svg/ActiveLoansSVG/DownFlesh";
import GreenPlus from "../../../../Assets/Svg/ActiveLoansSVG/GreenPlus";
import OrangeMinus from "../../../../Assets/Svg/ActiveLoansSVG/OrangeMinus";
import UpFlesh from "../../../../Assets/Svg/ActiveLoansSVG/UpFlesh";
import { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";

export default () => {
  const [data, setdata] = useState([
    {
      id: "وام های صندوق",
      label: "وام های صندوق",
      value: 0,
      color: "#f58634",
    },
    {
      id: "موجودی باقیمانده",
      label: "موجودی باقیمانده",
      value: 0,
      color: "#ffcc29",
    },
    {
      id: "موجودی صندوق",
      label: "موجودی صندوق",
      value: 0,
      color: "#00af63",
    },
  ]);

  useEffect(() => {
    setdata([
      {
        id: "وام های صندوق",
        label: "وام های صندوق",
        value: 12000020,
        color: "#f58634",
      },
      {
        id: "موجودی باقیمانده",
        label: "موجودی باقیمانده",
        value: 26780000,
        color: "#ffcc29",
      },
      {
        id: "موجودی صندوق",
        label: "موجودی صندوق",
        value: 50000000,
        color: "#00af63",
      },
    ]);
  }, []);

  return (
    <div>
      <div className="hidescroll flex flex-col absolute pb-[2vw] mt-[5.5vw] mr-[68vw] w-[30vw] h-[52vw] overflow-y-auto overflow-x-hidden scroll-smooth  rounded-[0.8vw] border-[#c4c4c4] border-[0.155vw]">
        <div className="absolute  bg-white w-[39.7vw] h-[3.5vw] rounded-t-[0.8vw]  text-[1.1vw] ">
          <div className="flex mr-[1vw] my-[1vw]">
            <div className="mt-[0.3vw]">
              <Qollak />
            </div>
            <p className="mr-[0.5vw] ">موجودی صندوق</p>
          </div>
        </div>
        <div className="w-full  mt-[5vw] h-[15vw] ">
          <ResponsivePie
            data={data}
            colors={{ datum: "data.color" }}
            innerRadius={0}
            padAngle={0}
            motionConfig="slow"
            transitionMode="pushIn"
            cornerRadius={0}
            activeOuterRadiusOffset={0}
            borderWidth={0}
            arcLabel={null}
            arcLinkLabel={null}
            arcLinkLabelsSkipAngle={0}
            arcLinkLabelsTextColor="#000"
            arcLinkLabelsThickness={0}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            legends={[
              {
                anchor: "bottom",
                direction: "column",
                justify: false,
                translateX: -200,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 0,
                itemHeight: 0,
                itemTextColor: "#000",
                itemDirection: "left-to-right",
                itemOpacity: 0,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        </div>
        <div className="flex w-full px-[1vw] mt-[1vw] text-[1.1vw] items-center justify-between">
          <div className="">
            <p>گزارش شهریور ماه</p>
          </div>
          <div className="flex items-center">
            <p>ماه</p>
            <select className="bg-[#f2f2f2] outline-none rounded-[0.7vw] mr-[1vw] px-[1vw] py-[0.5vw] w-[8vw]">
              <option>فروردین</option>
              <option>اردیبهشت</option>
              <option>خرداد</option>
              <option>تیر</option>
              <option>مرداد</option>
              <option>شهریور</option>
              <option>مهر</option>
              <option>آبان</option>
              <option>آذر</option>
              <option>دی</option>
              <option>بهمن</option>
              <option>اسفند</option>
            </select>
          </div>
        </div>
        <div className="h-[0.1vw] my-[1vw] w-[93%] m-auto bg-[#cecece]"></div>
        <div className="flex text-[1vw] text-[#4d4d4d] w-full px-[1vw] justify-between ">
          <div className="flex justify-between bg-[#f2f2f2] rounded-[0.7vw] px-[1vw] py-[1.2vw] w-full">
            <div className="flex items-center">
              <div className="w-[0.8vw] h-[0.8vw] ml-[1vw] rounded-[0.3vw] bg-[#00af63] "></div>
              <p className="font-bold">موجودی صندوق</p>
            </div>
            <p className="font-bold ">50.000.000 تومان</p>
          </div>
        </div>
        <div className="flex text-[1vw] text-[#4d4d4d] w-full px-[1vw] justify-between mt-[1vw] ">
          <div className="flex justify-between bg-[#f2f2f2] rounded-[0.7vw] px-[1vw] py-[1.2vw] w-full">
            <div className="flex items-center">
              <div className="w-[0.8vw] h-[0.8vw] ml-[1vw] rounded-[0.3vw] bg-[#ffcc29] "></div>
              <p className="font-bold">موجودی باقیمانده</p>
            </div>
            <p className="font-bold ">26.780.000 تومان</p>
          </div>
        </div>
        <div className="flex text-[1vw] text-[#4d4d4d] w-full px-[1vw] justify-between mt-[1vw] ">
          <div className="flex justify-between bg-[#f2f2f2] rounded-[0.7vw] px-[1vw] py-[1.2vw] w-full">
            <div className="flex items-center">
              <div className="w-[0.8vw] h-[0.8vw] ml-[1vw] rounded-[0.3vw] bg-[#f58634] "></div>
              <p className="font-bold">وام های صندوق</p>
            </div>
            <p className="font-bold ">12.000.020 تومان</p>
          </div>
        </div>
        <div className="flex text-[1vw] text-[#4d4d4d] w-full px-[1vw] justify-between mt-[1vw] ">
          <div className="flex justify-between bg-[#f2f2f2] rounded-[0.7vw] px-[1vw] py-[1.2vw] w-full">
            <div className="flex items-center">
              <div className=" ml-[1vw]  ">
                <DownFlesh />
              </div>
              <p className="font-bold">جمع واریزی ها</p>
            </div>
            <div className="flex">
              <p className="font-bold text-[#00af63] ">13.900.00 تومان</p>
              <div className="mr-[0.5vw] mt-[0.2vw]  ">
                <GreenPlus />
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-[1vw] text-[#4d4d4d] w-full px-[1vw] justify-between mt-[1vw] ">
          <div className="flex justify-between bg-[#f2f2f2] rounded-[0.7vw] px-[1vw] py-[1.2vw] w-full">
            <div className="flex items-center">
              <div className=" ml-[1vw]  ">
                <UpFlesh />
              </div>
              <p className="font-bold">جمع برداشتی ها</p>
            </div>
            <div className="flex">
              <p className="font-bold text-[#f58634] ">10.050.000 تومان</p>
              <div className="mr-[0.5vw] mt-[0.6vw]  ">
                <OrangeMinus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
