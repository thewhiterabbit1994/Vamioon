import FrequentlyAskedQuestions from "../../Assets/Svg/FAQSVG/FrequentlyAskedQuestions"
import Email from "../../Assets/Svg/FAQSVG/Email"
const HeaderFaq = () => {
    return (
        <section className="w-[90%] pt-[7.320644216691069vw] m-auto  ">
            <section className="flex justify-between text-[0.8784773060029283vw] h-[3.6603221083455346vw] items-center">
                <section className="w-[6.222547584187408vw] flex justify-between">
                    <FrequentlyAskedQuestions />
                    <p className="text-[1.171303074670571vw]">پشتیبانی</p>
                </section>
                <section className="flex w-[32.210834553440705vw] justify-between h-[3.6603221083455346vw] items-center">
                    <p>سوالات و پیشنهاد های خود را با ما درمیان بگذارید</p>
                    <div className="flex justify-center items-center bg-[#ede9e94b] w-[13.177159590043924vw] h-[3.6603221083455346vw] rounded-[2.1961932650073206vw]">
                        <Email />
                        <p className="mr-[0.36603221083455345vw]">support@vamion.com</p>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default HeaderFaq