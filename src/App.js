import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import  "./styles/style.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SwitchTransition } from "react-transition-group";
import Main from "./pages/Main/main";
import PostForm from "./components/PostForm/PostForm";
import HeaderInfo from "./components/HeaderInfo/HeaderInfo";

function App() {

  return (
    <div className="App">
        <Router>
          <Header/>
          <HeaderInfo/>
          <SwitchTransition>
            <Routes>
              <Route path="/" element={<Main/>}/>
            </Routes>

          </SwitchTransition>
          <PostForm/>
          <Footer/>
        </Router>
      
    </div>
  );
}

export default App;
