import Edit from "../../Assets/Svg/ModalSVG/Edit"
import Loanamount from "../../Assets/Svg/ModalSVG/Loanamount"
import Numberofshares from "../../Assets/Svg/ModalSVG/Numberofshares"
import Subscription from "../../Assets/Svg/ModalSVG/Subscription"
import Cashdesk from "../../Assets/Svg/ModalSVG/Cashdesk"
import ProflileName from "../../Assets/Svg/ModalSVG/ProflileName"
import Drop from "../../Assets/Svg/ModalSVG/Drop"
import CloseModal from "../../Assets/Svg/ModalSVG/CloseModal"
import { useState } from "react"

export default () => {
    const [styleBorderaccountnum, setstyleBorderaccountnum] = useState(false)
    const [styleBorderNameOfAccountHolder, setstyleBorderNameOfAccountHolder] = useState(false)
    const [styleBorderShabanumber, setstyleBorderShabanumber] = useState(false)
    const [styleBorderKartNumber, setstyleBorderKartNumber] = useState(false)
    const [drop, setDreop] = useState(false)

    return (

        <section className="w-[24.15vw] h-[36.5vw] mt-[2.9vw] bg-[#fff] drop-shadow-lg rop-shadow-lg m-auto text-[#4D4D4D] rounded-[1.024vw] ">
            <section className="w-[21vw] flex items-center  h-[2.196vw] justify-between m-auto pb-[1.3vw] pt-[2.09vw]">
                <div className="flex w-[8vw] items-center text-[1.0248vw] justify-between ">
                    <Edit />
                    <p> ویرایش صندوق </p>
                </div>
                <CloseModal />
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
                    htmlFor="Cashdesk "
                    className="flex w-[5vw] justify-between items-center text-[#00693B]">
                    <Cashdesk />
                    <p className="pt-[.4vw]"> نام صندوق </p>
                </label>
                <input
                    value={"همکاران شرکت"}
                    id="Cashdesk"
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
                    htmlFor="ProflileName"
                    className="flex w-[5.5vw] justify-between items-center text-[#00693B]">
                    <ProflileName />
                    <p className="pt-[.2vw]">مدیر صندوق</p>
                </label>
                <input
                    value={"62210612089"}
                    id="ProflileName"
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
                    htmlFor="Numberofshares"
                    className="flex w-[6.5vw] justify-between items-center text-[#00693B]">
                    <Numberofshares />
                    <p className="pt-[.2vw]"> تعداد کل سهام</p>
                </label>
                <input
                    value={"30"}
                    id="Numberofshares"
                    className="w-[19.76vw] bg-[#ffffff15]  h-[2.19vw] pr-[.3vw] mt-[0.36vw] outline-none "
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
                    htmlFor="Subscription"
                    className="flex w-[17vw] justify-between items-center text-[#00693B]">
                    <div className="flex items-center">
                        <Subscription />
                        <p className="mr-[.4vw] pt-[.2vw]"> حق اشتراک وامیون</p>
                    </div>
                </label>
                <div className="w-[19vw] items-center  flex justify-between mt-[1.098vw]">
                    <p>3000 هزار تومان برای هر سهم</p>
                    <div
                        onClick={() => setDreop(!drop)}
                        className={`cursor-pointer relative`}>
                        <Drop />
                        <div className={`w-[7.320vw] absolute left-[- 0.732vw] h-[7.320vw] mt-[0.585vw] rounded-lg bg-[#fffffff5] 
                         ${drop ? "w-[7.320vw] absolute left-[-0.732vw] h-[7.320vw] rounded-[0.585vw] " : "hidden"}`}>
                            <p className="w-[7.320vw] h-[2.17vw] hover:bg-[#00000018] rounded-lg my-[0.366vw] flex items-center justify-center "> 3000</p>
                            <p className="w-[7.320vw] h-[2.17vw] text-center hover:bg-[#00000018] rounded-[0.585vw] flex items-center justify-center ">4000</p>
                            <p className="w-[7.320vw] h-[2.17vw] text-center hover:bg-[#00000018] rounded-[0.585vw] my-[0.366vw] flex items-center justify-center ">5000</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-[#00693B] mt-[1.098vw] w-[21vw] h-[3.294vw] rounded-[2.196vw] mb-[0.732vw] flex justify-center items-center cursor-pointer text-[#fff] m-auto text-[0.878vw]">
                ذخیره تغییرات
            </div>
        </section >
    )
}