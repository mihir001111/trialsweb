"use client";

import { motion } from "framer-motion";
import PulseLine from "@/components/PulseLine";
import FloatingElements from "@/components/FloatingElements";

export default function AboutPage() {
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
            className="mb-24"
          >
            <h1 className="text-8xl md:text-9xl font-extralight tracking-tight mb-6">
              Our <span className="font-bold gradient-text">Mission</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-black/60 max-w-3xl">
              Building a sanctuary where medical professionals can connect, 
              share insights, and grow together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-light mb-6 tracking-tight">
                Beyond the <span className="gradient-text font-semibold">Clinic</span>
              </h2>
              <p className="text-lg font-light text-black/70 leading-relaxed">
                Medicine is isolating. The weight of decisions, the emotional toll, 
                the constant learning — it can feel overwhelming. After Trials is 
                designed to be different. A space where doctors can be human, 
                share experiences, and find community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-light mb-6 tracking-tight">
                Where <span className="gradient-text font-semibold">Evidence</span> Meets Empathy
              </h2>
              <p className="text-lg font-light text-black/70 leading-relaxed">
                We believe in the power of peer connection. From clinical insights 
                to personal struggles, After Trials provides a professional yet 
                compassionate platform for doctors to support one another.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-3xl md:text-4xl font-light leading-relaxed tracking-wide">
              This isn't just another social network. It's a{" "}
              <span className="font-semibold relative inline-block">
                movement
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] gradient-underline"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </span>{" "}
              towards a more connected, supported medical community.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}