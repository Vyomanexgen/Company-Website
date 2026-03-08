"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#6E45E2] to-[#B34BF8] py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href="/" className="text-white/80 hover:text-white text-sm transition mb-4 inline-block">
                        ← Back to Home
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">Terms of Service</h1>
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
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">1. Acceptance of Terms</h2>
                    <p className="leading-relaxed text-gray-600">
                        By accessing and using the Vyomanexgen website and services, you accept and agree to be bound
                        by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">2. Services Description</h2>
                    <p className="leading-relaxed text-gray-600">
                        Vyomanexgen provides digital solutions including but not limited to UI/UX Design,
                        Web Development, Mobile App Development, CRM Solutions, Billing Software, AI Chatbots,
                        and AI SMS/Calling Agents. The specific scope of services will be defined in individual
                        project agreements.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">3. Intellectual Property</h2>
                    <p className="leading-relaxed text-gray-600">
                        All content on this website, including text, graphics, logos, images, and software, is the
                        property of Vyomanexgen and is protected by applicable intellectual property laws. You may not
                        reproduce, distribute, or create derivative works without our prior written consent.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">4. User Responsibilities</h2>
                    <p className="leading-relaxed text-gray-600">When using our services, you agree to:</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                        <li>Provide accurate and complete information</li>
                        <li>Use services only for lawful purposes</li>
                        <li>Not interfere with the proper working of our website</li>
                        <li>Not attempt to gain unauthorized access to our systems</li>
                        <li>Comply with all applicable laws and regulations</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">5. Payment Terms</h2>
                    <p className="leading-relaxed text-gray-600">
                        Payment terms for services will be outlined in individual project agreements or proposals.
                        All fees are non-refundable unless otherwise stated in writing. Late payments may be subject
                        to additional charges as specified in the project agreement.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">6. Limitation of Liability</h2>
                    <p className="leading-relaxed text-gray-600">
                        To the maximum extent permitted by law, Vyomanexgen shall not be liable for any indirect,
                        incidental, special, consequential, or punitive damages resulting from your use of or inability
                        to use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">7. Termination</h2>
                    <p className="leading-relaxed text-gray-600">
                        We reserve the right to terminate or suspend your access to our services at any time, without
                        prior notice, for conduct that we believe violates these Terms of Service or is harmful to
                        other users, us, or third parties.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">8. Governing Law</h2>
                    <p className="leading-relaxed text-gray-600">
                        These Terms of Service shall be governed by and construed in accordance with the laws of India.
                        Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the
                        courts in Hyderabad, Telangana.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-[#6E45E2]">9. Contact Us</h2>
                    <p className="leading-relaxed text-gray-600">
                        If you have any questions about these Terms, please contact us at:{" "}
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
