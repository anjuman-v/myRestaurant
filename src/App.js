import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import ScrollToTop from "./components/ScroilToTop";
import Services from "./components/Services";
import Products from './components/Product'
import Newsletter from './components/Newsletter'
import Scrollreveal from "scrollreveal";
import Testimonials from "./components/Testimonials";
export default function App() {
  useEffect(() => {
    const sr = Scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #products,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Hero />
    <Services />
    <Portfolio />
    <Testimonials />
    <Products />
    <Newsletter />
    <Footer />

      
    </>
  );
}
