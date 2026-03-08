"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Blog() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f8f6ff] via-white to-[#ebe6ff] flex flex-col">
            {/* Header */}
            <div className="px-6 pt-8">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#6E45E2] transition"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center px-6 pb-20">
                <div className="text-center max-w-lg">
                    {/* Animated Icon */}
                    <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                        className="mx-auto mb-8 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#6E45E2] to-[#B34BF8] flex items-center justify-center shadow-lg"
                    >
                        <motion.svg
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        >
                            <path d="M12 19V5M5 12l7-7 7 7" />
                        </motion.svg>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Blog is Coming Soon
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.45 }}
                        className="text-gray-500 text-lg leading-relaxed mb-8"
                    >
                        We&apos;re crafting insightful articles about technology, design, and innovation.
                        Stay tuned for updates!
                    </motion.p>

                    {/* Construction Bars Animation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col gap-3 max-w-sm mx-auto mb-10"
                    >
                        {[85, 60, 72, 45].map((width, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${width}%` }}
                                        transition={{ duration: 1.2, delay: 0.8 + i * 0.15, ease: "easeOut" }}
                                        className="h-full rounded-full"
                                        style={{
                                            background: `linear-gradient(90deg, #6E45E2, #B34BF8)`,
                                            opacity: 0.15 + i * 0.2,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.6 }}
                            className="text-xs text-gray-400 mt-1 tracking-wider uppercase"
                        >
                            Under Development
                        </motion.p>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6E45E2] to-[#B34BF8] text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-purple-200 transition-all duration-300"
                        >
                            Go Back Home
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <div className="text-center pb-8 text-sm text-gray-400">
                <p>© {new Date().getFullYear()} vyomanexgen. All rights reserved.</p>
            </div>
        </div>
    );
}
