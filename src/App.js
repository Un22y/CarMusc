import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./styles/style.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SwitchTransition } from "react-transition-group";
import PostForm from "./components/PostForm/PostForm";
import HeaderInfo from "./components/HeaderInfo/HeaderInfo";
import MainPage from './pages/Main/MainPage';
import ServicesPage from './pages/Services/ServicesPage';
import PricePage from './pages/Price/PricePage';
import GalleryPage from './pages/Gallery/GalleryPage';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <HeaderInfo />
        <SwitchTransition>
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/price" element={<PricePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </SwitchTransition>
        <PostForm />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
