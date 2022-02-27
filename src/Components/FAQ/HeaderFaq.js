import FrequentlyAskedQuestions from "../../Assets/Svg/FAQSVG/FrequentlyAskedQuestions"
import Email from "../../Assets/Svg/FAQSVG/Email"
import BgEmailFaq from "../../Assets/Svg/FAQSVG/BgEmailFaq"
const HeaderFaq = () => {
    return (
        <section className="w-[90%] pt-[7.32vw] m-auto  ">
            <section className="flex justify-between text-[0.87vw] h-[3.66vw] items-center">
                <section className="w-[11.7vw] flex justify-between">
                    <FrequentlyAskedQuestions />
                    <p className="text-[1.17vw]">سوالات متداول شما</p>
                </section>
                <section className="flex w-[34vw] justify-between h-[3.66vw] items-center">
                    <p className="mb-[.5vw]">سوالات و پیشنهاد های خود را با ما درمیان بگذارید</p>
                    <div className="relative ">
                        <BgEmailFaq />
                        <div className="flex justify-center items-center cursor-pointer pt-[.3vw] absolute top-[.7vw] left-[.9vw] w-[13.17vw] h-[3.66vw] rounded-[2.19vw]">
                            <Email />
                            <a
                                className="mr-[0.366vw] mt-[.3vw]"
                                href="mailto:webmaster@example.com">support@vamion.com</a>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default HeaderFaq