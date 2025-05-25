import React from 'react';
import starWarsImage from '/assets/info.jpg';
import { motion } from 'framer-motion';
const InformationSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${starWarsImage})` }}
      className="sticky top-0 h-screen  bg-cover bg-center z-0 font-orbitron"
    >
      <div className="h-full w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40  z-0"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 px-6 text-center"
        >
          <h1 className="text-white text-6xl font-orbitron font-extrabold mb-4 tracking-wide hover:scale-105 transition-transform duration-300">
            Dive Into the Star Wars Universe
          </h1>
          <p className="text-white text-lg max-w-2xl mx-auto font-light hover:text-yellow-300 transition-colors duration-300">
            Browse iconic characters, explore their home worlds, discover species, and relive moments from the movies —
            all in one place.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default InformationSection;
