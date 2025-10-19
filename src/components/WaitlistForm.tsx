"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type FormStep = "phone" | "otp" | "confirmed";

export default function WaitlistForm() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<FormStep>("phone");
  const [countdown, setCountdown] = useState(10);

  const VALID_OTP = "620221";

  // Countdown timer for confirmation screen
  useEffect(() => {
    if (step === "confirmed" && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (step === "confirmed" && countdown === 0) {
      handleRedirect();
    }
  }, [step, countdown]);

  const handleRedirect = () => {
    // Scroll to first section
    window.scrollTo({ left: 0, behavior: "smooth" });
    // Reset form after scroll
    setTimeout(() => {
      setPhone("");
      setOtp("");
      setStep("phone");
      setCountdown(10);
    }, 800);
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Phone number submitted:", phone);
    setStep("otp");
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === VALID_OTP) {
      console.log("OTP verified successfully");
      setStep("confirmed");
      setCountdown(10);
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  // Phone input step
  if (step === "phone") {
    return (
      <motion.form
        onSubmit={handlePhoneSubmit}
        className="flex flex-col gap-4 items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative group">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (234) 567-8900"
            required
            className="bg-transparent border-0 border-b-2 border-black/20 focus:border-black outline-none px-1 py-3 text-lg font-light tracking-wide transition-all duration-300 w-80 max-w-full"
          />
          <div className="absolute bottom-0 left-0 h-[2px] w-0 group-focus-within:w-full transition-all duration-500 gradient-underline" />
        </div>
        
        <motion.button
          type="submit"
          className="relative text-sm font-medium tracking-widest uppercase overflow-hidden group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 block px-8 py-3">
            send otp
          </span>
          <motion.div
            className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500 gradient-underline"
          />
        </motion.button>
      </motion.form>
    );
  }

  // OTP input step
  if (step === "otp") {
    return (
      <motion.form
        onSubmit={handleOtpSubmit}
        className="flex flex-col gap-4 items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-2">
          <p className="text-xs font-light text-black/60 mb-1">
            Enter the OTP sent to {phone}
          </p>
        </div>
        
        <div className="relative group">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 6-digit OTP"
            required
            maxLength={6}
            className="bg-transparent border-0 border-b-2 border-black/20 focus:border-black outline-none px-1 py-3 text-lg font-light tracking-widest transition-all duration-300 w-80 max-w-full"
          />
          <div className="absolute bottom-0 left-0 h-[2px] w-0 group-focus-within:w-full transition-all duration-500 gradient-underline" />
        </div>
        
        <div className="flex gap-3">
          <motion.button
            type="submit"
            className="relative text-sm font-medium tracking-widest uppercase overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 block px-8 py-3">
              verify
            </span>
            <motion.div
              className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500 gradient-underline"
            />
          </motion.button>
          
          <motion.button
            type="button"
            onClick={() => setStep("phone")}
            className="relative text-sm font-light tracking-wide text-black/60 hover:text-black transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Change number
          </motion.button>
        </div>
      </motion.form>
    );
  }

  // Confirmation step
  return (
    <motion.div
      className="flex flex-col gap-8 items-center text-center max-w-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 0.8, delay: 0.1 }}
      >
        <div className="w-24 h-24 rounded-full border-2 border-black/10 flex items-center justify-center">
          <motion.svg
            className="w-12 h-12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
              className="gradient-text"
              style={{ stroke: "url(#gradient)" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-2"
      >
        <h3 className="text-3xl sm:text-4xl font-light tracking-tight">
          You're <span className="gradient-text font-bold">in</span>
        </h3>
        <p className="text-sm font-light text-black/60 tracking-wide">
          We'll notify you when early access opens
        </p>
      </motion.div>
      
      <motion.div
        className="flex flex-col gap-4 items-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-black/20 animate-pulse" />
          <p className="text-xs font-light text-black/40 uppercase tracking-widest">
            Returning in {countdown}s
          </p>
          <div className="w-1 h-1 rounded-full bg-black/20 animate-pulse" />
        </div>
        
        <motion.button
          type="button"
          onClick={handleRedirect}
          className="relative text-xs font-medium tracking-[0.3em] uppercase overflow-hidden group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 block px-6 py-2">
            return now
          </span>
          <motion.div
            className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500 gradient-underline"
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}