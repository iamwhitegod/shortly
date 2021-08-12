import "./sass/main.scss";
import Nav from "./components/Nav";
import HeaderContent from "./components/HeaderContent";
import HeaderIllustration from "./components/HeaderIllustration";
import Main from "./components/Main";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <HeaderContent />
        <HeaderIllustration />
        <Main />
        <Cta />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
