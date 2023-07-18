import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";
import "./css/animate.min.css";
import "./css/aos.css";
import "./css/bootstrap.min.css";
import "./css/font-awesome.min.css";
import "./css/owl.carousel.min.css";
import "./css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="site-wrap">
        {/* <!-- Main content inner --> */}
        <div className="site-inner">
          <BrowserRouter>
            <Header />
            <AppRoutes />
            <Footer />
          </BrowserRouter>
        </div>
        {/* <!-- Main content inner end --> */}
      </div>
      {/* <!-- Main content wrap end --> */}

      {/* <!-- Back to top button --> */}
      <a id="back-to-top" href="#" className="cursor-item">
        <i className="fa fa-chevron-up"></i>
      </a>

      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </div>
  );
}

export default App;
