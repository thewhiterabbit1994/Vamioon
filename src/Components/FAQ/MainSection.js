import { useState } from "react"
import ArrowUp from "../../Assets/Svg/FAQSVG/ArrowUp"
import ArrowDown from "../../Assets/Svg/FAQSVG/ArrowDown"
const MainSection = () => {
  const [question1, setquestion1] = useState(false)

  return (
    <section className="w-[80%] m-auto ">
      <section className="text-[#4D4D4D]">
        <div
          className={` w-[540px] h-[50px] bottom-2 flex justify-center  rounded-lg text-[12px] mt-[20px] mr-[20px] 
                 ${question1 ? "w-[540px] h-[240px] bottom-2 bg-[#ebe9e979]  rounded-lg text-[12px] mt-[20px] mr-[20px] transition-all duration-[700ms] "
              : "w-[540px] h-[50px] bottom-2 bg-[#ebe9e979]  rounded-lg text-[12px] mt-[20px] mr-[20px] transition-all duration-[500ms]"} `}>
          {
            !question1 ?
              <div className="w-[540px] h-[40px] flex justify-between items-cente">
                <div className="flex items-center pr-[20px]">
                  <p className="w-[10px] h-[10px] rounded-[50%] bg-[#C4C4C4]"></p>
                  <p className="flex justify-end items-center pr-[20px] h-[40px]">شفافیت در وامیون چه جوریه ؟ </p>
                </div>
                <p
                  onClick={() => setquestion1(!question1)}
                  className="text-[20px] pl-[30px] pt-[15px] cursor-pointer"><ArrowDown />
                </p>
              </div>
              :
              <section className={`${question1 ? "w-[540px] flex flex-col justify-center items-center border-2 rounded-lg border-[#00693B] " : "" }`}>
                <div className="flex justify-between w-[540px] py-[10px]">
                  <div className="flex items-center pr-[30px]">
                    <p className="w-[10px] h-[10px] rounded-[50%] bg-[#00AF63]"></p>
                    <p className="flex justify-end items-center pr-[20px] h-[40px]">شفافیت در وامیون چه جوریه ؟ </p>
                  </div>
                  <p
                    onClick={() => setquestion1(!question1)}
                    className="text-[20px] pl-[30px] pt-[15px] cursor-pointer"><ArrowUp />
                  </p>
                </div>
                <div className="bg-[#c4c4c471] w-[490px] h-[2px] rounded-lg mb-[15px] "></div>
                <p className="w-[480px] text-justify flex justify-end  h-[200px] leading-6">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه</p>

              </section>
          }
        </div>
      </section>
      <section></section>
    </section>
  )
}
export default MainSection