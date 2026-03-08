"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#6E45E2] to-[#B34BF8] py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href="/" className="text-white/80 hover:text-white text-sm transition mb-4 inline-block">
                        ← Back to Home
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
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
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">1. Information We Collect</h2>
                    <p className="leading-relaxed text-gray-600">
                        We collect information you provide directly to us, such as when you fill out a contact form,
                        request a quote, or communicate with us. This may include your name, email address, phone number,
                        company name, and any other information you choose to provide.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">2. How We Use Your Information</h2>
                    <p className="leading-relaxed text-gray-600">We use the information we collect to:</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                        <li>Respond to your inquiries and provide requested services</li>
                        <li>Send you technical notices, updates, and administrative messages</li>
                        <li>Communicate with you about products, services, and events</li>
                        <li>Monitor and analyze trends, usage, and activities</li>
                        <li>Improve our website and services</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">3. Information Sharing</h2>
                    <p className="leading-relaxed text-gray-600">
                        We do not sell, trade, or otherwise transfer your personal information to third parties without
                        your consent. We may share information with trusted service providers who assist us in operating
                        our website and conducting our business, provided they agree to keep this information confidential.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">4. Data Security</h2>
                    <p className="leading-relaxed text-gray-600">
                        We implement appropriate security measures to protect your personal information against
                        unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                        over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">5. Cookies</h2>
                    <p className="leading-relaxed text-gray-600">
                        Our website may use cookies to enhance your experience. You can choose to set your browser to
                        refuse cookies or to alert you when cookies are being sent. Please note that some features of
                        our website may not function properly without cookies.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">6. Your Rights</h2>
                    <p className="leading-relaxed text-gray-600">
                        You have the right to access, correct, or delete your personal information that we hold.
                        You may also object to or restrict our processing of your data. To exercise these rights,
                        please contact us using the details provided below.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">7. Contact Us</h2>
                    <p className="leading-relaxed text-gray-600">
                        If you have any questions about this Privacy Policy, please contact us at:{" "}
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
