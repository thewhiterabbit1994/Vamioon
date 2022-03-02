import Info from "../../../../Assets/Svg/ActiveLoansSVG/info";
import Filter from "../../../../Assets/Svg/ActiveLoansSVG/Filter";

export default () => {
  return (
    <div className="">
      <div className="flex justify-between items-center h-[5.15625vw] w-[89vw] absolute mr-[9vw] mt-[5vw]">
        <div className="flex">
          <div className="flex w-[32vw]   items-center text-[#026155] text-[1.1vw]">
            <div className="flex items-center text-[1.1vw]">
              <p className=" ">اعلان های امروز</p>
            </div>
            <div className="flex items-center mr-[3vw] text-[0.8vw]">
              <Info />
              <p className=" mt-[0.2vw] mr-[0.7vw] text-[#00af63] ">
                اعلان ها بعد 15 روز پاک می شوند.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
