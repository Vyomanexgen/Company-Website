
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";


const Logo = ({ theme }) => (
  <Link href="/" className="cursor-pointer flex items-center">
    <img
      src="/vyomanexgen (1).png"   // <-- YOUR LOGO PATH HERE
      alt="Vyomanexgen Logo"
      className="h-10 w-auto md:h-14"
    />
  </Link>
);


export default function Navbar({ theme: externalTheme }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [internalTheme, setInternalTheme] = useState("light"); // "light" | "dark"
  const [activeSection, setActiveSection] = useState("home-section"); // Default to home

  // Use externalTheme if provided, otherwise fallback to internalTheme
  const theme = externalTheme || internalTheme;
useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [menuOpen]);
  // *** IMPORTANT ***
  // Ensure your Hero section component has id="home-section"
  const watchedSections = useMemo(
    () => [
      { id: "home-section", theme: "light" },
      { id: "services-section", theme: "dark" },
      { id: "portfolio-section", theme: "light" },
      { id: "testimonials-section", theme: "dark" },
    ],
    []
  );

  // Styles (No change here)
  const navStyles = {
    light: "bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm",
    dark: "bg-black/80 backdrop-blur-md border-b border-gray-800 shadow-lg",
  };
  const linkStyles = {
    light: "text-gray-700 hover:text-cyan-600",
    dark: "text-gray-100 hover:text-cyan-300", // <-- MUCH BRIGHTER (was gray-300)
  };
  const logoStyles = {
    light:
      "text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500",
    dark:
      "text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300",
  };
  const mobileMenuStyles = {
    light: "bg-white",
    dark: "bg-black",
  };

  const navLinks = [
    { name: "Home", href: "/", id: "home-section" },
    { name: "Services", href: "/#services-section", id: "services-section" },
    { name: "Portfolio", href: "/#portfolio-section", id: "portfolio-section" },
    { name: "Careers", href: "https://careers.vyomanexgen.com/", id: "careers-page" },
    { name: "Testimonials", href: "/#testimonials-section", id: "testimonials-section" },
    { name: "Contact", href: "/contact", id: "contact-section" },
  ];

  // --- START OF NEW LOGIC ---

  const NAVBAR_HEIGHT = 80; // Estimated px height of your nav. Adjust if needed.

  // HOOK 1: Handles standalone pages (Careers, Contact, etc.)
  useEffect(() => {
    let newActive = null;
    let newTheme = "light"; // Default theme for standalone pages

    if (pathname === "/contact") {
      newActive = "contact-section";
      newTheme = "dark";
    } else if (pathname === "/careers") {
      newActive = "careers-page";
      newTheme = "light"; // Or "dark" if you prefer
    } else if (pathname.startsWith("/services/")) {
      // Example for sub-pages
      newActive = "services-section";
      newTheme = "dark";
    } else if (pathname === "/") {
      // We are on the homepage
      newActive = "home-section";
      newTheme = "light";
    }

    setActiveSection(newActive);
    setInternalTheme(newTheme);
  }, [pathname]);

  // HOOK 2: Handles scroll-spy for homepage sections
  useEffect(() => {
    // Only run this scroll-spy logic on the homepage
    if (pathname !== "/") return;

    // Set default for homepage load
    const handleScroll = () => {
      // Find which section is currently most visible in the viewport
      let currentSection = "home-section";
      let currentTheme = "light";
      let maxVisibleHeight = 0;

      // Handle very top of page specifically
      if (window.scrollY < 50) {
        setActiveSection("home-section");
        setInternalTheme("light");
        return;
      }

      watchedSections.forEach(({ id, theme }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // Calculate how many pixels of this section are visible in the viewport
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(window.innerHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);

          // If this section is more visible than (or as visible as) the previous winner, it becomes the active one
          if (visibleHeight >= maxVisibleHeight && visibleHeight > 0) {
            maxVisibleHeight = visibleHeight;
            currentSection = id;
            currentTheme = theme;
          }
        }
      });

      setActiveSection(currentSection);
      setInternalTheme(currentTheme);
    };

    // Initial check
    handleScroll();

    // Add scroll listener with throttling for performance
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

    window.addEventListener("scroll", scrollListener, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [pathname, watchedSections]); // Re-run only if path or sections change

  // --- END OF NEW LOGIC ---

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-5 flex items-center justify-between transition-all duration-700 ease-in-out ${navStyles[theme]}`}
    >
      {/* Logo */}
      <div className="h-14 w-60 flex items-center relative">
        <Image
          src="/vyomanexgen (1).png"
          alt="Vyomanexgen Logo"
          width={240}
          height={56}
          priority
          className="object-contain"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <ul className="flex items-center gap-8 font-semibold">
          {navLinks.map((item) => (
            <li key={item.href} className="group">
              <Link
                href={item.href}
                className={`relative pb-1 transition-all duration-300 ease-in-out ${activeSection === item.id // <-- This logic is correct
                  ? "text-cyan-500 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]"
                  : linkStyles[theme]
                  }`}
              >
                {item.name}

                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] w-full bg-cyan-500 rounded-full transition-all duration-300 ease-in-out
                    ${activeSection === item.id // <-- This logic is correct
                      ? "scale-x-100 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]"
                      : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Get Started (desktop) */}
        <div className="flex items-center gap-4">
          {/* Call */}
          <motion.a
            href="tel:+917358105293"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-md text-white font-semibold shadow-md"
          >
            <FaPhoneAlt size={16} />
            Call
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/917358105293?text=Hello%20Vyomanexgen%2C%20I%20want%20to%20know%20more."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-md text-white font-semibold shadow-md"
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </motion.a>



        </div>

      </div>

      {/* Mobile trigger */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 text-cyan-400 hover:bg-white/20 transition"
      >
        Menu
      </button>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className={`fixed top-0 right-0 w-full h-[100dvh] overflow-y-auto overscroll-contain flex flex-col p-6 pt-14 ${mobileMenuStyles[theme]} md:hidden`}


          //className={`fixed top-0 right-0 w-full h-[100dvh] flex flex-col items-center gap-10 p-10 ${mobileMenuStyles[theme]} md:hidden`}
          >
            {/* Top bar */}
            <div className="w-full flex justify-between items-center">
              <div className="h-12 w-30 flex items-center relative">
                <Image
                  src="/vyomanexgen (1).png"
                  alt="Vyomanexgen Logo"
                  width={120}
                  height={48}
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-cyan-400 text-lg px-4 py-2"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            {/* Links */}
            <ul className="flex flex-col items-center gap-6 text-2xl font-semibold mt-4 mb-6">

              {navLinks.map((item) => (
                <li key={item.href} className="group">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`relative transition-all ${activeSection === item.id
                      ? theme === "light"
                        ? "text-cyan-500" // Active light
                        : "text-cyan-300" // Active dark
                      : linkStyles[theme] // Inactive (uses text-gray-100 on dark)
                      }`}
                  >
                    {item.name}
                    {/* Optional: Add underline for mobile active link */}
                    <span
                      className={`
                      absolute left-0 -bottom-1 h-[2px] w-full
                      ${theme === 'light' ? 'bg-cyan-500' : 'bg-cyan-300'}
                      ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0'}
                    `}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Get Started (mobile) */}
            <div className="flex flex-col items-center gap-4 mb-10 w-full">

              {/* WhatsApp Mobile */}
              <motion.a
                href="https://wa.me/917358105293?text=Hello%20Vyomanexgen%2C%20I%20want%20to%20know%20more."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-md text-white font-semibold shadow-md justify-center w-[70%] max-w-[260px]"
              >
                <FaWhatsapp size={20} />
                WhatsApp
              </motion.a>

              {/* Call Mobile */}
              <motion.a
                href="tel:+917358105293"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-md text-white font-semibold shadow-md justify-center w-[70%] max-w-[260px]"
              >
                <FaPhoneAlt size={18} />
                Call
              </motion.a>

            </div>


          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
