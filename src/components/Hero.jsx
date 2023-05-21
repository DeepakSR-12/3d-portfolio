import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { personal } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} max-w-7xl absolute top-[120px] inset-0 flex flex-row items-start gap-5 mx-auto `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="rounded-full w-5 h-5 bg-[#915EFF]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        <div>
          <h1 className={`text-white ${styles.heroHeadText}`}>
            Hi I'm <span className="text-[#915EFF]">{personal.firstName}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Based in Chennai. Full Stack Web Developer. I love coding,
            doing&nbsp;
            <br className="xl:block hidden" />
            research and getting my hands dirty on creating many web/mobile
            apps.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
