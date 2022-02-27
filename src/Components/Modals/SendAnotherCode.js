import emojiLaph from "../../Assets/Img/ModalImg/imogiLaph.png"
export default () => {
    return (
        <section className="w-[16.10vw] h-[5.12vw] text-[0.87vw] flex justify-around px-[.5vw] items-center text-[#4D4D4D]  drop-shadow-lg bg-[#fff] rounded-[0.73vw] m-auto mt-[1vw]">
            <img 
            src={emojiLaph}
            className="pb-[.5vw] w-[2.19vw] h-[2.5vw]"/>
            <p>کد جدید براتون فرستاده شد !</p>
        </section>
    )
}