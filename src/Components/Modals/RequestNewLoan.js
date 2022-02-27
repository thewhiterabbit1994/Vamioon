import Loan from "../../Assets/Svg/ModalSVG/Loan"
import Loanamount from "../../Assets/Svg/ModalSVG/Loanamount"
import RequestDescription from "../../Assets/Svg/ModalSVG/Request Description"
import CategoriesLoan from "../../Assets/Svg/ModalSVG/CategoriesLoan"
import Drop from "../../Assets/Svg/ModalSVG/Drop"
import CloseModal from "../../Assets/Svg/ModalSVG/CloseModal"
import { useState } from "react"
export default () => {
    const [styleBorderCategoriesLoan, setstyleBorderCategoriesLoan] = useState(false)
    const [styleBorderLoanamount, setstyleBorderLoanamount] = useState(false)
    const [styleBorderRequestDescription, setstyleBorderRequestDescription] = useState(false)
    const [drop, setDreop] = useState(false)
    return (
        <section className="w-[24.15vw] h-[31.5vw] mt-[2.9vw] bg-[#fff] drop-shadow-lg m-auto text-[#4D4D4D] rounded-[1.024vw] ">
            <section className="w-[21vw] flex items-center  h-[2.196vw] justify-between m-auto py-[2.09vw]">
                <div className="flex w-[9.8vw] items-center text-[1.0248vw] justify-between ">
                    <Loan />
                    <p> درخواست وام جدید </p>
                </div>
                <CloseModal/>
            </section>
            <section
                onClick={() =>
                (
                    setstyleBorderCategoriesLoan(true),
                    setstyleBorderLoanamount(false),
                    setstyleBorderRequestDescription(false)
                )}
                className={`${styleBorderCategoriesLoan ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                    : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                    className="flex w-[4vw] justify-between items-center text-[#00693B]">
                    <CategoriesLoan />
                    <p>نوع وام</p>
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
                    setstyleBorderLoanamount(true),
                    setstyleBorderCategoriesLoan(false),
                    setstyleBorderRequestDescription(false),
                    setDreop(false)
                )}
                className={`${styleBorderLoanamount ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                    : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                <label
                    htmlFor="phone"
                    className="flex w-[4.5vw] justify-between items-center text-[#00693B]">
                    <Loanamount />
                    <p> مبلغ وام</p>
                </label>
                <input
                    value={"30.000.000 تومان"}
                    id="phone"
                    className="w-[19.76vw] bg-[#ffffff15]  h-[2.19vw] mt-[0.36vw] outline-none pr-[0.732vw]"
                />
            </section>
            <section
                onClick={() =>
                (
                    setstyleBorderRequestDescription(true),
                    setstyleBorderCategoriesLoan(false),
                    setstyleBorderLoanamount(false),
                    setDreop(false)
                )}
                className={`${styleBorderRequestDescription ? "w-[21.2vw] h-[7.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                    : "w-[21.2vw] h-[7.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
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
            <div className="bg-[#00693B] mt-[1.098vw] w-[21vw] h-[3.294vw] rounded-[2.196vw] flex justify-center items-center cursor-pointer text-[#fff] m-auto text-[0.878vw]">
                ارسال درخواست
            </div>
        </section>
    )
}