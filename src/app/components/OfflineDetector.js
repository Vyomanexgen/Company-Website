"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OfflineDetector() {
    const [isOffline, setIsOffline] = useState(false);

    useEffect(() => {
        const goOffline = () => setIsOffline(true);
        const goOnline = () => setIsOffline(false);

        // Check initial state
        if (!navigator.onLine) {
            setIsOffline(true);
        }

        window.addEventListener("offline", goOffline);
        window.addEventListener("online", goOnline);

        return () => {
            window.removeEventListener("offline", goOffline);
            window.removeEventListener("online", goOnline);
        };
    }, []);

    return (
        <AnimatePresence>
            {isOffline && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[99999] flex items-center justify-center px-6"
                    style={{ backgroundColor: "#0d0d1a" }}
                >
                    <div className="text-center max-w-md">
                        {/* Wifi Off Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.1 }}
                            className="mx-auto mb-8 w-20 h-20 rounded-full flex items-center justify-center"
                            style={{
                                background: "linear-gradient(135deg, rgba(110,69,226,0.15), rgba(179,75,248,0.15))",
                                border: "1px solid rgba(110,69,226,0.25)",
                            }}
                        >
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#B34BF8"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="1" y1="1" x2="23" y2="23" />
                                <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
                                <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
                                <path d="M10.71 5.05A16 16 0 0 1 22.56 9" />
                                <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
                                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                                <line x1="12" y1="20" x2="12.01" y2="20" />
                            </svg>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="text-2xl font-bold text-white mb-3"
                        >
                            You&apos;re Offline
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="text-gray-400 text-sm leading-relaxed mb-8"
                        >
                            It seems like you&apos;ve lost your internet connection.
                            Please check your network and try again.
                        </motion.p>

                        {/* Pulsing connection dots */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center justify-center gap-3 mb-8"
                        >
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.2, 0.6, 0.2],
                                    }}
                                    transition={{
                                        duration: 1.8,
                                        repeat: Infinity,
                                        delay: i * 0.4,
                                    }}
                                    className="w-2.5 h-2.5 rounded-full bg-[#6E45E2]"
                                />
                            ))}
                        </motion.div>

                        {/* Retry Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            onClick={() => window.location.reload()}
                            className="px-7 py-3 bg-gradient-to-r from-[#6E45E2] to-[#B34BF8] text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
                        >
                            Try Again
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
