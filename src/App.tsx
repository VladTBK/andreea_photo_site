import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portofolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Wedding from "./components/evenimente/Wedding";

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
            <Route path="/wedding" element={<Wedding />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
