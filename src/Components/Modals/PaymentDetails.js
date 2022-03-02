import Description from "../../Assets/Svg/ModalSVG/Description"
import imgdescription from "../../Assets/Img/ModalImg/imgdescription.png"
import SamanBank from "../../Assets/Svg/ModalSVG/SamanBank"
import Create from "../../Assets/Svg/ModalSVG/Create"
import Recepi from "../../Assets/Svg/ModalSVG/Recepi"
import Sucsesse from "../../Assets/Svg/ModalSVG/Sucsesse"
import CloseModal from "../../Assets/Svg/ModalSVG/CloseModal"
import EmojiSmart from "../../Assets/Svg/ModalSVG/EmojiSmart"
import { useState } from "react"
import LogOut from "../../Components/Modals/LogOut"
export default ({ setmodalPaymentDetails, modalPaymentDetails }) => {
    const [DownloadReceipt, setDownloadReceipt] = useState(false)
    const [member, setMember] = useState([
        "رها تمدن ", " حسین ضرابی ", "مهدی صابر", "رضا درویشی", " رها مباشر ", "امیرحسین حاتمی"
    ])
    return (
        <>
            <section
                onClick={() => setmodalPaymentDetails(false)}
                className={`fixed transform transition-opacity duration-300  scale-0 z-30 w-full h-screen right-0 bottom-0 bg-[#00000071]  ${modalPaymentDetails ? "scale-100 opacity-100" : "opacity-0 "
                    }`}>
            </section>

            <div className=" z-50 fixed top-[13%] left-[33%]">
                {
                    modalPaymentDetails ?
                        <section className="w-[32.210vw] h-[27.23vw] mt-[2.9vw] bg-[#fff] drop-shadow-lg rop-shadow-lg m-auto text-[#4D4D4D] rounded-[1.024vw] ">
                            <section className="w-[28.4vw] flex items-center  h-[2.196vw] justify-between m-auto py-[2.09vw]">
                                <div className="flex w-[7.9vw] items-center text-[1.0248vw] justify-between ">
                                    <Description />
                                    <p className="mt-[.2vw]"> جزییات پرداخت </p>
                                </div>
                                <div
                                    onClick={() => setmodalPaymentDetails(false)}
                                    className="cursor-pointer"
                                >
                                    <CloseModal />
                                </div>
                            </section>
                            <section className="flex flex-col h-[22vw] justify-center text-[0.878vw]">
                                <section className="w-[29vw] h-[3.660vw] flex justify-between items-center px-[1vw] bg-[#F2F2F2] rounded-[0.732vw] m-auto ">
                                    <p> نام پرداخت کننده </p>
                                    <div className="flex items-center">
                                        <img
                                            className="w-[2.19vw] ml-[1vw] h-[2.19vw] rounded-[0.732vw]"
                                            src={imgdescription} />
                                        <p>رها تمدن</p>
                                    </div>
                                </section>
                                <section className="w-[29vw] flex justify-between items-center  px-[1vw] h-[3.660vw] bg-[#F2F2F2] rounded-[0.732vw] m-auto">
                                    <p> مبلغ تراکنش</p>
                                    <div className="flex items-center">
                                        <p className="text-[#00693B] pl-[.5vw]"> 950.000 تومان </p>
                                        <Create />
                                    </div>
                                </section>
                                <section className="w-[29vw] flex justify-between items-center  px-[1vw] h-[3.660vw] bg-[#F2F2F2] rounded-[0.732vw] m-auto">
                                    <p>زمان و تاریخ درخواست</p>
                                    <p>سه شنبه 27 مهر 1400  - 45:14 </p>
                                </section>
                                <section className="w-[29vw] flex justify-between items-center  px-[1vw] h-[3.660vw] bg-[#F2F2F2] rounded-[0.732vw] m-auto">
                                    <p> شماره حساب مقصد  </p>
                                    <div className="flex items-center">
                                        <p className="pl-[.5vw]"> 62221061208872459 </p>
                                        <SamanBank />
                                    </div>
                                </section>
                                <section className="w-[29vw] flex justify-between items-center  px-[1vw] h-[3.660vw] bg-[#F2F2F2] rounded-[0.732vw] m-auto">
                                    <div className="flex justify-between w-[12vw]">
                                        <p>رسید پرداخت</p>
                                        <div className="flex items-center">
                                            <Sucsesse />
                                            <p className="pr-[.5vw] text-[#00AF63]"> آپلود شده </p>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => setDownloadReceipt(true)}
                                        className="w-[8.784vw] cursor-pointer h-[2.196vw] rounded-[0.732vw] bg-[#C4C4C4] text-[0.732vw] text-[#4D4D4D]">
                                        <div className="justify-between items-center h-[2.196vw] flex px-[.8vw]">
                                            <Recepi />
                                            <EmojiSmart/>
                                            <p>دانلود رسید پرداخت</p>
                                        </div>
                                    </div>
                                    <div
                                        className={`${!DownloadReceipt
                                            ? "fixed top-[25%] left-[25%] opacity-0"
                                            : "fixed top-[25%] left-[25%] transition-all opacity-100 duration-[1000ms]"
                                            }`}
                                    >
                                        <LogOut emoji={<EmojiSmart />} />
                                    </div>
                                </section>
                            </section>
                        </section>
                        :
                        ""
                }
            </div>
        </>
    )
}