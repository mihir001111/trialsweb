"use client";

import { motion } from "framer-motion";
import PulseLine from "@/components/PulseLine";
import FloatingElements from "@/components/FloatingElements";

export default function ContactPage() {
  return (
    <>
      <PulseLine />
      <FloatingElements />
      
      <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h1 className="text-7xl md:text-8xl font-extralight tracking-tight mb-6">
              Get in <span className="font-bold gradient-text">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-black/60">
              We're here to answer your questions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-3 tracking-tight">
                General Inquiries
              </h2>
              <a 
                href="mailto:hello@aftertrials.com"
                className="text-lg font-light text-black/70 hover:gradient-text transition-all"
              >
                hello@aftertrials.com
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 tracking-tight">
                Support
              </h2>
              <a 
                href="mailto:support@aftertrials.com"
                className="text-lg font-light text-black/70 hover:gradient-text transition-all"
              >
                support@aftertrials.com
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 tracking-tight">
                Press & Media
              </h2>
              <a 
                href="mailto:press@aftertrials.com"
                className="text-lg font-light text-black/70 hover:gradient-text transition-all"
              >
                press@aftertrials.com
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 tracking-tight">
                Partnerships
              </h2>
              <a 
                href="mailto:partners@aftertrials.com"
                className="text-lg font-light text-black/70 hover:gradient-text transition-all"
              >
                partners@aftertrials.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-light leading-relaxed tracking-wide mb-8">
              Building something for the{" "}
              <span className="font-semibold gradient-text">medical community</span>?
            </p>
            <p className="text-lg font-light text-black/70 leading-relaxed max-w-2xl mx-auto">
              We're always interested in partnerships with medical institutions, 
              healthcare organizations, and companies that share our mission to 
              support doctors.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}