import Edit from "../../Assets/Svg/ModalSVG/Edit"
import Loanamount from "../../Assets/Svg/ModalSVG/Loanamount"
import ProflileName from "../../Assets/Svg/ModalSVG/ProflileName"
import CloseModal from "../../Assets/Svg/ModalSVG/CloseModal"
import { useState } from "react"

export default ({ modalEditBankAcount, setmodalEditBankAcount }) => {
  const [styleBorderaccountnum, setstyleBorderaccountnum] = useState(false)
  const [styleBorderNameOfAccountHolder, setstyleBorderNameOfAccountHolder] = useState(false)
  const [styleBorderShabanumber, setstyleBorderShabanumber] = useState(false)
  const [styleBorderKartNumber, setstyleBorderKartNumber] = useState(false)
  const [NameOfAccountHolder, setNameOfAccountHolder] = useState("رها تمدن")
  const [AccountNum, setAccountNum] = useState("62210612089")
  const [sheba, setSheba] = useState("6221061208872459")
  const [NumberOfKart, setNumberOfKart] = useState("6221061208872459")

  return (
    <>
      <section
        onClick={() => setmodalEditBankAcount(false)}
        className={`fixed transform transition-opacity duration-300 flex justify-center items-center  scale-0 z-30 w-full h-screen right-0 bottom-0 mt-[-200px] bg-[#00000071]  ${modalEditBankAcount ? "scale-100 opacity-100" : "opacity-0 "
          }`}>
      </section>
      <div className=" z-50 fixed top-[3%] left-[38%]">
        {
          modalEditBankAcount ?
            <section className="w-[24.15vw] h-[36.5vw] mt-[2.9vw] bg-[#fff] drop-shadow-lg rop-shadow-lg m-auto text-[#4D4D4D] rounded-[1.024vw] ">
              <section className="w-[21vw] flex items-center  h-[2.196vw] justify-between m-auto py-[2.09vw]">
                <div className="flex w-[8vw] items-center text-[1.0248vw] justify-between ">
                  <Edit />
                  <p> ویرایش حساب </p>
                </div>
                <div
                  onClick={() => setmodalEditBankAcount(false)}
                  className="cursor-pointer"
                >
                  <CloseModal />
                </div>
              </section>
              <section
                onClick={() =>
                (
                  setstyleBorderNameOfAccountHolder(true),
                  setstyleBorderaccountnum(false),
                  setstyleBorderShabanumber(false),
                  setstyleBorderKartNumber(false)
                )}
                className={`${styleBorderNameOfAccountHolder ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                  : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                  htmlFor="NameOfAccountHolder "
                  className="flex w-[7.3vw] justify-between items-center text-[#00693B]">
                  <ProflileName />
                  <p className="pt-[.4vw]"> نام صاحب حساب</p>
                </label>
                <input
                  onChange={(e) => setNameOfAccountHolder(e.target.value)}
                  value={NameOfAccountHolder}
                  id="NameOfAccountHolder"
                  className="w-[19.76vw] bg-[#ffffff15]  h-[2.19vw] mt-[0.36vw] pr-[.3vw] outline-none "
                />
              </section>
              <section
                onClick={() =>
                (
                  setstyleBorderaccountnum(true),
                  setstyleBorderNameOfAccountHolder(false),
                  setstyleBorderShabanumber(false),
                  setstyleBorderKartNumber(false)
                )}
                className={`${styleBorderaccountnum ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                  : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                  htmlFor="account num "
                  className="flex w-[6vw] justify-between items-center text-[#00693B]">
                  <Loanamount />
                  <p className="pt-[.2vw]"> شماره حساب</p>
                </label>
                <input
                  type="number"
                  onInput={(e) => e.target.value = e.target.value.slice(0, 11)}
                  onChange={(e) => setAccountNum(e.target.value)}
                  value={AccountNum}
                  id="account num"
                  className="w-[19.76vw] bg-[#ffffff15]  h-[2.19vw] mt-[0.36vw] outline-none "
                />
              </section>
              <section
                onClick={() =>
                (
                  setstyleBorderShabanumber(true),
                  setstyleBorderaccountnum(false),
                  setstyleBorderNameOfAccountHolder(false),
                  setstyleBorderKartNumber(false)
                )}
                className={`${styleBorderShabanumber ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                  : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                  htmlFor="Shabanumber"
                  className="flex w-[5vw] justify-between items-center text-[#00693B]">
                  <Loanamount />
                  <p className="pt-[.2vw]"> شماره شبا</p>
                </label>
                <input
                  onInput={(e) => e.target.value = e.target.value.slice(0, 16)}
                  type="number"
                  onChange={(e) => setSheba(e.target.value)}
                  value={sheba}
                  id="Shabanumber"
                  className="w-[19.76vw] bg-[#ffffff15]  h-[2.19vw] mt-[0.36vw] outline-none "
                />
              </section>
              <section
                onClick={() =>
                (
                  setstyleBorderKartNumber(true),
                  setstyleBorderShabanumber(false),
                  setstyleBorderaccountnum(false),
                  setstyleBorderNameOfAccountHolder(false)
                )}
                className={`${styleBorderKartNumber ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                  : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                  htmlFor="KartNumber"
                  className="flex w-[15vw] justify-between items-center text-[#00693B]">
                  <div className="flex items-center">
                    <Loanamount />
                    <p className="mr-[.4vw] pt-[.2vw]"> شماره کارت</p>
                  </div>
                  <p className="pt-[.2vw]">(بدون فاصله وارد کنید)</p>
                </label>
                <input
                  onInput={(e) => e.target.value = e.target.value.slice(0, 16)}
                  onChange={(e) => setNumberOfKart(e.target.value)}
                  value={NumberOfKart}
                  id="KartNumber"
                  className="w-[19.76vw] bg-[#ffffff15]  h-[2.19vw] mt-[0.36vw] outline-none "
                />
              </section>
              <div className="bg-[#00693B] mt-[1.098vw] w-[21vw] h-[3.294vw] rounded-[2.196vw] mb-[0.732vw] flex justify-center items-center cursor-pointer text-[#fff] m-auto text-[0.878vw]">
                ذخیره تغییرات
              </div>
            </section >
            :
            ""
        }
      </div>

    </>
  )
}