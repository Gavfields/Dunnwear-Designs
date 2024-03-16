import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { scroller } from "react-scroll";

const unsplashUrl =
  "https://images.unsplash.com/photo-1553051021-9f94520a6cad?q=80&w=1740&auto=format&fit=crop";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0, duration: 0.4 },
  },
};

const HeroSection = () => {
  const scrollToAbout = () => {
    scroller.scrollTo("about", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <motion.div
      className="relative h-screen flex justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={unsplashUrl}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Art Design Background"
          priority
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-1"
          style={{
            background:
              "radial-gradient(circle, rgba(0,0,0,0.75) 0%, transparent 100%)",
          }}
        ></div>
      </div>

      <div className="z-10 text-center p-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center p-4"
        >
          <h1
            style={{
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
            className="text-white text-3xl md:text-5xl lg:text-7xl font-extrabold mb-4"
          >
            Dunnwear Designs
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-white text-xl mb-16">
            Crafting Unique Art Pieces That Tell Your Story
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.4 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.button
              onClick={() => scrollToAbout()}
              className="px-8 py-3 text-white font-semibold rounded-lg shadow bg-[#875034] cursor-pointer"
              animate={{ backgroundColor: ["#875034", "#693624", "#875034"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
