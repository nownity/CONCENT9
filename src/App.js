import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// 페이지 컴포넌트
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import CommonForm from "./common/CommonForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<CommonForm />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
