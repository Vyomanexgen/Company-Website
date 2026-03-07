
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";


const completedProjects = [
  { id: 1, title: "AVR Cinemas Website", tag: "Web Development", imageUrl: "/avrlogo.jpg" },
  { id: 2, title: "Organic Fruit Box Landing Website", tag: "Web Development", imageUrl: "https://organic-fruit-box.vercel.app/assets/organicFruit-p-ajoAUZ.jpg" },
  { id: 3, title: "Mydukur Hotel Landing Website", tag: "Web Development", imageUrl: "https://mydukurhotel.netlify.app/assets/Logo-BOE60qbz.jpg" },
  //   { id: 4, title: "Data Analytics Hub", tag: "Data Science", imageUrl: "https://placehold.co/600x400/e0f2fe/333?text=Project+4" },
  //   { id: 5, title: "Travel Booking UI", tag: "Web App", imageUrl: "https://placehold.co/600x400/f0f9ff/333?text=Project+5" },
  //   { id: 6, title: "EdTech Dashboard", tag: "Web Development", imageUrl: "https://placehold.co/600x400/ddd6fe/333?text=Project+6" },
  //   { id: 7, title: "Social Media Platform", tag: "Mobile App", imageUrl: "https://placehold.co/600x400/bae6fd/333?text=Project+7" },
  //   { id: 8, title: "Hotel Management System", tag: "Web App", imageUrl: "https://placehold.co/600x400/fde68a/333?text=Project+8" },
  //   { id: 9, title: "Food Delivery System", tag: "CRM Development", imageUrl: "https://placehold.co/600x400/ffe4e6/333?text=Project+9" },
];

const ongoingProjects = [
  { id: 10, title: "Bahupada ERP and E-Commerce Website and App", tag: "CRM Development", imageUrl: "/WhatsApp Image 2025-11-27 at 17.54.19_fe79ed35.jpg" },
  { id: 11, title: "Rama & Rama Security Services", tag: "Web Development", imageUrl: "https://placehold.co/600x400/fed7aa/333?text=Ongoing+2" },
  { id: 12, title: "Dinesh PVC Pipes Manufacturing & E-Commerce", tag: "Mobile App", imageUrl: "https://placehold.co/600x400/d9f99d/333?text=Ongoing+3" },
  { id: 13, title: "Nelloriens", tag: "Mobile Development", imageUrl: "https://placehold.co/600x400/bfdbfe/333?text=Ongoing+4" },
  //   { id: 14, title: "Cloud Sync System", tag: "Cloud Computing", imageUrl: "https://placehold.co/600x400/e5e7eb/333?text=Ongoing+5" },
  //   { id: 15, title: "Fitness Tracker", tag: "Mobile App", imageUrl: "https://placehold.co/600x400/ffedd5/333?text=Ongoing+6" },
  //   { id: 16, title: "Voice Assistant", tag: "AI", imageUrl: "https://placehold.co/600x400/ddd6fe/333?text=Ongoing+7" },
  //   { id: 17, title: "Inventory Management", tag: "CRM Development", imageUrl: "https://placehold.co/600x400/e0f2fe/333?text=Ongoing+8" },
  //   { id: 18, title: "AR Shopping App", tag: "Mobile Development", imageUrl: "https://placehold.co/600x400/fef9c3/333?text=Ongoing+9" },
];

export default function Portfolio() {
  const [selectedTab, setSelectedTab] = useState("Completed");
  const router = useRouter();

  const projectsToShow = selectedTab === "Completed" ? completedProjects : ongoingProjects;

  return (
    <section id="portfolio-section" className="py-16 sm:py-20 bg-slate-50 pt-20 sm:pt-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <div className="text-center max-w-2xl mx-auto overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-base sm:text-lg text-gray-600"
          >
            Explore our portfolio of successful projects across various industries
          </motion.p>
        </div>

        {/* Toggle Switch (Purple Theme Restored) */}
        <div className="flex justify-center mt-8 sm:mt-10">
          <div className="flex space-x-2 p-1.5 rounded-full bg-white/60 backdrop-blur-lg shadow-inner border border-white/70">
            <Tab
              name="Completed Projects"
              isSelected={selectedTab === "Completed"}
              onClick={() => setSelectedTab("Completed")}
            />
            <Tab
              name="Ongoing Projects"
              isSelected={selectedTab === "Ongoing"}
              onClick={() => setSelectedTab("Ongoing")}
            />
          </div>
        </div>

        {/* Projects Grid (3×3 layout) */}
        <div className="mt-10 sm:mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12"
            >
              {projectsToShow.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View All Projects Button */}
        <div className="mt-14 sm:mt-16 text-center">
          <motion.button
            onClick={() => router.push("/projects")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-x-2 rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-all duration-200 cursor-pointer"
          >
            View All Projects
            <ArrowRightIcon className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

// --- Reusable Components ---
const Tab = ({ name, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold outline-none transition-colors
      ${isSelected ? "text-white" : "text-gray-700 hover:text-black"}
    `}
  >
    {isSelected && (
      <motion.span
        layoutId="liquid-bubble"
        className="absolute inset-0 z-[-1] bg-purple-600 rounded-full"
        transition={{ type: "spring", stiffness: 350, damping: 35 }}
      />
    )}
    <span className="relative z-10">{name}</span>
  </button>
);

const ProjectCard = ({ project }) => {
  const tagColors = {
    "Web Development": "bg-blue-100 text-blue-700",
    "Mobile Development": "bg-green-100 text-green-700",
    "CRM Development": "bg-indigo-100 text-indigo-700",
    "Data Science": "bg-yellow-100 text-yellow-700",
    "Web App": "bg-pink-100 text-pink-700",
    "Mobile App": "bg-lime-100 text-lime-700",
    "Cloud Computing": "bg-sky-100 text-sky-700",
    "AI": "bg-purple-100 text-purple-700",
  };
  const tagColor = tagColors[project.tag] || "bg-gray-100 text-gray-700";

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      className="flex flex-col rounded-2xl bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex-1 p-5 sm:p-6 flex flex-col items-start">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tagColor}`}>
          {project.tag}
        </span>
        <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold text-gray-900">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
};
