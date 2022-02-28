import LoanAmountNew from "../../Assets/Svg/ModalSVG/LoanAmountNew"
import Calendar from "../../Assets/Svg/ModalSVG/Calendar"
import Loanamount from "../../Assets/Svg/ModalSVG/Loanamount"
import ProflileName from "../../Assets/Svg/ModalSVG/ProflileName"
import CategoriesLoan from "../../Assets/Svg/ModalSVG/CategoriesLoan"
import Oclock from "../../Assets/Svg/ModalSVG/Oclock"
import imageProfile from "../../Assets/Img/ModalImg/imageProfile.png"
import Drop from "../../Assets/Svg/ModalSVG/Drop"
import RequestDescription from "../../Assets/Svg/ModalSVG/Request Description"
import { useState } from "react"
import CloseModal from "../../Assets/Svg/ModalSVG/CloseModal"

export default ({ ModalNewLoan, setModalNewLoan }) => {
  const [styleBorderProflileName, setstyleBorderProflileName] = useState(false)
  const [styleBorderLoanamount, setstyleBorderLoanamount] = useState(false)
  const [styleBorderNumberofinstallments, setstyleBorderNumberofinstallments] = useState(false)
  const [styleBorderCalendar, setstyleBorderCalendar] = useState(false)
  const [styleBorderdropCategoriesLoan, setstyleBorderdropCategoriesLoan] = useState(false)
  const [styleBorderNotification, setstyleBorderNotification] = useState(false)
  const [drop, setDreop] = useState(false)
  const [styleBorderRequestDescription, setstyleBorderRequestDescription] = useState(false)
  const [dropNotification, setDreopNotification] = useState(false)
  const [dropCategoriesLoan, setDreopCategoriesLoan] = useState(false)

  return (
    <>
      <section
        onClick={() => setModalNewLoan(false)}
        className={`fixed transform transition-opacity duration-300 flex justify-center items-center  scale-0 z-30 w-full h-screen right-0 bottom-0 mt-[-200px] bg-[#00000071]  ${ModalNewLoan ? "scale-100 opacity-100" : "opacity-0 "
          }`}>
      </section>

      <div className=" z-50 fixed top-[2%] left-[37%]">
        {
          ModalNewLoan ?
            <section className="parentNewLoan">
              <section className="w-[21vw] flex items-center  h-[2.196vw] justify-between m-auto pb-[1vw] pt-[1.8vw]">
                <div className="flex w-[8.3vw] items-center text-[1.0248vw] justify-between ">
                  <LoanAmountNew />
                  <p> اعطای وام جدید </p>
                </div>
                <div
                  onClick={() => setModalNewLoan(false)}
                  className="cursor-pointer"
                >
                  <CloseModal />
                </div>
              </section>
              <section
                onClick={() => (
                  setstyleBorderProflileName(true),
                  setstyleBorderLoanamount(false),
                  setstyleBorderNumberofinstallments(false),
                  setstyleBorderdropCategoriesLoan(false),
                  setstyleBorderCalendar(false),
                  setstyleBorderNotification(false),
                  setDreopNotification(false),
                  setstyleBorderRequestDescription(false),
                  setDreopCategoriesLoan(false),
                  setDreop(false)
                )}
                className={`${styleBorderProflileName ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                  : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] cursor-pointer border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                  htmlFor="ProflileName"
                  className="flex w-[2.6vw] justify-between items-center text-[#00693B]">
                  <ProflileName />
                  <p className="pt-[.4vw]"> کاربر</p>
                </label>
                <div className="flex items-center">
                  <img
                    className="w-[1.830vw] h-[1.830vw] rounded-[50%]"
                    src={imageProfile}
                  />
                  <input
                    value={"رها تمدن"}
                    id="ProflileName"
                    className="w-[19.76vw] bg-[#ffffff15]  h-[2.19vw] mt-[0.36vw] mr-[.4vw] pr-[.3vw] outline-none "
                  />
                </div>
              </section>
              <section
                onClick={() =>
                (
                  setstyleBorderLoanamount(true),
                  setstyleBorderProflileName(false),
                  setstyleBorderNumberofinstallments(false),
                  setstyleBorderCalendar(false),
                  setstyleBorderdropCategoriesLoan(false),
                  setstyleBorderNotification(false),
                  setstyleBorderRequestDescription(false),
                  setDreopNotification(false),
                  setDreopCategoriesLoan(false),
                  setDreop(false)
                )}
                className={`${styleBorderLoanamount ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                  : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] cursor-pointer border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <div className="flex justify-between text-[#00693B]">
                  <label
                    htmlFor="Loanamount"
                    className="flex w-[4.2vw] justify-between items-center ">
                    <Loanamount />
                    <p className="pt-[.2vw]" > مبلغ وام  </p>
                  </label>
                  <div className="flex justify-between items-center w-[13.5vw]">
                    <p>موجودی فعلی</p>
                    <p className="pl-[.8vw]">26.780.000 تومان</p>
                  </div>
                </div>
                <input
                  value={"30.000.000 تومان"}
                  id="Loanamount"
                  className="w-[19.76vw] bg-[#ffffff15]  h-[2.19vw] mt-[0.36vw] outline-none "
                />
              </section>
              <section
                onClick={() =>
                (
                  setstyleBorderNumberofinstallments(true),
                  setstyleBorderLoanamount(false),
                  setstyleBorderProflileName(false),
                  setstyleBorderdropCategoriesLoan(false),
                  setstyleBorderCalendar(false),
                  setstyleBorderNotification(false),
                  setstyleBorderRequestDescription(false),
                  setDreopNotification(false),
                  setDreopCategoriesLoan(false),
                  setDreop(false)
                )}
                className={`${styleBorderNumberofinstallments ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                  : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] cursor-pointer border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                  htmlFor="Numberofinstallments"
                  className="flex w-[6vw] justify-between items-center text-[#00693B]">
                  <Loanamount />
                  <p className="pt-[.2vw]"> تعداد اقساط </p>
                </label>
                <input
                  value={"12 قسط"}
                  id="Numberofinstallments"
                  className="w-[19.76vw] bg-[#ffffff15]  h-[2.19vw] pr-[.3vw] mt-[0.36vw] outline-none "
                />
              </section>
              <section
                onClick={() =>
                (
                  setstyleBorderCalendar(true),
                  setstyleBorderNumberofinstallments(false),
                  setstyleBorderLoanamount(false),
                  setstyleBorderProflileName(false),
                  setDreopCategoriesLoan(false),
                  setstyleBorderRequestDescription(false),
                  setDreopNotification(false),
                  setstyleBorderNotification(false),
                  setstyleBorderdropCategoriesLoan(false),
                  drop === true ? setDreop(false) : ""
                )}
                className={`${styleBorderCalendar ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                  : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] cursor-pointer rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                  htmlFor="Calendar"
                  className="flex w-[17vw] justify-between items-center text-[#00693B]">
                  <div className="flex items-center">
                    <Calendar />
                    <p className="mr-[.4vw] pt-[.2vw]"> موعد پرداخت</p>
                  </div>
                </label>
                <div className="w-[19vw] items-center  flex justify-between mt-[1.098vw]">
                  <p>اول هر ماه</p>
                  <div
                    onClick={() => setDreop(!drop)}
                    className={`cursor-pointer relative`}>
                    <Drop />
                    <div className={`w-[7.320vw] absolute left-[- 0.732vw] h-[7.320vw] mt-[0.585vw] rounded-lg bg-[#fffffff5] 
                         ${drop ? "w-[7.320vw] absolute left-[-0.732vw] cursor-pointer h-[7.320vw] rounded-[0.585vw] " : "hidden"}`}>
                      <p className="w-[7.320vw] h-[2.17vw] hover:bg-[#00000018] rounded-lg my-[0.366vw] flex items-center justify-center "> اول هر ماه </p>
                      <p className="w-[7.320vw] h-[2.17vw] text-center hover:bg-[#00000018] rounded-[0.585vw] flex items-center justify-center ">اول هر ماه </p>
                      <p className="w-[7.320vw] h-[2.17vw] text-center hover:bg-[#00000018] rounded-[0.585vw] my-[0.366vw] flex items-center justify-center ">اول هر ماه </p>
                    </div>
                  </div>
                </div>
              </section>
              <section
                onClick={() =>
                (
                  setstyleBorderdropCategoriesLoan(true),
                  setstyleBorderCalendar(false),
                  setstyleBorderNumberofinstallments(false),
                  setstyleBorderLoanamount(false),
                  setDreop(false),
                  setstyleBorderRequestDescription(false),
                  setDreopNotification(false),
                  setstyleBorderNotification(false),
                  setstyleBorderProflileName(false),
                  dropCategoriesLoan === true ? setDreopCategoriesLoan(false) : ""
                )}
                className={`${styleBorderdropCategoriesLoan ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                  : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] cursor-pointer border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                  htmlFor="styleBorderCategoriesSubmit"
                  className="flex w-[4vw] justify-between items-center text-[#00693B]">
                  <CategoriesLoan />
                  <p className="pt-[.2vw]">نوع وام</p>
                </label>
                <div className="w-[19vw] items-center  flex justify-between mt-[1.098vw]">
                  <p> کمک هزینه </p>
                  <div
                    onClick={() => setDreopCategoriesLoan(!dropCategoriesLoan)}
                    className={`cursor-pointer relative`}>
                    <Drop />
                    <div className={`w-[7.320vw] absolute left-[- 0.732vw] h-[7.320vw] mt-[0.585vw] rounded-lg bg-[#ffffff] 
                         ${dropCategoriesLoan ? "w-[7.320vw] absolute left-[-0.732vw] h-[7.320vw] rounded-[0.585vw] " : "hidden"}`}>
                      <p className="w-[7.320vw] h-[2.17vw] hover:bg-[#00000018] rounded-lg my-[0.366vw] flex items-center justify-center ">کمک هزینه</p>
                      <p className="w-[7.320vw] h-[2.17vw] text-center hover:bg-[#00000018] rounded-[0.585vw] flex items-center justify-center ">کمک هزینه </p>
                      <p className="w-[7.320vw] h-[2.17vw] text-center hover:bg-[#00000018] rounded-[0.585vw] my-[0.366vw] flex items-center justify-center ">کمک هزینه</p>
                    </div>
                  </div>
                </div>
              </section>
              <section
                onClick={() =>
                (
                  setstyleBorderNotification(true),
                  setstyleBorderdropCategoriesLoan(false),
                  setstyleBorderCalendar(false),
                  setstyleBorderNumberofinstallments(false),
                  setstyleBorderLoanamount(false),
                  setstyleBorderRequestDescription(false),
                  setDreopCategoriesLoan(false),
                  setDreop(false),
                  setstyleBorderProflileName(false),
                  dropNotification === true ? setDreopNotification(false) : ""
                )}
                className={`${styleBorderNotification ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                  : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] cursor-pointer border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                  htmlFor="styleBorderCategoriesSubmit"
                  className="flex w-[9.7vw] justify-between items-center text-[#00693B]">
                  <Oclock />
                  <p className="pt-[.2vw]"> ارسال یادآوری به صورت</p>
                </label>
                <div className="w-[19vw] items-center  flex justify-between mt-[1.098vw]">
                  <p>ارسال پیامک به شماره09120411848</p>
                  <div
                    onClick={() => setDreopNotification(!dropNotification)}
                    className={`cursor-pointer relative`}>
                    <Drop />
                    <div className={`w-[7.320vw] absolute left-[- 0.732vw] h-[7.320vw] mt-[0.585vw] rounded-lg bg-[#ffffff] 
                         ${dropNotification ? "w-[7.320vw] absolute left-[-0.732vw] h-[7.320vw] rounded-[0.585vw] " : "hidden"}`}>
                      <p className="w-[7.320vw] h-[2.17vw] hover:bg-[#00000018] rounded-lg my-[0.366vw] flex items-center justify-center ">پیامک</p>
                      <p className="w-[7.320vw] h-[2.17vw] text-center hover:bg-[#00000018] rounded-[0.585vw] flex items-center justify-center ">پیامک </p>
                      <p className="w-[7.320vw] h-[2.17vw] text-center hover:bg-[#00000018] rounded-[0.585vw] my-[0.366vw] flex items-center justify-center ">پیامک</p>
                    </div>
                  </div>
                </div>
              </section>
              <section
                onClick={() =>
                (
                  setstyleBorderRequestDescription(true),
                  setstyleBorderProflileName(false),
                  setstyleBorderLoanamount(false),
                  setstyleBorderNumberofinstallments(false),
                  setstyleBorderdropCategoriesLoan(false),
                  setstyleBorderCalendar(false),
                  setstyleBorderNotification(false),
                  setDreopNotification(false),
                  setDreopCategoriesLoan(false),
                  setDreop(false)
                )}
                className={`${styleBorderRequestDescription ? "w-[21.2vw] h-[7.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                  : "w-[21.2vw] h-[7.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] cursor-pointer border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                  htmlFor="phone"
                  className="flex w-[8.5vw] justify-between text items-center text-[#00693B]">
                  <RequestDescription />
                  <p className="pt-[0.366vw]"> توضیحات درخواست</p>
                </label>
                <textarea
                  value={"سلام من درخواست وام کمک هزینه به مبلغ 30.000.000 تومان دارم . "}
                  id="phone"
                  className="w-[19.76vw] bg-[#ffffff15] resize-none h-[4.19vw] mt-[1vw] outline-none pr-[0.732vw]"
                />
              </section>
              <p className="text-[#0000009a] m-auto w-[20vw] pt-[.5vw] text-[0.732vw]">پبامک یادآوری 2 روز قبل از موعد پرداخت برای کاربر ارسال میشود . </p>
              <div className="bg-[#00693B] mt-[1.098vw] w-[21vw] h-[3.294vw] rounded-[2.196vw] mb-[0.732vw] flex justify-center items-center cursor-pointer text-[#fff] m-auto text-[0.878vw]">
                اعطای وام
              </div>
            </section >
            :
            ""
        }
      </div>
    </>
  )
}