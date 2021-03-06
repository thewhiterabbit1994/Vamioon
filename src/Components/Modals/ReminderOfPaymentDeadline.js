import Notification from "../../Assets/Svg/ModalSVG/Notification"
import Loanamount from "../../Assets/Svg/ModalSVG/Loanamount"
import Message from "../../Assets/Svg/ModalSVG/Message"
import ProflileName from "../../Assets/Svg/ModalSVG/ProflileName"
import imageProfile from "../../Assets/Img/ModalImg/imageProfile.png"
import Drop from "../../Assets/Svg/ModalSVG/Drop"
import CloseModal from "../../Assets/Svg/ModalSVG/CloseModal"
import { useState } from "react"

export default ({ ModalReminderOfPaymentDeadline, setModalReminderOfPaymentDeadline }) => {
  const [styleBorderUser, setstyleBorderUser] = useState(false)
  const [styleBorderCategoriesSubmit, setstyleBorderCategoriesSubmit] = useState(false)
  const [styleBorderTextMessage, setstyleBorderTextMessage] = useState(false)
  const [drop, setDreop] = useState(false)
  const [User, setUser] = useState("رها تمدن")
  const [TxtMessage, setTxtMessage] = useState("رهای عزیز لطفا قسط وام خودت رو فراموش نکن")
  const [inerHtmlElementDrop, setinerHtmlElementDrop] = useState({
    valueDrop: "ارسال پیامک به شماره  09121361559   "
  })
  const [valueDrop, setvalueDrop] = useState([
    {
      valueDrop: "ارسال پیامک به شماره 09121361559  "
    },
    {
      valueDrop: "ارسال پیامک به شماره 09121361559  "
    },
    {
      valueDrop: "ارسال پیامک به شماره 09128586645 "
    },
  ])
  const GetValueDrop = (item) => {
    setinerHtmlElementDrop(item)
  }
  return (
    <>
      <section
        onClick={() => setModalReminderOfPaymentDeadline(false)}
        className={`fixed transform transition-opacity duration-300 flex justify-center items-center  scale-0 z-30 w-full h-screen right-0 bottom-0 mt-[-200px] bg-[#00000071]  ${ModalReminderOfPaymentDeadline ? "scale-100 opacity-100" : "opacity-0 "
          }`}>
      </section>
      <div className=" z-50 fixed top-[10%] left-[37%]">
        {
          ModalReminderOfPaymentDeadline ?
            <section className="w-[24.15vw] h-[30.5vw] mt-[2.9vw] bg-[#fff] drop-shadow-lg rop-shadow-lg m-auto text-[#4D4D4D] rounded-[1.024vw] ">
              <section className="w-[21vw] flex items-center  h-[2.196vw] justify-between m-auto py-[2.09vw]">
                <div className="flex w-[11vw] items-center text-[1.0248vw] justify-between ">
                  <Notification />
                  <p className="pt-[.5vw]"> یادآوری موعد پرداخت </p>
                </div>
                <div
                  onClick={() => setModalReminderOfPaymentDeadline(false)}
                  className="cursor-pointer"
                >
                  <CloseModal />
                </div>
              </section>
              <section
                onClick={() =>
                (
                  setstyleBorderUser(true),
                  setstyleBorderCategoriesSubmit(false),
                  setstyleBorderTextMessage(false),
                  setDreop(false)
                )}
                className={`${styleBorderUser ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                  : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                  htmlFor="setstyleBorderUser"
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
                    id="setstyleBorderUser"
                    className="w-[19.76vw] bg-[#ffffff15]  h-[2.19vw] mt-[0.36vw] mr-[.4vw] pr-[.3vw] outline-none "
                  />
                </div>
              </section>
              <section
                onClick={() =>
                (
                  setstyleBorderCategoriesSubmit(true),
                  setstyleBorderUser(false),
                  setstyleBorderTextMessage(false)
                )}
                className={`${styleBorderCategoriesSubmit ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                  : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                  htmlFor="styleBorderCategoriesSubmit"
                  className="flex w-[9.7vw] justify-between items-center text-[#00693B]">
                  <Loanamount />
                  <p className="pt-[.2vw]"> ارسال یادآوری به صورت</p>
                </label>
                <div className="w-[19vw] items-center  flex justify-between mt-[1.098vw]">
                  <p>{inerHtmlElementDrop.valueDrop}</p>
                  <div
                    onClick={() => setDreop(!drop)}
                    className={`cursor-pointer relative`}>
                    <div className="mb-[.5vw]">
                      <Drop />
                    </div>
                    <div className={`w-[15.vw] absolute left-[- 0.732vw] h-[7.320vw] mt-[0.585vw] rounded-lg  bg-[#fff] drop-shadow-2xl
                      ${drop ? "w-[15vw] absolute left-[-0.732vw] h-[7.320vw] rounded-[0.585vw] " : "hidden"}`}>
                      {
                        valueDrop.map(item => {
                          return <div>
                            <p
                              onClick={() => GetValueDrop(item)}
                              className="w-[15vw] h-[2.17vw] hover:bg-[#00000044] rounded-lg my-[0.366vw] flex items-center justify-center ">{item.valueDrop}</p>
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
                  setstyleBorderTextMessage(true),
                  setstyleBorderCategoriesSubmit(false),
                  setstyleBorderUser(false),
                  setDreop(false)
                )}
                className={`${styleBorderTextMessage ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                  : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                  htmlFor="styleBorderTextMessage"
                  className="flex w-[5vw] justify-between items-center text-[#00693B]">
                  <Message />
                  <p className="pt-[.2vw]"> متن پیامک</p>
                </label>
                <textarea
                  onChange={(e) => setTxtMessage(e.target.value)}
                  value={TxtMessage}
                  id="styleBorderTextMessage"
                  className="w-[19.76vw] bg-[#ffffff15] resize-none  h-[2.19vw] mt-[0.36vw] outline-none "
                />
              </section>
              <div className="bg-[#00693B] mt-[1.098vw] w-[21vw] h-[3.294vw] rounded-[2.196vw] mb-[0.732vw] flex justify-center items-center cursor-pointer text-[#fff] m-auto text-[0.878vw]">
                ارسال یادآوری
              </div>
            </section >
            :
            ""
        }
      </div>

    </>
  )
}