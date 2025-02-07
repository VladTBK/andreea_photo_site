import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portofolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Nunta from "./components/evenimente/Nunta";
import Botez from "./components/evenimente/Botez";
import Majorat from "./components/evenimente/Majorat";
import Cununie from "./components/evenimente/Cununie";
import Newborn from "./components/evenimente/Newborn";
import Business from "./components/evenimente/Business";
import Imobiliar from "./components/evenimente/Imobiliar";
import Maternitate from "./components/evenimente/Maternitate";
import Save_the_Date from "./components/evenimente/Save_the_Date";
import Smash_the_Cake from "./components/evenimente/Smash_the_Cake";
import Petrecere_Aniversara from "./components/evenimente/Petrecere_Aniversara";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <Pricing />
      <Contact />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nunta" element={<Nunta />} />
            <Route path="/botez" element={<Botez />} />
            <Route path="/cununie" element={<Cununie />} />
            <Route path="/newborn" element={<Newborn />} />
            <Route path="/majorat" element={<Majorat />} />
            <Route path="/maternitate" element={<Maternitate />} />
            <Route path="/imobiliar" element={<Imobiliar />} />
            <Route path="/business" element={<Business />} />
            <Route path="/smash_the_cake" element={<Smash_the_Cake />} />
            <Route path="/save_the_date" element={<Save_the_Date />} />
            <Route
              path="/petrecere_aniversara"
              element={<Petrecere_Aniversara />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
