import Edit from "../../Assets/Svg/ModalSVG/Edit"
import Loanamount from "../../Assets/Svg/ModalSVG/Loanamount"
import ProflileName from "../../Assets/Svg/ModalSVG/ProflileName"
import CloseModal from "../../Assets/Svg/ModalSVG/CloseModal"
import { useState } from "react"

export default () => {
    const [styleBorderaccountnum, setstyleBorderaccountnum] = useState(false)
    const [styleBorderNameOfAccountHolder, setstyleBorderNameOfAccountHolder] = useState(false)
    const [styleBorderShabanumber, setstyleBorderShabanumber] = useState(false)
    const [styleBorderKartNumber, setstyleBorderKartNumber] = useState(false)

    return (

        <section className="w-[24.15vw] h-[36.5vw] mt-[2.9vw] bg-[#fff] drop-shadow-lg rop-shadow-lg m-auto text-[#4D4D4D] rounded-[1.024vw] ">
            <section className="w-[21vw] flex items-center  h-[2.196vw] justify-between m-auto py-[2.09vw]">
                <div className="flex w-[8vw] items-center text-[1.0248vw] justify-between ">
                    <Edit />
                    <p> ویرایش حساب </p>
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
                    htmlFor="NameOfAccountHolder "
                    className="flex w-[7.3vw] justify-between items-center text-[#00693B]">
                    <ProflileName />
                    <p className="pt-[.4vw]"> نام صاحب حساب</p>
                </label>
                <input
                    value={"رها تمدن"}
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
                    value={"62210612089"}
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
                    value={"IR6221061208872459"}
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
                    value={"6221061208872459"}
                    id="KartNumber"
                    className="w-[19.76vw] bg-[#ffffff15]  h-[2.19vw] mt-[0.36vw] outline-none "
                />
            </section>
            <div className="bg-[#00693B] mt-[1.098vw] w-[21vw] h-[3.294vw] rounded-[2.196vw] mb-[0.732vw] flex justify-center items-center cursor-pointer text-[#fff] m-auto text-[0.878vw]">
                ذخیره تغییرات
            </div>
        </section >
    )
}