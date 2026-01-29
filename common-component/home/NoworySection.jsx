import clsx from "clsx";
import React from "react";

const NoworySection = () => {
  return (
    <div className="w-full  mt-24 md:mt-44">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-3xl lg:text-6xl text-center text-sub-text">
          The Most Rewarding Crypto App
        </p>
        <p className="text-sub-text w-full md:w-[50%] text-center">
          At Nowory, every action counts. From signing up to trading — earn
          Nowory Points for every activity like account creation, KYC, deposit,
          withdrawal, and buy/sell.
        </p>
      </div>
      <div className="w-full grid grid-cols-12 gap-6 md:gap-10 md:mt-16">
        <div className="col-span-12 md:col-span-3 flex justify-around item-start md:items-end  flex-col relative">
          <div className="w-full xl:w-[50%] h-full flex flex-col item-start md:items-end  md:text-right justify-center gap-10 xl:gap-20 2xl:gap-32 relative mt-22 md:mt-32 ">
            {leftItems?.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={clsx(
                    (idx == 0 || idx == 2) &&
                      "block md:relative -right-10 2xl:-right-20",
                    "flex justify-center items-center px-10 md:px-0"
                  )}
                >
                  <div className="flex flex-col justify-start md:items-end items-start w-full">
                    <p className="font-semibold">{item?.label}</p>
                    <p className="text-sub-text text-sm">{item?.subLabel}</p>
                  </div>
                  <div
                    className={clsx(
                      "w-10",
                      "block md:relative -right-10 2xl:-right-10",
                      "flex justify-center items-center"
                    )}
                  >
                    <SmallCircle />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-center items-center overflow-clip relative  after:absolute after:hidden  xl:after:block after:h-[500px] after:w-[500px] 2xl:after:h-[600px] 2xl:after:w-[600px] after:border after:border-gray-700/20 after:border-dashed after:rounded-full after:bottom-0 after:overflow-hidden">
          <img
            src="/assets/nowory.png"
            alt=""
            className="object-contain h-[600px] 2xl:h-[760px]"
          />
        </div>
        <div className="col-span-12 md:col-span-3 flex justify-around items-start  flex-col relative">
          <div className="sm:w-[100%] xl:w-[50%] h-full flex flex-col items-start text-left justify-center gap-10 xl:gap-20 2xl:gap-32  relative md:mt-32">
            {rightItems?.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={clsx(
                    (idx == 0 || idx == 2) &&
                      "block md:relative -left-10 2xl:-left-20",
                    "flex justify-center items-center"
                  )}
                >
                  <div
                    className={clsx(
                      "w-10",

                      "block md:relative -left-10 2xl:-left-10",
                      "flex justify-center items-center"
                    )}
                  >
                    <SmallCircle />
                  </div>
                  <div className="flex flex-col justify-start  items-start w-full">
                    <p className="font-semibold">{item?.label}</p>
                    <p className="text-sub-text text-sm">{item?.subLabel}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoworySection;

const rightItems = [
  {
    label: "Earn Points on Every Action",
    subLabel:
      "From sign‑up to your very first trade, every move you make adds to your reward balance.",
  },
  {
    label: "Activity-Based Rewards",
    subLabel:
      "Get rewarded for deposits, withdrawals, KYC completion, and more.",
  },
  {
    label: "Use Rewards In‑App",
    subLabel:
      "Redeem your points for trading benefits, fee discounts, or exclusive features.",
  },
];

const leftItems = [
  {
    label: "No Expiry Hassles",
    subLabel:
      "Your reward points stay valid as long as your account is active.",
  },
  {
    label: "Referral Bonuses",
    subLabel: "Invite friends and multiply your earnings together.",
  },
  {
    label: "Daily Opportunities",
    subLabel:
      "Engage with Nowory every day to unlock fresh reward points and offers.",
  },
];

const SmallCircle = () => {
  return (
    <div className="h-[20px] w-[20px] border border-brand rounded-full hidden lg:flex "></div>
  );
};
