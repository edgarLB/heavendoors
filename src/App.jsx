import React, {useEffect, useState} from 'react'
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";


function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
      <BrowserRouter>
          <Header scrolled={scrolled} />
          <NavBar scrolled={scrolled} />
          <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
          </Routes>
          <Footer/>
      </BrowserRouter>
  )
}

export default App
