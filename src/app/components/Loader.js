"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);
    const brandName = "VYOMANEXGEN";

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #020014 0%, #05001a 30%, #0a0030 60%, #10004a 100%)" }}
                >
                    {/* Floating Orbs Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="loader-orb loader-orb-1"></div>
                        <div className="loader-orb loader-orb-2"></div>
                        <div className="loader-orb loader-orb-3"></div>
                    </div>

                    {/* Scan Line Effect */}
                    <div className="loader-scanline"></div>

                    {/* Main Content */}
                    <div className="relative z-10 flex flex-col items-center gap-10">

                        {/* Hexagonal Logo Mark */}
                        <div className="loader-hex-container">
                            <div className="loader-hex">
                                <div className="loader-hex-inner">
                                    <span className="loader-hex-letter">V</span>
                                </div>
                            </div>
                            {/* Orbiting Particles */}
                            <div className="loader-orbit">
                                <div className="loader-particle"></div>
                            </div>
                            <div className="loader-orbit loader-orbit-2">
                                <div className="loader-particle loader-particle-2"></div>
                            </div>
                        </div>

                        {/* Letter-by-Letter Text Reveal */}
                        <div className="flex items-center gap-[3px] md:gap-[5px]">
                            {brandName.split("").map((letter, i) => (
                                <span
                                    key={i}
                                    className="loader-letter"
                                    style={{ animationDelay: `${0.5 + i * 0.08}s` }}
                                >
                                    {letter}
                                </span>
                            ))}
                        </div>

                        {/* Animated Tagline */}
                        <div className="loader-tagline-wrapper">
                            <p className="loader-tagline">
                                Digital Solutions for Modern Businesses
                            </p>
                        </div>

                        {/* Progress Bar */}
                        <div className="loader-progress-track">
                            <div className="loader-progress-bar"></div>
                        </div>
                    </div>

                    <style jsx>{`
                        /* === Floating Orbs === */
                        .loader-orb {
                            position: absolute;
                            border-radius: 50%;
                            filter: blur(80px);
                            opacity: 0.3;
                            animation: orbFloat 8s ease-in-out infinite;
                        }
                        .loader-orb-1 {
                            width: 300px; height: 300px;
                            background: radial-gradient(circle, #6366f1, transparent);
                            top: -100px; left: -100px;
                            animation-delay: 0s;
                        }
                        .loader-orb-2 {
                            width: 250px; height: 250px;
                            background: radial-gradient(circle, #06b6d4, transparent);
                            bottom: -80px; right: -80px;
                            animation-delay: -3s;
                        }
                        .loader-orb-3 {
                            width: 200px; height: 200px;
                            background: radial-gradient(circle, #a855f7, transparent);
                            top: 50%; left: 60%;
                            animation-delay: -5s;
                        }

                        /* === Scan Line === */
                        .loader-scanline {
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            height: 2px;
                            background: linear-gradient(90deg, transparent, #22d3ee, #a855f7, transparent);
                            animation: scanDown 2.5s ease-in-out infinite;
                            opacity: 0.6;
                            box-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
                        }

                        /* === Hexagonal Logo === */
                        .loader-hex-container {
                            position: relative;
                            width: 120px;
                            height: 120px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        .loader-hex {
                            width: 90px;
                            height: 90px;
                            position: relative;
                            animation: hexRotate 4s ease-in-out infinite;
                        }
                        .loader-hex::before {
                            content: '';
                            position: absolute;
                            inset: -3px;
                            background: conic-gradient(from 0deg, #06b6d4, #6366f1, #a855f7, #ec4899, #06b6d4);
                            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                            animation: hexBorderSpin 3s linear infinite;
                        }
                        .loader-hex-inner {
                            position: absolute;
                            inset: 3px;
                            background: linear-gradient(135deg, #0a0025, #15003d);
                            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        .loader-hex-letter {
                            font-size: 2rem;
                            font-weight: 800;
                            background: linear-gradient(135deg, #22d3ee, #a855f7);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                            animation: letterPulse 2s ease-in-out infinite;
                        }

                        /* === Orbiting Particles === */
                        .loader-orbit {
                            position: absolute;
                            inset: -15px;
                            animation: orbitSpin 3s linear infinite;
                        }
                        .loader-orbit-2 {
                            inset: -25px;
                            animation-duration: 4.5s;
                            animation-direction: reverse;
                        }
                        .loader-particle {
                            position: absolute;
                            top: 0;
                            left: 50%;
                            transform: translateX(-50%);
                            width: 8px;
                            height: 8px;
                            background: #22d3ee;
                            border-radius: 50%;
                            box-shadow: 0 0 15px #22d3ee, 0 0 30px rgba(34, 211, 238, 0.3);
                        }
                        .loader-particle-2 {
                            width: 6px;
                            height: 6px;
                            background: #a855f7;
                            box-shadow: 0 0 15px #a855f7, 0 0 30px rgba(168, 85, 247, 0.3);
                        }

                        /* === Letter Animation === */
                        .loader-letter {
                            display: inline-block;
                            font-size: 1.5rem;
                            font-weight: 700;
                            letter-spacing: 0.15em;
                            color: transparent;
                            background: linear-gradient(135deg, #22d3ee 0%, #6366f1 50%, #a855f7 100%);
                            -webkit-background-clip: text;
                            background-clip: text;
                            opacity: 0;
                            transform: translateY(20px) rotateX(90deg);
                            animation: letterReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                        }

                        /* === Tagline === */
                        .loader-tagline-wrapper {
                            overflow: hidden;
                        }
                        .loader-tagline {
                            font-size: 0.85rem;
                            color: rgba(148, 163, 184, 0.8);
                            letter-spacing: 0.25em;
                            text-transform: uppercase;
                            animation: slideUp 0.6s ease-out 1.8s both;
                        }

                        /* === Progress Bar === */
                        .loader-progress-track {
                            width: 200px;
                            height: 2px;
                            background: rgba(255, 255, 255, 0.08);
                            border-radius: 10px;
                            overflow: hidden;
                        }
                        .loader-progress-bar {
                            width: 0%;
                            height: 100%;
                            background: linear-gradient(90deg, #06b6d4, #6366f1, #a855f7);
                            border-radius: 10px;
                            animation: progressFill 2.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
                            box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
                        }

                        /* === KEYFRAMES === */
                        @keyframes orbFloat {
                            0%, 100% { transform: translate(0, 0) scale(1); }
                            33% { transform: translate(30px, -20px) scale(1.1); }
                            66% { transform: translate(-20px, 15px) scale(0.95); }
                        }

                        @keyframes scanDown {
                            0% { top: -2px; opacity: 0; }
                            10% { opacity: 0.6; }
                            90% { opacity: 0.6; }
                            100% { top: 100%; opacity: 0; }
                        }

                        @keyframes hexRotate {
                            0%, 100% { transform: rotate(0deg) scale(1); }
                            25% { transform: rotate(2deg) scale(1.02); }
                            50% { transform: rotate(0deg) scale(1.05); }
                            75% { transform: rotate(-2deg) scale(1.02); }
                        }

                        @keyframes hexBorderSpin {
                            to { transform: rotate(360deg); }
                        }

                        @keyframes orbitSpin {
                            to { transform: rotate(360deg); }
                        }

                        @keyframes letterPulse {
                            0%, 100% { opacity: 0.8; filter: brightness(1); }
                            50% { opacity: 1; filter: brightness(1.3); }
                        }

                        @keyframes letterReveal {
                            to {
                                opacity: 1;
                                transform: translateY(0) rotateX(0deg);
                            }
                        }

                        @keyframes slideUp {
                            from { transform: translateY(100%); opacity: 0; }
                            to { transform: translateY(0); opacity: 1; }
                        }

                        @keyframes progressFill {
                            0% { width: 0%; }
                            20% { width: 15%; }
                            50% { width: 45%; }
                            80% { width: 80%; }
                            100% { width: 100%; }
                        }

                        /* Responsive */
                        @media (min-width: 768px) {
                            .loader-letter {
                                font-size: 2rem;
                            }
                            .loader-progress-track {
                                width: 280px;
                            }
                        }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
