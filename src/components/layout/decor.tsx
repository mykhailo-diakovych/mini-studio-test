"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { useGlobalParallax } from "@/hooks/use-global-parallax";

export const Decor = () => {
   const starsRef = useRef<HTMLDivElement>(null);
   const ellipseRef = useRef<HTMLDivElement>(null);

   useGlobalParallax<HTMLDivElement>(starsRef, {
      intensity: 10,
      reverse: false,
   });
   useGlobalParallax<HTMLDivElement>(ellipseRef, {
      intensity: 20,
      reverse: true,
   });

   return (
      <div className="relative h-full w-full">
         <div ref={starsRef} className="relative left-162 h-42 w-52">
            <Image
               fill
               className="object-cover"
               alt="Stars"
               src="/icons/stars.svg"
               sizes="13rem"
            />
         </div>

         <div
            ref={ellipseRef}
            className="relative -top-180 left-200 h-225 w-225 shrink-0 rounded-full border border-white shadow-sm shadow-white blur-xs"
         />
      </div>
   );
};
