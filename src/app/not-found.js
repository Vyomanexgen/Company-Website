"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0d0d1a] flex items-center justify-center px-6 overflow-hidden">
            {/* Subtle background grid */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "linear-gradient(rgba(110,69,226,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(110,69,226,0.03) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 text-center max-w-lg">
                {/* Animated 404 */}
                <div className="relative mb-8">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 150, damping: 12 }}
                        className="text-[8rem] md:text-[10rem] font-black leading-none select-none"
                        style={{
                            background: "linear-gradient(135deg, #6E45E2 0%, #B34BF8 50%, #22d3ee 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        404
                    </motion.div>
                </div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                >
                    Page Not Found
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="text-gray-400 text-base leading-relaxed mb-10 max-w-md mx-auto"
                >
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    Let&apos;s get you back on track.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/"
                        className="px-7 py-3 bg-gradient-to-r from-[#6E45E2] to-[#B34BF8] text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/contact"
                        className="px-7 py-3 border border-gray-700 text-gray-300 text-sm font-medium rounded-full hover:border-[#6E45E2] hover:text-white transition-all duration-300"
                    >
                        Contact Us
                    </Link>
                </motion.div>

                {/* Decorative dots */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center justify-center gap-2 mt-12"
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                            }}
                            className="w-2 h-2 rounded-full"
                            style={{ background: i === 1 ? "#6E45E2" : "#22d3ee" }}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
