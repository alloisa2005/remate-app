"use client";

import Carousel from "@/components/Carousel";
import Mapa from "@/components/Mapa";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Carousel />

      <div className="contenedor flex flex-col md:flex-row justify-between gap-2 mb-8">
        <div className="flex-1 border-2 border-primario rounded-lg p-2">
          <p className="font-poppins text-md lg:text-lg border-b-2 border-primario ">Nosotros</p>
        </div>
        <div className="w-full md:w-[60%] lg:w-3/4 rounded-lg overflow-hidden">
          <Mapa />
        </div>
      </div>
    </div>
  );
}
