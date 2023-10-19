"use client";

import { Dropdown } from "flowbite-react";
import Carousel from "@/components/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Carousel />

      <div className="contenedor">
        
        <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
            <svg class="w-8 h-8 text-primario dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
            </svg>
            <p>Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.</p>
        </blockquote>

      </div>
    </div>
  );
}
