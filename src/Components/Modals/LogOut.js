export default ({ text, textClassName = " w-[17.5vw] fixed flex justify-center m-auto top-[5.5vw]", emoji, CloseModal, Button, text2, text3, textclassName = ' w-[17.5vw] fixed flex justify-center text-[#818181] text-[0.90vw]  m-auto top-[8vw]' }) => {
    return (
        <section className="drop-shadow-lg relative bg-[#fff] m-auto w-[17.5vw] h-[14vw] rounded-[.73vw] mt-[1vw]">
            <div className="absolute cursor-pointer left-[1vw] top-[1vw]">
                {CloseModal}
            </div>
            <div className="w-[2.9vw] h-[2.9vw] m-auto pt-[1.5vw]">
                {emoji}
            </div>
            <div className={textClassName}>
                <p className="text-[0.87vw] w-[13vw] text-center text-[#4D4D4D] font-semibold">{text}</p>
            </div>
            <div className={textclassName}>
                {text3}
            </div>
            <div className=" w-[17.5vw] fixed flex justify-center text-[#818181] text-[0.90vw]  m-auto bottom-[1.30vw]">
                <p className="w-[15vw] text-center">{text2}</p>
            </div>
            <div className="flex fixed w-[13vw] right-[2.19vw] bottom-[1.10vw] justify-between m-auto ">
                {Button}
            </div>
        </section>
    )
}