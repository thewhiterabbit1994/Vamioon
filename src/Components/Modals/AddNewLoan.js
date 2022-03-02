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
  const [User, setUser] = useState("رها تمدن")
  const [requestDescription, setrequestDescription] = useState("سلام من درخواست وام کمک هزینه به مبلغ 30.000.000 تومان دارم . ")
  const [LoanAmount, setLoanAmount] = useState("30000000")
  const [Installment, setInstallment] = useState("12")
  const [inerHtmlElementDrop, setinerHtmlElementDrop] = useState({
    valueDrop: "اول هر ماه"
  })
  const [valueDrop, setvalueDrop] = useState([
    {
      valueDrop: "اول هر ماه"
    },
    {
      valueDrop: "آخر هر ماه"
    },
    {
      valueDrop: "25 هر ماه"
    },
  ])
  const GetValueDrop = (item) => {
    setinerHtmlElementDrop(item)
  }

  const [inerHtmlElementDropCategoriesInstallment, setinerHtmlElementDropCategoriesInstallment] = useState({
    valueDrop: " کمک هزینه خرید جهیزیه "
  })
  const [valueDropCategoriesInstallment, setvalueDropCategoriesInstallment] = useState([
    {
      valueDrop: " کمک هزینه خرید جهیزیه "
    },
    {
      valueDrop: " کمک هزینه خرید مسکن "
    },
    {
      valueDrop: " کمک هزینه خرید ماشین "
    },
  ])
  const GetValueDropCategoriesInstallment = (item) => {
    setinerHtmlElementDropCategoriesInstallment(item)
  }


  const [inerHtmlElementvalueDropNotification, setinerHtmlElementvalueDropNotification] = useState({
    valueDrop: " ارسال پیامک به شماره 09015588665 "
  })
  const [valueDropNotification, setvalueDropNotification] = useState([
    {
      valueDrop: " ارسال پیامک به شماره 09125544158 "
    },
    {
      valueDrop: " ارسال پیامک به شماره 09015588665 "
    },
    {
      valueDrop: " ارسال پیامک به شماره 09352255442 "
    },
  ])
  const GetvalueDropNotification = (item) => {
    setinerHtmlElementvalueDropNotification(item)
  }
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
                    onChange={(e) => setUser(e.target.value)}
                    value={User}
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
                <div className="flex items-center">
                  <input
                    type="number"
                    onChange={(e) => setLoanAmount(e.target.value)}
                    value={LoanAmount}
                    id="Loanamount"
                    className="bg-[#ffffff15] w-[4.5vw] mb-[.5vw]  h-[2.19vw] mt-[0.36vw] outline-none "
                  />
                  <p>تومان</p>
                </div>
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
                <div className="flex items-center">
                  <input
                    type="number"
                    onChange={(e) => setInstallment(e.target.value)}
                    value={Installment}
                    id="Numberofinstallments"
                    className="w-[1.5vw] bg-[#ffffff15] mb-[.5vw]  h-[2.19vw] pr-[.3vw] mt-[0.36vw] outline-none "
                  />
                  <p>ماه</p>
                </div>
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
                  <p>{inerHtmlElementDrop.valueDrop}</p>
                  <div
                    onClick={() => setDreop(!drop)}
                    className={`cursor-pointer relative`}>
                    <div className="mb-[.5vw]">
                      <Drop />
                    </div>
                    <div className={`w-[8.vw] absolute left-[- 0.732vw]  h-[8vw] mt-[0.585vw] rounded-lg z-10  bg-[#fff] drop-shadow-2xl
                      ${drop ? "w-[8vw] absolute left-[-0.732vw] h-[7.320vw] rounded-[0.585vw] " : "hidden"}`}>
                      {
                        valueDrop.map(item => {
                          return <div>
                            <p
                              onClick={() => GetValueDrop(item)}
                              className="w-[8vw] h-[2.17vw] hover:bg-[#00000044] rounded-lg my-[0.366vw] flex items-center justify-center ">{item.valueDrop}</p>
                          </div>
                        })
                      }
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
                  <p>{inerHtmlElementDropCategoriesInstallment.valueDrop}</p>
                  <div
                    onClick={() => setDreopCategoriesLoan(!dropCategoriesLoan)}
                    className={`cursor-pointer relative`}>
                    <div className="mb-[.5vw]">
                      <Drop />
                    </div>
                    <div className={`w-[12.vw] absolute top-0 left-[- 0.732vw] h-[8vw] mt-[0.585vw] rounded-lg z-10  bg-[#fff] drop-shadow-2xl
                      ${dropCategoriesLoan ? "w-[12vw] absolute left-[-0.732vw] h-[7.320vw] rounded-[0.585vw] " : "hidden"}`}>
                      {
                        valueDropCategoriesInstallment.map(item => {
                          return <div>
                            <p
                              onClick={() => GetValueDropCategoriesInstallment(item)}
                              className="w-[12vw] h-[2.17vw] hover:bg-[#00000044] rounded-lg my-[0.366vw] flex items-center justify-center ">{item.valueDrop}</p>
                          </div>
                        })
                      }
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
                  <p>{inerHtmlElementvalueDropNotification.valueDrop}</p>
                  <div
                    onClick={() => setDreopNotification(!dropNotification)}
                    className={`cursor-pointer relative`}>
                    <div className="mb-[.5vw]">
                      <Drop />
                    </div>
                    <div className={`w-[16vw] absolute top-0 left-[- 0.732vw] h-[8vw] mt-[0.585vw] rounded-lg z-10  bg-[#fff] drop-shadow-2xl
                      ${dropNotification ? "w-[16vw] absolute left-[-0.732vw] h-[7.320vw] rounded-[0.585vw] " : "hidden"}`}>
                      {
                        valueDropNotification.map(item => {
                          return <div>
                            <p
                              onClick={() => GetvalueDropNotification(item)}
                              className="w-[16vw] h-[2.17vw] hover:bg-[#00000044] rounded-lg my-[0.366vw] flex items-center justify-center ">{item.valueDrop}</p>
                          </div>
                        })
                      }
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
                  onChange={(e) => setrequestDescription(e.target.value)}
                  value={requestDescription}
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