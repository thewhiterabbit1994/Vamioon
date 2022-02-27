import imageProfile from "../../Assets/Img/ModalImg/imageProfile.png"
import hands from "../../Assets/Img/ModalImg/hands.png"
export default () => {
    return (
        <section className="w-[18.00vw] relative h-[5.12vw] flex  text-[#4D4D4D] justify-between  px-[1.5vw] items-center bg-[#FFFFFF] m-auto mt-[1vw] drop-shadow-lg rounded-[0.732vw]">
            <img
                className="rounded-[50%] w-[2.92vw] h-[2.92vw] "
                src={imageProfile} />
            <div className="flex">
                <img src={hands} className="w-[1.09vw] h-[1.09vw]"/>
                <p className="text-[0.80vw] pr-[.5vw]">خوش آمدید</p>
            </div>
            <p className="text-[0.87vw] font-semibold">رها تمدن</p>
            <div className="w-[10.98vw] h-[0.14vw] bg-[#FFD600] absolute bottom-0 left-[1vw]"></div>
        </section>
    )
}