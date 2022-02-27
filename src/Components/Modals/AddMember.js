import Create from "../../Assets/Svg/ModalSVG/Create"
import ProflileName from "../../Assets/Svg/ModalSVG/ProflileName"
import Sharp from "../../Assets/Svg/ModalSVG/Sharp"
import Phone from "../../Assets/Svg/ModalSVG/Phone"
import Numberofshares from "../../Assets/Svg/ModalSVG/Numberofshares"
import { useState } from "react"
export default () => {
    const [styleBorderProflileName, setstyleBorderProflileName] = useState(false)
    const [styleBorderuniqCode, setstyleBoruniqCode] = useState(false)
    const [styleBorderphone, setstyleBorphone] = useState(false)
    const [styleBorderShabanumber, setstyleBorderShabanumber] = useState(false)
    import CloseModal from "../../Assets/Svg/ModalSVG/CloseModal"
    const [member, setMember] = useState([
        "رها تمدن ", " حسین ضرابی ", "مهدی صابر", "رضا درویشی", " رها مباشر ", "امیرحسین حاتمی"
    ])
    return (
        <section className="w-[43.19vw] h-[35.13vw] mt-[2.9vw] bg-[#fff] drop-shadow-lg rop-shadow-lg m-auto text-[#4D4D4D] rounded-[1.024vw] ">
            <section className="w-[40vw] flex items-center  h-[2.196vw] justify-between m-auto py-[2.09vw]">
                <div className="flex w-[32.3vw] items-center text-[1.0248vw] justify-between ">
                    <div className="flex items-center">
                        <Create />
                        <p className="mr-[.5vw]"> افزودن اعضا </p>
                    </div>
                    <p className="text-[0.73vw] text-[#4d4d4dc5] font-semibold">اعضای دعوت شده به صندوق با دریافت لینک از طریق پیامک عضو صندوق میشن  </p>
                </div>
                <CloseModal />
            </section>
            <div className="flex justify-around px-[.7vw]">
                <section>
                    <section
                        onClick={() =>
                        (
                            setstyleBorderProflileName(true),
                            setstyleBoruniqCode(false),
                            setstyleBorphone(false),
                            setstyleBorderShabanumber(false)
                        )}
                        className={`${styleBorderProflileName ? "w-[21.2vw] h-[5.56vw]  m-auto rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                            : "w-[21.2vw] h-[5.56vw]  m-auto rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                        <label
                            htmlFor="ProflileName"
                            className="flex w-[10.5vw] justify-between text-[#00693B]">
                            <ProflileName />
                            <p> نام و نام خانوادگی سهامدار</p>
                        </label>
                        <input
                            value={"رها تمدن"}
                            id="ProflileName"
                            className="w-[19.76vw] bg-[#ffffff15] h-[2.19vw] mt-[0.36vw] outline-none pr-[0.732vw]"
                        />
                    </section>
                    <section
                        onClick={() =>
                        (
                            setstyleBoruniqCode(true),
                            setstyleBorphone(false),
                            setstyleBorderShabanumber(false),
                            setstyleBorderProflileName(false)
                        )}
                        className={`${styleBorderuniqCode ? "w-[21.2vw] h-[5.56vw] mt-[.7vw]  m-auto rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                            : "w-[21.2vw] h-[5.56vw]  m-auto mt-[.7vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                        <label
                            htmlFor="ProflileName"
                            className="flex w-[3.5vw] justify-between text-[#00693B]">
                            <Sharp />
                            <p> کد ملی </p>
                        </label>
                        <input
                            value={"001651354148542"}
                            id="ProflileName"
                            className="w-[19.76vw] bg-[#ffffff15] h-[2.19vw] mt-[0.36vw] outline-none "
                        />
                    </section>
                    <section
                        onClick={() =>
                        (
                            setstyleBorphone(true),
                            setstyleBoruniqCode(false),
                            setstyleBorderShabanumber(false),
                            setstyleBorderProflileName(false)
                        )}
                        className={`${styleBorderphone ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                            : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                        <label
                            htmlFor="phone1"
                            className="flex w-[6vw] justify-between text-[#00693B]">
                            <Phone />
                            <p> شماره موبایل</p>
                        </label>
                        <input
                            value={"09015415845"}
                            id="phone1"
                            className="w-[19.76vw] bg-[#ffffff15]  h-[2.19vw] mt-[0.36vw] outline-none"
                        />
                    </section>
                    <section
                        onClick={() =>
                        (
                            setstyleBorderShabanumber(true),
                            setstyleBoruniqCode(false),
                            setstyleBorphone(false),
                            setstyleBorderProflileName(false)
                        )}
                        className={`${styleBorderShabanumber ? "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#00693B] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"
                            : "w-[21.2vw] h-[5.56vw]  m-auto mt-[1.09vw] rounded-[0.73vw] border-[0.15vw] border-[#C4C4C4] text-[0.87vw] pr-[0.73vw] pt-[0.58vw]"}`}>
                        <label
                            htmlFor="Numberofshares"
                            className="flex w-[5.5vw] justify-between items-center text-[#00693B]">
                            <Numberofshares />
                            <p className="pt-[.2vw]"> تعداد سهام</p>
                        </label>
                        <input
                            value={"1"}
                            id="Numberofshares"
                            className="w-[19.76vw] bg-[#ffffff15]  h-[2.19vw] pr-[.3vw] mt-[0.36vw] outline-none "
                        />
                    </section>
                </section>
                <section>
                    <div className="w-[19vw] h-[25.2vw] rounded-[0.73vw] bg-[#F2F2F2]">
                        <div className="w-[17vw] m-auto pt-[1vw] h-fit">
                            <p className="text-[#4D4D4D] text-[0.87vw]">اعضای صندوق</p>
                            <div className="mt-[1vw]">
                                {
                                    member.map((item, i) => {
                                        return (
                                            <div className="bg-[#DFDFDF] hover:bg-[#0000004d] flex items-center pr-[1vw] w-[15.5vw] cursor-pointer h-[2.635vw] m-auto rounded-[0.5856vw] text-[#4D4D4D] mb-[.5vw] text-[0.8784vw]">
                                                <p>{i + 1}</p>
                                                <p className="pr-[.7vw]">{item}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="bg-[#00693B] mt-[1.098vw] w-[22vw] h-[3.294vw] rounded-[2.196vw] flex justify-center  items-center cursor-pointer text-[#fff] m-auto text-[0.878vw]">
                دانلود گزارش
            </div>
        </section>
    )
}