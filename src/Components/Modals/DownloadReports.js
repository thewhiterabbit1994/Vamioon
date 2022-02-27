import Dowonload from "../../Assets/Svg/ModalSVG/Dowonload"
import Tarakonesh from "../../Assets/Svg/ModalSVG/Tarakonesh"
import Funds from "../../Assets/Svg/ModalSVG/Funds"
import Excle from "../../Assets/Svg/ModalSVG/Excle"
import Cheked from "../../Assets/Svg/ModalSVG/Cheked"
import Vector from "../../Assets/Svg/ModalSVG/Vector"
import NotCheked from "../../Assets/Svg/ModalSVG/NotCheked"
import Photpshop from "../../Assets/Svg/ModalSVG/Photpshop"
import Drop from "../../Assets/Svg/ModalSVG/Drop"
import CloseModal from "../../Assets/Svg/ModalSVG/CloseModal"
import { useState } from "react"
export default () => {
    const [styleBorderTarakonesh, setstyleBorderTarakonesh] = useState(false)
    const [styleBorderFunds, setstyleBorderFunds] = useState(false)
    const [drop, setDreop] = useState(false)
    const [dropFunds, setDreopFunds] = useState(false)
    const [Chekeditem, setChekeditem] = useState(false)
    const [Chekeditem1, setChekeditem1] = useState(true)

    return (
        <section className="w-[24.15vw] h-[23.5vw] mt-[2.9vw] bg-[#fff] drop-shadow-lg rop-shadow-lg m-auto text-[#4D4D4D] rounded-[1.024vw] ">
            <section className="w-[21vw] flex items-center  h-[2.196vw] justify-between m-auto py-[2.09vw]">
                <div className="flex w-[8.3vw] items-center text-[1.0248vw] justify-between ">
                    <Dowonload />
                    <p> دانلود گزارش ها </p>
                </div>
                <CloseModal />
            </section>
            <section className="flex items-center">
                <div
                    onClick={() => (
                        setChekeditem1(false),
                        setChekeditem(true),
                        setstyleBorderFunds(false),
                        setstyleBorderTarakonesh(true)
                        )}
                    className="pr-[1.3vw]">
                    {Chekeditem ?
                        <div className=" relative">
                            <div className="absolute top-[25%] right-[25%]">
                                <Vector />
                            </div>
                            <Cheked />
                        </div>
                        :
                        <NotCheked />
                    }
                </div>
                <section
                    onClick={() =>
                    (
                        setstyleBorderTarakonesh(true),
                        setstyleBorderFunds(false),
                        setChekeditem(true),
                        setChekeditem1(false),
                        setDreopFunds(false),
                        drop === true ? setDreop(false) : ""
                    )}
                    className={`${styleBorderTarakonesh ? "w-[19vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                        : "w-[19vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] cursor-pointer border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                    <label
                        className="flex w-[7vw] justify-between items-center text-[#00693B]">
                        <Tarakonesh />
                        <p>تراکنش های شما</p>
                    </label>
                    <div className="w-[19vw] items-center  flex justify-between mt-[1.098vw]">
                        <div className="flex">
                            <Excle />
                            <p className="mr-[.5vw]"> transactions.xls </p>
                        </div>
                        <div
                            onClick={() => setDreop(!drop)}
                            className={`cursor-pointer relative  left-[2vw]`}>
                            <Drop />
                            <div className={`w-[7.320vw] absolute left-[-.732vw] h-[7.320vw] mt-[0.585vw] rounded-lg bg-[#fffffff5] 
                         ${drop ? "w-[7.320vw] absolute  left-[-.732vw] h-[7.320vw] rounded-[0.585vw] " : "hidden"}`}>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="flex items-center">
                <div
                    onClick={() => (
                        setChekeditem(false),
                        setChekeditem1(true),
                        setstyleBorderTarakonesh(false),
                        setstyleBorderFunds(true)
                        )}
                    className="pr-[1.3vw]">
                    {Chekeditem1 ?
                        <div className=" relative">
                            <div className="absolute top-[25%] right-[25%]">
                                <Vector />
                            </div>
                            <Cheked />
                        </div>
                        :
                        <NotCheked />
                    }
                </div>
                <section
                    onClick={() =>
                    (
                        setstyleBorderFunds(true),
                        setstyleBorderTarakonesh(false),
                        setChekeditem(false),
                        setChekeditem1(true),
                        setDreop(false),
                        dropFunds === true ? setDreopFunds(false) : ""
                    )}
                    className={`${styleBorderFunds ? "w-[19vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                        : "w-[19vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] cursor-pointer border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                    <label
                        className="flex w-[7vw] justify-between items-center text-[#00693B]">
                        <Funds />
                        <p>موجودی صندوق</p>
                    </label>
                    <div className="w-[19vw] items-center  flex justify-between mt-[1.098vw]">
                        <div className="flex">
                            <Photpshop />
                            <p className="mr-[.5vw]"> balance.pdf </p>
                        </div>
                        <div
                            onClick={() => setDreopFunds(!dropFunds)}
                            className={`cursor-pointer relative  left-[2vw]`}>
                            <Drop />
                            <div className={`w-[7.320vw] absolute left-[- 0.732vw] h-[7.320vw] mt-[0.585vw] rounded-lg bg-[#fffffff5] 
                         ${dropFunds ? "w-[7.320vw] absolute left-[-0.732vw] h-[7.320vw] rounded-[0.585vw] " : "hidden"}`}>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <div className="bg-[#00693B] mt-[1.098vw] w-[22vw] h-[3.294vw] rounded-[2.196vw] flex justify-center  items-center cursor-pointer text-[#fff] m-auto text-[0.878vw]">
                دانلود گزارش
            </div>
        </section>
    )
}