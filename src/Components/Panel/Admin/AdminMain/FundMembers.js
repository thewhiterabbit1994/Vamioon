import Member from "../../../../Assets/Svg/FundMemberSVG/Member";
import UserImg from "../../../../Assets/Img/UserProfileImg.jpg";
import { useState } from "react";

export default () => {
  const [member, setmember] = useState([
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      nationalID: "0022675965",
      loanToken: "10",
      loanTokenPrice: "50.000.000",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      nationalID: "0022675965",
      loanToken: "10",
      loanTokenPrice: "50.000.000",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      nationalID: "0022675965",
      loanToken: "10",
      loanTokenPrice: "50.000.000",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      nationalID: "0022675965",
      loanToken: "10",
      loanTokenPrice: "50.000.000",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      nationalID: "0022675965",
      loanToken: "10",
      loanTokenPrice: "50.000.000",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      nationalID: "0022675965",
      loanToken: "10",
      loanTokenPrice: "50.000.000",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      nationalID: "0022675965",
      loanToken: "10",
      loanTokenPrice: "50.000.000",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      nationalID: "0022675965",
      loanToken: "10",
      loanTokenPrice: "50.000.000",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      nationalID: "0022675965",
      loanToken: "10",
      loanTokenPrice: "50.000.000",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      nationalID: "0022675965",
      loanToken: "10",
      loanTokenPrice: "50.000.000",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      nationalID: "0022675965",
      loanToken: "10",
      loanTokenPrice: "50.000.000",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      nationalID: "0022675965",
      loanToken: "10",
      loanTokenPrice: "50.000.000",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      nationalID: "0022675965",
      loanToken: "10",
      loanTokenPrice: "50.000.000",
    },
    {
      img: UserImg,
      fullName: "محمد حسین ضرابی",
      nationalID: "0022675965",
      loanToken: "10",
      loanTokenPrice: "50.000.000",
    },
  ]);
  const [searchInputValue, setsearchInputValue] = useState("");
  return (
    <div className="">
      <div className="hidescroll flex shadow-bottom absolute pb-[2vw] mt-[5.5vw] mr-[9vw] w-[40vw] h-[52vw] overflow-y-auto overflow-x-hidden scroll-smooth  rounded-[0.8vw] border-[#c4c4c4] border-[0.155vw]">
        <div className="absolute  bg-white w-[39.7vw] h-[3.5vw] rounded-t-[0.8vw]  text-[1.1vw] ">
          <div className="flex mr-[1vw] mt-[1vw]">
            <Member />
            <p className="mr-[0.5vw]">اعضای صندوق</p>
          </div>
        </div>
        <div className="mt-[3.5vw] z-[-10] ">
          <table className=" mr-[1vw] w-[38vw]  table-auto">
            <thead className="">
              <tr className="text-[0.8vw] ">
                <th className="text-center">ردیف</th>
                <th className="text-right">تصویر</th>
                <th className="text-right">نام و نام خانوادگی</th>
                <th className="text-right">کد ملی</th>
                <th className="text-right">تعداد سهم</th>
                <th className="text-right">مبلغ سهم</th>
              </tr>
            </thead>
            <tbody className=" ">
              {member.map((member, i) => {
                return (
                  <tr className="text-[1vw] h-[3vw] mb-[5vw] bg-[#f2f2f2] rounded-[0.78vw] border-[white]  border-[0.625vw] leading-[3.125vw] ">
                    <td className="text-center">{i + 1}</td>
                    <td>
                      <img
                        className="h-[2vw] rounded-[0.5vw] "
                        src={member.img}
                      />
                    </td>
                    <td>{member.fullName}</td>
                    <td>{member.nationalID}</td>
                    <td>{member.loanToken} سهم</td>
                    <td>{member.loanTokenPrice} تومان</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className=" absolute mt-[53vw] flex items-start  mr-[23vw]   ">
        <button className="text-[1vw] bg-[#fff] px-[2vw] py-[0.5vw] rounded-[0.8vw] drop-shadow-lg">
          مشاهده ی همه
        </button>
      </div>
    </div>
  );
};
