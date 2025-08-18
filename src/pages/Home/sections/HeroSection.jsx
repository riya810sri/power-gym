import { Button } from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

export function HeroSection() {
  const navigate = useNavigate();
  const handleGetStarted = () => navigate("/courses");

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    },
  });

  return (
    <motion.section
      className="hero-section min-h-screen flex flex-col justify-center items-center px-4 relative pt-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }} // triggers when 40% is visible
    >
      {/* Background dots */}
      <motion.div
        className="absolute top-32 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse"
        variants={fadeUp(0.1)}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1000"
        variants={fadeUp(0.2)}
      />

      {/* Badge */}
      <motion.div
        className="mb-8 inline-flex items-center px-4 py-2 rounded-full border border-yellow-500 bg-yellow-500/10"
        variants={fadeUp(0.3)}
      >
        <span className="text-yellow-400 text-sm font-medium">
          ✨ Introducing Durbhasi Gurukulam
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-center mb-6 leading-tight"
        variants={fadeUp(0.4)}
      >
        Master Cybersecurity
        <br />
        with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Durbhasi Gurukulam
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl text-center mb-12 leading-relaxed max-w-4xl"
        variants={fadeUp(0.5)}
      >
        Dive into our comprehensive video courses and become a cybersecurity
        expert.
        <br />
        Learn from industry professionals and stay ahead in the digital
        security landscape.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-16 mt-4 items-center justify-center"
        variants={fadeUp(0.6)}
      >
        <Button
          onClick={handleGetStarted}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold"
        >
          Get Started
        </Button>
        <button className="px-8 py-3 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 transition-colors font-semibold">
          Our Commitment
        </button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center"
        variants={fadeUp(0.7)}
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </motion.section>
  );
}
