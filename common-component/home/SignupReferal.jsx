import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Bitcoin, Star } from "lucide-react";
import React from "react";

const SignupReferal = () => {
  return (
    <div className="w-full flex flex-col gap-8 md:gap-20 justify-center items-center container mx-auto md:mt-44">
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-3xl lg:text-6xl text-center text-sub-text">
          Inviting friends comes <br /> with rewards.
        </p>
        <p className="text-sub-text">
          Because good things are better when shared.
        </p>
      </div>
      <div className="grid grid-cols-12  w-full xl:w-[70%]   gap-5   mx-10 md:mx-0 ">
        <CardOne />
        <div className="col-span-12 md:col-span-4 flex items-center justify-center">
          <img
            src="/assets/signup.png"
            alt=""
            className="object-contain h-[600px]"
          />
        </div>
        <CardTwo />
      </div>
    </div>
  );
};

export default SignupReferal;

const CardOne = () => {
  return (
    <div className="col-span-12 md:col-span-4 p-4 md:mt-40">
      <div className="flex flex-col gap-6 border border-gray-700/10 p-4 rounded-2xl">
        <p className="text-xl font-semibold">Invite & Earn with Nowory</p>
        <p className="text-gray-700/80">
          When someone registers using your referral link and makes their first
          deposit they become your referred user. You earn rewards for every
          successful referral!
        </p>
        {/* <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center justify-start w-full">
            <AnimatedTooltip items={people} />
          </div>
        </div> */}
      </div>
    </div>
  );
};
const CardTwo = () => {
  return (
    <div className="col-span-12 md:col-span-4 p-4 md:mt-20 ">
      <div className="flex flex-col gap-4 border border-gray-700/10 p-4 rounded-2xl bg-gradient-to-l from-customPurple/10 to-[#fff]">
        <p className="text-xl font-semibold">
          Launch Bonus: Get ₹250 worth of Bitcoin.
        </p>
        <p className="text-gray-700/80">
          Sign up, complete your KYC, make your first deposit, and get ₹250
          worth of Bitcoin. It’s that simple!
        </p>
      </div>
    </div>
  );
};

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];
