import bgCopied from "../../Assets/Img/ModalImg/bgCopied.png"
import Tick from "../../Assets/Svg/ModalSVG/Tick"
export default () => {
    return (
        <section className="w-[15.980vw] h-[3.928vw] relative m-auto mt-[1vw]">
            <img
                className="w-[15.980vw] h-[7.5vw] relative m-auto mt-[1vw]"
                src={bgCopied} />
            <div className="flex items-center absolute top-[2.5vw] right-[3.5vw] text-[#4D4D4D]">
                <Tick />
                <p className="pr-[1vw] pt-[0.14vw] text-[0.8vw]">شماره حساب کپی شد!</p>
            </div>
        </section>
    )
}