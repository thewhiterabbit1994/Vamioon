import Cart from "../../../../Assets/Svg/YourAccount/Cart";
import Saman from "../../../../Assets/Svg/YourAccount/Saman";
import CartBg from "../../../../Assets/Svg/YourAccount/CartBg";
import Copy from "../../../../Assets/Svg/YourAccount/Copy";
import Pen from "../../../../Assets/Svg/YourFundSVG/Pen";
import Plus from "../../../../Assets/Svg/YourFundSVG/Plus";
import { useState } from "react";
import AddBankAcount from "../../../Modals/AddBankAcount"
import EditBankAcount from "../../../Modals/EditBankAcount"
import Copied from "../../../Modals/Copied"


export default () => {
  const [modalAddBankCount, setmodalAddBankCount] = useState(false)
  const [modalEditBankAcount, setmodalEditBankAcount] = useState(false)
  const [MessageCopied, setMessageCopied] = useState(false)

  setTimeout(() => {
    if (MessageCopied === true) {
      setMessageCopied(false)
    }
  }, 2000)
  return (
    <div className="absolute h-[17.4vw] mt-[40vw] mr-[50vw] w-[48vw]  rounded-[0.8vw] border-[#c4c4c4] border-[0.155vw]">
      <EditBankAcount modalEditBankAcount={modalEditBankAcount} setmodalEditBankAcount={setmodalEditBankAcount} />
      <AddBankAcount modalAddBankCount={modalAddBankCount} setmodalAddBankCount={setmodalAddBankCount} />
      <div className="absolute  bg-white w-[39.7vw] h-[3.5vw] rounded-t-[0.8vw]  text-[1.1vw] ">
        <div className="flex mr-[1vw] my-[1vw]">
          <div className="mt-[0.3vw]">
            <Cart />
          </div>
          <p className="mr-[0.5vw] ">حساب شما</p>
        </div>
      </div>
      <div className="flex justify-between w-full mt-[4.5vw] px-[1vw]">
        <div className="absolute z-[-10]">
          <CartBg />
        </div>
        <div className="flex flex-col justify-between px-[1vw] py-[0.8vw] w-[19.84vw] h-[10.78vw] rounded-[0.8vw] border-[#c4c4c4] border-[0.155vw]">
          <div className="text-[1vw] text-[#4d4d4d]">
            <p>محمد حسین ضرابی</p>
          </div>
          <div className="w-full text-[1.3vw] flex justify-between px-[1vw]">
            <p>2034</p>
            <p>0824</p>
            <p>8619</p>
            <p>6219</p>
          </div>
          <div className="w-full flex justify-between ">
            <div className="text-[1vw] text-[#4d4d4d]">
              <p className="mt-[0.3vw]">IR-6219861908242034125478</p>
            </div>
            <div>
              <Saman />
            </div>
          </div>
        </div>
        <div className="flex text-[1vw] text-[#4d4d4d] w-[54%] h-[5.5vw] justify-between ">
          <div className="flex-col justify-between bg-[#f2f2f2] rounded-[0.7vw] px-[1vw] py-[1.2vw] w-full">
            <div className="flex justify-between w-full">
              <p className="">شماره حساب</p>
              <p className=" font-bold pb-[0.5vw]">6219861908242034</p>
            </div>
            <div
              onClick={() => setMessageCopied(true)}
              className="flex cursor-pointer justify-center items-center bg-[#c4c4c4] rounded-[0.7vw] mt-[-0.25vw] mr-[-0.2vw] w-[23.046875vw] h-[1.953125vw] text-[0.8vw] ">
              <div className="mt-[0.2vw] ml-[0.5vw]">
                <Copy />
              </div>
              کپی کردن
            </div>
            <div className={`${!MessageCopied ? "fixed bottom-[-14.64vw]" : "fixed bottom-[5.85vw] left-[7.32vw] transition-all duration-[500ms]"}`}>
              <Copied />
            </div>
            <div className="h-[0.1vw] mt-[1.3vw] w-[24.5vw] mr-[-1vw] m-auto bg-[#cecece]"></div>
            <div className="w-[24.5vw] mr-[-1vw] flex  mt-[0.9vw] justify-between">
              <div
                onClick={() => setmodalAddBankCount(true)}
                className="flex cursor-pointer font-bold text-[#00693b] bg-[#ccefe0] rounded-[0.7vw] mt-[-0.25vw] px-[1vw] py-[1.2vw] text-[1vw] ">
                <div className="mt-[0.1vw]  ml-[0.5vw]">
                  <Plus />
                </div>
                افزودن حساب جدید
              </div>
              <div
                onClick={() => setmodalEditBankAcount(true)}
                className="flex cursor-pointer font-bold text-[#997919] bg-[#ffe694] rounded-[0.7vw] mt-[-0.25vw] px-[2vw] py-[1.2vw] text-[1vw] ">
                <div className="mt-[0.2vw]  ml-[0.5vw]">
                  <Pen />
                </div>
                ویرایش حساب
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
