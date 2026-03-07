"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };


  return (
    <div className="w-full relative overflow-hidden text-gray-900" id="home-section">

      {/* -------------------- HERO WITH BACKGROUND -------------------- */}
      <div className="w-full min-h-screen relative">
        {/* Optimized Background Image */}
        <Image
          src="/hero-banner.webp"
          alt="High-Tech Digital Banner Background"
          fill
          priority
          quality={75}
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Lighter overlay so the image is visible */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10">
          <section className="flex flex-col items-center justify-center text-center pt-44 px-5">

            <motion.h1
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              className="text-5xl md:text-6xl font-extrabold leading-tight mb-2 font-[Poppins] text-white"
            >
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-md">
                Transform Your Vision
              </span>
            </motion.h1>

            <motion.h1
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 font-[Poppins] text-white"
            >
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent drop-shadow-md">
                Into Digital Reality
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.8 }}
              className="text-gray-200 max-w-2xl text-lg md:text-xl mb-10"
            >
              We craft stunning, innovative digital experiences that empower your business to grow.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-6 justify-center"
            >
              <Link href="/#services-section">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg text-lg font-semibold text-white shadow-md transition-transform"
                >
                  Explore Services
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-cyan-500 px-8 py-3 rounded-lg text-lg font-semibold text-cyan-400 hover:bg-cyan-50 transition-transform"
                >
                  Let's Talk 💬
                </motion.button>
              </Link>
            </motion.div>

          </section>
        </div>
      </div>

      {/* -------------------- STATS SECTION (WHITE BACKGROUND) -------------------- */}
      <section className="bg-white mt-26 pb-30 pt-20 flex flex-wrap justify-center gap-8 px-8">
        {[
          { title: "98%", subtitle: "Client Satisfaction", dir: "left" },
          { title: "20+", subtitle: "Expert Team", dir: "left" },
          { title: "24/7", subtitle: "Support", dir: "right" },
          { title: "10+", subtitle: "Projects Delivered", dir: "right" },
        ].map((card, index) => (
          <motion.div
            key={index}
            variants={card.dir === "left" ? fadeInLeft : fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 20px rgba(56,189,248,0.5)",
            }}
            transition={{ duration: 0.6 }}
            className="w-48 h-32 bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center shadow-lg"
          >
            <div>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600">
                {card.title}
              </h3>
              <p className="text-gray-600 mt-1 font-semibold text-sm text-center">
                {card.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
