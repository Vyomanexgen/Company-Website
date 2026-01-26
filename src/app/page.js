
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

      // This is an offset so the theme changes just *before*
      // the section scrolls under the navbar. 100px is a good start.
      const navOffset = 100;

      if (servicesRef.current) {
        // Get the top AND bottom of the services section
        const servicesTop = servicesRef.current.offsetTop;
        const servicesHeight = servicesRef.current.offsetHeight;
        const servicesBottom = servicesTop + servicesHeight;

        // NEW, MORE ROBUST LOGIC:
        // If the scroll position is:
        // 1. PAST the start of the services section (minus offset)
        // 2. AND BEFORE the end of the services section (minus offset)
        // Then set theme to dark.
        if (
          scrollY >= servicesTop - navOffset &&
          scrollY < servicesBottom - navOffset
        ) {
          setNavTheme("dark");
        } else {
          // Otherwise, we are in Hero (top) or Portfolio (bottom)
          setNavTheme("light");
        }
      } else {
        // Fallback for when ref is not ready
        setNavTheme("light");
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array, runs once on mount

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

