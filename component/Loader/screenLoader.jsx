import React, { useMemo } from "react";

const ScreenLoader = () => {
  const bars = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-[30%] w-[8%] h-[24%] bg-gray-500 opacity-0 rounded-full shadow-[0_0_3px_rgba(0,0,0,0.2)]"
          style={{
            transform: `rotate(${i * 30}deg) translate(0, -130%)`,
            animation: `fade458 1s linear infinite`,
            animationDelay: `${-1.1 + i * 0.1}s`,
          }}
        />
      )),
    []
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative w-[54px] h-[54px]">{bars}</div>
      <style jsx>{`
        @keyframes fade458 {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0.25;
          }
        }
      `}</style>
    </div>
  );
};

export default React.memo(ScreenLoader);
