"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time - adjust as needed
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#05001a] via-[#0a0028] to-[#1a0040]"
                >
                    {/* Animated Background Grid */}
                    <div className="absolute inset-0 overflow-hidden opacity-20">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `
                linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px),
                linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px)
              `,
                            backgroundSize: '50px 50px',
                            animation: 'gridMove 20s linear infinite'
                        }} />
                    </div>

                    {/* Main Loader Content */}
                    <div className="relative z-10 flex flex-col items-center gap-8">

                        {/* Orbiting Circles Animation */}
                        <div className="relative w-32 h-32">
                            {/* Center Core */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 m-auto w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                            />

                            {/* Orbit Ring 1 */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-0"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                            </motion.div>

                            {/* Orbit Ring 2 */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-0 scale-75"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
                            </motion.div>

                            {/* Orbit Ring 3 */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-0 scale-50"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
                            </motion.div>

                            {/* Rotating Ring Border */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-0 rounded-full border-2 border-transparent"
                                style={{
                                    borderTopColor: 'rgba(34, 211, 238, 0.5)',
                                    borderRightColor: 'rgba(59, 130, 246, 0.3)',
                                }}
                            />
                        </div>

                        {/* Loading Text with Gradient */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col items-center gap-3"
                        >
                            <motion.h2
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
                                style={{
                                    backgroundSize: '200% 200%',
                                }}
                            >
                                Vyomanexgen
                            </motion.h2>

                            {/* Animated Dots */}
                            <div className="flex gap-2">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.3, 1, 0.3],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                        }}
                                        className="w-2 h-2 bg-cyan-400 rounded-full"
                                    />
                                ))}
                            </div>

                            {/* Tagline */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-gray-400 text-sm tracking-wider"
                            >
                                Digital Solutions Loading...
                            </motion.p>
                        </motion.div>

                        {/* Binary Code Rain Effect */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{
                                        y: '100vh',
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: Math.random() * 3 + 2,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                        ease: "linear",
                                    }}
                                    className="absolute text-cyan-400 text-xs font-mono"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                    }}
                                >
                                    {Math.random() > 0.5 ? '1' : '0'}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CSS Animation for Grid */}
                    <style jsx>{`
            @keyframes gridMove {
              0% {
                transform: translate(0, 0);
              }
              100% {
                transform: translate(50px, 50px);
              }
            }
          `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
