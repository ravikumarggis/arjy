"use client";
import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandX,
} from "@tabler/icons-react";
import clsx from "clsx";
import { useInView } from "framer-motion";
import moment from "moment";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import SocialIcons from "../socialLinks/social";

const Section6 = () => {
  const { setTheme, theme } = useTheme();
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
    <div className="overflow-hidden">
      <div className="w-full flex justify-center 2xl:justify-between mt-24 md:mt-44 ">
        <img
          src="/assets/left-footer.svg"
          alt=""
          className="hidden lg:flex h-[500px] 2xl:h-[600px]"
        />
        <div className="flex items-center justify-center flex-col gap-8">
          <p className="text-3xl md:text-7xl font-semibold text-center">
            See what you'll discover
          </p>
          <p>Scan the QR to download Nowory today on Android device</p>
          <img
            src="/assets/qr.svg"
            alt=""
            className="object-contain h-56 w-full md:h-72"
          />
        </div>
        <img
          src="/assets/right-footer.svg"
          alt=""
          className="hidden lg:flex h-[500px] 2xl:h-[600px]"
        />
      </div>
      <div className="mx-6 grid grid-cols-12 mt-10 ">
        <div className="col-span-12 md:col-span-3">
          <img
            src={
              theme == "light" ? "/assets/logo.svg" : "/assets/logo-light.svg"
            }
            alt=""
            className="h-10 object-contain"
          />
          <p className="text-sm text-white mt-2">
            Nowory is a fast, secure, and beginner-friendly crypto platform that
            lets you buy, sell, and own digital assets instantly - with zero
            trading fees and no hidden complexity.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 gap-3 flex items-center justify-center flex-wrap mt-10 md:mt-0">
          <Link href={"/terms/termsConditions"} className="cursor-pointer">
            Terms Of Use
          </Link>
          <Link href={"/terms/amlPolicy"} className="cursor-pointer">
            AML Policy
          </Link>
          <Link href={"/terms/privacyPolicy"} className="cursor-pointer">
            Privacy Policy
          </Link>
          <Link href={"/terms/tradingPolicy"} className="cursor-pointer">
            Trading Policy
          </Link>
          {/* <Link href={"#"} className="cursor-pointer">
            Cookie Policy
          </Link> */}
        </div>
        <div className="col-span-12 md:col-span-3 flex items-center gap-4 justify-center mt-10 md:mt-0">
          {/* {socials?.map((item, idx) => {
            return (
              <div className="" key={idx}>
                <item.icon
                  size={32}
                  className="cursor-pointer hover:scale-125 transition-all delay-200 duration-200 ease-linear "
                />
              </div>
            );
          })} */}
          <SocialIcons />
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex justify-center items-center mb-2">
        <p className="text-xs">
          COPYRIGHT © {moment().year()} nowory. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Section6;

const socials = [
  {
    icon: IconBrandInstagram,
    href: () => {},
    className: "h-8",
  },
  {
    icon: IconBrandTelegram,
    href: () => {},
    className: "h-10",
  },
  {
    icon: IconBrandX,
    href: () => {},
    className: "h-10",
  },
];
