import "./App.css";
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  useParams,
} from "react-router-dom";
import ScrollToTop from "../src/Components/ScrollToTop";
import HomePage from "../src/Pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
