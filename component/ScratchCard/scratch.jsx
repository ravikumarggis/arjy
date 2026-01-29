import { CopyCheck, CopyIcon } from "lucide-react";
import { ScratchCard } from "next-scratchcard";
import Image from "next/image";
import CopyButton from "../CopyButton/copyButton";

function ScratchCardComponent({ userData, copying, complete }) {
  console.log(userData, "propsData?>>>>>>>>>>>>>>>>>");
  const handleComplete = () => {
    complete();
    console.log("Scratch card completed!");
  };

  const imageWidth = 250;

  return (
    <div className="relative ">
      <ScratchCard
        width={imageWidth}
        image="/assets/Coupon.png"
        height={340}
        finishPercent={5}
        brushSize={20}
        onComplete={handleComplete}
        scratchColor="#966bff"
        customStyle={{
          backgroundColor: "#FF5733",
          borderRadius: "12px",
        }}
      >
        <div className="relative w-full min-w-[250px]">
          <Image
            src={"/assets/planCard.png"}
            alt={"Scratch Card"}
            width={215}
            height={100}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 top-0 flex flex-col items-center justify-center gap-5 px-10 text-center">
            <Image
              src="/assets/btcIcon.png"
              alt="BTC Icon"
              width={80}
              height={80}
              className="w-[80px] h-[80px]"
            />
            <p className="text-black text-[24px] font-bold">
              You won BTC worth of {userData?.scratchCard?.amount || "--"}
            </p>
            <div className="bg-[#e2ffe9] flex items-center justify-center gap-10 border border-[#0CC72E] border-dashed py-1 px-3 rounded-[10px]">
              <p className="text-[#0CC72E]">
                {userData?.scratchCard?.scratchCardCode || "--"}
              </p>

              <div className="z-500000">
                <CopyButton
                  textToCopy={userData?.scratchCard?.scratchCardCode}
                />
              </div>
            </div>
          </div>
        </div>
      </ScratchCard>
    </div>
  );
}

export default ScratchCardComponent;
