import Description from "../../Assets/Svg/ModalSVG/Description"
import imgdescription from "../../Assets/Img/ModalImg/imgdescription.png"
export default () => {
    return (
        <section className="w-[32.210vw] h-[37.188vw] mt-[2.9vw] bg-[#fff] drop-shadow-lg rop-shadow-lg m-auto text-[#4D4D4D] rounded-[1.024vw] ">
            <section className="w-[29vw] flex items-center  h-[2.196vw] justify-between m-auto py-[2.09vw]">
                <div className="flex w-[6.9vw] items-center text-[1.0248vw] justify-between ">
                    <Description />
                    <p className="mt-[.2vw]"> جزییات اعلان </p>
                </div>
                <p className="text-[1.61vw] cursor-pointer">x</p>
            </section>
            <section className="flex flex-col h-[27vw] justify-center text-[0.878vw]">
                <section className="w-[29vw] h-[3.660vw] flex justify-between items-center px-[1vw] bg-[#F2F2F2] rounded-[0.732vw] m-auto ">
                    <p>نام کاربر</p>
                    <div className="flex items-center">
                        <img
                            className="w-[2.19vw] ml-[1vw] h-[2.19vw] rounded-[0.732vw]"
                            src={imgdescription} />
                        <p>رها تمدن</p>
                    </div>
                </section>
                <section className="w-[29vw] flex justify-between items-center  px-[1vw] h-[3.660vw] bg-[#F2F2F2] rounded-[0.732vw] m-auto">
                    <p>نوع درخواست</p>
                    <p className="text-[#DD792F]">درخواست وام فوری</p>
                </section>
                <section className="w-[29vw] flex justify-between items-center  px-[1vw] h-[3.660vw] bg-[#F2F2F2] rounded-[0.732vw] m-auto">
                    <p> مبلغ وام  </p>
                    <p> 15.000.000 تومان </p>
                </section>
                <section className="w-[29vw] h-[8.784vw] bg-[#F2F2F2] pt-[1vw] px-[1vw] rounded-[0.732vw] m-auto">
                    <p> توضیحات درخواست </p>
                    <p className="w-[25.5vw] pt-[1vw] leading-[1.75vw]"> سلام! من درخواست یه وام فوری دارم تا سه ماه دیگه هم تسویه میکنم.  اگه با درخواستم موافقت کنین ممنون میشم .  </p>
                </section>
                <section className="w-[29vw] flex justify-between items-center  px-[1vw] h-[3.660vw] bg-[#F2F2F2] rounded-[0.732vw] m-auto">
                    <p>زمان و تاریخ درخواست</p>
                    <p>سه شنبه 27 مهر 1400  - 45:14 </p>
                </section>
            </section>
                <section className="w-[20.5vw] flex justify-between m-auto mt-[1vw] text-[0.878vw]">
                    <button className="bg-[#FCDBC2] w-[9.516vw] h-[3.36vw] rounded-[0.73vw] text-[#AC5E24]">رد درخواست</button>
                    <button className="bg-[#CCEFE0] w-[9.516vw] h-[3.36vw] rounded-[0.73vw] text-[#00693B]">اعطای وام جدید</button>
                </section>
        </section>
    )
}