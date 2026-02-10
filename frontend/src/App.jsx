import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

// HEADER FOOTER LOADERS

import Header from "./home/header";
import Loader from "./home/loader";
import Footer from "./home/footer";

// HOME PAGE
import Service from "./home/service";
import Intro from "./home/Intro";
import Ourmission from "./home/ourmission";
import Aboutus from "./home/aboutus";
import Contact from "./home/contact";

// PAGES
import About from "./pages/about"
import Services from "./pages/services";
import Contacts from "./pages/contact.jsx";

import { useEffect, useState } from "react";

function App() {

  const location = useLocation();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer)
  }, [location]);
  return (
    <>
    {loading && <Loader/>}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <Ourmission />
              <Aboutus />
              <Service />
              <Contact />
            </>
          }
        />
        <Route path="about" element={<About />} />
         <Route path="services" element={<Services/>}/>
        <Route path="contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
