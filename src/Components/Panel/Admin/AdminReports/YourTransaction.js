import Flesh from "../../../../Assets/Svg/ActiveLoansSVG/Flesh";

export default () => {
  return (
    <div>
      <div className="hidescroll flex shadow-bottom absolute pb-[2vw] mt-[5.5vw] mr-[9vw] w-[58vw] h-[52vw] overflow-y-auto overflow-x-hidden scroll-smooth  rounded-[0.8vw] border-[#c4c4c4] border-[0.155vw]">
        <div className="absolute  bg-white w-[39.7vw] h-[3.5vw] rounded-t-[0.8vw]  text-[1.1vw] ">
          <div className="flex mr-[1vw] my-[1vw]">
            <div className="mt-[0.3vw]">
              <Flesh />
            </div>
            <p className="mr-[0.5vw] ">تراکنش های شما</p>
          </div>
        </div>
      </div>
    </div>
  );
};
