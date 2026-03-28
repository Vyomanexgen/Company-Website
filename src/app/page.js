
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

import React from 'react';
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
  return (
    <>
      {/* Navbar is rendered ONCE here, theme is controlled by state */}
      <Navbar />

      <Hero />

      {/* Services Section */}
      <div>
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

