"use client";

import AcmeLogo from "@/assets/logo-acme.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import EchoLogo from "@/assets/logo-echo.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import PulseLogo from "@/assets/logo-pulse.png";
import ApexLogo from "@/assets/logo-apex.png";

import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={AcmeLogo} alt="AcmeLogo" className="h-8 w-auto" />
            <Image src={QuantumLogo} alt="QuantumLogo" className="h-8 w-auto" />
            <Image src={EchoLogo} alt="EchoLogo" className="h-8 w-auto" />
            <Image src={CelestialLogo} alt="CelestialLogo" className="h-8 w-auto" />
            <Image src={PulseLogo} alt="PulseLogo" className="h-8 w-auto" />
            <Image src={ApexLogo} alt="ApexLogo" className="h-8 w-auto" />

            <Image src={AcmeLogo} alt="AcmeLogo" className="h-8 w-auto" />
            <Image src={QuantumLogo} alt="QuantumLogo" className="h-8 w-auto" />
            <Image src={EchoLogo} alt="EchoLogo" className="h-8 w-auto" />
            <Image src={CelestialLogo} alt="CelestialLogo" className="h-8 w-auto" />
            <Image src={PulseLogo} alt="PulseLogo" className="h-8 w-auto" />
            <Image src={ApexLogo} alt="ApexLogo" className="h-8 w-auto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
