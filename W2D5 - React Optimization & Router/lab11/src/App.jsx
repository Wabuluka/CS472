import { Route, Routes } from "react-router";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HelpPage from "./pages/HelpPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="help" element={<HelpPage />}>
        <Route index element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
