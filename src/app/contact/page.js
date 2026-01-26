"use client";

import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { motion } from "framer-motion";
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
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // const onSubmit = (data) => {
  //   const templateParams = {
  //     user_name: data.fullName,
  //     user_email: data.email,
  //     user_phone: data.phone || "Not Provided",
  //     message: data.message,
  //     timestamp: new Date().toLocaleString(),
  //   };

  //   emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
  //     .then(() => {
  //       alert("✅ Message Sent Successfully!");
  //       reset();
  //     })
  //     .catch((error) => {
  //       console.error("EmailJS Error:", error);
  //       alert("❌ Failed to send message. Try again.");
  //     });
  // };
  const onSubmit = (data) => {
    const templateParams = {
      user_name: data.fullName,
      user_email: data.email,
      user_phone: data.phone || "Not Provided",
      user_company: data.company || "Not Provided", // <-- ADD THIS
      user_service: data.service,                 // <-- RENAMED THIS
      message: data.message,
      timestamp: new Date().toLocaleString(),
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setSuccessMessage("Message Sent Successfully! We'll contact you soon.");
        reset();

        // Auto hide after 4 seconds
        setTimeout(() => setSuccessMessage(""), 4000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setSuccessMessage("Failed to send message. Try again later.");
        setTimeout(() => setSuccessMessage(""), 4000);
      });
  };

  return (
    <div id="contact-section" className="min-h-screen bg-[#F6F4FF] text-gray-800">
      <Navbar />
      {/* ✅ Toast Notification Container */}
      <div className="fixed top-6 right-6 z-[9999] space-y-3">
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
      </div>


      {/* 🌈 HERO SECTION */}
      <section className="relative h-[60vh] w-full flex flex-col justify-center items-center text-center overflow-hidden pt-28">
        <div className="absolute inset-0 bg-gradient-to-b from-[#140C33] via-[#2B0A52] to-[#480042] z-0" />
        <div className="absolute inset-0 z-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative z-10 flex flex-col items-center">
          <button className="px-7 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-blue-400 to-pink-500 shadow-lg">
            Get in Touch
          </button>

          <p className="text-white mt-3 text-lg">Contact Us</p>

          <h3 className="text-white mt-4 text-2xl md:text-[26px] max-w-3xl leading-relaxed px-6">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </h3>
        </div>
      </section>

      {/* 📨 CONTACT FORM + CARDS */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-20 -mt-14 relative z-[5]">

        {/* ✅ Left: Contact Cards */}
        <div className="space-y-5">

          {/* ✅ Email Card with Floating Animation */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <ContactCard
              icon={<FaEnvelope size={22} />}
              title="Email"
              value="vyomanexgenservices@gmail.com"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >   <ContactCard icon={<FaPhone size={22} />} title="Phone" value="+91 73581 05293" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <ContactCard icon={<FaMapMarkerAlt size={25} />} title="Office" value="satyabama complex, 301, KPHB Main Rd,Bhagya Nagar Colony,Hyderabad, Telangana 500072" />
          </motion.div>
          {/* ✅ WhatsApp Support */}
          <a
            href="https://wa.me/917358105293"
            target="_blank"
            className="block bg-[#1DBF31] rounded-2xl p-6 text-white shadow-xl border border-[#0c731a] hover:scale-[1.03] transition"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaWhatsapp size={26} />
                <h4 className="text-lg font-semibold">Chat on WhatsApp</h4>
              </div>

              <button className="bg-white text-[#1DBF31] px-5 py-2 rounded-lg text-sm font-medium shadow hover:bg-gray-200 transition">
                Start Chat
              </button>
            </div>

            <p className="text-sm mt-3 opacity-90">Instant support on WhatsApp</p>
          </a>
        </div>

        {/* ✅ Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 space-y-4">

          <div className="flex flex-col md:flex-row gap-4">
            <Field label="Full Name *" register={register("fullName")} error={errors.fullName} />
            <Field label="Email *" register={register("email")} error={errors.email} />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <Field label="Phone" register={register("phone")} />
            <Field label="Company" register={register("company")} />
          </div>

          <div>
            <select {...register("service")} className="inputbox">
              <option value="">Select a service</option>
              <option>Web Development</option>
              <option>Mobile Apps</option>
              <option>UI/UX Design</option>
              <option>AI / Automation</option>
            </select>
            {errors.service && <Error>{errors.service.message}</Error>}
          </div>

          <div>
            <textarea {...register("message")} placeholder="Message *" rows="4" className="inputbox"></textarea>
            {errors.message && <Error>{errors.message.message}</Error>}
          </div>

          {/* ✅ SUCCESS MESSAGE GOES HERE */}
          {/* {successMessage && (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="text-center p-3 rounded-xl font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg"
    >
      {successMessage}
    </motion.div>
  )} */}

          <button className="w-full py-3 rounded-xl text-white text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition">
            Send Message
          </button>

        </form>

      </section>

      <Footer />
    </div>
  );
}

/* Reusable Components */
function ContactCard({ icon, title, value }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 flex gap-4 items-start">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600 text-sm">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, register, error }) {
  return (
    <div className="flex-1">
      <input placeholder={label} {...register} className="inputbox" />
      {error && <Error>{error.message}</Error>}
    </div>
  );
}

function Error({ children }) {
  return <p className="text-red-500 text-sm mt-1">{children}</p>;
}
