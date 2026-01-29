"use client";

import React from "react";
import WrapButton from "@/components/ui/wrap-button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = ({ type }) => {
  const pathname = usePathname();
  if (type == "layout" && pathname?.includes("/home")) {
    return <></>;
  }
  return (
    <div className="min-w-full   flex flex-row justify-between items-center px-2 md:px-10   py-4  z-[9999]">
      <div className="text-black flex  dark:hidden">
        <Link href={"/"}>
          <img
            src="/assets/logo.svg"
            alt=""
            className="object-contain h-6 md:h-10"
          />
        </Link>
      </div>
      <div className="text-black hidden dark:flex">
        <Link href={"/"}>
          <img
            src="/assets/logo-light.svg"
            alt=""
            className="object-contain h-6 md:h-10"
          />
        </Link>
      </div>
      <div className="flex flex-row gap-4">
        <WrapButton className="" href="#">
          <img
            src="/assets/playstore.svg"
            alt=""
            className=" object-contain  h-6"
          />
          Get started
        </WrapButton>
      </div>
    </div>
  );
};

export default Header;
