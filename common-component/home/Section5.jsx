"use client";

import { useInView } from "framer-motion";
import { useTheme } from "next-themes";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Section5 = () => {
  const { setTheme } = useTheme();
  const parentRef = useRef();
  const isInView = useInView(parentRef, {
    margin: "-1px 0px -99% 0px",
    once: false,
  });

  useEffect(() => {
    if (isInView) {
      setTheme("dark");
    }
  }, [isInView]);

  return (
    <motion.div className="grid grid-cols-12 gap-6" ref={parentRef}>
      <div className="col-span-12 w-full flex justify-center items-center container mx-auto md:mt-24 overflow-hidden h-[500px]">
        <div className="grid grid-cols-12  w-full xl:w-[70%] gap-5 mx-2 md:mx-0 rounded-3xl h-[500px] bg-gradient-to-tl from-[#B444BA] to-[#7944BA] inset-shadow-2xs shadow-[#7944BA]">
          <div className="col-span-12 md:col-span-6 flex items-center px-8">
            <p className="text-2xl md:text-6xl font-medium">
              Made for Mobile. Built for You.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 relative h-60 md:h-auto">
            <img
              src="/assets/sec5.png"
              alt=""
              className="h-[500px] md:h-[700px] object-contain absolute"
            />
          </div>
        </div>
      </div>
      <div className="col-span-12 w-full flex justify-center items-center container mx-auto overflow-hidden  md:h-[500px]">
        <div className="grid grid-cols-12 grid-rows-12  w-full xl:w-[70%]  mx-2 md:mx-0  rounded-3xl md:h-[500px]  gap-6">
          <div className="col-span-12 md:col-span-6 row-span-12 bg-gradient-to-tl from-[#B444BA] to-[#7944BA] rounded-3xl flex justify-center items-center flex-col p-6 gap-8 ">
            <p className="px-4">
              Nowory Experience the power of instant execution with Nowory’s
              Lightning-Fast Trade. Designed for agility and precision, our
              trading engine executes your orders in seconds. Whether you're
              buying Bitcoin or selling Ethereum, Nowory ensures you never miss
              a market move.
            </p>

            <img src="/assets/sec52.svg" alt="" />
          </div>
          <div className="relative col-span-12 md:col-span-6 row-span-12 md:row-span-8 bg-[#7a44ba] rounded-3xl flex items-center justify-center flex-col gap-6">
            <img
              src="/assets/safe.png"
              alt=""
              className="object-contain w-14 md:w-28 absolute top-4 right-4"
            />
            <p className="text-xl md:text-4xl font-medium text-center">
              Safe Custody
            </p>

            <p className="text-center px-4">
              Nowory’s custodians are SOC 2 Type II certified and undergo
              regular third-party audits and cybersecurity testing, ensuring the
              highest standards of digital asset protection.
            </p>
          </div>
          <div className=" col-span-12 md:col-span-6 row-span-12 md:row-span-4 bg-gradient-to-tl from-[#B444BA] to-[#14161f] rounded-3xl flex items-center justify-center">
            <p className="text-3xl font-medium text-center">
              Own More, Worry Less <br />{" "}
              <span className="text-white/50">That’s Nowory.</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Section5;
