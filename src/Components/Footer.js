import CIcon from "../Assets/Svg/FooterSVG/C-Icon";
const Footer = () => {
  return (
    <div className="absolute bottom-5 flex w-screen justify-between text-[12px] items-center">
      <div className="flex w-[20%] justify-around mr-[20px]  items-center">
        <p>حریم خصوصی</p>
        <p>شرایط و ضوابط</p>
      </div>
      <div className="flex ml-[30px] items-center">
        <CIcon />
        <p className=" mr-1">توسعه توسط AlfaDevs</p>
      </div>
    </div>
  );
};
export default Footer;
