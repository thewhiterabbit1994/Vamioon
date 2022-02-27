import Installment from "../../Assets/Svg/ModalSVG/Installment"
import Diamonds from "../../Assets/Svg/ModalSVG/Diamonds"
import Img from "../../Assets/Svg/ModalSVG/Img"
import InstallmentAmount from "../../Assets/Svg/ModalSVG/InstallmentAmount"
import Loanamount from "../../Assets/Svg/ModalSVG/Loanamount"
import Drop from "../../Assets/Svg/ModalSVG/Drop"
import CloseModal from "../../Assets/Svg/ModalSVG/CloseModal"
import { useState } from "react"
export default () => {
    const [styleBorderLoan, setstyleBorderLoan] = useState(false)
    const [styleBorderInstallmentAmount, setstyleBorderInstallmentAmount] = useState(false)
    const [styleBorderLoanamount, setstyleBorderLoanamount] = useState(false)
    const [styleBorderImg, setstyleBorderImg] = useState(false)
    const [drop, setDreop] = useState(false)
    return (
        <section className="w-[24.15vw] h-[35vw] mt-[2.9vw] bg-[#fff] drop-shadow-lg rop-shadow-lg m-auto text-[#4D4D4D] rounded-[1.024vw] ">
            <section className="w-[21vw] flex items-center  h-[2.196vw] justify-between m-auto pt-[2.09vw] pb-[1vw]">
                <div className="flex w-[7vw] items-center text-[1.0248vw] justify-between ">
                    <Installment />
                    <p> پرداخت قسط </p>
                </div>
                <CloseModal />
            </section>
            <section
                onClick={() =>
                (
                    setstyleBorderLoan(true),
                    setstyleBorderInstallmentAmount(false),
                    setstyleBorderLoanamount(false),
                    setstyleBorderImg(false)
                )}
                className={`${styleBorderLoan ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                    : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                    className="flex w-[2.5vw] justify-between items-center text-[#00693B]">
                    <Diamonds />
                    <p> وام</p>
                </label>
                <div className="w-[19vw] items-center  flex justify-between mt-[1.098vw]">
                    <p>کمک هزینه</p>
                    <div
                        onClick={() => setDreop(!drop)}
                        className={`cursor-pointer relative`}>
                        <Drop />
                        <div className={`w-[7.320vw] absolute left-[- 0.732vw] h-[7.320vw] mt-[0.585vw] rounded-lg bg-[#fffffff5] 
                         ${drop ? "w-[7.320vw] absolute left-[-0.732vw] h-[7.320vw] rounded-[0.585vw] " : "hidden"}`}>
                            <p className="w-[7.320vw] h-[2.17vw] hover:bg-[#00000018] rounded-lg my-[0.366vw] flex items-center justify-center "> کمک هزینه</p>
                            <p className="w-[7.320vw] h-[2.17vw] text-center hover:bg-[#00000018] rounded-[0.585vw] flex items-center justify-center ">کمک هزینه</p>
                            <p className="w-[7.320vw] h-[2.17vw] text-center hover:bg-[#00000018] rounded-[0.585vw] my-[0.366vw] flex items-center justify-center ">کمک هزینه</p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                onClick={() =>
                (
                    setstyleBorderInstallmentAmount(true),
                    setstyleBorderLoan(false),
                    setstyleBorderLoanamount(false),
                    setstyleBorderImg(false),
                    setDreop(false)
                )}
                className={`${styleBorderInstallmentAmount ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                    : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                    htmlFor="InstallmentAmount"
                    className="flex w-[4.7vw] justify-between items-center text-[#00693B]">
                    <InstallmentAmount />
                    <p className="pt-[.2vw]"> مبلغ قسط</p>
                </label>
                <input
                    value={"250.000 تومان"}
                    id="InstallmentAmount"
                    className="w-[19.76vw] bg-[#ffffff15]  h-[2.19vw] mt-[0.36vw] outline-none pr-[0.732vw]"
                />
            </section>
            <section
                onClick={() =>
                (
                    setstyleBorderLoanamount(true),
                    setstyleBorderImg(false),
                    setstyleBorderInstallmentAmount(false),
                    setstyleBorderLoan(false),
                    setDreop(false)
                )}
                className={`${styleBorderLoanamount ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                    : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                    htmlFor="account num2 "
                    className="flex w-[8vw] justify-between items-center text-[#00693B]">
                    <Loanamount />
                    <p className="pt-[.2vw]"> شماره حساب مقصد</p>
                </label>
                <input
                    value={"62210612089"}
                    id="account num2"
                    className="w-[19.76vw] bg-[#ffffff15]  h-[2.19vw] mt-[0.36vw] outline-none "
                />
            </section>
            <section
                onClick={() =>
                (
                    setstyleBorderLoanamount(false),
                    setstyleBorderImg(true),
                    setstyleBorderInstallmentAmount(false),
                    setstyleBorderLoan(false),
                    setDreop(false)
                )}
                className={`${styleBorderImg ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                    : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                    htmlFor="account num2 "
                    className="flex w-[6vw] justify-between items-center text-[#00693B]">
                    <Img />
                    <p className="pt-[.2vw]">رسید پرداخت</p>
                </label>
                <div className="flex items-center justify-between mt-[.5vw]">
                    <p className="text-[1.024vw]">recepit.jpg</p>
                    <button className="bg-[#006FB8] w-[7.32vw] h-[2.2vw] rounded-[1.90vw] ml-[.90vw] text-[#FFF] text-[0.7320vw]">ارسال فایل</button>
                </div>
            </section>
            <div className="bg-[#00693B] mt-[1.098vw] w-[21vw] h-[3.294vw] rounded-[2.196vw] flex justify-center items-center cursor-pointer text-[#fff] m-auto text-[0.878vw]">
                ارسال درخواست
            </div>
        </section >
    )
}