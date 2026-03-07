
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import ServicesApp from "./components/ServicesApp";
// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <ServicesApp />
//     </>
//   );
// }



"use client";

import React, { useState, useEffect, useRef, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesApp from "./components/ServicesApp";

// Dynamic imports for below-the-fold components
const Portfolio = dynamic(() => import('./components/Portfolio'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading...</div></div>
});
const Testimonials = dynamic(() => import("./components/Testimonials"), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading...</div></div>
});
const Footer = dynamic(() => import('./components/Footer'), {
  loading: () => <div className="h-32 flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading...</div></div>
});
export default function Home() {
  const [navTheme, setNavTheme] = useState("light");

  // We only need a ref for the section that changes the theme
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navOffset = 100;

      if (servicesRef.current) {
        const servicesTop = servicesRef.current.offsetTop;
        const servicesHeight = servicesRef.current.offsetHeight;
        const servicesBottom = servicesTop + servicesHeight;

        if (
          scrollY >= servicesTop - navOffset &&
          scrollY < servicesBottom - navOffset
        ) {
          setNavTheme("dark");
        } else {
          setNavTheme("light");
        }
      } else {
        setNavTheme("light");
      }
    };

    // Throttle scroll with requestAnimationFrame for smooth performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <>
      {/* Navbar is rendered ONCE here, theme is controlled by state */}
      <Navbar theme={navTheme} />

      <Hero />

      {/* This div now measures the height of ServicesApp */}
      <div ref={servicesRef}>
        <ServicesApp />
      </div>

      {/* No ref is needed for the portfolio section anymore */}
      <div>
        <Portfolio />
        <Testimonials />

        <Footer />
      </div>
    </>
  );
}

