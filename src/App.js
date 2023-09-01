import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Services } from "./pages/Services";
import { Printing } from "./pages/Printing";
import { Clients } from "./pages/Clients";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";
import { Men } from "./pages/Men";
import { Women } from "./pages/Women";
import { Kids } from "./pages/Kids";
import { Accessories } from "./pages/Accessories";
import { MenTshirts } from "./pages/MenTshirts";
import { MenHoodies } from "./pages/MenHoodies";
import { MenSweatshirts } from "./pages/MenSweatshirts";
import { MenJackets } from "./pages/MenJackets";
import { WomenTshirts } from "./pages/WomenTshirts";
import { WomenHoodies } from "./pages/WomenHoodies";
import { WomenSweatshirts } from "./pages/WomenSweatshirts";
import { WomenJackets } from "./pages/WomenJackets";
import { KidsTshirts } from "./pages/KidsTshirts";
import { KidsHoodies } from "./pages/KidsHoodies";
import { KidsSweatshirts } from "./pages/KidsSweatshirts";
import { KidsJackets } from "./pages/KidsJackets";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/printing" element={<Printing />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Kids" element={<Kids />} />
            <Route path="/Accessories" element={<Accessories />} />
            <Route path="/men-tshirts" element={<MenTshirts />} />
            <Route path="/men-hoodies" element={<MenHoodies />} />
            <Route path="/men-sweatshirts" element={<MenSweatshirts />} />
            <Route path="/men-jackets" element={<MenJackets />} />
            <Route path="/women-tshirts" element={<WomenTshirts />} />
            <Route path="/women-hoodies" element={<WomenHoodies />} />
            <Route path="/women-sweatshirts" element={<WomenSweatshirts />} />
            <Route path="/women-jackets" element={<WomenJackets />} />
            <Route path="/kids-tshirts" element={<KidsTshirts />} />
            <Route path="/kids-hoodies" element={<KidsHoodies />} />
            <Route path="/kids-sweatshirts" element={<KidsSweatshirts />} />
            <Route path="/kids-jackets" element={<KidsJackets />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
