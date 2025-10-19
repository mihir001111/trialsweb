"use client";

import { motion } from "framer-motion";
import PulseLine from "@/components/PulseLine";
import FloatingElements from "@/components/FloatingElements";

export default function FeaturesPage() {
  const features = [
    {
      title: "Verified Community",
      description: "Only licensed medical professionals. A safe, professional space.",
      icon: "🩺",
    },
    {
      title: "Case Discussions",
      description: "Share anonymized cases, get peer insights, learn collectively.",
      icon: "📋",
    },
    {
      title: "Knowledge Sharing",
      description: "Latest research, clinical pearls, and evidence-based discussions.",
      icon: "💡",
    },
    {
      title: "Mentorship Network",
      description: "Connect with experienced physicians, guide the next generation.",
      icon: "🤝",
    },
    {
      title: "Well-being Support",
      description: "Mental health resources, burnout prevention, peer support.",
      icon: "🌱",
    },
    {
      title: "Private & Secure",
      description: "HIPAA-compliant, encrypted, respecting patient confidentiality.",
      icon: "🔒",
    },
  ];

  return (
    <>
      <PulseLine />
      <FloatingElements />
      
      <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center"
          >
            <h1 className="text-8xl md:text-9xl font-extralight tracking-tight mb-6">
              Built for <span className="font-bold gradient-text">Doctors</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-black/60 max-w-3xl mx-auto">
              Every feature designed with the unique needs of medical professionals in mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="mb-4 text-5xl">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-base font-light text-black/70 leading-relaxed">
                  {feature.description}
                </p>
                <motion.div
                  className="h-[1px] gradient-underline mt-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <p className="text-2xl md:text-3xl font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
              More than features — it's an{" "}
              <span className="font-semibold gradient-text">ecosystem</span>{" "}
              designed to support your entire medical journey.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}