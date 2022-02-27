import Profile from "../../Assets/Svg/ModalSVG/Profile"
import Create from "../../Assets/Svg/ModalSVG/Create"
import imageProfile from "../../Assets/Img/ModalImg/imageProfile.png"
import Close from "../../Assets/Svg/ModalSVG/Close"
import ProflileName from "../../Assets/Svg/ModalSVG/ProflileName"
import Phone from "../../Assets/Svg/ModalSVG/Phone"
import NationalCode from "../../Assets/Svg/ModalSVG/NationalCode"
import Email from "../../Assets/Svg/ModalSVG/Email"
import { useState } from "react"
export default () => {
    const [styleBorderName, setstyleBorderName] = useState(false)
    const [styleBorderPhone, setstyleBorderPhone] = useState(false)
    const [styleBorderNationalCode, setstyleBorderNationalCode] = useState(false)
    const [styleBorderEmail, setstyleBorderEmail] = useState(false)
    return (
        <section
            className="parentUserProfile"
        >
            <section className="w-[21vw] flex justify-between m-auto py-[1.09vw] text-[1.17vw]  " >
                <div className="flex w-[7.32vw] justify-between ">
                    <Profile />
                    <p>پروفایل شما</p>
                </div>
                <p className="text-[1.61vw] cursor-pointer">x</p>
            </section>
            <section className="flex w-[21vw] h-[5.12vw] items-center justify-between m-auto text-[0.65vw]">
                <div>
                    <img
                        className="w-[5.12vw] h-[5.12vw] rounded-[50%] "
                        src={imageProfile} />
                </div>
                <div className="w-[15vw] text-[0.90vw] leading-[2.20vw] ">
                    <p>تصویر پروفایل</p>
                    <section className="flex w-[14vw] justify-between">
                        <div
                            className="flex cursor-pointer items-center w-[5.7vw] justify-between font-semibold text-[#00693B]">
                            <Create />
                            <p className="pt-[0.21vw]">عکس جدید</p>
                        </div>
                        <div
                            className="flex items-center cursor-pointer   text-[#C46B2A] font-semibold justify-between w-[7.32vw]">
                            <Close />
                            <p className="pt-[0.21vw]"> حذف عکس فعلی </p>
                        </div>
                    </section>
                </div>
            </section>
            <section
                onClick={() =>
                (
                    setstyleBorderName(true),
                    setstyleBorderPhone(false),
                    setstyleBorderNationalCode(false),
                    setstyleBorderEmail(false)
                )}
                className={`${styleBorderName ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                    : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                    htmlFor="fullname"
                    className="flex w-[7.68vw] justify-between text-[#00693B]">
                    <ProflileName />
                    <p>نام و نام خانوادگی</p>
                </label>
                <input
                    value={"رها تمدن"}
                    id="fullname"
                    className="w-[19.76vw] bg-[#ffffff15] h-[2.19vw] mt-[0.36vw] outline-none pr-[0.732vw]"
                />
            </section>
            <section
                onClick={() =>
                (
                    setstyleBorderPhone(true),
                    setstyleBorderNationalCode(false),
                    setstyleBorderEmail(false),
                    setstyleBorderName(false)
                )}
                className={`${styleBorderPhone ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                    : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                    htmlFor="phone"
                    className="flex w-[6vw] justify-between text-[#00693B]">
                    <Phone />
                    <p> شماره موبایل</p>
                </label>
                <input
                    value={"09015415845"}
                    id="phone"
                    className="w-[19.76vw] bg-[#ffffff15]  h-[2.19vw] mt-[0.36vw] outline-none pr-[0.732vw]"
                />
            </section>
            <section
                onClick={() =>
                (
                    setstyleBorderNationalCode(true),
                    setstyleBorderEmail(false),
                    setstyleBorderPhone(false),
                    setstyleBorderName(false)
                )}
                className={`${styleBorderNationalCode ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                    : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                    htmlFor="NationalCode"
                    className="flex w-[4vw] justify-between text-[#00693B]">
                    <NationalCode />
                    <p> کد ملی</p>
                </label>
                <input
                    value={"001222555888"}
                    id="NationalCode"
                    className="w-[19.76vw] bg-[#ffffff15] h-[2.19vw] mt-[0.36vw] outline-none pr-[0.732vw]"
                />
            </section>
            <section
                onClick={() =>
                (setstyleBorderEmail(true),
                    setstyleBorderNationalCode(false),
                    setstyleBorderPhone(false),
                    setstyleBorderName(false)
                )
                }
                className={`${styleBorderEmail ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                    : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                    htmlFor="Email"
                    className="flex w-[6vw] justify-between text-[#00693B]">
                    <Email />
                    <p> ایمیل آدرس</p>
                </label>
                <input
                    value={"RahaTamadon@gmail.com"}
                    id="Email"
                    className="w-[19.76vw] bg-[#ffffff15] h-[2.19vw] mt-[0.36vw] outline-none pr-[0.732vw]"
                />
            </section>
            <div className="bg-[#DFDFDF] w-[21vw] h-[2.928vw] rounded-[0.73vw] m-auto mt-[0.732vw]  text-[0.878vw] ">
                <div className="justify-center items-center w-[19vw] m-auto h-[2.928vw] flex justify-between">
                    <p>تاریخ عضویت</p>
                    <p> 24 مرداد 1400</p>
                </div>
            </div>
            <div className="bg-[#00693B] mt-[1.098vw] w-[21vw] h-[3.294vw] rounded-[2.196vw] mb-[0.732vw] flex justify-center items-center cursor-pointer text-[#fff] m-auto text-[0.878vw]">
                ذخیره تغییرات
            </div>
        </section >
    )
}