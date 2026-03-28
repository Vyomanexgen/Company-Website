"use client";

import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import { useState } from "react";

// ✅ EmailJS Credentials
const SERVICE_ID = "service_nzz4dqu";
const TEMPLATE_ID = "template_c08rbip";
const PUBLIC_KEY = "He_1j-g1lwbuF7wHb";

// ✅ Validation Schema
const schema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  phone: Yup.string().matches(/^[0-9+\- ]*$/, "Enter a valid phone number").nullable(),
  company: Yup.string().nullable(),
  service: Yup.string().required("Please select a service"),
  message: Yup.string().required("Message is required").min(10, "Minimum 10 characters"),
});

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);
    const templateParams = {
      user_name: data.fullName,
      user_email: data.email,
      user_phone: data.phone || "Not Provided",
      user_company: data.company || "Not Provided",
      user_service: data.service,
      message: data.message,
      timestamp: new Date().toLocaleString(),
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setSuccessMessage("Message Sent Successfully! We'll contact you soon.");
        reset();
        setTimeout(() => setSuccessMessage(""), 4000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setSuccessMessage("Failed to send message. Try again later.");
        setTimeout(() => setSuccessMessage(""), 4000);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div id="contact-section" className="min-h-screen bg-[#F6F4FF] text-gray-800">
      <Navbar />
      
      {/* Toast Notification */}
      <div className="fixed top-6 right-6 z-[9999] space-y-3">
        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="px-5 py-3 rounded-xl text-white shadow-lg bg-gradient-to-r from-green-500 to-emerald-600 font-medium"
            >
              {successMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-40 lg:pt-40 lg:pb-48 flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Dark Premium Background */}
        <div className="absolute inset-0 bg-[#0A051E] z-0" />

        {/* Subtle Grid Pattern for Technical Feel */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" 
          style={{ maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)" }} 
        />

        <div className="relative z-10 flex flex-col items-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide text-blue-100 uppercase">We're here to help</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight max-w-5xl"
          >
            Let's Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FACFE] to-[#00F2FE]">Extraordinary</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mt-2 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm"
          >
            Have a bold idea? Need a digital transformation? Drop us a message below and let’s discuss how we can turn your vision into reality.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards & Form - Restored Margin -mt-14 */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-20 -mt-20 relative z-[5]">

        {/* Left: Contact Cards */}
        <div className="space-y-6">

          <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
            <ContactCard
              icon={<FaEnvelope size={22} />}
              title="Email"
              value="vyomanexgenservices@gmail.com"
            />
          </motion.div>

          <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}>
            <ContactCard 
              icon={<FaPhone size={22} />} 
              title="Phone" 
              value="+91 73581 05293" 
            />
          </motion.div>

          <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 2 }}>
            <ContactCard 
              icon={<FaMapMarkerAlt size={25} />} 
              title="Office" 
              value="Satyabama Complex, 301, KPHB Main Rd, Bhagya Nagar Colony, Hyderabad, TS 500072" 
            />
          </motion.div>

          {/* WhatsApp Support Boxed Layout */}
          <a
            href="https://wa.me/917358105293"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#1DBF31] rounded-2xl p-6 text-white shadow-xl border border-[#0c731a] hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaWhatsapp size={26} />
                <h4 className="text-lg font-semibold">Chat on WhatsApp</h4>
              </div>

              <div className="bg-white text-[#1DBF31] px-5 py-2 rounded-lg text-sm font-bold shadow hover:bg-gray-100 transition">
                Start Chat
              </div>
            </div>
            <p className="text-sm mt-3 opacity-90">Instant support on WhatsApp</p>
          </a>
        </div>

        {/* Right: Original Style Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 space-y-6 h-fit">
          
          <div className="flex flex-col md:flex-row gap-5">
            <Field label="Full Name *" register={register("fullName")} error={errors.fullName} />
            <Field label="Email *" register={register("email")} error={errors.email} />
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <Field label="Phone" register={register("phone")} error={errors.phone} />
            <Field label="Company" register={register("company")} error={errors.company} />
          </div>

          <div>
            <select {...register("service")} className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm focus:ring-2 focus:ring-purple-400 outline-none transition cursor-pointer">
              <option value="">Select a service *</option>
              <option>Web Development</option>
              <option>Mobile Apps</option>
              <option>UI/UX Design</option>
              <option>AI / Automation</option>
            </select>
            {errors.service && <ErrorMessage>{errors.service.message}</ErrorMessage>}
          </div>

          <div>
            <textarea {...register("message")} placeholder="Message *" rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm focus:ring-2 focus:ring-purple-400 outline-none transition resize-none"></textarea>
            {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
          </div>

          <button 
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-xl text-white text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition shadow-lg shadow-purple-500/20 disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
                 <span className="flex items-center gap-2">
                   <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                   Sending...
                 </span>
               ) : (
                 "Send Message"
               )}
          </button>

        </form>

      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20 relative z-[5]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200"
        >
          <iframe
            src="https://maps.google.com/maps?q=301,+KPHB+Main+Rd,+Bhagya+Nagar+Colony,+Hyderabad,+Telangana+500072&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

// Sub-components exactly as they were, retaining original gradient styles
function ContactCard({ icon, title, value }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 flex gap-4 items-center sm:items-start group hover:-translate-y-1 transition duration-300">
      <div className="w-14 h-14 shrink-0 rounded-xl flex items-center justify-center text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-md shadow-purple-500/20 group-hover:scale-105 transition">
        {icon}
      </div>
      <div className="flex-1 mt-1">
        <h4 className="font-bold text-gray-800 tracking-wide text-[15px] uppercase mb-0.5">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed font-medium">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, register, error }) {
  return (
    <div className="flex-1">
      <input placeholder={label} {...register} className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-sm focus:ring-2 focus:ring-purple-400 outline-none transition" />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
}

function ErrorMessage({ children }) {
  return <p className="text-red-500 text-sm mt-1.5 ml-1 font-semibold">{children}</p>;
}
