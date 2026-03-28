"use client";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";

const testimonials = [
  {
    title: "Organic Fruit Box",
    name: "Parameshwar Reddy",
    location: "Madhapur, Hyderabad",
    role: "Business Owner",
    text: "The overall build is crisp and professional. The WhatsApp integration is exactly what our business needed for direct customer reach. Very satisfied.",
    rating: 5,
    hue: "from-green-400 to-emerald-600"
  },
  {
    title: "Mydukur Hotel Landing Website",
    name: "Mitta Sudhakar",
    location: "Mydukur",
    role: "Hotel Manager",
    text: "The website feels polished and easy to navigate. The WhatsApp option adds a direct line for guests, which is exactly what we needed for quick inquiries.",
    rating: 5,
    hue: "from-blue-400 to-cyan-500"
  },
  {
    title: "AVR Cinemas Website",
    name: "AVR",
    role: "Casting Director",
    text: "The audition section is exactly what I needed. Clear fields, smooth submissions, and easy access to the profiles I want to review. Well-designed.",
    rating: 5,
    hue: "from-purple-400 to-pink-500"
  },
  {
    title: "Rama & Rama Security Services",
    name: "Shravya",
    role: "Operations Head",
    text: "The site presents our security services with clarity and seriousness. It highlights our guard deployment, patrol services, and monitoring support in a clean way. Good work on capturing the tone of our industry.",
    rating: 5,
    hue: "from-orange-400 to-red-500"
  },
  {
    title: "Dinesh PVC Pipes",
    name: "Dinesh",
    role: "Founder",
    text: "As the owner of Dinesh PVC Pipes, I’m happy with how the website turned out. Our products are displayed clearly, and the online ordering system works smoothly for our customers.",
    rating: 5,
    hue: "from-yellow-400 to-orange-500"
  },
  {
    title: "Rajasekhar Art Jewellery",
    name: "Sudarshan",
    role: "Jewellery Owner",
    text: "As the owner, I’m happy with how the site displays our jewellery. The buying process is smooth and clear.",
    rating: 5,
    hue: "from-pink-400 to-rose-500"
  },
  {
    title: "Nelloriens Identity",
    name: "Shaik Munier",
    role: "Brand Director",
    text: "The site matches the identity of Nelloriens well. Customers can understand our offerings quickly and the design is super clean.",
    rating: 5,
    hue: "from-teal-400 to-blue-500"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials-section" className="relative w-full py-32 bg-[#05001a] text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-0 w-[40rem] h-[40rem] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 shadow-xl"
          >

          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
          >
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FACFE] to-[#00F2FE]">Success Stories</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            We don't just build websites; we build digital businesses. Here is what our partners have to say about working with us.
          </motion.p>
        </div>

        {/* Wall of Love Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.15, duration: 0.6 }}
              className="break-inside-avoid"
            >
              <div className="relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden cursor-default">
                {/* Background Quote Icon */}
                <FaQuoteLeft className="absolute -top-4 -right-4 text-8xl text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-300 transform -rotate-12" />

                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, idx) => (
                    <FaStar key={idx} className="text-[#FFD700]" size={16} />
                  ))}
                </div>

                <p className="text-gray-200 text-[1.05rem] leading-relaxed mb-8 relative z-10 font-medium">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4 relative z-10 mt-auto">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${t.hue} text-white font-bold text-xl shadow-lg shrink-0`}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white flex items-center gap-1.5 leading-tight">
                      {t.name}
                      <FaCheckCircle className="text-blue-400" size={14} title="Verified Client" />
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">
                      {t.role} • {t.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

