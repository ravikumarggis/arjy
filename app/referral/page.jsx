"use client";
import ReferralFormMain from "@/common-component/referral/main";
import { ChevronRight, CircleArrowOutUpRight, ForwardIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";

const Referral = () => {
  const { themes, setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <div className="text-[#000000] text-center space-y-2">
        <p className="font-semibold text-2xl md:text-[30px] lg:text-[50px]">
          Grow the Nowory Family. Grow Your Wallet.
        </p>
        <p className=" text-[15px] lg:text-xl">
          Take part in the Nowory referral challenge—join us on social, grow our
          community, invite your friends, and get
          <br /> rewarded in Bitcoin.
        </p>
      </div>

      <ReferralFormMain />
    </div>
  );
};

export default Referral;
