import React from "react";

const QuickStartGuide = () => {
  return (
    <div className="w-full flex justify-center items-center container mx-auto mt-24 md:mt-44">
      <div className="grid grid-cols-12  w-full xl:w-[70%] md:gap-10 mx-4 md:mx-0">
        <div className="col-span-12 flex flex-col items-center justify-center gap-4">
          <p className="text-3xl lg:text-6xl text-center text-sub-text">
            Your Quick Start Guide
          </p>
          <p className="text-sub-text">
            From sign‑up to trading in minutes — here’s how to get started with
            Nowory.
          </p>
        </div>
        <div className="grid grid-cols-12 mt-10 col-span-12 border bg-[#F4ECF7] border-gray-600/10 rounded-2xl p-6 gap-4 md:p-10 md:gap-8">
          {items?.map((item, idx) => {
            return (
              <div
                className="col-span-12 md:col-span-4 flex justify-start items-center flex-col text-center gap-2"
                key={idx}
              >
                <div className="bg-customPurple/60 backdrop-blur-lg w-10 h-10 rounded-full flex justify-center items-center text-white">
                  <p className="font-semibold">{idx + 1}</p>
                </div>
                <p className="text-xl font-semibold text-sub-text">
                  {item?.label}
                </p>
                <p className="text-sub-text">{item?.subLabel}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickStartGuide;

const items = [
  {
    label: "Sign up on Nowory",
    subLabel:
      " Kick off your Nowory journey—sign up quickly and complete your KYC in no time.",
  },
  {
    label: "Add Bank Account",
    subLabel: "Link your bank account and fund your wallet to get started.",
  },
  {
    label: "Buy and Sell Crypto",
    subLabel:
      "Trade and manage your crypto with ease—buy, sell, withdraw, and track in one place.",
  },
];
