"use client";
import { useEffect, useId, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Snowflake } from "lucide-react";

import { cn } from "@/lib/utils";

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        ?.map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

function shuffleArray(array) {
  let currentIndex = array.length;
  let randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function Card(card) {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 1, ease: "easeOut", duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-2",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        "h-36 w-36"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <img
          src={card?.icon}
          alt=""
          className="rounded-full object-contain h-10"
        />
        <p className="text-xs">{card?.name}</p>
        <p
          className="text-xs"
          style={{
            color: colorDecider(card?.direction),
          }}
        >
          {Number(card?.price)?.toFixed(card?.decimal)} USDT{" "}
        </p>
        <p
          className="text-xs"
          style={{
            color: colorDecider(card?.direction),
          }}
        >{`(${Number(card?.percentage).toFixed(2)}%)`}</p>
      </div>
    </motion.div>
  );
}

export function SkiperMarquee({ coinList }) {
  const [randomTiles1, setRandomTiles1] = useState([]);
  const [randomTiles2, setRandomTiles2] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (randomTiles1?.length == 0 && randomTiles2 == 0) {
        // Ensures this runs client-side
        setRandomTiles1(shuffleArray([...coinList]));
        setRandomTiles2(shuffleArray([...coinList]));
      }
    }
  }, [coinList]);

  return (
    <section id="cta">
      <div className="px-4 py-12 md:px-8">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee className="-delay-[200ms] [--duration:80s]" repeat={5}>
              {randomTiles1.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:85s]" repeat={5}>
              {randomTiles2.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee className="-delay-[200ms] [--duration:90s]" repeat={5}>
              {randomTiles1.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            {/* <Marquee reverse className="[--duration:30s]" repeat={5}>
              {randomTiles2.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee
              reverse
              className="-delay-[200ms] [--duration:20s]"
              repeat={5}
            >
              {randomTiles3.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:30s]" repeat={5}>
              {randomTiles4.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee> */}
            <div className="absolute ">
              <div className="bg-backtround absolute inset-0 -z-10  rounded-full opacity-40 blur-xl dark:bg-background" />
            </div>
            <div className="to-backtround absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-70% dark:to-background" />
          </div>
        </div>
      </div>
    </section>
  );
}

const colorDecider = (direction) => {
  switch (direction) {
    case "up":
      return "#16c784";
    case "down":
      return "#ea3943";

    default:
      break;
  }
};
