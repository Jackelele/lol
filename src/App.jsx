import "./index.css";
import { Helmet } from "react-helmet";
import Home from "./pages/Home/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pet from "./components/Pet";
import Leg404 from "./pages/404";
import About from "./pages/About/index";
import Clowns from "./pages/Clowns/index";
import Clips from "./pages/Clips/index";

function App() {
  return (

    <div className="bg-black w-screen h-screen overflow-auto overflow-x-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <title>lol.elele.dev</title>
        <link rel="canonical" href="https://lol.elele.dev" />
        <meta name="description" content="The best of Elele.Lol" />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/clowns" element={<Clowns />}/>
          <Route path="/clips" element={<Clips />}/>
          <Route path="/404" element={<Leg404 />} />
          <Route path="*" element={<Leg404 />} />
        </Routes>
      </Router>
      <Pet />
    </div>
  );
}

export default App;
