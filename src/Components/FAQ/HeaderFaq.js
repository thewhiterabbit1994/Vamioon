import FrequentlyAskedQuestions from "../../Assets/Svg/FAQSVG/FrequentlyAskedQuestions"
import Email from "../../Assets/Svg/FAQSVG/Email"
const HeaderFaq = () => {
    return (
        <section className="w-[80%] h-[200px] pt-[100px] m-auto  ">
            <section className="flex justify-between text-[12px] h-[50px] items-center">
                <section className="w-[85px] flex justify-between">
                    <FrequentlyAskedQuestions />
                    <p className="text-[16px]">پشتیبانی</p>
                </section>
                <section className="flex w-[440px] justify-between  h-[50px] items-center">
                    <p>سوالات و پیشنهاد های خود را با ما درمیان بگذارید</p>
                    <div className="flex justify-center items-center bg-[#ede9e94b] w-[180px] h-[50px] rounded-[30px]">
                        <Email />
                        <p className="mr-[5px]">support@vamion.com</p>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default HeaderFaq