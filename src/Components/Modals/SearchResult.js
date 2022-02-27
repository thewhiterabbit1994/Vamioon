import Search from "../../Assets/Svg/ModalSVG/Search"
import Home from "../../Assets/Svg/ModalSVG/Home"
import ArrowLeft from "../../Assets/Svg/ModalSVG/ArrowLeft"
import CloseModal from "../../Assets/Svg/ModalSVG/CloseModal"
export default () => {
    return (
        <section className="w-[21.9vw] h-[6.80vw] m-auto pt-[1vw] text-[0.87vw] rounded-[.80vw] bg-[#fff] drop-shadow-lg text-[#4D4D4D]">
            <section className="flex justify-between w-[19.5vw] items-center h-[1.317vw] m-auto pt-[.5vw] ">
                <div className="flex items-center">
                    <Search />
                    <input
                        value={"نتایج جست و جو برای 'همکاران شرکت'"}
                        className=" outline-none pr-[.5vw] pt-[.3vw]  w-[15vw]" />
                </div>
                <div className="cursor-pointer">
                    <CloseModal />
                </div>
            </section>
            <section className="bg-[#E5E5E5] w-[20.3vw] m-auto flex px-[1vw] items-center justify-between  h-[2.92vw] rounded-[.60vw] mt-[1vw]">
                <div className="flex ">
                    <Home />
                    <p className="pr-[.5vw] ">همکاران شرکت</p>
                </div>
                <div className="flex items-center cursor-pointer">
                    <p className="pl-[.5vw] text-[#006FB8]">مشاهده صندوق</p>
                    <ArrowLeft />
                </div>
            </section>
        </section>
    )
}