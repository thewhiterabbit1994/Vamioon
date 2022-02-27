import Notification from "../../Assets/Svg/ModalSVG/Notification"
import Loanamount from "../../Assets/Svg/ModalSVG/Loanamount"
import Message from "../../Assets/Svg/ModalSVG/Message"
import ProflileName from "../../Assets/Svg/ModalSVG/ProflileName"
import imageProfile from "../../Assets/Img/ModalImg/imageProfile.png"
import Drop from "../../Assets/Svg/ModalSVG/Drop"
import CloseModal from "../../Assets/Svg/ModalSVG/CloseModal"
import { useState } from "react"

export default () => {
    const [styleBorderUser, setstyleBorderUser] = useState(false)
    const [styleBorderCategoriesSubmit, setstyleBorderCategoriesSubmit] = useState(false)
    const [styleBorderTextMessage, setstyleBorderTextMessage] = useState(false)
    const [drop, setDreop] = useState(false)

    return (

        <section className="w-[24.15vw] h-[30.5vw] mt-[2.9vw] bg-[#fff] drop-shadow-lg rop-shadow-lg m-auto text-[#4D4D4D] rounded-[1.024vw] ">
            <section className="w-[21vw] flex items-center  h-[2.196vw] justify-between m-auto py-[2.09vw]">
                <div className="flex w-[11vw] items-center text-[1.0248vw] justify-between ">
                    <Notification />
                    <p className="pt-[.5vw]"> یادآوری موعد پرداخت </p>
                </div>
                <CloseModal/>
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
                        value={"رها تمدن"}
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
                    <p>ارسال پیامک به شماره09120411848</p>
                    <div
                        onClick={() => setDreop(!drop)}
                        className={`cursor-pointer relative`}>
                        <Drop />
                        <div className={`w-[7.320vw] absolute left-[- 0.732vw] h-[7.320vw] mt-[0.585vw] rounded-lg bg-[#ffffff] 
                         ${drop ? "w-[7.320vw] absolute left-[-0.732vw] h-[7.320vw] rounded-[0.585vw] " : "hidden"}`}>
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
                    value={"رهای عزیز لطفا قسط وام خودت رو فراموش نکن"}
                    id="styleBorderTextMessage"
                    className="w-[19.76vw] bg-[#ffffff15] resize-none  h-[2.19vw] mt-[0.36vw] outline-none "
                />
            </section>
            <div className="bg-[#00693B] mt-[1.098vw] w-[21vw] h-[3.294vw] rounded-[2.196vw] mb-[0.732vw] flex justify-center items-center cursor-pointer text-[#fff] m-auto text-[0.878vw]">
               ارسال یادآوری
            </div>
        </section >
    )
}