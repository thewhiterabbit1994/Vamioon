import Create from "../../Assets/Svg/ModalSVG/Create"
import ProflileName from "../../Assets/Svg/ModalSVG/ProflileName"
import Sharp from "../../Assets/Svg/ModalSVG/Sharp"
import Phone from "../../Assets/Svg/ModalSVG/Phone"
import Numberofshares from "../../Assets/Svg/ModalSVG/Numberofshares"
import { useState } from "react"
import CloseModal from "../../Assets/Svg/ModalSVG/CloseModal"
export default ({ ModalAddMember, setModalAddMember }) => {
    const [styleBorderProflileName, setstyleBorderProflileName] = useState(false)
    const [styleBorderuniqCode, setstyleBoruniqCode] = useState(false)
    const [styleBorderphone, setstyleBorphone] = useState(false)
    const [styleBorderShabanumber, setstyleBorderShabanumber] = useState(false)
    const [FullName, setFullName] = useState("")
    const [UniqeCode, setUniqeCode] = useState("")
    const [telephone, settelephone] = useState("")
    const [Numberofsharess, setNumberofsharess] = useState("")
    const [member, setMember] = useState([
        {
            fullname: "رها تمدن",
            UniqeCode: "0012548548",
            telephone: "0154784164",
            Numberofsharess: "1"
        }
    ])
    

    const addNewMember = () => {
        if (!FullName || !UniqeCode || !telephone || !Numberofsharess) {
            return alert("لطفا اطلاعات مورد نظر را وارد کنید")
        }
        const newMember = {
            fullname: FullName,
            UniqeCode: UniqeCode,
            telephone: telephone,
            Numberofsharess: Numberofsharess
        }
        const clone = [...member, newMember]
        setMember(clone)
        setFullName("")
        setUniqeCode("")
        settelephone("")
        setNumberofsharess("")
    }
    return (
        <>
            <section
                onClick={() => setModalAddMember(false)}
                className={`fixed transform transition-opacity duration-300 flex justify-center items-center  scale-0 z-30 w-full h-screen right-0 bottom-0 mt-[-200px] bg-[#00000071]  ${ModalAddMember ? "scale-100 opacity-100" : "opacity-0 "
                    }`}>
            </section>
            <section className=" z-50 fixed top-[10%] left-[30%]">
                {
                    ModalAddMember ?
                        <section className="w-[43.19vw] h-[35vw]  z-50 bg-[#fff] pt-[1.2vw] drop-shadow-lg rop-shadow-lg m-auto  text-[#4D4D4D] rounded-[1.024vw] ">
                            <section className="w-[40vw] flex items-center  h-[2.196vw] justify-between m-auto  ">
                                <div className="flex w-[32.3vw] items-center text-[1.0248vw] justify-between ">
                                    <div
                                        className="flex ">
                                        <div className="mt-[.1vw]">
                                            <Create />
                                        </div>
                                        <p className="mr-[.5vw]"> افزودن اعضا </p>
                                    </div>
                                    <p className="text-[0.73vw] text-[#4d4d4dc5] font-semibold">اعضای دعوت شده به صندوق با دریافت لینک از طریق پیامک عضو صندوق میشن  </p>
                                </div>
                                <div
                                    onClick={() => setModalAddMember(false)}
                                    className="cursor-pointer"
                                >
                                    <CloseModal />
                                </div>
                            </section>
                            <div className="flex justify-around px-[.7vw] pt-[.7vw]">
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
                                            onChange={(e) => setFullName(e.target.value)}
                                            value={FullName}
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
                                            htmlFor="uniqeCode"
                                            className="flex w-[3.5vw] justify-between text-[#00693B]">
                                            <Sharp />
                                            <p> کد ملی </p>
                                        </label>
                                        <input
                                            onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
                                            onChange={(e) => setUniqeCode(e.target.value)}
                                            type="number"
                                            value={UniqeCode}
                                            id="uniqeCode"
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
                                            onInput={(e) => e.target.value = e.target.value.slice(0, 11)}
                                            type="number"
                                            onChange={(e) => settelephone(e.target.value)}
                                            value={telephone}
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
                                            onChange={(e) => setNumberofsharess(e.target.value)}
                                            value={Numberofsharess}
                                            type="number"
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
                                                                <p className="pr-[.7vw]">{item.fullname}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div
                                onClick={addNewMember}
                                className="bg-[#00693B] mt-[1.098vw] w-[22vw] h-[3.294vw] rounded-[2.196vw] flex justify-center  items-center cursor-pointer text-[#fff] m-auto text-[0.878vw]">
                                افزودن عضو
                            </div>
                        </section>
                        :
                        ""
                }
            </section>
        </>
    )
}