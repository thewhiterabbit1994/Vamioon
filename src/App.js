import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "../src/Components/ScrollToTop";
import HomePage from "../src/Pages/Home";
import FAQ from "./Pages/FAQ";
import MiddleSlide from "./Components/HomePage/MiddleSlide";
import Support from "./Pages/Support";
import Login from "./Pages/Login";
import VerificationCode from "./Pages/VerificationCode";
import SearchResultUser from "./Components/Modals/LogOut"
import EmojiClever from "../src/Assets/Svg/ModalSVG/EmojiBirth"
import Button from "../src/Components/Modals/Button"


function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
      <Route path="/SearchResultUser" element={<SearchResultUser emoji={<EmojiClever/>} textclassName={"top-[10vw]"} text={"کاربر عضوصندوق شد!"} text3={"لینک صندق براش فستاده میشه"} />} />
          <Route path="/" element={<HomePage />}>
            <Route path="/" element={<MiddleSlide />} />
            <Route path="support" element={<Support />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="login" element={<Login />} />
            <Route
              path="login/verificationcode"
              element={<VerificationCode />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
