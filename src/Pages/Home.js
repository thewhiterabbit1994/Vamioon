import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import MiddleSlide from "../Components/HomePage/MiddleSlide";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <MiddleSlide /> */}
      <Footer />
      <Outlet />
    </div>
  );
};
export default Home;
