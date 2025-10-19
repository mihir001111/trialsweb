"use client";

import { motion } from "framer-motion";
import PulseLine from "@/components/PulseLine";

export default function PrivacyPage() {
  return (
    <>
      <PulseLine />
      
      <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-7xl md:text-8xl font-extralight tracking-tight mb-6">
              Privacy & <span className="font-bold gradient-text">Security</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-black/60">
              Your trust is our foundation. Here's how we protect it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <section>
              <h2 className="text-3xl font-semibold mb-4 tracking-tight">
                HIPAA Compliance
              </h2>
              <p className="text-lg font-light text-black/70 leading-relaxed">
                After Trials is built with HIPAA compliance at its core. All case 
                discussions must be anonymized, and we provide clear guidelines to 
                ensure patient confidentiality is never compromised.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-4 tracking-tight">
                End-to-End Encryption
              </h2>
              <p className="text-lg font-light text-black/70 leading-relaxed">
                All communications on After Trials are encrypted. Your private messages, 
                case discussions, and personal information are protected with 
                industry-leading encryption protocols.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-4 tracking-tight">
                Verified Professionals Only
              </h2>
              <p className="text-lg font-light text-black/70 leading-relaxed">
                We verify every member's medical credentials before granting access. 
                This ensures a trusted, professional environment where you can share 
                openly with peers.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-4 tracking-tight">
                Data Ownership
              </h2>
              <p className="text-lg font-light text-black/70 leading-relaxed">
                Your data is yours. We never sell your information to third parties. 
                You can export or delete your data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-4 tracking-tight">
                Transparent Practices
              </h2>
              <p className="text-lg font-light text-black/70 leading-relaxed">
                We believe in transparency. Our privacy policy is written in plain 
                language, and we're always available to answer questions about how 
                your data is handled.
              </p>
            </section>

            <section className="pt-8 border-t border-black/10">
              <p className="text-sm font-light text-black/50 leading-relaxed">
                Last updated: January 2024. For detailed information, please review 
                our complete Privacy Policy and Terms of Service.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
}