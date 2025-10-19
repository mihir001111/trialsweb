"use client";

import { motion } from "framer-motion";
import PulseLine from "@/components/PulseLine";
import FloatingElements from "@/components/FloatingElements";
import WaitlistForm from "@/components/WaitlistForm";

export default function CommunityPage() {
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
              Join the <span className="font-bold gradient-text">Community</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-black/60 max-w-3xl">
              Thousands of doctors already connecting, sharing, and growing together.
            </p>
          </motion.div>

          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
            >
              <div>
                <div className="text-6xl font-bold gradient-text mb-3">10K+</div>
                <p className="text-sm uppercase tracking-[0.3em] font-light text-black/60">
                  Verified Doctors
                </p>
              </div>
              <div>
                <div className="text-6xl font-bold gradient-text mb-3">50K+</div>
                <p className="text-sm uppercase tracking-[0.3em] font-light text-black/60">
                  Discussions
                </p>
              </div>
              <div>
                <div className="text-6xl font-bold gradient-text mb-3">100+</div>
                <p className="text-sm uppercase tracking-[0.3em] font-light text-black/60">
                  Specialties
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-12 text-center">
              What <span className="gradient-text font-semibold">Doctors</span> Are Saying
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="border-l-2 border-black/10 pl-6">
                <p className="text-lg font-light text-black/70 italic mb-4">
                  "Finally, a space where I can discuss cases without judgment. 
                  The peer support here has been invaluable."
                </p>
                <p className="text-sm font-semibold">— Dr. Sarah M., Cardiology</p>
              </div>
              
              <div className="border-l-2 border-black/10 pl-6">
                <p className="text-lg font-light text-black/70 italic mb-4">
                  "After Trials helped me through my toughest year in medicine. 
                  The community here truly understands."
                </p>
                <p className="text-sm font-semibold">— Dr. James K., Emergency Medicine</p>
              </div>
              
              <div className="border-l-2 border-black/10 pl-6">
                <p className="text-lg font-light text-black/70 italic mb-4">
                  "The mentorship program connected me with experienced physicians 
                  who've guided my career. Life-changing."
                </p>
                <p className="text-sm font-semibold">— Dr. Priya R., Pediatrics</p>
              </div>
              
              <div className="border-l-2 border-black/10 pl-6">
                <p className="text-lg font-light text-black/70 italic mb-4">
                  "A professional network that actually feels human. 
                  This is what medicine needs."
                </p>
                <p className="text-sm font-semibold">— Dr. Michael T., Psychiatry</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
              Ready to <span className="gradient-text font-semibold">connect</span>?
            </h2>
            <div className="flex justify-center">
              <WaitlistForm />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}