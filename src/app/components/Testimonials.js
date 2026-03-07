"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


// ---------------- TESTIMONIAL DATA ----------------
const testimonials = [
  {
    title: "Organic Fruit Box",
    name: "Parameshwar Reddy - Madhapur, Hyderabad, Telangana",
    text: "The overall build is crisp and professional. The WhatsApp integration is exactly what our business needed for direct customer reach. Very satisfied."
  },
  {
    title: "Mydukur Hotel Landing Website",
    name: "Mitta Sudhakar",
    text: "The website feels polished and easy to navigate. The WhatsApp option adds a direct line for guests, which is exactly what we needed for quick inquiries."
  },
  {
    title: "AVR Cinemas Website",
    name: "AVR",
    text: "The audition section is exactly what I needed. Clear fields, smooth submissions, and easy access to the profiles I want to review. Well-designed."
  },
  {
    title: "Rama & Rama Security Services",
    name: "Shravya",
    text: "The site presents our security services with clarity and seriousness. It highlights our guard deployment, patrol services, and monitoring support in a clean way. Good work on capturing the tone of our industry."
  },
  {
    title: "Dinesh PVC Pipes Manufacturing & E-Commerce",
    name: "Dinesh",
    text: "As the owner of Dinesh PVC Pipes, I’m happy with how the website turned out. Our products are displayed clearly, and the online ordering system works smoothly for our customers."
  },
  {
    title: "Rajasekhar Art Jewellery E-Commerce",
    name: "Sudarshan",
    text: "As the owner, I’m happy with how the site displays our jewellery. The buying process is smooth and clear."
  },
  {
    title: "Nelloriens",
    name: "Shaik Munier",
    text: "The site matches the identity of Nelloriens well. Customers can understand our offerings quickly."
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const itemsPerSlide = 2;

  // ---------------- AUTO SLIDE ----------------
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev + itemsPerSlide;
        return next >= testimonials.length ? 0 : next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // ---------------- VISIBLE ITEMS ----------------
  const visible = testimonials.slice(index, index + itemsPerSlide);



  return (
    <section
      id="testimonials-section"
      className="relative w-full min-h-screen overflow-hidden bg-black text-white"
    >
      <div className="relative z-10">

        <div className="max-w-6xl mx-auto text-center py-24 px-6">

          {/* Heading */}
          <motion.h2
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5, once: true }}
            className="text-5xl font-extrabold mb-4 
            bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          >
            Testimonials
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.5, once: true }}
            className="text-gray-300 max-w-2xl mx-auto mb-14 text-xl italic"
          >
            &ldquo;Your satisfaction is our greatest achievement — every experience tells a story.&rdquo;
          </motion.p>

          {/* Cards Section */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.7 }}
                className="grid gap-10 grid-cols-1 sm:grid-cols-2"
              >
                {visible.map((t, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="bg-[#0d1c26] border border-[#2596be] p-8 rounded-2xl shadow-xl w-full"
                  >
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#2596be] mb-3 text-center">
                      {t.title}
                    </h3>

                    {/* Review */}
                    <p className="text-gray-300 leading-relaxed italic mb-6 text-center">
                      "{t.text}"
                    </p>

                    {/* Reviewer */}
                    <h4 className="text-lg font-semibold text-center text-white">
                      — {t.name}
                    </h4>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({
              length: Math.ceil(testimonials.length / itemsPerSlide),
            }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${index / itemsPerSlide === i
                    ? "bg-[#2596be] scale-125"
                    : "bg-gray-600"
                  }`}
              ></div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
