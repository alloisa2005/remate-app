"use client";

import Carousel from "@/components/Carousel";
import Mapa from "@/components/Mapa";
import NosEncontramos from "@/components/NosEncontramos";
import Remates from "@/components/Remates";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Carousel />

      {/* <Remates /> */}

      <NosEncontramos />  
    </div>
  );
}
