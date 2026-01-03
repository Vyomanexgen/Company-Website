"use client";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6"; // ✅ Threads icon
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full bg-gradient-to-b from-white to-[#ebe6ff] text-gray-700 pt-16 pb-8 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-[#6E45E2]">vyomanexgen</h2>
          <p className="mt-4 w-60">
            Pioneering cutting-edge technology solutions for tomorrow's business
            challenges.
          </p>

          {/* ✅ Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            {/* LinkedIn */}
            <motion.a
              whileHover={{ y: -6, boxShadow: "0 0 25px rgba(110,69,226,0.6)" }}
              transition={{ type: "spring", stiffness: 280 }}
              href="https://www.linkedin.com/company/vyomanexgen/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-gradient-to-r from-[#6E45E2] to-[#B34BF8] text-white cursor-pointer shadow-md"
            >
              <FaLinkedinIn size={18} />
            </motion.a>

            {/* Instagram */}
            <motion.a
              whileHover={{ y: -6, boxShadow: "0 0 25px rgba(110,69,226,0.6)" }}
              transition={{ type: "spring", stiffness: 280 }}
              href="https://www.instagram.com/vyomanexgen/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-gradient-to-r from-[#6E45E2] to-[#B34BF8] text-white cursor-pointer shadow-md"
            >
              <FaInstagram size={18} />
            </motion.a>

            {/* Threads (used instead of Twitter/X) */}
            <motion.a
              whileHover={{ y: -6, boxShadow: "0 0 25px rgba(110,69,226,0.6)" }}
              transition={{ type: "spring", stiffness: 280 }}
              href="https://www.threads.com/@vyomanexgen?invite=0 "
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-gradient-to-r from-[#6E45E2] to-[#B34BF8] text-white cursor-pointer shadow-md"
            >
              <FaThreads size={18} />
            </motion.a>

            {/* Facebook */}
            <motion.a
              whileHover={{ y: -6, boxShadow: "0 0 25px rgba(110,69,226,0.6)" }}
              transition={{ type: "spring", stiffness: 280 }}
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-gradient-to-r from-[#6E45E2] to-[#B34BF8] text-white cursor-pointer shadow-md"
            >
              <FaFacebookF size={18} />
            </motion.a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services/ui-ux" className="hover:text-cyan-500 transition">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link href="/services/web-development" className="hover:text-cyan-500 transition">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/services/mobile-apps" className="hover:text-cyan-500 transition">
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link href="/services/crm" className="hover:text-cyan-500 transition">
                CRM Solutions
              </Link>
            </li>
            <li>
              <Link href="/services/billing-software" className="hover:text-cyan-500 transition">
                Billing Software
              </Link>
            </li>
            <li>
              <Link href="/services/ai-chatbots" className="hover:text-cyan-500 transition">
                AI Chatbots
              </Link>
            </li>
            <li>
              <Link href="/services/ai-sms-calling-agents" className="hover:text-cyan-500 transition">
                AI SMS/Calling Agents
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#6E45E2] flex-shrink-0 mt-1" size={22} />
              <span className="leading-relaxed">
                Satyabama Complex, 301, KPHB Main Rd, Opposite Sai Baba Temple,
                Bhagya Nagar Colony, Hyderabad, Telangana 500072
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#6E45E2]" size={18} />
              <span>+91 7358105293</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#6E45E2]" size={18} />
              <span>vyomanexgenservices@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="border-t border-gray-300 mt-12 pt-6 text-center text-sm text-gray-600"
      >
        <p>© 2025 vyomanexgen. All rights reserved.</p>

        <div className="flex justify-center gap-6 mt-3">
          <a href="#" className="hover:text-[#6E45E2]">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#6E45E2]">
            Terms of Service
          </a>
          <a href="#" className="hover:text-[#6E45E2]">
            Cookie Policy
          </a>
        </div>
      </motion.div>
    </motion.footer>
  );
}
