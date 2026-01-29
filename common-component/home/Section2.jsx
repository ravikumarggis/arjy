import clsx from "clsx";
import React from "react";

const Section2 = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col container mx-auto">
      <div className="py-20 text-center flex flex-col gap-3">
        <p className="text-2xl md:text-5xl font-semibold text-sub-text">
          Finally, An app that doesn't hold your crypto hostage.
        </p>
        <p className="text-sub-text ">
          Withdraw anytime. To anywhere. No questions asked. No excuses
        </p>
      </div>
      <div className="grid grid-cols-12  w-full xl:w-[70%]   gap-5  md:h-[1300px] mx-10 md:mx-0">
        {items?.map((item, idx) => {
          return (
            <div
              className={clsx(
                "col-span-12 md:col-span-6 flex items-center justify-center flex-col bg-white border border-gray-600/10 rounded-2xl group cursor-pointer h-full py-10 md:py-0",
                item?.row
              )}
              key={idx}
            >
              <div
                className={clsx(" flex items-center justify-center flex-col ")}
              >
                <div className="flex items-center justify-center flex-col mb-20 gap-2 group-hover:scale-105  transition-all delay-200 duration-200 ease-linear">
                  <h2 className="text-4xl font-bold text-sub-text">
                    {item?.title}
                  </h2>
                  <p className="text-sub-text text-center">{item?.subtitle}</p>
                </div>
                <img
                  src={item?.img}
                  alt={idx}
                  className="h-56 object-contain transition-all delay-200 duration-500 group-hover:scale-125 group-hover:rounded-4xl ease-in"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section2;

const items = [
  {
    title: "Instant Trade",
    subtitle:
      "Enjoy real-time prices and zero fees, directly from your wallet.",
    img: "/assets/section2/trade.svg",
    row: " md:row-span-6",
  },
  {
    title: "Instant Withdrawals",
    subtitle: "Your crypto, available 24/7. No waiting periods.",
    img: "/assets/section2/withdraw.svg",
    row: "md:row-span-3",
  },
  {
    title: "No P2P Risks",
    subtitle: "Direct transactions only. No stranger danger.",
    img: "/assets/section2/scam.svg",
    row: "md:row-span-6",
  },

  {
    title: "INR support built-in",
    subtitle: "Convert to rupees instantly. No third-party services.",
    img: "/assets/section2/inr.svg",
    row: "md:row-span-3",
  },
];
