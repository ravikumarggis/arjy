"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";

const Section3 = () => {
  return (
    <div className="w-full flex justify-center items-center container mx-auto mt-24 md:mt-44">
      <div className="grid grid-cols-12  w-full xl:w-[70%]   gap-5   mx-10 md:mx-0 ">
        <div className="col-span-12 flex flex-col items-center gap-4">
          <img src="/assets/only-logo.svg" className="object-contain h-24" />
          <p className="text-3xl lg:text-6xl text-center text-sub-text">
            Everything You Need.
            <br /> Nothing You Don’t.
          </p>
          <p className="text-sub-text">
            Simple. Powerful. Exactly what you need to win.
          </p>
        </div>
        <div className="col-span-12  md:mt-16 gap-6">
          <HoverEffect items={items} />
        </div>
      </div>
    </div>
  );
};

export default Section3;

const items = [
  {
    title: "Built for All",
    description: "Whether you’re new or pro, the app fits your crypto journey.",
    img: "/assets/section3/1.svg",
  },
  {
    title: "Own While You Pay",
    description:
      "Track your nowory portfolio, manage your payments, and build liquidity.",
    img: "/assets/section3/2.svg",
  },
  {
    title: "Zero Trading Fee, Always",
    description: "Enjoy commission-free trades with no surprise costs.",
    img: "/assets/section3/3.svg",
  },
  // {
  //   title: "Secure by Design",
  //   description:
  //     "Your assets are protected with multi-level encryption and biometrics.",
  //   img: "/assets/section3/4.svg",
  // },
  // {
  //   title: "Skip the P2P Drama",
  //   description: "Avoid delays and disputes with a clean instant execution.",
  //   img: "/assets/section3/5.svg",
  // },

  {
    title: "Super-Fast Trade",
    description: "Execute trades in under 2 seconds",
    img: "/assets/section3/6.svg",
  },
  {
    title: "24/7 Support",
    description:
      "Get expert help anytime with our round-the-clock support team.",
    img: "/assets/section3/7.svg",
  },
  // {
  //   title: "Instant Withdrawals",
  //   description: "Access your funds instantly with quick and easy withdrawals.",
  //   img: "/assets/section3/8.svg",
  // },
  {
    title: "Real-Time Price Alerts",
    description:
      "Stay updated with instant alerts on price movements you care about.",
    img: "/assets/section3/9.svg",
  },
];
