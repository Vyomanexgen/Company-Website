"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);
    const brandName = "VYOMANEXGEN";

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                    style={{ backgroundColor: "#0d0d1a" }}
                >
                    {/* Main Content */}
                    <div className="flex flex-col items-center gap-8">

                        {/* Spinner Ring with Logo */}
                        <div style={{ position: "relative", width: "110px", height: "110px" }}>
                            <svg
                                className="loader-ring-svg"
                                viewBox="0 0 120 120"
                                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                            >
                                {/* Background track ring */}
                                <circle
                                    cx="60"
                                    cy="60"
                                    r="54"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.06)"
                                    strokeWidth="3"
                                />
                                {/* Animated spinner ring */}
                                <circle
                                    className="loader-ring-circle"
                                    cx="60"
                                    cy="60"
                                    r="54"
                                    fill="none"
                                    stroke="#22d3ee"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeDasharray="240 100"
                                />
                            </svg>
                            {/* Company Logo inside ring */}
                            <img
                                src="/icon.png"
                                alt="Vyomanexgen Logo"
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "48px",
                                    height: "48px",
                                    objectFit: "contain",
                                }}
                            />
                        </div>

                        {/* Brand Name */}
                        <div className="loader-brand-text">
                            {brandName.split("").map((letter, i) => (
                                <span
                                    key={i}
                                    className="loader-brand-letter"
                                    style={{ animationDelay: `${0.8 + i * 0.06}s` }}
                                >
                                    {letter}
                                </span>
                            ))}
                        </div>

                        {/* Tagline */}
                        <p className="loader-tagline">
                            Digital Solutions for Modern Businesses
                        </p>

                        {/* Progress Bar */}
                        <div className="loader-bar-track">
                            <div className="loader-bar-fill"></div>
                        </div>
                    </div>

                    <style jsx>{`
                        /* === Spinner Ring Container === */
                        .loader-ring-container {
                            position: relative;
                            width: 110px;
                            height: 110px;
                        }
                        .loader-ring-svg {
                            width: 100%;
                            height: 100%;
                            animation: ringRotate 1.8s linear infinite;
                        }
                        .loader-ring-circle {
                            transform-origin: center;
                        }

                        /* === Logo inside ring === */
                        .loader-logo-wrapper {
                            position: absolute;
                            inset: 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            opacity: 0;
                            animation: logoFadeIn 0.5s ease-out 0.2s forwards;
                        }
                        .loader-logo-img {
                            width: 48px;
                            height: 48px;
                            object-fit: contain;
                        }

                        /* === Brand Name === */
                        .loader-brand-text {
                            display: flex;
                            align-items: center;
                            gap: 3px;
                        }
                        .loader-brand-letter {
                            display: inline-block;
                            font-size: 1.4rem;
                            font-weight: 600;
                            letter-spacing: 0.18em;
                            color: rgba(255, 255, 255, 0.92);
                            opacity: 0;
                            transform: translateY(12px);
                            animation: letterUp 0.4s ease-out forwards;
                        }

                        /* === Tagline === */
                        .loader-tagline {
                            font-size: 0.8rem;
                            color: rgba(148, 163, 184, 0.7);
                            letter-spacing: 0.2em;
                            text-transform: uppercase;
                            opacity: 0;
                            animation: fadeIn 0.5s ease-out 1.6s forwards;
                        }

                        /* === Progress Bar === */
                        .loader-bar-track {
                            width: 180px;
                            height: 2px;
                            background: rgba(255, 255, 255, 0.06);
                            border-radius: 2px;
                            overflow: hidden;
                            margin-top: 4px;
                        }
                        .loader-bar-fill {
                            width: 0%;
                            height: 100%;
                            background: #22d3ee;
                            border-radius: 2px;
                            animation: barGrow 2.6s ease-in-out 0.4s forwards;
                        }

                        /* === KEYFRAMES === */
                        @keyframes ringRotate {
                            to { transform: rotate(360deg); }
                        }

                        @keyframes logoFadeIn {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }

                        @keyframes letterUp {
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }

                        @keyframes fadeIn {
                            to { opacity: 1; }
                        }

                        @keyframes barGrow {
                            0% { width: 0%; }
                            30% { width: 25%; }
                            60% { width: 55%; }
                            85% { width: 85%; }
                            100% { width: 100%; }
                        }

                        /* Responsive */
                        @media (min-width: 768px) {
                            .loader-ring-container {
                                width: 130px;
                                height: 130px;
                            }
                            .loader-logo-img {
                                width: 56px;
                                height: 56px;
                            }
                            .loader-brand-letter {
                                font-size: 1.8rem;
                            }
                            .loader-bar-track {
                                width: 240px;
                            }
                        }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
