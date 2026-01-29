"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
export const socket_url = "https://stgsocketv2.tarality.io";
import { SkiperMarquee } from "@/components/ui/skiper-marquee";

import React, { useMemo } from "react";

const PriceMarquee = () => {
  const [tradeData, setTradeData] = useState([]);
  const socketInstance = io(socket_url);

  useEffect(() => {
    if (!socketInstance) {
      return;
    }
    socketInstance.on("cmc_updated", (val) => {
      setTradeData(val);
    });
  }, []);

  const coinList = useMemo(() => {
    return tradeData
      ?.filter((item) => item?.symbol != "USDT")
      ?.map((item) => {
        return {
          price: item?.usdt_markup_price || 0,
          direction: item?.direction || "",
          name: item?.name || "",
          icon: item?.icon || "",
          decimal: item?.decimal_places_in_usdt || 2,
          percentage: item?.price_change_percentage_1h || 0,
        };
      });
  }, [tradeData]);

  return (
    <div>
      <SkiperMarquee coinList={coinList} />
    </div>
  );
};

export default PriceMarquee;
