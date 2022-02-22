import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "../src/Components/ScrollToTop";
import HomePage from "../src/Pages/Home";
import FAQ from "./Pages/FAQ";
import MiddleSlide from "./Components/HomePage/MiddleSlide";
import Support from "./Pages/Support";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/" element={<MiddleSlide />} />
            <Route path="support" element={<Support />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
