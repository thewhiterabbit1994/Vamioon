import CIcon from "../Assets/Svg/FooterSVG/C-Icon";
const Footer = () => {
  return (
    <div className="absolute bottom-[1.5625vw] flex w-screen justify-between text-[0.9375vw] items-center">
      <div className="flex w-[20%] justify-around mr-[1.5625vw]  items-center">
        <p>حریم خصوصی</p>
        <p>شرایط و ضوابط</p>
      </div>
      <div className="flex ml-[2.22265625vw] items-center">
        <CIcon />
        <p className=" mr-[0.3125vw]">توسعه توسط AlfaDevs</p>
      </div>
    </div>
  );
};
export default Footer;
