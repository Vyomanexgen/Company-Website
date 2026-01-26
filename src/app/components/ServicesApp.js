"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  LayoutDashboard,
  Smartphone,
  Award,
  Code,
  ShoppingCart,
  Database,
  Zap,
  Apple,
  Play,
  Box,
  Rocket,
  Users,
  Workflow,
  BarChart3,
  TrendingUp,
  BrainCircuit,
  MessageSquare,
  Network,
  Figma,
  PenTool,
  MousePointer2,
  Accessibility,
  Receipt, // 👈 ADD THIS
  CreditCard, // 👈 ADD THIS
  PieChart, // 👈 ADD THIS
  Contact, // 👈 ADD THIS
  PhoneCall, // 👈 ADD THIS
  Mic,       // 👈 ADD THIS
  PhoneOff,
} from "lucide-react";
import Link from "next/link";

// --- Theme Definitions ---
const colorThemes = {
  blue: {
    title: "text-blue-400",
    subtitle: "text-blue-300",
    tagBG: "bg-blue-900/40",
    tagText: "text-blue-300",
    tagBorder: "border-blue-700",
    iconBase: "bg-blue-900/30 text-blue-400 border-blue-700/50",
    iconHover:
      "hover:shadow-[0_0_20px_rgba(96,165,250,0.8)] hover:bg-blue-600 hover:text-white",
    placeholderBorder: "border-blue-500",
    placeholderShadow: "shadow-[0_0_20px_rgba(59,130,246,0.5)]",
    placeholderBG: "bg-blue-900/20",
  },
  pink: {
    title: "text-pink-400",
    subtitle: "text-pink-300",
    tagBG: "bg-pink-900/40",
    tagText: "text-pink-300",
    tagBorder: "border-pink-700",
    iconBase: "bg-pink-900/30 text-pink-400 border-pink-700/50",
    iconHover:
      "hover:shadow-[0_0_20px_rgba(244,114,182,0.8)] hover:bg-pink-600 hover:text-white",
    placeholderBorder: "border-pink-500",
    placeholderShadow: "shadow-[0_0_20px_rgba(236,72,153,0.5)]",
    placeholderBG: "bg-pink-900/20",
  },
  gradient: {
    title:
      "bg-gradient-to-r from-teal-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent",
    subtitle: "text-indigo-300",
    tagBG: "bg-indigo-900/40",
    tagText: "text-indigo-300",
    tagBorder: "border-indigo-700",
    iconBase: "bg-indigo-900/30 text-indigo-400 border-indigo-700/50",
    iconHover:
      "hover:shadow-[0_0_20px_rgba(129,140,248,0.8)] hover:bg-indigo-600 hover:text-white",
    placeholderBorder: "border-indigo-500",
    placeholderShadow: "shadow-[0_0_20px_rgba(129,140,248,0.5)]",
    placeholderBG: "bg-indigo-900/20",
  },
  violet: {
    title: "text-purple-400",
    subtitle: "text-purple-300",
    tagBG: "bg-purple-900/40",
    tagText: "text-purple-300",
    tagBorder: "border-purple-700",
    iconBase: "bg-purple-900/30 text-purple-400 border-purple-700/50",
    iconHover:
      "hover:shadow-[0_0_20px_rgba(192,132,252,0.8)] hover:bg-purple-600 hover:text-white",
    placeholderBorder: "border-purple-700",
    placeholderShadow: "shadow-[0_0_20px_rgba(168,85,247,0.5)]",
    placeholderBG: "bg-purple-900/20",
  },
  green: {
    title: "text-green-400",
    subtitle: "text-green-300",
    tagBG: "bg-green-900/40",
    tagText: "text-green-300",
    tagBorder: "border-green-700",
    iconBase: "bg-green-900/30 text-green-400 border-green-700/50",
    iconHover:
      "hover:shadow-[0_0_20px_rgba(74,222,128,0.8)] hover:bg-green-600 hover:text-white",
    placeholderBorder: "border-green-500",
    placeholderShadow: "shadow-[0_0_20px_rgba(74,222,128,0.5)]",
    placeholderBG: "bg-green-900/20",
  },
  orange: {
    title: "text-orange-400",
    subtitle: "text-orange-300",
    tagBG: "bg-orange-900/40",
    tagText: "text-orange-300",
    tagBorder: "border-orange-700",
    iconBase: "bg-orange-900/30 text-orange-400 border-orange-700/50",
    iconHover:
      "hover:shadow-[0_0_20px_rgba(251,146,60,0.8)] hover:bg-orange-600 hover:text-white",
    placeholderBorder: "border-orange-500",
    placeholderShadow: "shadow-[0_0_20px_rgba(249,115,22,0.5)]",
    placeholderBG: "bg-orange-900/20",
  },
  teal: {
    title: "text-teal-400",
    subtitle: "text-teal-300",
    tagBG: "bg-teal-900/40",
    tagText: "text-teal-300",
    tagBorder: "border-teal-700",
    iconBase: "bg-teal-900/30 text-teal-400 border-teal-700/50",
    iconHover:
      "hover:shadow-[0_0_20px_rgba(45,212,191,0.8)] hover:bg-teal-600 hover:text-white",
    placeholderBorder: "border-teal-500",
    placeholderShadow: "shadow-[0_0_20px_rgba(20,184,166,0.5)]",
    placeholderBG: "bg-teal-900/20",
  },
};


/**
 * 1. Placeholder for "Web & Mobile Designing" - REDESIGNED
 */
const WebDesignPlaceholder = ({ theme = 'blue' }) => {
  const themeClasses = colorThemes[theme] || colorThemes.blue;
  const isBlueTheme = theme === 'blue';

  return (
    <motion.div
      className="relative w-full h-80 md:h-96 flex items-center justify-center p-4"
      initial={{ opacity: 0, x: 50 }} // Animate from right
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Main Desktop Artboard */}
      <motion.div
        className={`w-full max-w-lg h-64 md:h-72 bg-gray-900/50 rounded-lg border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-3 flex flex-col`}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        {/* Design layout */}
        <div className="flex-1 flex gap-3">
          <div className={`w-1/3 h-full ${themeClasses.placeholderBG} rounded-md`}></div> {/* Sidebar */}
          <div className="w-2/3 h-full flex flex-col gap-3">
            <div className={`w-full h-1/3 ${themeClasses.placeholderBG} rounded-md`}></div> {/* Hero Image */}
            <div className={`w-full h-2/3 ${themeClasses.placeholderBG} rounded-md`}></div> {/* Content Area */}
          </div>
        </div>
      </motion.div>

      {/* Floating Mobile Screen */}
      <motion.div
        className={`absolute bottom-4 -right-2 md:right-4 w-28 h-56 bg-gray-900/70 rounded-2xl border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-2`}
        initial={{ y: 40, opacity: 0, rotate: 10 }}
        whileInView={{ y: 0, opacity: 1, rotate: 5 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="w-full h-full space-y-2">
          <div className={`w-full h-6 ${themeClasses.placeholderBG} rounded`}></div>
          <div className={`w-full h-12 ${themeClasses.placeholderBG} rounded`}></div>
          <div className={`w-full h-12 ${themeClasses.placeholderBG} rounded`}></div>
        </div>
      </motion.div>

      {/* Floating Palette Icon */}
      <motion.div
        className={`absolute top-10 -left-2 md:left-4 w-16 h-16 ${themeClasses.iconBase} rounded-full flex items-center justify-center ${themeClasses.placeholderShadow}`}
        initial={{ y: 40, opacity: 0, rotate: -15 }}
        whileInView={{ y: 0, opacity: 1, rotate: -5 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Palette className={`w-8 h-8 ${isBlueTheme ? 'text-blue-300' : 'text-gray-400'}`} />
      </motion.div>
    </motion.div>
  );
};

/**
 * 2. NEW Placeholder for "UI/UX Designing"
 */
/**
 * 2. NEW Placeholder for "UI/UX Designing" - REDESIGNED
 */
const UiUxPlaceholder = ({ theme = 'pink' }) => {
  const themeClasses = colorThemes[theme] || colorThemes.pink;
  const isPinkTheme = theme === 'pink';

  return (
    <motion.div
      className="relative w-full h-80 md:h-96 flex items-center justify-center p-4"
      initial={{ opacity: 0, x: -50 }} // Animate from left
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Main Artboard (Phone Screen) */}
      <motion.div
        className={`w-48 h-full max-h-80 md:max-h-96 bg-gray-900/50 rounded-2xl border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-3 flex flex-col items-center space-y-3`}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className={`w-full h-12 ${themeClasses.placeholderBG} rounded-lg`}></div> {/* Header/Image */}
        <div className={`w-3/4 h-5 ${themeClasses.placeholderBG} rounded`}></div> {/* Title */}
        <div className={`w-full h-3 ${themeClasses.placeholderBG} rounded-full`}></div> {/* Text */}
        <div className={`w-full h-3 ${themeClasses.placeholderBG} rounded-full`}></div> {/* Text */}
        <div className={`w-1/2 h-3 ${themeClasses.placeholderBG} rounded-full`}></div> {/* Text */}
      </motion.div>

      {/* Floating Card UI Element */}
      <motion.div
        className={`absolute top-10 -left-4 md:left-4 w-40 h-24 bg-gray-900/60 rounded-lg border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-2 flex items-center gap-2`}
        initial={{ y: 40, opacity: 0, rotate: -15 }}
        whileInView={{ y: 0, opacity: 1, rotate: -5 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className={`w-1/3 h-full ${isPinkTheme ? 'bg-pink-500/50' : 'bg-gray-700'} rounded`}></div>
        <div className="flex-1 space-y-2">
          <div className={`w-full h-4 ${themeClasses.placeholderBG} rounded`}></div>
          <div className={`w-2/3 h-3 ${themeClasses.placeholderBG} rounded-full`}></div>
        </div>
      </motion.div>

      {/* Floating Profile Icon */}
      <motion.div
        className={`absolute bottom-12 -right-4 md:right-4 w-16 h-16 ${isPinkTheme ? 'bg-pink-500/30' : 'bg-gray-800'} rounded-full flex items-center justify-center border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow}`}
        initial={{ y: 40, opacity: 0, rotate: 15 }}
        whileInView={{ y: 0, opacity: 1, rotate: 5 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Users className={`w-8 h-8 ${isPinkTheme ? 'text-pink-300' : 'text-gray-400'}`} />
      </motion.div>

      {/* Floating Button Element */}
      <motion.div
        className={`absolute bottom-24 -left-2 md:left-8 w-28 h-10 ${isPinkTheme ? 'bg-gradient-to-r from-pink-600 to-fuchsia-700' : 'bg-gray-700'} rounded-lg flex items-center justify-center text-white font-semibold text-sm`}
        initial={{ y: 40, opacity: 0, rotate: 10 }}
        whileInView={{ y: 0, opacity: 1, rotate: 2 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Sign Up
      </motion.div>
    </motion.div>
  );
};


/**
 * 3. Placeholder for "Website Development"
 */
/**
 * 3. Placeholder for "Website Development" - REDESIGNED
 */
const BrowserPlaceholder = ({ theme = 'orange' }) => { // 👈 Renamed to match your file
  const themeClasses = colorThemes[theme] || colorThemes.orange;
  const isOrangeTheme = theme === 'orange';

  return (
    <motion.div
      className="relative w-full h-80 md:h-96 flex items-center justify-center p-4 overflow-hidden"
      initial={{ opacity: 0, x: 50 }} // Animate from right
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Main Desktop Browser Window with Code */}
      <motion.div
        className={`w-full max-w-lg h-64 md:h-72 bg-gray-900/50 rounded-lg border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-3 flex flex-col`}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Browser controls */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className={`ml-2 flex-1 h-3 ${themeClasses.placeholderBG} rounded-full`}></div> {/* URL bar */}
        </div>

        {/* Code Editor Area */}
        <div className="flex-1 overflow-hidden font-mono text-xs md:text-sm text-gray-300 space-y-1">
          <p><span className="text-orange-400">{'<div'}</span> <span className="text-blue-400">{'className="container"'}</span><span className="text-orange-400">{'>'}</span></p>
          <p className="ml-4"><span className="text-orange-400">{'<h1'}</span><span className="text-orange-400">{'>'}</span><span className="text-white">{'Hello World'}</span><span className="text-orange-400">{'</h1>'}</span></p>
          <p className="ml-4"><span className="text-orange-400">{'<button'}</span> <span className="text-blue-400">{'onClick={handleClick}'}</span><span className="text-orange-400">{'>'}</span><span className="text-white">{'Click Me'}</span><span className="text-orange-400">{'</button>'}</span></p>
          <p><span className="text-orange-400">{'</div>'}</span></p>
          <p className="pt-2"><span className="text-blue-400">{'const '}</span><span className="text-white">{'handleClick '}</span><span className="text-blue-400">{'= () => { '}</span></p>
          <p className="ml-4"><span className="text-yellow-400">{'console.log'}</span><span className="text-white">{'("Button clicked!");'}</span></p>
          <p><span className="text-blue-400">{'}'}</span></p>
        </div>
      </motion.div>

      {/* Floating Mobile View */}
      <motion.div
        className={`absolute bottom-4 -left-2 md:left-4 w-28 h-56 bg-gray-900/70 rounded-2xl border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-2 flex flex-col justify-between items-center`}
        initial={{ y: 40, opacity: 0, rotate: -10 }}
        whileInView={{ y: 0, opacity: 1, rotate: -5 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className={`w-full h-8 ${themeClasses.placeholderBG} rounded`}></div> {/* Mobile Header */}
        <div className={`w-full h-12 ${themeClasses.placeholderBG} rounded`}></div> {/* Mobile Content */}
        <div className={`w-2/3 h-8 ${isOrangeTheme ? 'bg-orange-500' : 'bg-gray-700'} rounded-lg`}></div> {/* Mobile Button */}
      </motion.div>

      {/* Floating Code Icon */}
      <motion.div
        className={`absolute top-10 -right-2 md:right-4 w-16 h-16 ${themeClasses.iconBase} rounded-full flex items-center justify-center ${themeClasses.placeholderShadow}`}
        initial={{ y: 40, opacity: 0, rotate: 15 }}
        whileInView={{ y: 0, opacity: 1, rotate: 5 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Code className={`w-8 h-8 ${isOrangeTheme ? 'text-orange-300' : 'text-gray-400'}`} />
      </motion.div>
    </motion.div>
  );
};

/**
 * 4. Placeholder for "Mobile App Development"
 */
/**
 * 4. Placeholder for "Mobile App Development" - REDESIGNED
 */
const MobilePlaceholder = ({ theme = 'violet' }) => {
  const themeClasses = colorThemes[theme] || colorThemes.violet;

  return (
    <motion.div
      // Set a consistent height that can contain the 320px (h-80) phones
      className="relative w-full h-96 flex items-center justify-center p-4 overflow-hidden"
      initial={{ opacity: 0, x: -50 }} // Animate from left
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Android Phone (Back / Right) */}
      <motion.div
        // w-44 (176px), h-80 (320px)
        className={`absolute w-44 h-80 bg-gray-900/50 rounded-3xl border-4 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-3`}
        initial={{ y: 40, opacity: 0, rotate: 0 }}
        whileInView={{ y: 0, opacity: 1, rotate: 10, x: 40 }} // Move right
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-full h-full flex flex-col items-center space-y-4 pt-2">
          <Play className="w-10 h-10 text-green-400" /> {/* Android Color */}
          <div className={`w-full h-16 ${themeClasses.placeholderBG} rounded-lg`}></div>
          <div className={`w-full h-16 ${themeClasses.placeholderBG} rounded-lg`}></div>
          <div className={`w-full h-16 ${themeClasses.placeholderBG} rounded-lg`}></div>
        </div>
      </motion.div>

      {/* iOS Phone (Front / Left) */}
      <motion.div
        className={`absolute w-44 h-80 bg-gray-900/70 rounded-3xl border-4 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-3`}
        initial={{ y: 40, opacity: 0, rotate: 0 }}
        whileInView={{ y: 0, opacity: 1, rotate: -8, x: -40 }} // Move left
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="w-full h-full flex flex-col items-center space-y-4 pt-2">
          <Apple className="w-10 h-10 text-gray-300" /> {/* iOS Color */}
          <div className="grid grid-cols-2 gap-3 w-full">
            <div className={`w-full h-16 ${themeClasses.placeholderBG} rounded-lg`}></div>
            <div className={`w-full h-16 ${themeClasses.placeholderBG} rounded-lg`}></div>
            <div className={`w-full h-16 ${themeClasses.placeholderBG} rounded-lg`}></div>
            <div className={`w-full h-16 ${themeClasses.placeholderBG} rounded-lg`}></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/**
 * 5. Placeholder for "CRM Development"
 */
/**
/**
 * 5. Placeholder for "CRM Development" - TALLER BARS
 */
const CrmPlaceholder = ({ theme = 'gradient' }) => {
  const themeClasses = colorThemes[theme] || colorThemes.gradient;
  // --- UPDATED THIS LINE ---
  const barHeights = ['h-1/2', 'h-3/4', 'h-full', 'h-1/2', 'h-5/6', 'h-3/4', 'h-2/3', 'h-full'];

  return (
    <motion.div
      className="w-full h-[400px] md:h-96 flex items-center justify-center p-4"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className={`w-full h-full max-w-lg bg-gray-900/40 rounded-lg border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-4 space-y-4 flex flex-col`}>
        {/* Top Header Placeholder */}
        <div className={`w-3/4 h-6 ${themeClasses.placeholderBG} rounded-lg mb-2`}></div>

        {/* Header Stats */}
        <div className="flex gap-3 h-20">
          <div className="flex-1 bg-blue-600 rounded-lg p-3 text-left">
            <p className="text-sm text-blue-100">Customers</p>
            <p className="text-2xl font-bold text-white">2,543</p>
          </div>
          <div className="flex-1 bg-purple-600 rounded-lg p-3 text-left">
            <p className="text-sm text-purple-100">Conversion</p>
            <p className="text-2xl font-bold text-white">89%</p>
          </div>
          <div className="flex-1 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-lg p-3 text-left">
            <p className="text-sm text-fuchsia-100">Revenue</p>
            <p className="text-2xl font-bold text-white">$45K</p>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="h-40 w-full flex items-end justify-between px-2 pt-4">
          {barHeights.map((height, i) => (
            <motion.div
              key={i}
              className={`w-[10%] ${height} bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-sm origin-bottom`}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
            >
            </motion.div>
          ))}
        </div>

        {/* Lead Tracking List (bottom section) */}
        <div className="space-y-3 pt-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-5 h-5 ${themeClasses.placeholderBG} rounded-full`}></div>
              <div className={`flex-1 h-3 ${themeClasses.placeholderBG} rounded-full`}></div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


/**
 * 6. Placeholder for "AI Chatbots"
 */
const ChatbotPlaceholder = ({ theme = 'green' }) => {
  const themeClasses = colorThemes[theme] || colorThemes.green;
  return (
    <motion.div
      className="w-full h-[450px] md:h-[500px] flex items-center justify-center p-4"
      initial={{ opacity: 0, x: -50 }} // Changed to x: -50
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }} // REMOVED once: true
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className={`w-full h-full max-w-lg bg-gray-900/40 rounded-lg border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-4 flex flex-col`}>
        {/* Header */}
        <div className={`w-full p-3 ${themeClasses.placeholderBG} rounded-lg flex items-center gap-3`}>
          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <BrainCircuit className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <p className="font-semibold text-white">AI Assistant</p>
            <p className="text-sm text-green-400">Online</p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 space-y-4 py-4 overflow-hidden">
          {/* Bubble Left */}
          <motion.div
            className="flex justify-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }} // REMOVED once: true
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-3 bg-gray-800 rounded-lg rounded-bl-none max-w-xs text-sm">
              Hi! How can I help you today?
            </div>
          </motion.div>
          {/* Bubble Right */}
          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }} // REMOVED once: true
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={`p-3 ${themeClasses.placeholderBG} border ${themeClasses.placeholderBorder} rounded-lg rounded-br-none max-w-xs text-sm`}>
              I need information about your services
            </div>
          </motion.div>
          {/* Bubble Left with List */}
          <motion.div
            className="flex justify-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }} // REMOVED once: true
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="p-3 bg-gray-800 rounded-lg rounded-bl-none max-w-xs text-sm space-y-2">
              <p>We offer comprehensive digital services including:</p>
              <ul className="list-disc list-inside text-gray-400 text-xs">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>AI Solutions</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Input Bar */}
        <div className="h-12 bg-gray-800 rounded-lg flex items-center px-4 gap-3">
          <span className="text-gray-500 text-sm">Type a message...</span>
          <div className={`ml-auto w-8 h-8 rounded-full ${themeClasses.placeholderBG} border ${themeClasses.placeholderBorder} flex items-center justify-center`}>
            <SendIcon className="w-4 h-4 text-green-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * 7. Placeholder for "Billing Software" - UPDATED
 */

/**
 * 7. Placeholder for "Billing Software" - UPDATED with 'teal' theme
 */
const BillingPlaceholder = ({ theme = 'teal' }) => { // 👈 Changed default theme to teal
  const themeClasses = colorThemes[theme] || colorThemes.teal;

  // A helper to get a specific text color or a default
  const getTextColor = () => {
    return theme === 'violet' ? 'text-purple-200' :
      theme === 'teal' ? 'text-teal-200' :
        'text-gray-300';
  };

  const getHeaderColor = () => {
    return theme === 'violet' ? 'text-purple-300' :
      theme === 'teal' ? 'text-teal-300' :
        'text-gray-400';
  };

  const getTotalColor = () => {
    return theme === 'violet' ? 'text-purple-100' :
      theme === 'teal' ? 'text-teal-100' :
        'text-gray-100';
  };

  const getChartColor = () => {
    return theme === 'violet' ? 'bg-purple-500' :
      theme === 'teal' ? 'bg-teal-500' :
        'bg-gray-500';
  };

  const getButtonGradient = () => {
    return theme === 'violet' ? 'bg-gradient-to-r from-purple-600 to-indigo-700' :
      theme === 'teal' ? 'bg-gradient-to-r from-teal-600 to-cyan-700' :
        'bg-gradient-to-r from-gray-600 to-gray-700';
  };

  // Helper component for a single invoice line item
  const InvoiceItem = ({ name, qty, price }) => (
    <div className={`w-full h-10 ${themeClasses.placeholderBG} rounded-lg flex items-center justify-between px-3 text-sm font-mono ${getTextColor()}`}>
      <span>{name}</span>
      <div className="flex gap-6">
        <span>{qty}</span>
        <span className="w-16 text-right">{price}</span>
      </div>
    </div>
  );

  return (
    <motion.div
      className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center p-4 overflow-hidden"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Main Container */}
      <motion.div
        className={`absolute w-[90%] md:w-[80%] max-w-lg h-[90%] bg-gray-900/50 rounded-lg border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-4 flex flex-col`}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Top bar */}
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-700">
          <div className={`w-1/3 h-5 ${themeClasses.placeholderBG} rounded flex items-center px-2`}>
            <span className="text-xs font-semibold text-gray-400">Your Company Inc.</span>
          </div>
          <div className={`w-1/4 h-5 ${themeClasses.placeholderBG} rounded flex items-center px-2`}>
            <span className="text-xs font-mono text-gray-400">INV #1024</span>
          </div>
        </div>

        {/* Invoice details */}
        <div className="space-y-3 mb-4">
          <p className={`text-sm font-semibold ${getHeaderColor()}`}>Invoice Details:</p>
          <div className={`w-full h-8 ${themeClasses.placeholderBG} rounded flex items-center px-3 text-sm ${getTextColor()}`}>
            Billed to: John Doe
          </div>
          <div className={`w-2/3 h-8 ${themeClasses.placeholderBG} rounded flex items-center px-3 text-sm ${getTextColor()}`}>
            Due: 25 Nov 2025
          </div>
        </div>

        {/* Line items header */}
        <div className="flex justify-between px-3 text-xs font-mono text-gray-500 mb-2">
          <span>Item</span>
          <div className="flex gap-6">
            <span>Qty</span>
            <span className="w-16 text-right">Price</span>
          </div>
        </div>

        {/* Line items */}
        <div className="flex-1 overflow-hidden space-y-2">
          <InvoiceItem name="Web Design" qty="1" price="$200.00" />
          <InvoiceItem name="CRM Setup" qty="1" price="$150.00" />
          <InvoiceItem name="Support" qty="2" price="$50.00" />
        </div>

        {/* Total section */}
        <div className="flex justify-end pt-4 border-t border-gray-700">
          <div className={`w-2/5 h-10 ${themeClasses.placeholderBG} border ${themeClasses.placeholderBorder} rounded-lg flex items-center justify-between px-3`}>
            <span className={`text-md font-bold ${getHeaderColor()}`}>Total:</span>
            <span className={`text-lg font-bold ${getTotalColor()}`}>$450.00</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Chart */}
      <motion.div
        className={`absolute bottom-8 left-4 md:left-8 w-40 h-32 bg-gray-900/60 rounded-lg border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-2 flex items-end justify-between`}
        initial={{ y: 40, opacity: 0, rotate: -5 }}
        whileInView={{ y: 0, opacity: 1, rotate: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-6 ${['h-1/2', 'h-3/4', 'h-1/3', 'h-2/3'][i]} ${getChartColor()} rounded-t-sm`}
            initial={{ height: '0%' }}
            whileInView={{ height: ['h-1/2', 'h-3/4', 'h-1/3', 'h-2/3'][i] }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
          ></motion.div>
        ))}
      </motion.div>

      {/* Floating Payment Button */}
      <motion.div
        className={`absolute top-8 right-4 md:right-8 w-28 h-12 ${getButtonGradient()} rounded-lg flex items-center justify-center text-white font-semibold text-sm`}
        initial={{ y: -40, opacity: 0, rotate: 5 }}
        whileInView={{ y: 0, opacity: 1, rotate: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Pay Now
      </motion.div>
    </motion.div>
  );
};

/**
 * 8. Placeholder for "AI SMS/Calling Agents"
 */
const AiAgentPlaceholder = ({ theme = 'violet' }) => {
  const themeClasses = colorThemes[theme] || colorThemes.violet;

  // Helper for soundwave bars
  const SoundWaveBar = ({ height, delay }) => (
    <motion.div
      className={`w-1.5 ${themeClasses.placeholderBG}`}
      initial={{ height: "20%" }}
      animate={{ height: ["20%", height, "20%"] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );

  // Helper for SMS bubble
  const SmsBubble = ({ text, time, delay }) => (
    <motion.div
      className={`w-full p-3 ${themeClasses.placeholderBG} border ${themeClasses.placeholderBorder} rounded-lg`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <p className="text-sm text-gray-200">{text}</p>
      <p className="text-xs text-right text-gray-500 mt-1">{time}</p>
    </motion.div>
  );

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center p-4"
      initial={{ opacity: 0, x: -50 }} // Animate from left
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Main Container */}
      <motion.div
        className={`relative w-full max-w-sm h-[550px] bg-gray-900/50 rounded-xl border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} flex flex-col overflow-hidden`}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* --- AI Voice Agent Section --- */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-3 border-b-2 border-gray-700">
          <motion.div
            className={`w-20 h-20 rounded-full ${themeClasses.placeholderBG} border-4 ${themeClasses.placeholderBorder} flex items-center justify-center`}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <PhoneCall className="w-10 h-10 text-purple-300" />
          </motion.div>
          <p className="text-xl font-semibold text-white">AI Voice Agent</p>
          <p className="text-sm text-purple-300">Connecting...</p>

          {/* Soundwave */}
          <div className="flex items-end h-10 gap-1">
            <SoundWaveBar height="60%" delay={0} />
            <SoundWaveBar height="80%" delay={0.2} />
            <SoundWaveBar height="100%" delay={0.4} />
            <SoundWaveBar height="70%" delay={0.6} />
            <SoundWaveBar height="90%" delay={0.8} />
            <SoundWaveBar height="60%" delay={1} />
          </div>

          {/* Call Buttons */}
          <div className="flex gap-6 pt-4">
            <button className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center shadow-lg">
              <PhoneOff className="w-7 h-7 text-white" />
            </button>
            <button className={`w-14 h-14 rounded-full ${themeClasses.placeholderBG} border ${themeClasses.placeholderBorder} flex items-center justify-center`}>
              <Mic className="w-7 h-7 text-purple-300" />
            </button>
          </div>
        </div>

        {/* --- Recent SMS Section --- */}
        <div className="flex-1 p-4 space-y-3 overflow-hidden">
          <p className="text-sm font-semibold text-gray-400 mb-2">Recent SMS</p>
          <SmsBubble
            text="Hi! Your appointment is confirmed for tomorrow at 2 PM."
            time="10:30 AM"
            delay={0.4}
          />
          <SmsBubble
            text="Thank you for your inquiry. Our team will call you shortly."
            time="Yesterday"
            delay={0.6}
          />
        </div>
      </motion.div>

      {/* Floating Engagement Card */}
      <motion.div
        className="absolute top-8 -right-4 md:right-0 w-40 bg-gray-800 p-3 rounded-lg border border-gray-700 shadow-xl"
        initial={{ y: 40, opacity: 0, rotate: 10 }}
        whileInView={{ y: 0, opacity: 1, rotate: 5 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-xs text-gray-400">Engagement Rate</p>
        <p className="text-2xl font-bold text-white">92%</p>
        <p className="text-xs text-green-400 flex items-center gap-1">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          Active
        </p>
      </motion.div>
    </motion.div>
  );
};
// Dummy SendIcon for the placeholder
const SendIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
  </svg>
);

// --- Service Data ---
// Added a `theme` key to each service object
const servicesData = [
  {
    id: 1,
    slug: "web-mobile-designing",
    tag: 'Design Services',
    title: 'Web & Mobile Designing',
    subtitle: 'Stunning, user-centric designs that captivate and convert',
    theme: 'blue', // Added theme
    features: [
      {
        icon: Palette,
        title: 'Visual Design',
        description: 'Creating beautiful, modern interfaces.',
      },
      {
        icon: LayoutDashboard,
        title: 'Responsive Layouts',
        description: 'Seamless experiences across all devices',
      },
      {
        icon: Smartphone,
        title: 'Mobile-First',
        description: 'Optimized for touch and mobile interactions',
      },
      {
        icon: Award,
        title: 'Brand Identity',
        description: 'Cohesive visual systems that tell your story',
      },
    ],
    imageComponent: <WebDesignPlaceholder />,
    imagePosition: 'right',
  },
  // --- NEW SERVICE 2 ---
  {
    id: 2,
    slug: "ui-ux",
    tag: 'Design Services',
    title: 'UI/UX Research & Strategy',
    subtitle: 'Crafting intuitive experiences users love, backed by data',
    theme: 'pink',
    features: [
      {
        icon: MousePointer2,
        title: 'User Research',
        description: 'In-depth interviews, surveys, and analysis of user needs.',
      },
      {
        icon: PenTool,
        title: 'Wireframing & Prototyping',
        description: 'Interactive mockups that map out the user journey.',
      },
      {
        icon: Figma,
        title: 'High-Fidelity Design',
        description: 'Pixel-perfect visual designs ready for development.',
      },
      {
        icon: Accessibility,
        title: 'Accessibility Audits',
        description: 'Ensuring your product is usable by everyone.',
      },
    ],
    imageComponent: <UiUxPlaceholder />,
    imagePosition: 'left', // Alternating position
  },
  {
    id: 3,
    slug: "web-development",
    tag: 'Development Services',
    title: 'Website Development',
    subtitle: 'Powerful, scalable web applications built with modern technologies',
    theme: 'orange', // Added theme
    features: [
      {
        icon: Code,
        title: 'Custom Development',
        description: 'Tailored solutions using React, Next.js, Node.js',
      },
      {
        icon: ShoppingCart,
        title: 'E-Commerce Solutions',
        description: 'Full-featured online stores with payment integration',
      },
      {
        icon: Database,
        title: 'CMS Integration',
        description: 'Easy content management with headless CMS',
      },
      {
        icon: Zap,
        title: 'Performance Optimized',
        description: 'Lightning-fast load times and SEO-ready',
      },
    ],
    imageComponent: <BrowserPlaceholder />,
    imagePosition: 'right', // Alternating position
  },
  {
    id: 4,
    slug: "mobile-apps",
    tag: 'Mobile Solutions',
    title: 'Mobile App Development',
    subtitle: 'Native and cross-platform apps that users love',
    theme: 'violet', // Added theme
    features: [
      {
        icon: Apple,
        title: 'iOS Development',
        description: 'Swift & SwiftUI apps for iPhone and iPad',
      },
      {
        icon: Play,
        title: 'Android Development',
        description: 'Kotlin apps optimized for all Android devices',
      },
      {
        icon: Box,
        title: 'Cross-Platform',
        description: 'React Native & Flutter for multi-platform reach',
      },
      {
        icon: Rocket,
        title: 'App Store Ready',
        description: 'Complete deployment & optimization support',
      },
    ],
    imageComponent: <MobilePlaceholder />,
    imagePosition: 'left', // Alternating position
  },
  // --- NEW SERVICE 5 ---
  {
    id: 5,
    slug: "crm",
    tag: 'CRM Solutions',
    title: 'CRM Development',
    subtitle: 'Powerful customer relationship management tailored to your workflow',
    theme: 'gradient', // <--- IMPORTANT: Ensure this is 'gradient'
    features: [
      {
        icon: Users,
        title: 'Contact Management',
        description: 'Centralized customer database with complete history',
      },
      {
        icon: Workflow,
        title: 'Sales Automation',
        description: 'Streamlined workflows and pipeline management',
      },
      {
        icon: BarChart3,
        title: 'Analytics & Reports',
        description: 'Real-time insights and performance metrics',
      },
      {
        icon: TrendingUp,
        title: 'Lead Tracking',
        description: 'Automated lead scoring and nurturing',
      },
    ],
    imageComponent: <CrmPlaceholder />,
    imagePosition: 'right',
  },
  // --- NEW SERVICE 6 ---
  {
    id: 6,
    slug: "ai-chatbots",
    tag: 'AI Solutions',
    title: 'AI Chatbots / WhatsApp Bots',
    subtitle: 'Intelligent conversational AI that engages customers 24/7',
    theme: 'green', // Using new green theme
    features: [
      {
        icon: BrainCircuit,
        title: 'Natural Language AI',
        description: 'GPT-powered conversations that understand context',
      },
      {
        icon: MessageSquare,
        title: 'WhatsApp Integration',
        description: 'Seamless integration with WhatsApp Business API',
      },
      {
        icon: Zap,
        title: 'Instant Responses',
        description: '24/7 automated customer support and engagement',
      },
      {
        icon: Network,
        title: 'Multi-Channel',
        description: 'Deploy across web, mobile, and messaging platforms',
      },
    ],
    imageComponent: <ChatbotPlaceholder />,
    imagePosition: 'left', // Alternating position
  },

  // ... (This comes after the 'AI Chatbots' service object)
  , // 👈 Make sure there's a comma after the AI Chatbots object
  // --- NEW SERVICE 7 ---
  {
    id: 7,
    slug: "billing-software",
    tag: 'Business Solutions',
    title: 'Billing Software',
    subtitle: 'Streamline your invoicing, payments, and financial reporting',
    theme: 'teal',// Using green theme again
    features: [
      {
        icon: Receipt,
        title: 'Automated Invoicing',
        description: 'Generate and send professional invoices automatically',
      },
      {
        icon: CreditCard,
        title: 'Online Payments',
        description: 'Accept payments easily with integrated gateways',
      },
      {
        icon: PieChart,
        title: 'Financial Reporting',
        description: 'Track revenue, expenses, and taxes with simple reports',
      },
      {
        icon: Contact,
        title: 'Client Management',
        description: 'Keep all customer billing information in one place',
      },
    ],
    imageComponent: <BillingPlaceholder />,
    imagePosition: 'right', // Alternating position from the last one
  },
  {
    id: 8,
    slug: "ai-sms-calling-agents",
    tag: 'AI Solutions',
    title: 'AI SMS/Calling Agents',
    subtitle: 'Intelligent voice and text automation for customer engagement',
    theme: 'violet', // Using violet theme to match the images
    features: [
      {
        icon: PhoneCall,
        title: 'AI Voice Calls',
        description: 'Natural-sounding voice agents for customer calls',
      },
      {
        icon: MessageSquare,
        title: 'Smart SMS',
        description: 'Automated text messaging with personalization',
      },
      {
        icon: Mic,
        title: 'Speech Recognition',
        description: 'Advanced voice understanding and responses',
      },
      {
        icon: Users, // Using 'Users' as it's already imported and fits
        title: 'Customer Engagement',
        description: 'Automated follow-ups and appointment reminders',
      },
    ],
    imageComponent: <AiAgentPlaceholder />,
    imagePosition: 'left', // Alternating position from the last one
  },
];

// --- Feature Item Component ---
// Now accepts a `theme` prop to style the icon
const FeatureItem = ({ icon: Icon, title, description, theme = 'violet' }) => {
  const themeClasses = colorThemes[theme] || colorThemes.violet;
  return (
    <div
      className="flex items-start gap-4 p-4 rounded-lg cursor-pointer"
    >
      {/* Icon with its own hover effect, styled by theme */}
      <motion.div
        className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${themeClasses.iconBase}`}
        whileHover={{
          scale: 1.15,
        }}

        transition={{ type: 'spring', stiffness: 300 }}
      >

        <motion.div
          className={`w-full h-full flex items-center justify-center rounded-lg ${themeClasses.iconHover}`}
        >
          <Icon className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Text Content (no hover effect) */}
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

// --- Main Services Component ---
export default function ServicesApp() {
  return (
    <section id="services-section">
      <div className="min-h-screen bg-gray-950 text-gray-200 font-inter p-8 pt-32 md:p-16">
        <div className="max-w-7xl mx-auto">
          {/* UPDATED: Title changed to "Services" with new blue/violet gradient and hover effect */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
          >
            Services
          </motion.h1>

          <div className="space-y-24 md:space-y-32">
            {servicesData.map((service) => {
              // Get the theme classes for the current service
              const theme = colorThemes[service.theme] || colorThemes.violet;

              return (
                <motion.section
                  key={service.id}
                  className={`flex flex-col ${service.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-center gap-12 md:gap-16`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.2 }} // REMOVED once: true
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  {/* FIX: This container has 'text-center' to center the tag,
                  title, and subtitle on all screen sizes, as you requested.
                  UPDATED: Width changed back to md:w-1/2
                */}
                  <div className="w-full md:w-1/2 space-y-4 text-center">
                    <span className={`inline-block px-4 py-1 text-sm font-medium ${theme.tagBG} ${theme.tagText} ${theme.tagBorder} rounded-full`}>
                      {service.tag}
                    </span>

                    <h2 className={`text-3xl md:text-4xl font-bold ${theme.title}`}>
                      {service.title}
                    </h2>

                    <p className={`text-lg ${theme.subtitle}`}>
                      {service.subtitle}
                    </p>

                    <div className="space-y-6 pt-6 text-left">
                      {service.features.map((feature) => (
                        <FeatureItem
                          key={feature.title}
                          icon={feature.icon}
                          title={feature.title}
                          description={feature.description}
                          theme={service.theme}
                        />
                      ))}
                    </div>

                    {/* ✅ Load More Button */}
                    <div className="mt-4 flex">
                      <Link href={`/services/${service.slug}`}>
                        <button
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
      bg-gradient-to-r  text-white font-medium
      hover:opacity-90 transition-all duration-300"
                        >
                          Load More
                          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </button>
                      </Link>
                    </div>

                  </div>


                  {/* Right Side (Image/Placeholder) 
                  UPDATED: Width changed back to md:w-1/2
                */}
                  <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[500px] flex items-center justify-center">
                    {/* We must use React.cloneElement to add props to an existing element */}
                    {React.cloneElement(service.imageComponent, { theme: service.theme })}
                  </div>
                </motion.section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );

}
