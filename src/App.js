import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "../src/Components/ScrollToTop";
import HomePage from "../src/Pages/Home";
import FAQ from "./Pages/FAQ";
import MiddleSlide from "./Components/HomePage/MiddleSlide";
import Support from "./Pages/Support";
import Login from "./Pages/Login";
import VerificationCode from "./Pages/VerificationCode";
import Panel from "./Pages/Panels/Panel";
import AdminMain from "./Pages/Panels/Admin/AdminMain";
import AdminLoans from "./Pages/Panels/Admin/AdminLoans";
import AdminReports from "./Pages/Panels/Admin/AdminReports";
import AdminNotifications from "./Pages/Panels/Admin/AdminNotifications";
import UserMain from "./Pages/Panels/User/UserMain";
import UserLoans from "./Pages/Panels/User/UserLoans";
import UserNotifications from "./Pages/Panels/User/UserNotifications";

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
            <Route path="login" element={<Login />} />
            <Route
              path="login/verificationcode"
              element={<VerificationCode />}
            />
          </Route>
          <Route path="/panel" element={<Panel />}>
            <Route path="admin/main" element={<AdminMain />} />
            <Route path="admin/loans" element={<AdminLoans />} />
            <Route path="admin/reports" element={<AdminReports />} />
            <Route
              path="admin/notifications"
              element={<AdminNotifications />}
            />

            <Route path="user/main" element={<UserMain />} />
            <Route path="user/loans" element={<UserLoans />} />
            <Route path="user/notifications" element={<UserNotifications />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
