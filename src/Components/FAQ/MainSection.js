import { useState } from "react"
import ArrowUp from "../../Assets/Svg/FAQSVG/ArrowUp"
import ArrowDown from "../../Assets/Svg/FAQSVG/ArrowDown"
import Ellipse from "../../Assets/Svg/FAQSVG/Ellipse"

const MainSection = () => {
  const [databaseFaq1, setdatabaseFaq1] = useState([
    {
      question: "شفافیت در وامیون چه جوریه ؟",
      isOpen: false,
      col: 1
    },
    {
      question: "آیا وامیون مجوزهای لازم رو داره ؟",
      isOpen: false,
      col: 1
    },
    {
      question: "وامیون جه قدر قابل اعتماده ؟",
      isOpen: false,
      col: 1
    },
    {
      question: "امنیت پول من در وامیون چه طور تامین میشه ؟",
      isOpen: false,
      col: 1
    },
    {
      question: " اگر کسی رو از صندوقم حذف کنم متوجه میشه ؟ ",
      isOpen: false,
      col: 2
    },
    {
      question: " حداقل مبلغ  برای وام چه قدره  ؟ ",
      isOpen: false,
      col: 2
    },
    {
      question: "حداکثر افرادی که میتونم به صندوق اضافه کنم چند نفره  ؟",
      isOpen: false,
      col: 2
    },
    {
      question: "آیا میتوانم به جز خودم مدیران دیگه ای به صندوق اضافه کنم؟",
      isOpen: false,
      col: 2
    }
  ])
  const [question1, setquestion1] = useState(false)
  const [question2, setquestion2] = useState(false)

  const handleDrop = (item, i) => {
    return (
      item.isOpen = !item.isOpen,
      setquestion1(!question1),
      question1 === true ? databaseFaq1[3].col = 1 : databaseFaq1[3].col = 2
      // databaseFaq1.filter(item=> item.isOpen === false ? item.isOpen = false : item.isOpen = true)
      // databaseFaq1[3].isOpen === true ? databaseFaq1[7].col = 1 : databaseFaq1[7].col = 2,
      // databaseFaq1[3].isOpen === true ? databaseFaq1[6].col = 1 : databaseFaq1[7].col = 2
    )
  }
  const handleDrop2 = (item) => {
    return (
      item.isOpen = !item.isOpen,
      setquestion2(!question2),
      question2 === true ? databaseFaq1[7].col = 2 : databaseFaq1[7].col = 1
    )
  }
  return (
    <>
      <div className="absolute z-[-10] h-screen w-screen flex justify-end items-end">
        <Ellipse />
      </div>
      <section className="w-[89%] m-auto  flex justify-between ">
        <section className="text-[#4D4D4D] w-[50%]   ">
          {
            databaseFaq1.filter(item => item.col === 1).map((item, i) => {
              return (
                <section
                  key={i}>
                  <div
                    className={` w-[39.53147877013177vw] h-[3.6603221083455346vw] bottom-2 flex justify-center  rounded-lg text-[0.8784773060029283vw] mt-[1.4641288433382138vw] mr-[1.4641288433382138vw]
                  ${item.isOpen === true ? "w-[39.53147877013177vw] h-[17.569546120058565vw] bottom-[0.14vw] bg-[#ebe9e942] rounded-lg text-[0.8784773060029283vw] mt-[1.4641288433382138vw] mr-[1.4641288433382138vw] transition-all duration-[200ms] "
                        : "w-[39.53147877013177vw] h-[4.02vw] bottom-[0.14vw] bg-[#ebe9e942]  rounded-[0.58vw] text-[0.8784773060029283vw] mt-[1.4641288433382138vw] mr-[1.4641288433382138vw] transition-all duration-[200ms]"} `}>
                    <div className={`${item.isOpen === true ? "w-[39.53147877013177vw] h-[3.6603221083455346vw] flex flex-col justify-between items-center" : "w-[39.53147877013177vw] flex-col h-[17.569546120058565vw] flex justify-between items-centr"} `}>
                      <div className={`${item.isOpen === true ? " flex flex-col items-center pr-[0.7320644216691069vw] border-[0.20vw] h-[17.569546120058565vw] border-[#00693B] rounded-lg" : " flex flex-col items-center pr-[0.7320644216691069vw]"} `}>
                        <div className="flex justify-between w-[37.33528550512445vw]  my-[0.7320644216691069vw]">
                          <div className="flex items-center pr-[1.4641288433382138vw] ">
                            <p className={`${!item.isOpen === true ? "w-[0.7320644216691069vw] h-[0.7320644216691069vw] rounded-[50%] bg-[#C4C4C4]" : "w-[0.7320644216691069vw] h-[0.7320644216691069vw] rounded-[50%] bg-[#00AF63]"} `}></p>
                            <p className={`${!item.isOpen === true ? " flex justify-end items-center pr-[1.4641288433382138vw] h-[2.9282576866764276vw]" : "flex justify-end items-center pr-[1.4641288433382138vw] h-[2.9282576866764276vw]"}`}>{item.question} </p>
                          </div>
                          <p
                            onClick={() => handleDrop(item, i)}
                            className={`${!item.isOpen === true ? "text-[1.4641288433382138vw] pl-[2.1961932650073206vw] pt-[1.0980966325036603vw] cursor-pointer" : "hidden"} `}><ArrowDown />
                          </p>
                          <p
                            onClick={() => handleDrop(item, i)}
                            className={`${item.isOpen === true ? "text-[1.4641288433382138vw] pl-[2.1961932650073206vw] pt-[1.0980966325036603vw] cursor-pointer" : "hidden"} `}><ArrowUp />
                          </p>
                        </div>
                        <div className={`${item.isOpen === true ? "w-[34.40702781844802vw] h-[0.14641288433382138vw] rounded-lg bg-[#c4c4c469]" : " hidden"} `}></div>
                        <p className={`${item.isOpen === true ? " w-[35.13909224011713vw] text-justify flex justify-end  h-[14.641288433382138vw] leading-[1.7vw] pt-[1.0980966325036603vw]" : "hidden"}`}>لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه</p>
                      </div>
                    </div>
                  </div>
                </section>
              )
            })
          }
        </section >
        <section className=" w-[50%]">
          {
            databaseFaq1.filter((item) => item.col === 2).map((item, i) => {
              return (
                <section
                  key={i}
                >
                  <div
                    className={` w-[39.53147877013177vw] h-[3.6603221083455346vw] bottom-2 flex justify-center  rounded-lg text-[0.8784773060029283vw] mt-[1.4641288433382138vw] mr-[1.4641288433382138vw]
                  ${item.isOpen === true ? "w-[39.53147877013177vw] h-[17.569546120058565vw]  bottom-[0.58vw] bg-[#ebe9e942] rounded-lg text-[0.8784773060029283vw] mt-[1.4641288433382138vw] mr-[1.4641288433382138vw] transition-all duration-[200ms] "
                        : "w-[39.53147877013177vw] h-[4.02vw] bottom-[0.58vw] bg-[#ebe9e942]  rounded-[0.58vw] text-[0.8784773060029283vw] mt-[1.4641288433382138vw] mr-[1.4641288433382138vw] transition-all duration-[200ms]"} `}>
                    <div className={`${item.isOpen === true ? "w-[39.53147877013177vw] h-[3.6603221083455346vw] flex flex-col justify-between items-center" : "w-[39.53147877013177vw] flex-col h-[17.569546120058565vw] flex justify-between items-centr"} `}>
                      <div className={`${item.isOpen === true ? " flex flex-col items-center pr-[0.7320644216691069vw] border-[0.14vw] h-[17.569546120058565vw] border-[#00693B] rounded-lg" : " flex flex-col items-center pr-[0.7320644216691069vw]"} `}>
                        <div className="flex justify-between w-[37.33528550512445vw]  my-[0.7320644216691069vw]">
                          <div className="flex items-center pr-[1.4641288433382138vw] ">
                            <p className={`${!item.isOpen === true ? "w-[0.7320644216691069vw] h-[0.7320644216691069vw] rounded-[50%] bg-[#C4C4C4]" : "w-[0.7320644216691069vw] h-[0.7320644216691069vw] rounded-[50%] bg-[#00AF63]"} `}></p>
                            <p className={`${!item.isOpen === true ? " flex justify-end items-center pr-[1.4641288433382138vw] h-[2.9282576866764276vw]" : "flex justify-end items-center pr-[1.4641288433382138vw] h-[2.9282576866764276vw]"}`}>{item.question} </p>
                          </div>
                          <p
                            onClick={() => handleDrop2(item)}
                            className={`${!item.isOpen === true ? "text-[1.4641288433382138vw] pl-[2.1961932650073206vw] pt-[1.0980966325036603vw] cursor-pointer" : "hidden"} `}><ArrowDown />
                          </p>
                          <p
                            onClick={() => handleDrop2(item)}
                            className={`${item.isOpen === true ? "text-[1.4641288433382138vw] pl-[2.1961932650073206vw] pt-[1.0980966325036603vw] cursor-pointer" : "hidden"} `}><ArrowUp />
                          </p>
                        </div>
                        <div className={`${item.isOpen === true ? "w-[34.40702781844802vw] h-[0.14641288433382138vw] rounded-lg bg-[#c4c4c469]" : " hidden"} `}></div>
                        <p className={`${item.isOpen === true ? "w-[35.13909224011713vw] text-justify flex justify-end  h-[200px] leading-6 pt-[1.0980966325036603vw]" : "hidden"}`}>لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه</p>
                      </div>
                    </div>
                  </div>
                </section>
              )
            })
          }
        </section>
      </section>

    </>
  )
}
export default MainSection