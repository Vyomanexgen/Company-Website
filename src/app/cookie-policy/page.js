"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CookiePolicy() {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#6E45E2] to-[#B34BF8] py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href="/" className="text-white/80 hover:text-white text-sm transition mb-4 inline-block">
                        ← Back to Home
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">Cookie Policy</h1>
                </div>
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto px-6 py-12 space-y-8"
            >
                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">1. What Are Cookies?</h2>
                    <p className="leading-relaxed text-gray-600">
                        Cookies are small text files that are placed on your device when you visit a website. They are
                        widely used to make websites work more efficiently, provide a better user experience, and give
                        website owners useful information about how their site is being used.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">2. How We Use Cookies</h2>
                    <p className="leading-relaxed text-gray-600">We use cookies for the following purposes:</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                        <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                        <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                        <li><strong>Performance Cookies:</strong> Help us improve our website&apos;s performance</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">3. Types of Cookies We Use</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full mt-3 text-sm text-gray-600 border-collapse">
                            <thead>
                                <tr className="border-b-2 border-gray-200">
                                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Cookie Type</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Purpose</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 px-4">Session</td>
                                    <td className="py-3 px-4">Maintain your session while browsing</td>
                                    <td className="py-3 px-4">Until browser closes</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 px-4">Analytics</td>
                                    <td className="py-3 px-4">Track visitor behavior and site usage</td>
                                    <td className="py-3 px-4">Up to 2 years</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 px-4">Preferences</td>
                                    <td className="py-3 px-4">Remember your language and region settings</td>
                                    <td className="py-3 px-4">Up to 1 year</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">4. Managing Cookies</h2>
                    <p className="leading-relaxed text-gray-600">
                        Most web browsers allow you to control cookies through their settings. You can set your browser
                        to refuse all or some cookies, or to alert you when websites set or access cookies. If you
                        disable or refuse cookies, please note that some parts of our website may become inaccessible
                        or not function properly.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">5. Third-Party Cookies</h2>
                    <p className="leading-relaxed text-gray-600">
                        Some cookies are placed by third-party services that appear on our pages. We do not control
                        the dissemination of these cookies. You should check the third-party websites for more information
                        about these cookies and how to manage them.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">6. Updates to This Policy</h2>
                    <p className="leading-relaxed text-gray-600">
                        We may update this Cookie Policy from time to time. Any changes will be posted on this page
                        with an updated revision date. We encourage you to review this policy periodically.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">7. Contact Us</h2>
                    <p className="leading-relaxed text-gray-600">
                        If you have any questions about our use of cookies, please contact us at:{" "}
                        <a href="mailto:vyomanexgenservices@gmail.com" className="text-[#6E45E2] hover:underline">
                            vyomanexgenservices@gmail.com
                        </a>
                    </p>
                </section>

                <div className="border-t pt-8 mt-12 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} vyomanexgen. All rights reserved.</p>
                </div>
            </motion.div>
        </div>
    );
}
